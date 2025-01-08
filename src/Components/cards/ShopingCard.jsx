import React from "react";
import { Popover, Overlay, Stack, Button, Image } from "react-bootstrap";
import { useBasket } from "./BasketContext";

const ShoppingCard = ({ show, target, handleClose }) => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useBasket(); 
  // حساب مجموع التوتال
  const cartTotalAmount = cartItems.reduce((acc, item) => {
    const price = typeof item.price === "number" ? item.price : parseFloat(item.price) || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <Overlay show={show} target={target.current} placement="bottom" containerPadding={20}>
      <Popover
        id="shopping-cart-popover"
        style={{
          minWidth: "350px",
          maxWidth: "400px",
          backgroundColor: "#1c1c1c",
          borderRadius: "16px",
          color: "#ffffff",
          boxShadow: "0px 4px 20px rgba(3, 1, 46, 0.27)",
        }}
      >
        <Popover.Body style={{ color: "#ffffff", padding: "20px" }}>
          <Stack gap={4}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center"
                style={{ borderBottom: "1px solid #ffffff20", paddingBottom: "10px" }}
              >
                {/* صورة المنتج */}
                <Image
                  src={item.image}
                  roundedCircle
                  style={{
                    width: "60px",
                    height: "60px",
                    marginRight: "15px",
                    border: "2px solid #ffffff",
                  }}
                  alt={item.name}
                />
                <div className="flex-grow-1">
                  
                  <div
                    className="fw-bold"
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      lineHeight: "1.5",
                    }}
                  >
                    {item.name}
                  </div>
                
                  <div
                    style={{
                      color: "#ffffffcc",
                      fontSize: "13px",
                      marginTop: "5px",
                    }}
                  >
                    {item.quantity} × $
                    {item.price && !isNaN(parseFloat(item.price))
                      ? parseFloat(item.price).toFixed(2)
                      : "0.00"} = ${item.price * item.quantity}
                  </div>
                </div>
                
                <Button
                  variant="link"
                  size="sm"
                  style={{
                    color: "#ffffff",
                    fontSize: "18px",
                  }}
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  style={{
                    color: "#ffffff",
                    fontSize: "18px",
                  }}
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </Button>
                {/* زر الحذف */}
                <Button
                  variant="link"
                  size="sm"
                  style={{
                    color: "#ff6b6b",
                    fontSize: "18px",
                  }}
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </Button>
              </div>
            ))}

            {/* المجموع (Subtotal) */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div
                className="fw-bold fs-6"
                style={{
                  color: "#ffffff",
                  fontSize: "16px",
                }}
              >
                Subtotal:
              </div>
              <div
                className="fw-bold"
                style={{
                  color: "#ffffff",
                  fontSize: "16px",
                }}
              >
                ${cartTotalAmount.toFixed(2)}
              </div>
            </div>
          </Stack>

          {/* الأزرار */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Button
              variant="light"
              size="sm"
              style={{
                backgroundColor: "#ffc107",
                color: "#1c1c1c",
                fontWeight: "bold",
                borderRadius: "8px",
                width: "120px",
              }}
              onClick={handleClose}
            >
              View Cart
            </Button>
            <Button
              variant="light"
              size="sm"
              style={{
                backgroundColor: "#ffffff",
                color: "#1c1c1c",
                fontWeight: "bold",
                borderRadius: "8px",
                width: "120px",
              }}
            >
              Checkout
            </Button>
          </div>
        </Popover.Body>
      </Popover>
    </Overlay>
  );
};

export default ShoppingCard;
