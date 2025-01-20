import React, { useEffect, useState } from "react";

const Numbers = () => {
    const stats = [
        { value: 10, label: "Years" },
        { value: 100, label: "Stores" },
        { value: 15, label: "Countries" },
        { value: 30, label: "Partners" },
    ];

const AnimatedNumber = ({ target }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // مدة الحركة
        const step = target / (duration / 14);
        const interval = setInterval(() => {
        start += step;
        if (start >= target) {
            setCurrent(target); // القيمة النهائية
            clearInterval(interval);
        } else {
           setCurrent(Math.ceil(start)); // القيمة الحالية
        }
        }, 14);

        return () => clearInterval(interval);
    }, [target]);

    return (
        <h1
        style={{
        fontSize: "3rem", // حجم الخط
        fontWeight: "bold",
        color: "#232a47", // لون الرقم
        margin: "0",
        }}
    >
        {current}+
    </h1>
    );
};

return (
    <div className="container text-center py-5">
        <div className="row">
        {/* العمود الأول */}
        <div className="col-md-6">
            {stats.slice(0, 2).map((stat, index) => (
                <div
                className="mb-4"
                key={index}
                style={{ borderBottom: "1px solid #eaeaea", paddingBottom: "15px" }}
                >
                <AnimatedNumber target={stat.value} />
                <p
                style={{
                fontSize: "1.2rem", // حجم النص أسفل الرقم
                color: "#232a47", // لون النص
                margin: "0",
                }}
                >
                {stat.label}
                </p>
            </div>
            ))}
        </div>

        {/* العمود الثاني */}
        <div className="col-md-6">
            {stats.slice(2).map((stat, index) => (
            <div
            className="mb-4"
            key={index}
            style={{ borderBottom: "1px solid #eaeaea", paddingBottom: "15px" }}
            >
            <AnimatedNumber target={stat.value} />
            <p
                style={{
                fontSize: "1.2rem",
                color: "#232a47",
                margin: "0",
                }}
                >
                {stat.label}
                </p>
            </div>
            ))}
            </div>
        </div>
    </div>
    );
};

export default Numbers;
