import desktopLogo from "@/assets/img/hero/thuxinhdep.jpg"
import { AiFillTikTok } from "react-icons/ai"
import { FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { FaSquareGithub } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io5"

interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
}
export default function LeftPart(props: IProps) {
    return (
        <div className={props.hideLeftPart === true ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
            <div className="leftpart_inner">
                <div className="logo_wrap">
                    <a href="#"><img src={desktopLogo} style={{ borderRadius: "50%", width: "60%", height: "60%", border: "3px solid grey" }} alt="desktop-logo" /></a>
                </div>
                <div className="menu_list_wrap">
                    <ul className="anchor_nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="leftpart_bottom">
                    <div className="social_wrap">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/ngchihuong.dzai" target="_blank">
                                    <FaFacebook />
                                </a>
                            </li>
                            <li><a href="https://www.tiktok.com/" target="_blank"><AiFillTikTok /></a></li>
                            <li><a href="https://www.linkedin.com/in/nguy%E1%BB%85n-ch%C3%AD-h%C6%B0%E1%BB%9Bng-b10943310/" target="_blank"><IoLogoLinkedin /></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><FaInstagramSquare /></a></li>
                            <li><a href="https://github.com/ngchihuong/Udemy_Portfolio_Typescript" target="_blank"><FaSquareGithub /></a></li>
                        </ul>
                    </div>
                </div>
                <a className={props.hideLeftPart === true ? "arlo_tm_resize opened" : "arlo_tm_resize"} href="#"
                    onClick={() => props.setHideLeftPart(!props.hideLeftPart)}
                ><i className={props.hideLeftPart === true ? "xcon-angle-left opened" : "xcon-angle-left"}></i></a>
            </div>
        </div>
    )
}