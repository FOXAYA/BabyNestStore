import React from "react"
import { WaveTop } from "../animation/Wave";

const ShopHeader = () => {
    return (
        <>
            <WaveTop />
            <div
                style={{
                    backgroundColor: "#f8f4ec",
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 20px,
                        rgba(0, 0, 0, 0.02) 20px,
                        rgba(0, 0, 0, 0.02) 40px
                    )`,
                    textAlign: "center",
                    padding: "50px 0",
                    marginBottom: "0", 
                }}
            >
                <h1 className="h1_home">
                    Shop
                </h1>
                <p style={{ color: "#2c2c54", fontSize: "14px", margin: "5px 0" }}>
                    HOME - SHOP
                </p>
            </div>
        </>
    );
};

export default ShopHeader;