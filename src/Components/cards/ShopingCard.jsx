import React from "react";
import { Popover, Overlay, Stack, Button, Image } from "react-bootstrap";
import { useBasket } from "./BasketContext";
import "../Styles/ShopingCard.css";
import ButtonUi from "../ui/ButtonUi";

const ShoppingCard = ({ show, target, handleClose }) => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useBasket();

  const cartTotalAmount = cartItems.reduce((acc, item) => {
    const price =
      typeof item.price === "number" ? item.price : parseFloat(item.price) || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <Overlay
      show={show}
      target={target.current}
      placement="bottom"
      containerPadding={20}
    >
      <Popover id="shopping-cart-popover" className="shopping-cart-popover">
        <Popover.Body className="popover-body">
          <Stack gap={4}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item d-flex  align-items-center"
              >
                <Image
                  src={item.image}
                  roundedCircle
                  className="item-image"
                  alt={item.name}
                />
                <div className="item-details flex-grow-1">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">
                    {item.quantity} × $
                    {item.price && !isNaN(parseFloat(item.price))
                      ? parseFloat(item.price).toFixed(2)
                      : "0.00"}{" "}
                    = ${item.price * item.quantity}
                  </div>
                </div>

                <Button
                  variant="link"
                  size="sm"
                  className="quantity-button"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  className="quantity-button"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </Button>

                <Button
                  variant="link"
                  size="sm"
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </Button>
              </div>
            ))}

            <div className="subtotal  d-flex justify-content-around align-items-center">
              <div className="subtotal-label">Subtotal:</div>
              <div className="subtotal-amount blod">
                ${cartTotalAmount.toFixed(2)}
              </div>
            </div>
          </Stack>

          <div className="cart-actions d-flex justify-content-between align-items-center">
          <ButtonUi
  size="sm"
  variant="light"
  className="view-cart-button"
  onClick={handleClose}
  text="View Cart"
/>
<ButtonUi
  variant="light"
  size="sm"
  className="checkout-button"
  text="Checkout"
/>
          </div>
        </Popover.Body>
      </Popover>
    </Overlay>
  );
};

export default ShoppingCard;
