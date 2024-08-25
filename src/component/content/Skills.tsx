import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
    return (
        <>
            <div className="arlo_tm_section" id="skills">
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Kĩ năng Front-End</h4>
                                    <li>Cắt-ghép template Website Responsive</li>
                                    <li>Framework/Library: Bootstrap, Tailwind, React.JS</li>
                                </div>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                            <span>
                                                <span className="label">
                                                    HTML\CSS\JavaScript  {/* <span className="experience">5 years of experience</span> */}
                                                </span>
                                                <span className="number">90%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={90}
                                                    isLabelVisible={false}
                                                    height="8px"
                                                    bgColor="#333"
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                            <span>
                                                <span className="label">
                                                    React.JS (TypeScript)  {/* <span className="experience">5 years of experience</span> */}
                                                </span>
                                                <span className="number">90%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={90}
                                                    isLabelVisible={false}
                                                    height="8px"
                                                    bgColor="#333"
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                            <span>
                                                <span className="label">
                                                    Design UI/UX  {/* <span className="experience">5 years of experience</span> */}
                                                </span>
                                                <span className="number">90%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={90}
                                                    isLabelVisible={false}
                                                    height="8px"
                                                    bgColor="#333"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Kĩ năng Back-End</h4>
                                    <li>Ngôn ngữ lập trình: C#, PHP, JavaScript</li>
                                    <li>Viết Restful APIs</li>
                                    <li>Framework: Node.JS(Express), ASP.NET Core</li>
                                    <li>Database: MySQL, SQL Server, MongoDB</li>
                                </div>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                            <span>
                                                <span className="label">
                                                    Node.JS (Express)  {/* <span className="experience">5 years of experience</span> */}
                                                </span>
                                                <span className="number">90%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={90}
                                                    isLabelVisible={false}
                                                    height="8px"
                                                    bgColor="#333"
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                            <span>
                                                <span className="label">
                                                    ASP.NET Core  {/* <span className="experience">5 years of experience</span> */}
                                                </span>
                                                <span className="number">90%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={90}
                                                    isLabelVisible={false}
                                                    height="8px"
                                                    bgColor="#333"
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                            <span>
                                                <span className="label">
                                                    Database MySQL \ SQL Server \ MongoDB  {/* <span className="experience">5 years of experience</span> */}
                                                </span>
                                                <span className="number">90%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={90}
                                                    isLabelVisible={false}
                                                    height="8px"
                                                    bgColor="#333"
                                                />
                                            </div>
                                        </div>

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