import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import postsData from '../data/posts.json';
import { useState } from "react";
import BlogDetailsPage from './BlogDetailsPage';
export default function Home() {
  const [firstPost, secondPost, therdPost, fourthPost, fivthPost, sixPost] = postsData.posts;
  console.log(fourthPost, fivthPost, sixPost);
  const [selectedPost, setSelectedPost] = useState(null);
  if (selectedPost) {
    return (
      <BlogDetailsPage
        selectedPost={selectedPost}
        onBack={() => setSelectedPost(null)}
      />
    );
  }
  return (
    <>
      <Navbar />
      <section className=' bg-black' style={{ marginTop: "93px", paddingBottom: "15rem", overflowX: "hidden" }}>
        <div className='container'>
          <div className='row gx-3 gy-3'>
            <div className="col-12">
              <div className='d-flex  justify-content-center align-items-center text-center'>
                <div className='rounded-5 p-2' style={{
                  border: "2px solid #24160b",
                  width: "180px",
                  background: "#24160b",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span className='text-white '>مرحباً بك في عدسة</span>
                  <div className="" style={{
                    display: "flex", gap: "6px"
                  }}>
                    <span style={{
                      width: "7px",
                      height: "7px",
                      backgroundColor: "#ff6900",
                      borderRadius: "50%",

                    }}></span>

                    <span style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "#ff6900",
                      borderRadius: "50%",

                    }}></span>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-12">
              <div className='d-flex justify-content-center align-items-center text-center'>
                <h2 className='' style={{ fontSize: "5rem", color: "#ffffff" }}>اكتشف <span style={{ color: "#fba920" }}>فن</span></h2>
              </div>
              <div className="col-12">
                <div className='d-flex justify-content-center align-items-center text-center'>
                  <h3 style={{ fontSize: "5rem", color: "#ffffff" }}>التصوير الفوتوغرافي</h3>
                </div>
              </div>
              <div className="col-12">
                <div className='d-flex justify-content-center align-items-center text-center mt-3'>
                  <p style={{ fontSize: "1.4rem", color: "#6f6f6f" }}>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في<br /> .التصوير</p>
                </div>
              </div>
              <div className="col-12">
                <div className='d-flex justify-content-center align-items-center text-center mt-3'>
                  <div className='d-flex gap-3 text-center'>
                    <div className='rounded-5 d-flex justify-content-center align-items-center text-center' style={{
                      border: "2px solid #6f6f6f",
                      width: "200px",
                      color: "white"
                    }}><p className='d-flex gap-2 mt-2' >اعرف المزيد<span className=''><i class="fa-solid fa-circle-exclamation"></i></span></p>
                    </div>
                    <button className='rounded-5 p-3 ' style={{
                      background: "linear-gradient(to right, #f66d14, #ec5b0d)",
                      width: "200px",
                      border: "1px solid #f66d14",
                      color: "white"
                    }} type="submit"><i class="fa-solid fa-arrow-left"></i> استكشف المقالات</button>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row g-3">
                  <div className='d-flex justify-content-center align-items-center text-center gap-4'>
                    <div className="col-md-6 col-lg-3 col-sm-6  rounded-5 " style={{
                      width: "150px",
                      height: "120px",
                      background: "#151514",
                      textAlign: "center",
                      fontSize: "25px",
                      border: "2px soild #151514",
                      marginTop: "3rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }} >
                      <div className='d-flex flex-column'>
                        <span style={{ color: "#ff6900" }}><i class="fa-solid fa-pen-nib"></i></span>
                        <span style={{ color: "#f3951d" }}>6</span>
                        <span style={{ color: "#485458" }}>كاتب</span>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3  rounded-5" style={{
                      width: "150px",
                      height: "120px",
                      background: "#151514",
                      textAlign: "center",
                      fontSize: "25px",
                      border: "2px soild #151514",
                      marginTop: "3rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                      <div className='d-flex  flex-column  '>
                        <span style={{ color: "#ff6900" }}><i class="fa-solid fa-folder-open"></i></span>
                        <span style={{ color: "#f3951d" }}>4</span>
                        <span style={{ color: "#485458" }}>تصنيفات</span>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3  rounded-5" style={{
                      width: "150px",
                      height: "120px",
                      background: "#151514",
                      textAlign: "center",
                      fontSize: "25px",
                      border: "2px soild #151514",
                      marginTop: "3rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                      <div className='d-flex  flex-column  '>
                        <span style={{ color: "#ff6900" }}><i class="fa-solid fa-users"></i></span>
                        <span style={{ color: "#f3951d" }} className=''>+10<span>الف</span></span>
                        <span style={{ color: "#485458" }}>قارئ</span>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3  rounded-5" style={{
                      width: "150px",
                      height: "120px",
                      background: "#151514",
                      textAlign: "center",
                      fontSize: "25px",
                      border: "2px soild #151514",
                      marginTop: "3rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                      <div className='d-flex  flex-column  '>
                        <span style={{ color: "#ff6900" }}><i class="fa-solid fa-newspaper"></i></span>
                        <span style={{ color: "#f3951d" }}>50+</span>
                        <span style={{ color: "#485458" }}>مقاله</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=' bg-black' style={{ paddingBottom: "5rem" }}>
        <div className='text-white container '>
          <div className="row">
            <div className='rounded-5 p-2 ms-auto' style={{
              border: "2px solid #ff6900",
              width: "100px",
              background: "#24160b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "8px"
            }}>
              <span className='' style={{ color: "#ff6900" }}> مميز </span>
              <div className="" style={{
                display: "flex", gap: "6px"
              }}>
                <span style={{
                  width: "7px",
                  height: "7px",
                  backgroundColor: "#ff6900",
                  borderRadius: "50%",

                }}></span>

                <span style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "#ff6900",
                  borderRadius: "50%",

                }}></span>
              </div>
            </div>
            <div>
              <h2 className="text-white d-flex  justify-content-end mt-2" style={{ fontSize: "4rem" }}> مقالات مختارة</h2>
            </div>
            <div className='d-flex justify-content-between ' style={{ marginBlock: "1.5rem" }}>
              <button className=" rounded-3 " style={{
                width: "150px",
                padding: "0.6rem",
                background: "linear-gradient(to right, #ff6600, #f64c00)",
                border: "2px soild #f64c00",
                color: "white",

              }}> <span><i class="fa-solid fa-angle-right"></i></span> عرض الكل </button>
              <div><span style={{ color: "#86858a", fontSize: "19px" }}>محتوى منتقى لبدء رحلة تعلمك</span></div>
            </div>
            <div className="row g-4">
              {/* 1 */}
              <div className="col-12 mb-3 " onClick={() => setSelectedPost(firstPost)}>
                <div className="row" style={{ background: "#161616" }}>
                  <div className="col-lg-6 " style={{
                    borderLeft: "1px solid #242424",
                    borderTop: "1px solid #242424",
                    borderRight: "none",
                    borderBottom: "1px solid #242424",
                    padding: "5px",
                    borderTopLeftRadius: "15px",
                    borderBottomLeftRadius: "15px",
                    background: "#161616",
                  }}>

                    {/* Left Content */}
                    <div className="content-left p-3 " >
                      <div className='d-flex justify-content-end gap-3'>
                        <p className="d-flex gap-1" style={{ color: "#6f6f6f", fontSize: "14px" }}> دقائق للقراءة<span>8</span><span><i class="fa-solid fa-clock"></i></span></p>
                        <span className="rounded-5" style={{
                          border: "1px solid #ff6900",
                          width: "70px",
                          height: "30px",
                          background: "#24160b",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          color: "#ff6900"

                        }} >{firstPost.tags[0]}</span>
                      </div>

                      <h2 className='d-flex justify-content-end' >
                        إتقان تصوير الساعة الذهبية: دليل شامل
                      </h2>

                      <div>
                        <p className="d-flex justify-content-end">
                          تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية
                          حول
                        </p>
                        <p className='d-flex justify-content-end'>
                          .الإضاءة والتكوين
                        </p>
                      </div>
                      <div className='d-flex justify-content-between pb-2 ' style={{ marginTop: "7rem" }}>
                        <a style={{
                          width: "150px",
                          color: "#ff6600",
                          textDecoration: "none",
                        }} className=""><span><i class="fa-solid fa-angle-right"></i></span> اقرأ المقال</a>
                        <div className="d-flex gap-2">
                          <div>
                            <p className="name" style={{ fontSize: "1rem" }}> {firstPost.author.name}</p>
                            <p className="date" style={{ fontSize: "0.7rem" }}>{firstPost.date}  </p>
                          </div>
                          <img
                            src={firstPost.author.avatar}
                            alt={firstPost.title}
                            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* right Content */}
                  <div className="col-lg-6 " style={{
                  }}>
                    <div className='contant-right ' style={{
                      width: "100%", height: "100%", position: "relative"
                    }}>
                      <img className="" src={firstPost.image} alt={firstPost.author.name}
                        style={{
                          width: "100%", height: "100%",
                          objectFit: "cover",
                          borderLeft: "1px solid #242424", // تشيلي الحد الأيسر لو عايزة
                          borderTop: "1px solid #242424",
                          borderRight: "none",
                          borderBottom: "1px solid #242424",
                          // padding: "5px",
                          borderTopRightRadius: "15px",
                          borderBottomRightRadius: "15px",
                        }}
                      />
                      <button
                        style={{
                          position: "absolute",
                          top: "15px",
                          right: "15px",
                          background: "rgba(0, 0, 0, 0.6)",
                          color: "#fff",
                          border: "none",
                          padding: "8px 16px",
                          borderRadius: "20px",
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        {firstPost.category}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="col-12 mb-3 " onClick={() => setSelectedPost(secondPost)}>
                <div className="row" style={{ background: "#161616" }} >
                  <div className="col-lg-6 " style={{
                    borderLeft: "1px solid #242424", // تشيلي الحد الأيسر لو عايزة
                    borderTop: "1px solid #242424",
                    borderRight: "none",
                    borderBottom: "1px solid #242424",
                    padding: "5px",
                    borderTopLeftRadius: "15px",
                    borderBottomLeftRadius: "15px",
                    background: "#161616",
                  }}>

                    {/* Left Content */}
                    <div className="content-left p-3 " >
                      <div className='d-flex justify-content-end gap-3'>
                        <p className="d-flex gap-1" style={{ color: "#6f6f6f", fontSize: "14px" }}> {secondPost.readTime}<i class="fa-solid fa-clock"></i></p>
                        <span className="rounded-5" style={{
                          border: "1px solid #ff6900",
                          width: "70px",
                          height: "30px",
                          background: "#24160b",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          color: "#ff6900"

                        }} >{secondPost.tags[0]}</span>
                      </div>

                      <h2 className='d-flex justify-content-end' >
                        {secondPost.title}
                      </h2>

                      <div>
                        <p className="d-flex justify-content-end">
                          {secondPost.excerpt}
                        </p>

                      </div>
                      <div className='d-flex justify-content-between pb-2 ' style={{ marginTop: "7rem" }}>
                        <a style={{
                          width: "150px",
                          color: "#ff6600",
                          textDecoration: "none",
                        }} className=""><span><i class="fa-solid fa-angle-right"></i></span> اقرأ المقال</a>
                        <div className="d-flex gap-2">
                          <div>
                            <p className="name" style={{ fontSize: "1rem" }}> {secondPost.author.name}</p>
                            <p className="date" style={{ fontSize: "0.7rem" }}>{secondPost.date}  </p>
                          </div>
                          <img
                            src={secondPost.author.avatar}
                            alt={secondPost.title}
                            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* right Content */}
                  <div className="col-lg-6 " style={{
                  }}>
                    <div className='contant-right ' style={{
                      width: "100%", height: "100%", position: "relative"
                    }}>
                      <img className="" src={secondPost.image} alt={secondPost.author.name}
                        style={{
                          width: "100%", height: "100%",
                          objectFit: "cover",
                          borderLeft: "1px solid #242424", // تشيلي الحد الأيسر لو عايزة
                          borderTop: "1px solid #242424",
                          borderRight: "none",
                          borderBottom: "1px solid #242424",
                          // padding: "5px",
                          borderTopRightRadius: "15px",
                          borderBottomRightRadius: "15px",
                        }}
                      />
                      <button
                        style={{
                          position: "absolute",
                          top: "15px",
                          right: "15px",
                          background: "rgba(0, 0, 0, 0.6)",
                          color: "#fff",
                          border: "none",
                          padding: "8px 16px",
                          borderRadius: "20px",
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        {secondPost.category}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="col-12 mb-5" onClick={() => setSelectedPost(therdPost)} >
                <div className="row" style={{ background: "#161616" }} >
                  <div className="col-lg-6 " style={{
                    borderLeft: "1px solid #242424", // تشيلي الحد الأيسر لو عايزة
                    borderTop: "1px solid #242424",
                    borderRight: "none",
                    borderBottom: "1px solid #242424",
                    padding: "5px",
                    borderTopLeftRadius: "15px",
                    borderBottomLeftRadius: "15px",
                    background: "#161616",
                  }}>

                    {/* Left Content */}
                    <div className="content-left p-3 " >
                      <div className='d-flex justify-content-end gap-3'>
                        <p className="d-flex  justify-content-center align-items-center  gap-1" style={{ color: "#6f6f6f", fontSize: "14px" }}> {therdPost.readTime}<i class="fa-solid fa-clock"></i></p>
                        <span className="rounded-5" style={{
                          border: "1px solid #ff6900",
                          width: "100px",
                          height: "30px",
                          background: "#24160b",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          color: "#ff6900"

                        }} >{therdPost.tags[0]}</span>
                      </div>

                      <h2 className='d-flex justify-content-end' >
                        {therdPost.title}
                      </h2>

                      <div className='d-flex justify-content-end'>
                        <p className="d-flex justify-content-end">
                          {therdPost.excerpt}
                        </p>
                      </div>
                      <div className='d-flex justify-content-between pb-2 ' style={{ marginTop: "7rem" }}>
                        <a style={{
                          width: "150px",
                          color: "#ff6600",
                          textDecoration: "none",
                        }} className=""><span><i class="fa-solid fa-angle-right"></i></span> اقرأ المقال</a>
                        <div className="d-flex gap-2">
                          <div>
                            <p className="name" style={{ fontSize: "1rem" }}> {therdPost.author.name}</p>
                            <p className="date" style={{ fontSize: "0.7rem" }}>{therdPost.date}  </p>
                          </div>
                          <img
                            src={therdPost.author.avatar}
                            alt={therdPost.title}
                            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* right Content */}
                  <div className="col-lg-6 " style={{
                  }}>
                    <div className='contant-right ' style={{
                      width: "100%", height: "100%", position: "relative"
                    }}>
                      <img className="" src={therdPost.image} alt={therdPost.author.name}
                        style={{
                          width: "100%", height: "100%",
                          objectFit: "cover",
                          borderLeft: "1px solid #242424", // تشيلي الحد الأيسر لو عايزة
                          borderTop: "1px solid #242424",
                          borderRight: "none",
                          borderBottom: "1px solid #242424",
                          // padding: "5px",
                          borderTopRightRadius: "15px",
                          borderBottomRightRadius: "15px",
                        }}
                      />
                      <button
                        style={{
                          position: "absolute",
                          top: "15px",
                          right: "15px",
                          background: "rgba(0, 0, 0, 0.6)",
                          color: "#fff",
                          border: "none",
                          padding: "8px 16px",
                          borderRadius: "20px",
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        {therdPost.category}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='' style={{ background: "#111111", padding: "5rem", border: "1px solid #1e1e1e" }} >
        <div className="container">
          <div className="row g-3">
            <div className="col-12">
              <div className='d-flex justify-content-center align-items-center text-center'>
                <div className='rounded-5 p-2' style={{
                  border: "2px solid #ff6900",
                  width: "150px",
                  background: "#24160b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: "8px"
                }}>
                  <span className='' style={{ color: "#ff6900" }}>  التصنيفات</span>
                  <div className="" style={{
                    display: "flex", gap: "6px",
                  }}>
                    <span style={{
                      width: "7px",
                      height: "7px",
                      backgroundColor: "#ff6900",
                      borderRadius: "50%",
                    }}></span>
                    <span style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "#ff6900",
                      borderRadius: "50%",
                    }}></span>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center text-center'><h2 style={{ fontSize: "4rem", color: "#ffffff" }} >استكشف حسب الموضوع</h2></div>
              <div className='d-flex justify-content-center align-items-center text-center'><p style={{ fontSize: "1rem", color: "#aeaeb1", paddingBottom: "2rem" }} >اعثر على محتوى مصمم حسب اهتماماتك</p></div>
              <div>
                <div className="row g-3">
                  <div className="col-lg-3 col-sm-6 col-6"  >
                    <div className='d-flex flex-column justify-content-end align-items-end  rounded-3 ' style={{ border: "1px solid #222222", background: "#161616", width: "250px", height: "150px", fontSize: "20px", padding: "1rem" }}>
                      <div style={{
                        color: "#ff6900",
                        width: "50px",
                        height: "50px",
                        border: "1px solid #ff6900",
                        borderRadius: "0.5rem",
                        background: "#2e1e14",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",

                      }}><i class="fa-solid fa-sliders"></i></div>
                      <div style={{ color: "white" }}><p>تقنيات</p></div>
                      <div style={{ color: "#aeaeb1" }}>مقاله  <span>5</span></div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6 " >
                    <div className='d-flex flex-column justify-content-end align-items-end rounded-3' style={{ border: "1px solid #222222", background: "#161616", width: "250px", height: "150px", padding: "1rem", fontSize: "20px" }}>
                      <div style={{
                        color: "#ff6900",
                        width: "50px",
                        height: "50px",
                        border: "1px solid #ff6900",
                        borderRadius: "0.5rem",
                        background: "#2e1e14",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                      }}><i class="fa-solid fa-mountain-sun"></i></div>
                      <div style={{ color: "white" }}><p>مناظر طبيعيه</p></div>
                      <div style={{ color: "#aeaeb1" }}>مقاله  <span>2</span></div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6 ">
                    <div className='d-flex flex-column justify-content-end align-items-end rounded-3' style={{ border: "1px solid #222222", background: "#161616", width: "250px", height: "150px", padding: "1rem", fontSize: "20px" }}>
                      <div style={{
                        color: "#ff6900",
                        width: "50px",
                        height: "50px",
                        border: "1px solid #ff6900",
                        borderRadius: "0.5rem",
                        background: "#2e1e14",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                      }}
                      ><i class="fa-regular fa-user"></i></div>
                      <div style={{ color: "white" }}><p>تقنيات</p></div>
                      <div style={{ color: "#aeaeb1" }}>مقاله  <span>5</span></div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6 " >
                    <div className='d-flex flex-column justify-content-end align-items-end rounded-3' style={{ border: "1px solid #222222", background: "#161616", width: "250px", height: "150px", padding: "1rem", fontSize: "20px" }}>
                      <div style={{
                        color: "#ff6900",
                        width: "50px",
                        height: "50px",
                        border: "1px solid #ff6900",
                        borderRadius: "0.5rem",
                        background: "#2e1e14",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                      }}><i class="fa-solid fa-sun"></i></div>
                      <div style={{ color: "white" }}><p>اضاءه</p></div>
                      <div style={{ color: "#aeaeb1" }}>مقاله  <span>3</span></div>
                    </div>
                  </div>
                  <div className='d-flex  justify-content-end'>
                    <div className="col-lg-3 col-sm-6 col-6 rounded-3" style={{ border: "1px solid #222222", background: "#161616", width: "250px", height: "150px", padding: "1rem", fontSize: "20px" }}>
                      <div className='d-flex flex-column justify-content-end align-items-end text-center'>
                        <div style={{
                          color: "#ff6900",
                          width: "50px",
                          height: "50px",
                          border: "1px solid #ff6900",
                          borderRadius: "0.5rem",
                          background: "#2e1e14",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center"
                        }}><i class="fa-solid fa-sun"></i></div>
                        <div style={{ color: "white" }}><p>معدات</p></div>
                        <div style={{ color: "#aeaeb1" }}>مقاله  <span>3</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-black' style={{ paddingBottom: "5rem" }}>
        <div className="container">
          <div className="">
            <div className='rounded-5 p-2 ms-auto' style={{
              border: "2px solid #ff6900",
              width: "100px",
              background: "#24160b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "8px"
            }}>
              <span className='' style={{ color: "#ff6900" }}> الأحدث </span>
              <div className="" style={{
                display: "flex", gap: "6px"
              }}>
                <span style={{
                  width: "7px",
                  height: "7px",
                  backgroundColor: "#ff6900",
                  borderRadius: "50%",

                }}></span>

                <span style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "#ff6900",
                  borderRadius: "50%",

                }}></span>
              </div>
            </div>
            <div>
              <h2 className="text-white d-flex  justify-content-end mt-2" style={{ fontSize: "4rem" }}>
                أحدث المقالات</h2>
            </div>
            <div className='d-flex justify-content-between ' style={{ marginBlock: "1.5rem" }}>
              <button className=" rounded-3 " style={{
                width: "150px",
                padding: "0.6rem",
                background: "linear-gradient(to right, #ff6600, #f64c00)",
                border: "2px soild #f64c00",
                color: "white",

              }}> <span><i class="fa-solid fa-angle-right"></i></span> عرض الكل </button>
              <div><span style={{ color: "#86858a", fontSize: "19px" }}>    محتوى جديد طازج من المطبعة</span></div>
            </div>

          </div>
          <div className="row g-3">
            <div className="col-lg-4 col-6">
              <div className="" onClick={() => setSelectedPost(sixPost)} style={{
                width: "350px",
                background: "#161616",
                borderradius: "15px",
                overflow: "hidden",
                color: "white",
                border: "1px solid #222222",
                borderRadius: "1rem",
              }}>
                <div style={{ position: "relative" }}>
                  <img src={sixPost.image} alt={sixPost.author.name} style={{
                    width: "100%",
                    height: "250px",
                    objectfit: "cover",

                  }} />
                  <button
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: "rgba(0, 0, 0, 0.6)",
                      color: "#fff",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {sixPost.category}
                  </button>
                </div>
                <div className='d-flex gap-3 flex-row-reverse p-2'>
                  <span style={{ color: "#6f6f6f", fontSize: "14px" }}>{sixPost.readTime}<i class="fa-regular fa-clock"></i></span>
                  <span className='rounded-5 mt-2' style={{ background: "#6f6f6f", width: "5px", height: "5px", }}></span>
                  <span style={{ color: "#6f6f6f", fontSize: "14px" }}>{sixPost.date}</span>
                </div>
                <div className='p-2' >
                  <h2 className='d-flex justify-content-end ' style={{
                  }}>{sixPost.title} </h2>
                  <p className='d-flex justify-content-end'>
                    {sixPost.excerpt}
                  </p>
                </div>
                <div className='' style={{ width: "100%", height: "2px", background: "#222222" }}></div>
                <div className='d-flex justify-content-between  flex-row-reverse p-2'>
                  <div class=" d-flex gap-2  flex-row-reverse">
                    <img style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                      className='' src={sixPost.author.avatar} alt={sixPost.author.name} />
                    <div className='d-flex flex-column'>
                      <span className='d-flex flex-row-reverse'> {sixPost.author.name}</span>
                      <span >{sixPost.author.role}</span>
                    </div>
                  </div>
                  <div className='rounded-5 d-flex justify-content-center align-items-center' style={{
                    width: "50px", height: "50px", background: "#2e1e14", color: "#a44709", fontSize: "20px"
                  }}>
                    <i class="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="" onClick={() => setSelectedPost(fivthPost)} style={{
                width: "350px",
                background: "#161616",
                borderradius: "15px",
                overflow: "hidden",
                color: "white",
                border: "1px solid #222222",
                borderRadius: "1rem",
              }}>
                <div style={{ position: "relative" }}>
                  <img src={fivthPost.image} alt={fivthPost.author.name} style={{
                    width: "100%",
                    height: "250px",
                    objectfit: "cover",

                  }} />
                  <button
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: "rgba(0, 0, 0, 0.6)",
                      color: "#fff",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {fivthPost.category}
                  </button>
                </div>
                <div className='d-flex gap-3 flex-row-reverse p-2'>
                  <span style={{ color: "#6f6f6f", fontSize: "14px" }}>{fivthPost.readTime}<i class="fa-regular fa-clock"></i></span>
                  <span className='rounded-5 mt-2' style={{ background: "#6f6f6f", width: "5px", height: "5px", }}></span>
                  <span style={{ color: "#6f6f6f", fontSize: "14px" }}>{fivthPost.date}</span>
                </div>
                <div className='p-2' >
                  <h2 className='d-flex justify-content-end ' style={{
                  }}>{fivthPost.title} </h2>
                  <p className='d-flex justify-content-end'>
                    {fivthPost.excerpt}
                  </p>
                </div>
                <div className='' style={{ width: "100%", height: "2px", background: "#222222" }}></div>
                <div className='d-flex justify-content-between  flex-row-reverse p-2'>
                  <div class=" d-flex gap-2  flex-row-reverse">
                    <img style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                      className='' src={fivthPost.author.avatar} alt={fivthPost.author.name} />
                    <div className='d-flex flex-column'>
                      <span className='d-flex flex-row-reverse'> {fivthPost.author.name}</span>
                      <span >{fivthPost.author.role}</span>
                    </div>
                  </div>
                  <div className='rounded-5 d-flex justify-content-center align-items-center' style={{
                    width: "50px", height: "50px", background: "#2e1e14", color: "#a44709", fontSize: "20px"
                  }}>
                    <i class="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="" onClick={() => setSelectedPost(fourthPost)} style={{
                width: "350px",
                background: "#161616",
                borderradius: "15px",
                overflow: "hidden",
                color: "white",
                border: "1px solid #222222",
                borderRadius: "1rem",
              }}>
                <div style={{ position: "relative" }}>
                  <img src={fourthPost.image} alt={fourthPost.author.name} style={{
                    width: "100%",
                    height: "250px",
                    objectfit: "cover",

                  }} />
                  <button
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: "rgba(0, 0, 0, 0.6)",
                      color: "#fff",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {fourthPost.category}
                  </button>
                </div>
                <div className='d-flex gap-3 flex-row-reverse p-2'>
                  <span style={{ color: "#6f6f6f", fontSize: "14px" }}>{sixPost.readTime}<i class="fa-regular fa-clock"></i></span>
                  <span className='rounded-5 mt-2' style={{ background: "#6f6f6f", width: "5px", height: "5px", }}></span>
                  <span style={{ color: "#6f6f6f", fontSize: "14px" }}>{sixPost.date}</span>
                </div>
                <div className='p-2' >
                  <h2 className='d-flex justify-content-end ' style={{
                  }}>{fourthPost.title} </h2>
                  <p className='d-flex justify-content-end'>
                    {fourthPost.excerpt}
                  </p>
                </div>
                <div className='' style={{ width: "100%", height: "2px", background: "#222222" }}></div>
                <div className='d-flex justify-content-between  flex-row-reverse p-2'>
                  <div class=" d-flex gap-2  flex-row-reverse">
                    <img style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                      className='' src={fourthPost.author.avatar} alt={fourthPost.author.name} />
                    <div className='d-flex flex-column'>
                      <span className='d-flex flex-row-reverse'> {fourthPost.author.name}</span>
                      <span >{fourthPost.author.role}</span>
                    </div>
                  </div>
                  <div className='rounded-5 d-flex justify-content-center align-items-center' style={{
                    width: "50px", height: "50px", background: "#2e1e14", color: "#a44709", fontSize: "20px"
                  }}>
                    <i class="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-white bg-black'>
        <div className="container">
          <div className="row">
            <div className="col-12 rounded-3" style={{ background: "#111111", border: "1px solid #1e1e1e", padding: "1rem" }} >
              <div className='d-flex justify-content-center align-items-center text-center' >
                <div className="d-flex justify-content-center align-items-center text-center rounded-3" style={{ fontSize: "1.5rem", width: "50px", height: "50px", background: "#fc5900" }}>
                  <i class="fa-solid fa-envelope"></i>
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center text-center'>
                <h2 style={{ fontSize: "3rem" }}>
                  اشترك في <span style={{
                    background: "linear-gradient(to right, #ff6a00, #ff8c00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>نشرة الإخبارية</span>
                </h2>
              </div>
              <div className='d-flex justify-content-center align-items-center text-center'>
                <p style={{ color: "#949699", paddingTop: "0.5rem" }}>
                  احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
                </p>
              </div>
              <div className="row">
                <div className=" d-flex justify-content-center align-items-center text-center">
                  <div className='col-6'>
                    <div className="d-flex justify-content-between flex-row-reverse">
                      <input style={{ background: "#0a0a0a", color: "#8a8e89", border: "1px solid #0a0a0a" }}
                        type="email"
                        className="form-control email-input"
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                      <button className="btn subscribe-btn" style={{ color: "#ff6a00" }}>اشترك الآن</button>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ color: "#949699", paddingTop: "0.5rem" }} className="d-flex justify-content-center gap-4 mt-4 small-text">
                <span>إلغاء الاشتراك في أي وقت</span>
                <span>بدون إزعاج</span>
                <span>+10,000 مشترك</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
