import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import { useState } from "react";
export default function BlogDetailsPage({ selectedPost, onBack }) {
    if (!selectedPost) return null;
    return (
        <>
            <Navbar />
            <section
                style={{
                    height: "90vh",
                    backgroundImage: `url(${selectedPost.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    color: "#fff",
                    direction: "rtl",
                    paddingTop: "5rem",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9))",
                    }}
                ></div>
                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        padding: "80px 60px",
                        maxWidth: "900px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            color: "#aaa",
                            marginBottom: "20px",
                        }}
                    >
                        <button style={{
                            background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                            color: 'white',
                            border: 'none',
                            padding: '12px 30px',
                            borderRadius: '25px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
                            transition: 'all 0.3s ease'
                        }} onClick={onBack}>الرئيسيه🏠</button>
                        <button style={{
                            background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                            color: 'white',
                            border: 'none',
                            padding: '12px 30px',
                            borderRadius: '25px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
                            transition: 'all 0.3s ease'
                        }} onClick={onBack}>المدونة</button>
                        <span style={{ color: "#ff6600" }}>
                            {selectedPost.category}
                        </span>
                    </div>

                    {/* Meta */}
                    <div
                        style={{
                            display: "flex",
                            gap: "15px",
                            alignItems: "center",
                            color: "#ccc",
                            marginBottom: "30px",
                        }}
                    >
                        <span>📅 {selectedPost.date}</span>
                        <span>⏱️ {selectedPost.readTime}</span>
                        <span
                            style={{
                                background: "#ff6600",
                                color: "#000",
                                padding: "6px 14px",
                                borderRadius: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            {selectedPost.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        style={{
                            fontSize: "3.2rem",
                            lineHeight: "1.3",
                            marginBottom: "40px",
                        }}
                    >
                        {selectedPost.title}
                    </h1>

                    {/* Author Card */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            background: "rgba(0,0,0,0.6)",
                            padding: "15px 20px",
                            borderRadius: "16px",
                            width: "fit-content",
                        }}
                    >
                        <img
                            src={selectedPost.author.avatar}
                            alt={selectedPost.author.name}
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                border: "2px solid #ff6600",
                            }}
                        />
                        <div>
                            <h4 style={{ margin: 0 }}>
                                {selectedPost.author.name}
                            </h4>
                            <p style={{ margin: 0, color: "#aaa" }}>
                                {selectedPost.author.role}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

