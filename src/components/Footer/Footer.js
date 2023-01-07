import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className = "footer py-5 bg-dark">
        <div className = "container">
            <div className = "footer-content text-white grid">
                <div className = "footer-item text-center">
                    <h6 className = "fs-17 fw-6">Links</h6>
                    <ul>
                        <li><a href = "/aboutus" className = "fs-15">Về chúng tôi</a></li>
                        <li><a href = "/contact" className = "fs-15">Thông tin iên hệ</a></li>
                        <li><a href = "/blog" className = "fs-15">Bài viết nổi bật</a></li>
                        <li><a href = "/faq" className = "fs-15">Câu hỏi thường gặp</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Policies</h6>
                    <ul>
                        <li><a href = "/terms" className = "fs-15">Terms & Conditions</a></li>
                        <li><a href = "/cookies" className = "fs-15">Cookies Policy</a></li>
                        <li><a href = "/policy" className = "fs-15">Data Policy</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Shopping FakeAPI</h6>
                    <ul>
                        <li><a href = "/terms" className = "fs-15">Các sản phẩm</a></li>
                        <li><a href = "/cookies" className = "fs-15">Dịch vụ bảo hành</a></li>
                        <li><a href = "/policy" className = "fs-15">Dịch vụ vận chuyển</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Liên hệ</h6>
                    <ul>
                        <li>
                            <span><i className = "fas fa-phone"></i></span>
                            <span className = "fs-15">+84 961145000</span>
                        </li>
                        <li>
                            <span><i className = "fas fa-envelope"></i></span>
                            <span className = "fs-15">vanphucit@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer