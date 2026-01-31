import React from "react";
import { Link } from "react-router";
export default function NotFoundPage() {
    return (
        <div
            style={{
                height: "100vh",
                backgroundColor: "#000000", // أسود
                color: "#ff6600",           // برتقالي
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
                padding: "20px",
            }}
        >
            <h1 style={{ fontSize: "8rem", margin: 0 }}>404</h1>
            <h2 style={{ fontSize: "2rem", margin: "20px 0" }}>
                الصفحة غير موجودة
            </h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
                عذراً، الصفحة التي تحاول الوصول إليها غير موجودة.
            </p>
            <Link
                to="/home"
                style={{
                    textDecoration: "none",
                    color: "#000000",
                    backgroundColor: "#ff6600",
                    padding: "12px 30px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.opacity = 0.8)}
                onMouseOut={(e) => (e.target.style.opacity = 1)}
            >
                العودة للرئيسية
            </Link>
        </div>
    );
}
