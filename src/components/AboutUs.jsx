import React from 'react'
import { Link } from "react-router";
import Navbar from './Navbar'
import Footer from './Footer'
export default function AboutUs() {
    return (
        <>
            <Navbar />
            <section className=''
                style={{
                    backgroundColor: "#000000", // أسود
                    color: "#ff6600",           // برتقالي للعناوين
                    padding: "8rem 20px",
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
                    مهمتنا هي الإعلام والإلهام
                </h1>
                <p style={{ color: "#b0b0b0", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", paddingBottom: "5rem" }}>
                    مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
                </p>
                <Link
                    to="/home"
                    style={{
                        textDecoration: "none",
                        color: "#000000",
                        backgroundColor: "#ff6600",
                        padding: "20px 30px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        transition: "0.3s",
                        marginTop: "5rem"
                    }}
                    onMouseOver={(e) => (e.target.style.opacity = 0.8)}
                    onMouseOut={(e) => (e.target.style.opacity = 1)}
                >
                    العودة للرئيسية
                </Link>
            </section>
            <Footer />
        </>
    )
}
