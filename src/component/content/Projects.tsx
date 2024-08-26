import { Button, Modal } from 'antd';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { IoLogoReact } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";

export interface IProjects {
    image: JSX.Element;
    title: string
    description: string;
    detail: {
        description: string
        frontend: string
        backend: string
        member: string
        role: string
        demo: string
        github: string
    }
}
export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState<IProjects | null>(null)
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setDataDetail(null);
    };
    const dataProjects: IProjects[] = [
        {
            image: <IoLogoReact
                size={50}
                color='#2bebfd'
            />,
            title: 'Website Clone Tiki',
            description: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: "(Self-learning) Xây dựng trang web đặt lịch khám bệnh, clone website bookingcare.vn", //mieu ta du an lam gi
                frontend: "React(TypeScript), Redux Toolkit, Antd Design",
                backend: "Node.JS(Express), MongoDB",
                member: "1", //thanh vien
                role: "Developer", //vai tro trong du an
                demo: "hhhhhh.com",//link video, link deploy
                github: "hhhgithub.com" //link github
            }
        },
        {
            image: <FaSquareXTwitter
                size={50}
                color='#333'
            />,
            title: 'Website Clone Tiki',
            description: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: "(Self-learning) Xây dựng trang web đặt lịch khám bệnh, clone website bookingcare.vn", //mieu ta du an lam gi
                frontend: "React(TypeScript), Redux Toolkit, Antd Design",
                backend: "Node.JS(Express), MongoDB",
                member: "1", //thanh vien
                role: "Developer", //vai tro trong du an
                demo: "hhhhhh.com",//link video, link deploy
                github: "hhhgithub.com" //link github
            }
        },
        {
            image: <FaNewspaper
                size={50}
                color='#333'
            />,
            title: 'Website Clone Tiki',
            description: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: "(Self-learning) Xây dựng trang web đặt lịch khám bệnh, clone website bookingcare.vn", //mieu ta du an lam gi
                frontend: "React(TypeScript), Redux Toolkit, Antd Design",
                backend: "Node.JS(Express), MongoDB",
                member: "1", //thanh vien
                role: "Developer", //vai tro trong du an
                demo: "hhhhhh.com",//link video, link deploy
                github: "hhhgithub.com" //link github
            }
        },
    ]
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title={dataDetail && dataDetail.title ? ` Dự án ${dataDetail.title}` : ""}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                // footer={null}
                maskClosable={false}
            >
                {dataDetail ?
                    <>
                        <ul>
                            <li>Miêu tả: {dataDetail.image} {dataDetail.detail.description}</li>
                            <li>Frontend: {dataDetail.detail.frontend}</li>
                            <li>Backend: {dataDetail.detail.backend}</li>
                            <li>Số lượng thành viên dự án: {dataDetail.detail.member}</li>
                            <li>Vai trò: {dataDetail.detail.role}</li>
                            <li>
                                I
                                Demo:
                                <a href={dataDetail.detail.demo} target='_blank'>
                                    {dataDetail.detail.demo}
                                </a>
                            </li>
                            <li>
                                Github:
                                <a href={dataDetail.detail.github} target='_blank'>
                                    {dataDetail.detail.github}
                                </a>
                            </li>
                        </ul>
                    </>
                    :
                    <>Not data</>
                }
            </Modal>
            <div className="arlo_tm_section" id="projects">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Dự án nổi bật</h3>
                            <span>Các dự án đã hoàn thiện</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects.map((item, index) => {
                                    return (
                                        <>
                                            <li key={`${index}-projects`}>
                                                <div
                                                    className="inner" title='Xem chi tiết'
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => {
                                                        setDataDetail(item)
                                                        setIsModalOpen(true)
                                                    }}
                                                >
                                                    <div className="icon">
                                                        {item.image}
                                                    </div>
                                                    <div className="title_service">
                                                        <h3>{item.title}</h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <div className="view_detail" style={{ padding: "5px 0" }}>
                                                        <span style={{ cursor: "pointer" }}>
                                                            <BsArrowRight />
                                                            &nbsp;
                                                            Xem Chi Tiết
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}