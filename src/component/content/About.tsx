import imageAbout from "@/assets/img/about/sunflower.jpg";
import myCV from "@/assets/Nguyen-Chi-Huong-CV_ung_tuyen.pdf";
import { TypeAnimation } from 'react-type-animation';

export default function About() {
    return (
        <>
            <div className="arlo_tm_section relative" id="about">
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Thông tin về tôi</h3>
                            <span>Các thông tin chính về tôi</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div className="about_image_wrap parallax" data-relative-input="true">
                                        <div className="image layer" data-depth="0.1">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner" data-img-url={imageAbout}></div>
                                        </div>
                                        <div className="border layer" data-depth="0.2">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>Tôi là Nguyễn Chí Hướng và &nbsp;
                                            <TypeAnimation
                                                sequence={[
                                                    // Same substring at the start will only be typed out once, initially
                                                    'Freelancer',
                                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                                                    'Web Developer',
                                                    2000,
                                                ]}
                                                wrapper="span"
                                                speed={40}
                                                cursor={true}
                                                // style={{ fontSize: '2em', display: 'inline-block' }}
                                                repeat={Infinity}
                                                style={{ color: "#E3872D" }}
                                            />
                                        </h4>
                                    </div>
                                    <div className="definition">
                                        <p>Xin chào! Tôi là <strong>Nguyễn Chí Hướng</strong>.Tôi là một Fullstack Developer, tôi rất có đam mê và nỗ lực trong công việc lập trình.
                                            Tôi có khả năng làm các dự án cá nhân hoàn chỉnh. </p>
                                        <br />
                                        <p>Tôi đã có khoảng thời gian học tập vào được sử dụng các công nghệ để xây dựng các hệ thống và
                                            có khoảng thời gian kinh nghiệm thực tập ở vị trí Web Developer.
                                        </p>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span><label>Ngày sinh:</label> 23.02.2004</span>
                                            </li>
                                            <li>
                                                <span><label>Giới tính:</label> Nam</span>
                                            </li>
                                            <li>
                                                <span><label>Thành phố:</label> Hà Nội, Việt Nam</span>
                                            </li>

                                            <li>
                                                <span><label>Học vấn:</label> Học viện VTC Academy</span>
                                            </li>
                                            <li>
                                                <span><label>Cấp bậc:</label> Sinh viên</span>
                                            </li>
                                            <li>
                                                <span><label>Website:</label> <a href="#">www.mywebsite.com</a></span>
                                            </li>
                                            <li>
                                                <span><label>Mail:</label> <a href="nguyenchihuong232@gmail.com">nguyenchihuong232&#64;gmail.com</a></span>
                                            </li>
                                            <li>
                                                <span><label>Facebook:</label> <a href="#">Nguyễn Hướng</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={myCV} download><span>Tải CV</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}