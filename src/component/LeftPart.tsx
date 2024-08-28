import desktopLogo from "@/assets/img/hero/thuxinhdep.jpg"
import { useEffect, useState } from "react"
import { AiFillTikTok } from "react-icons/ai"
import { FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { FaSquareGithub } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io5"
import { isMobile } from "react-device-detect"

interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
}
export default function LeftPart(props: IProps) {
    const [activeTab, setActiveTab] = useState<string>("home")

    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
            const tab = hash.replace("#", "");
            setActiveTab(tab)
            const section = document.querySelector(`${hash}`)
            if (section) {
                section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }, [])
    const handleClickTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        setActiveTab(tab)
        const section = document.querySelector(`#${tab}`)
        if (section) {
            section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setTimeout(() => {
                window.location.hash = tab;
            }, 1000);
        }
    }

    return (
        <div className={props.hideLeftPart === true ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
            <div className="leftpart_inner">
                <div className="logo_wrap">
                    <a href="#"><img src={desktopLogo} style={{ borderRadius: "50%", width: "60%", height: "60%", border: "3px solid grey" }} alt="desktop-logo" /></a>
                </div>
                <div className="menu_list_wrap">
                    <ul className="anchor_nav">
                        <li>
                            <a href="#home"
                                className={activeTab === "home" ? "active" : ""}
                                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab("home", event)}
                            >Home</a>
                        </li>
                        <li>
                            <a href="#about"
                                className={activeTab === "about" ? "active" : ""}
                                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab("about", event)}
                            >About</a>
                        </li>
                        <li>
                            <a href="#skills"
                                className={activeTab === "skills" ? "active" : ""}
                                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab("skills", event)}
                            >Skills</a>
                        </li>
                        <li>
                            <a href="#projects"
                                className={activeTab === "projects" ? "active" : ""}
                                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab("projects", event)}
                            >Projects</a>
                        </li>
                        <li>
                            <a href="#contact"
                                className={activeTab === "contact" ? "active" : ""}
                                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab("contact", event)}
                            >Contact</a>
                        </li>
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
                {!isMobile &&
                    <a className={props.hideLeftPart === true ? "arlo_tm_resize opened" : "arlo_tm_resize"} href="#"
                        onClick={(event) => {
                            event.preventDefault()
                            props.setHideLeftPart(!props.hideLeftPart)
                        }}
                    >
                        <i className={props.hideLeftPart === true ? "xcon-angle-left opened" : "xcon-angle-left"}></i></a>
                }

            </div>
        </div>
    )
}