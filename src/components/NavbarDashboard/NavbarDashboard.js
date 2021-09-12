import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function NavbarDashboard() {
  const currentUser = JSON.parse(localStorage.getItem("eklavyaStudent"));

  const logoutUser = () => {
    console.log("Logout clicked");
    localStorage.removeItem("eklavyaStudent");
    // alert('Logged out successfully')
  };

  return (
    <div>
      {/* Header Section Start */}
      <div className="header-section header-fluid sticky-header section">
        <div
          className="header-inner"
          style={{
            width: "100%",
            paddingLeft : '5%',
            paddingRight : '5%',
            marginRight: "auto",
            marginLeft: "auto",
            fontSize: "14px",
          }}
        >
          <div className="container position-relative">
            <div className="row justify-content-between align-items-center">
              {/* Header Logo Start */}
              <div className="col-xl-3 col-auto">
                <div className="header-logo">
                  <a href="/">
                    <img
                      className="dark-logo"
                      src="assets/images/logo/ekt-logo.png"
                      alt="Ekluvya Tuitions" 
                      style={{maxWidth : '150px'}}
                    />
                    <img
                      className="light-logo"
                      src="assets/images/logo/ekt-logo.png"
                      alt="Ekluvya Tuitions"
                    />
                  </a>
                </div>
              </div>
              {/* Header Logo End */}
              {/* Header Main Menu Start */}
              <div className="col d-none d-xl-block position-static">
                <nav className="site-main-menu">
                  <ul>
                    <li className="position-static">
                      <a href="/dashboard">
                        <span className="menu-text">Dashboard</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href={`/dashboard/upcomingSessions/${currentUser.studentId}`}
                      >
                        <span className="menu-text">My Sessions</span>
                      </a>
                    </li>
                    <li>
                      <a href="/courselist">
                        <span className="menu-text">Buy More Sessions</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Header Main Menu End */}
              {/* Header Right Start */}
              <div className="col-xl-3 col-auto">
                <div className="header-right">
                  <div className="inner">
                    {/* Header Cart Start */}
                    <div className="header-cart">
                      {/* <a className="header-cart-btn" href="shopping-cart.html"><span className="cart-count">2</span><i className="far fa-shopping-cart" /></a> */}
                      {/* Header Mini Cart Start */}
                      <div className="header-mini-cart">
                        <div className="inner">
                          {/* Header Mini Cart Product Start */}
                          <div className="mini-cart-products">
                            <div className="mini-cart-product">
                              <a href="#" className="thumb">
                                <img
                                  src="assets/images/products/mini-cart/product-1.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="content">
                                <a href="#" className="title">
                                  IIT Foundation for Class VIII
                                </a>
                                <span className="quantity">
                                  1 x <span className="price">₹1500.00</span>
                                </span>
                              </div>
                              <a href="#" className="remove">
                                <i className="far fa-times" />
                              </a>
                            </div>
                            <div className="mini-cart-product">
                              <a href="#" className="thumb">
                                <img
                                  src="assets/images/products/mini-cart/product-2.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="content">
                                <a href="#" className="title">
                                  EAMCET Prep - Physics
                                </a>
                                <span className="quantity">
                                  1 x <span className="price">₹900.00</span>
                                </span>
                              </div>
                              <a href="#" className="remove">
                                <i className="far fa-times" />
                              </a>
                            </div>
                          </div>
                          {/* Header Mini Cart Product End */}
                          {/* Header Mini Cart Footer Start */}
                          <div className="mini-cart-footer">
                            <div className="mini-cart-total">
                              <b>Total:</b>
                              <span className="amount">₹2400.00</span>
                            </div>
                            <div className="mini-cart-buttons">
                              <a
                                href="/cart"
                                className="btn btn-primary btn-hover-secondary"
                              >
                                View Cart
                              </a>
                              <a
                                href="/checkout"
                                className="btn btn-primary btn-hover-secondary"
                              >
                                Checkout
                              </a>
                            </div>
                          </div>
                          {/* Header Mini Cart Footer End */}
                        </div>
                      </div>
                      {/* Header Mini Cart End */}
                    </div>
                    {/* Header Cart End */}
                    {/* Header Login Start */}
                    <div className="header-login"></div>
                    {/* Header Login End */}
                    {/* Header Search Start */}
                    {/* <div className="header-search">
                        <button className="header-search-toggle"><i className="far fa-search" /></button>
                        <div className="header-search-form">
                          <form action="#">
                            <input type="text" placeholder="Search..." />
                            <button><i className="fas fa-search" /></button>
                          </form>
                        </div>
                      </div> */}

                    <div className="admin-detail-div">
                      <span>
                        <a href="/register">
                          <i className="far fa-user-circle" /> 	&nbsp;
                        </a>
                      </span>

                      <span> 	&nbsp;
                        <a href="#">
                          <span
                            style={{
                              color: "green",
                              textTransform: "capitalize",
                            }}
                            className="menu-text"
                          >
                            Hi,{currentUser.name}
                          </span>
                        </a>
                      </span>

                      <span> 	&nbsp;
                        <a
                          href="#"
                          style={{ marginLeft: "10px", color: "red" }}
                          onClick={() => logoutUser()}
                        >
                          <span className="menu-text">Logout</span>
                        </a>
                      </span>
                    </div>
                    {/* Header Search End */}
                    {/* Header Mobile Menu Toggle Start */}
                    <div className="header-mobile-menu-toggle d-xl-none ml-sm-2">
                      <button className="toggle">
                        <i className="icon-top" />
                        <i className="icon-middle" />
                        <i className="icon-bottom" />
                      </button>
                    </div>
                    {/* Header Mobile Menu Toggle End */}
                  </div>
                </div>
              </div>
              {/* Header Right End */}
            </div>
          </div>
        </div>
      </div>
      {/* Header Section End */}
    </div>
  );
}
