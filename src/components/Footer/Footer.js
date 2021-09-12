import React from 'react'

export default function Footer() {
    return (
        <div>
            
            <div>
        <div className="footer-section section" data-bg-color="#171621" style={{
          backgroundColor : '#171621'
        }}>
          <div className="container" style={{ width : '90%' }}>
            {/* Footer Top Widgets Start */}
            <div className="row">
              {/* Footer Widget Start */}
              <div className="col-xl-6 col-md-5 col-12 max-mb-50">
                <div className="footer-widget light-color">
                  <h4 className="footer-widget-title">Address</h4>
                  <div className="footer-widget-content">
                    <div className="content">
                      <p>Butta House, 2nd Floor, 4 - 14 KPHB Road, Madhapur, Hyderabad</p>
                      <p>+91 888 666 7070 (9am - 5pm IST, Monday - Saturday) </p>
                      <p><a href="#">sales@ekluvyatuitions.com</a></p>
                    </div>
                    <div className="footer-social-inline">
                      <a href="#"><i className="fab fa-facebook-square" /></a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
                      <a href="#"><i className="fab fa-linkedin" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Widget End */}
              {/* Footer Widget Start */}
              <div className="col-xl-3 col-md-4 col-sm-7 col-12 max-mb-50">
                <div className="footer-widget light-color">
                  <h4 className="footer-widget-title">Explore</h4>
                  <div className="footer-widget-content">
                    <ul className="column-2">
                    
                    <li><a href="#">Blog</a></li>
                      <li><a href="/courselist">Courses</a></li>
                      <li><a href="http://ekluvya.guru/about.html">About us</a></li>
                     
                      <li><a href="#">Tuitions</a></li>
                      <li><a href="http://ekluvya.guru/contact-us.html">Contact us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Footer Widget End */}
              {/* Footer Widget Start */}
              <div className="col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50">
                <div className="footer-widget light-color">
                  <h4 className="footer-widget-title">Information</h4>
                  <div className="footer-widget-content">
                    <ul>
                    
                    
                      <li><a href="http://ekluvya.guru/privacy-policy.html">Privacy policy</a></li>
                      <li><a href="http://ekluvya.guru/terms-of-services.html">Terms of service</a></li>
                      <li><a href="http://ekluvya.guru/disclaimer.html">Disclaimer</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Footer Widget End */}
            </div>
            {/* Footer Top Widgets End */}
            {/* Footer Copyright Start */}
            <div className="row max-mt-20">
              <div className="col">
                <p className="copyright">© 2020 Ekluvya Tuitions. <a href>All Rights Reserved</a></p>
              </div>
            </div>
            {/* Footer Copyright End */}
          </div>
        </div>
        {/* Newsletter Popup Start */}
        <div id="max-popup" className="max-popup-section section hides">
          <div className="max-popup-dialog animated fadeInUp">
            <button className="max-popup-close"><i className="fal fa-times" /></button>
            <div className="max-popup-dialog-inner">
              <div className="row">
                <div className="col-md-5 col-12 d-none d-md-block">
                  <div className="freecourse-popup-image">
                    <img src="assets/images/others/popup-free-course.png" alt="" />
                  </div>
                </div>
                <div className="col-md-7 col-12 align-self-center">
                  <div className="freecourse-popup-content">
                    <h6 className="sub-title">Get Our Course free</h6>
                    <h2 className="title">Awesome for Website</h2>
                    <div className="freecourse-download-form">
                      <form action="#">
                        <div className="row max-mb-n20">
                          <div className="col-12 max-mb-20">
                            <input type="email" placeholder="Your E-mail" />
                          </div>
                          <div className="col-12 max-mb-20">
                            <button className="btn btn-primary btn-hover-secondary w-100">Download
                              now</button>
                          </div>
                          <div className="col-12 max-mb-20">
                            <small className="form-text text-center"><i className="fal fa-lock-alt mr-2" /> Your infomation will never be
                              shared with any third party</small>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter Popup End */}
        {/* Scroll Top Start */}
        <a href="#" className="scroll-top" id="scroll-top">
          <i className="arrow-top fal fa-long-arrow-up" />
          <i className="arrow-bottom fal fa-long-arrow-up" />
        </a>
        {/* Scroll Top End */}
      </div>

      
        </div>
    )
}
