import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className='' style={{ background: "#0d0c0a", color: "white", overflowX: "hidden", paddingTop: "5rem" }}>
                <div className="container mt-3 pb-2">
                    <div className="row gy-3 gx-3">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='d-flex gap-2'>
                                <p >عدسه</p>
                                <div className='rounded-3 border ' style={{
                                    width: "40px",
                                    background: "#fc5900",
                                    color: "white"
                                }}> <span className='text-center d-flex align-items-center justify-content-center'>ع</span></div>
                            </div>
                            <div>
                                <p>
                                    مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                                </p>
                            </div>
                            <div className='d-flex gap-3' >
                                <div className='fs-5 pt-2 pb-2 rounded-3 text-center d-flex align-items-center justify-content-center ' style={{ color: "#737373", background: "#161616", border: "1px soild #737373", width: "40px" }}><i class="fa-brands fa-youtube"></i></div>
                                <div className='fs-5  pt-2 pb-2 rounded-3 text-center d-flex align-items-center justify-content-center ' style={{ color: "#737373", background: "#161616", border: "1px soild #737373", width: "40px" }}><i class="fa-brands fa-linkedin"></i></div>
                                <div className='fs-5  pt-2 pb-2 rounded-3 text-center d-flex align-items-center justify-content-center ' style={{ color: "#737373", background: "#161616", border: "1px soild #737373", width: "40px" }}><i class="fa-brands fa-github"></i></div>
                                <div className='fs-5  pt-2 pb-2 rounded-3 text-center d-flex align-items-center justify-content-center ' style={{ color: "#737373", background: "#161616", border: "1px soild #737373", width: "40px" }}><i class="fa-brands fa-x-twitter"></i></div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='d-flex gap-2 text-center align-items-center justify-content-center'>
                                <span>استكشف</span>
                                <div className='rounded-2 mt-1 ' style={{
                                    width: "50px",
                                    height: "3px",
                                    background: "linear-gradient(to right, #a34c04, #ed9624)"

                                }}></div>
                            </div>
                            <div className='d-flex flex-column gap-3 text-center align-items-center justify-content-center'>
                                <div>الرئيسيه</div>
                                <div>المدونه</div>
                                <div>من نحن</div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='d-flex gap-2 text-center align-items-center justify-content-center'>
                                <span>التصنيفات</span>
                                <div className='rounded-2 mt-1 ' style={{
                                    width: "50px",
                                    height: "3px",
                                    background: "linear-gradient(to right, #a34c04, #ed9624)"

                                }}></div>
                            </div>
                            <div className='d-flex flex-column gap-2 text-center align-items-center justify-content-center'>
                                <div>اضاءه</div>
                                <div>بورتريه</div>
                                <div>مناظر طبيعيه </div>
                                <div> تقنيات </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='d-flex gap-2 text-center align-items-center justify-content-center'>
                                <span>ابقى على اطلاع</span>
                                <div className='rounded-2 mt-1 ' style={{
                                    width: "50px",
                                    height: "3px",
                                    background: "linear-gradient(to right, #a34c04, #ed9624)"
                                }}></div>
                            </div>
                            <div className='d-flex flex-column gap-2 text-center align-items-center justify-content-center'>
                                <div><p>اشترك للحصول على أحدث المقالات والتحديثات.</p></div>
                                <div className='' ><input type="email" id="Email" className="rounded-2 ms-auto p-2" placeholder="ادخل بريدك الالكترونى " style={{
                                    background: "#161616",
                                    color: "#505050",
                                    width: "220px",
                                    border: "1px solid transparent",
                                }} /></div>
                                <button type="submit" for="Email" className="rounded-5 p-2 " style={{
                                    width: "60%",
                                    background: "linear-gradient(to right, #f66d14, #ec5b0d)",
                                    border: "1px solid transparent",
                                    color: "white",
                                }}>اشتراك</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='m-2' style={{ width: "110%", height: "2px", background: "#222221" }}></div>
                        <div className='d-flex  justify-content-between' >
                            <div className='d-flex gap-3'><p>شروط الخدمة</p>
                                <p>سياسة الخصوصية</p>
                            </div>
                            <div>
                                <p><span> جميع الحقوق محفوظة.</span><span style={{ color: "#ff6900" }}><i class="fa-solid fa-heart"></i></span><span>© 2026 عدسة. صنع بكل</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
