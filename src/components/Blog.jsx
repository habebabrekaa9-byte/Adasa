import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import postsData from '../data/posts.json';
import { useState } from "react";
import BlogDetailsPage from './BlogDetailsPage';
export default function Blog() {
  const [allPosts] = useState(postsData); // الأصل
  const [search, setSearch] = useState("");
  const [filterPosts, setFilterPosts] = useState(postsData.posts);
  const [activeCategory, setActiveCategory] = useState("All");

  const applyFilter = (searchValue, categoryValue) => {
    let result = allPosts.posts;
    // فلترة بالتصنيف
    if (categoryValue !== "All") {
      result = result.filter(
        (post) => post.category === categoryValue
      );
    }
    //  بالبحث
    if (searchValue.trim() !== "") {
      result = result.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setFilterPosts(result);
  };
  const handleFilter = (categoryName) => {
    setActiveCategory(categoryName);
    applyFilter(search, categoryName);
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    applyFilter(value, activeCategory);
  };
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
      <section style={{ background: "#0f0f0f", marginTop: "3rem" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center text-center " style={{ marginTop: "5rem" }}>
              <div
                className="rounded-5 p-3 d-flex justify-content-center align-items-center text-center gap-2"
                style={{
                  border: "1px solid #f17016",
                  background: "#311a0a",
                  width: "120px",
                  height: "40px"
                }}
              >
                <span style={{ color: "#f17016" }}>مدونتنا </span>

                <div className="d-flex gap-1">
                  <span style={{
                    width: "7px",
                    height: "7px",
                    backgroundColor: "#f17016",
                    borderRadius: "50%",
                  }}></span>

                  <span style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "#f17016",
                    borderRadius: "50%",
                  }}></span>
                </div>

              </div>

            </div>
            <div className="col-12 d-flex justify-content-center align-items-center text-center mt-3">
              <div><h2 style={{ fontSize: "4rem" }}> <span className='text-white'>استكشف</span> <span style={{ background: "linear-gradient(to right, #ff6a00, #ff8c00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>مقالاتنا</span></h2></div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center text-center mt-3 ">
              <div style={{ fontSize: "1.2rem", color: "#9d9da0" }}><span>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className='' style={{ background: "#0f0f0f", }}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className='d-flex gap-3'>
                <button className=""
                  onClick={() => handleFilter("All")}
                  style={{
                    backgroundColor: "#161616",
                    borderRadius: "12px",
                    width: "150px",
                    height: "50px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "1px solid #232323",
                    color: activeCategory === "All" ? "#fc5900" : "#aaa",
                  }}>جميع المقالات</button>
                {
                  allPosts.categories.map((cat) => (
                    <button className="active"
                      key={cat.name}
                      onClick={() => handleFilter(cat.name)}
                      style={{
                        backgroundColor: "#161616",
                        color: activeCategory === cat.name ? "#fc5900" : "#aaa",
                        border: "1px solid #232323",
                        borderRadius: "12px",
                        width: "100px",
                        height: "50px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",

                      }}>{cat.name}</button>
                  ))
                }

              </div>
            </div>
            <div className="col-6">
              <div className='d-flex justify-content-end'>
                <div>
                  <div style={{ position: "relative", width: "300px" }}>
                    <div style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#888",
                    }}>
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="ابحث في المقالات"
                      value={search}
                      onInput={handleSearch}
                      style={{
                        width: "100%",
                        padding: "10px 40px 10px 10px", // مساحة للأيقونة على اليمين
                        borderRadius: "8px",
                        border: "1px solid #232323",
                        fontSize: "16px",
                        background: "#161616",
                        color: "white"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: "2px", background: "#232323", marginTop: "2rem" }}></div>
            <div className="row">
              <div className="col-6">
                <div className='d-flex mt-2 rounded-3' >
                  <button style={{ border: "1px solid #232323", }} ><i class="fa-solid fa-list"></i></button>
                  <button style={{ border: "1px solid #232323", }}><i class="fa-brands fa-buromobelexperte"></i></button>
                </div>
              </div>
              <div className="col-6">
                <div className='d-flex justify-content-end'>
                  <p style={{ color: "#888" }}>عرض <span className='text-white'>28</span> مقالات</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#0f0f0f", paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="row mb-2 gy-4">
            {
              filterPosts.map((post) => (
                <div className="col-lg-4 col-6">
                  <div className="" onClick={() => setSelectedPost(post)} style={{
                    width: "350px",
                    background: "#161616",
                    borderradius: "15px",
                    overflow: "hidden",
                    color: "white",
                    border: "1px solid #222222",
                    borderRadius: "1rem",
                  }}>
                    <div style={{ position: "relative", }}>
                      <img src={post.image} alt={post.author.name} style={{
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
                        {post.category}
                      </button>
                    </div>
                    <div className='d-flex gap-3 flex-row-reverse p-2'>
                      <span style={{ color: "#6f6f6f", fontSize: "14px" }}>{post.readTime}<i class="fa-regular fa-clock"></i></span>
                      <span className='rounded-5 mt-2' style={{ background: "#6f6f6f", width: "5px", height: "5px", }}></span>
                      <span style={{ color: "#6f6f6f", fontSize: "14px" }}>{post.date}</span>
                    </div>
                    <div className='p-2' >
                      <h2 className='d-flex justify-content-end ' style={{
                      }}>{post.title} </h2>
                      <p className='d-flex justify-content-end'>
                        {post.excerpt}
                      </p>
                    </div>
                    <div className='' style={{ width: "100%", height: "2px", background: "#222222" }}></div>
                    <div className='d-flex justify-content-between  flex-row-reverse p-2'>
                      <div class=" d-flex gap-2  flex-row-reverse">
                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                          className='' src={post.author.avatar} alt={post.author.name} />
                        <div className='d-flex flex-column'>
                          <span className='d-flex flex-row-reverse'> {post.author.name}</span>
                          <span >{post.author.role}</span>
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
              ))
            }
          </div>
        </div>
      </section>
      <Footer />
      {selectedPost && (
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
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9))",
            }}
          ></div>

          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "80px 60px",
              maxWidth: "900px",
            }}
          >
            {/* Breadcrumb */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                color: "#aaa",
                marginBottom: "20px",
              }}
            >
              <span>🏠</span>
              <span>المدونة</span>
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
      )}
    </>
  )
}

