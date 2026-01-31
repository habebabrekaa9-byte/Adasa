import React from 'react'
import { Link } from "react-router";
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ background: "#0a0a0a", overflowX: "hidden" }}>
                <div className="container">

                    <div className="d-flex " role="search">
                        <button className=" p-3 rounded-5 border " style={{
                            width: "150px",
                            background: "#fc5900",
                            color: "white",
                            border: "1px solid #fc5900"
                        }} type="submit"><span>ابدا القراءه</span></button>
                        <div className="mt-3 ms-3" type="submit" style={{ color: "#6f6f6f" }}><i class="fa-solid fa-magnifying-glass"></i></div>
                    </div>

                    <div className='"d-flex justify-content-center align-items-center text-center rounded-5 ' style={{
                        border: "1px solid #141414",
                        background: "#141414",
                        paddingInline: "0.5rem",
                        paddingBlockEnd: "0.5rem"
                    }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/about" style={{ color: "#6f6f6f" }}>من نحن</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog" style={{ color: "#6f6f6f" }}>المدونه</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home" style={{ color: "#6f6f6f" }}>  الرئيسية</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-brand d-flex flex-row-reverse gap-2" href="#">
                        <div className="">
                            <img className=" image" style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                objectFit: "cover"
                            }} src="/src/assets/logo-GdqARQRt.png" alt="" />
                        </div>
                        <div className='d-flex flex-column'>
                            <span className='ms-auto text-white'>عدسة</span>
                            <p className='fs-6' style={{
                                color: "#77450f",
                                fontFamily: "Tajawal, system-ui, -apple-system, sans-serif;                                "
                            }}>عالم التصوير الفوتوغرافي</p>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}
// عدسة
// عالم التصوير الفوتوغرافي
