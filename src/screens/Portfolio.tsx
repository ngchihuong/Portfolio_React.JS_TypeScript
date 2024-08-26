import { FloatButton } from "antd";
import LeftPart from "../component/LeftPart";
import MobileMenu from "../component/mobile/Menu";
import PreLoader from "../component/Preloader";
import RightPart from "../component/RightPart";
import { useState } from "react";

export default function Portfolio() {
    const [hideLeftPart, setHideLeftPart] = useState<boolean>(false);
    return (
        <div className="arlo_tm_wrapper_all">

            <div id="arlo_tm_popup_blog">
                <div className="container">
                    <div className="inner_popup scrollable"></div>
                </div>
                <span className="close"><a href="#"></a></span>
            </div>
            {/*  <!-- PRELOADER -->*/}
            <PreLoader />
            {/*  <!-- /PRELOADER -->*/}

            {/*  <!-- MOBILE MENU -->*/}
            <MobileMenu />
            {/*  <!-- /MOBILE MENU -->*/}

            {/*  <!-- CONTENT -->*/}
            <div className="arlo_tm_content">

                {/*  <!-- LEFTPART -->*/}
                <LeftPart 
                hideLeftPart={hideLeftPart}
                setHideLeftPart={setHideLeftPart}
                />
                {/*  <!-- /LEFTPART -->*/}

                {/*  <!-- RIGHTPART -->*/}
                <RightPart 
                hideLeftPart={hideLeftPart}
                setHideLeftPart={setHideLeftPart}
                />
                {/*  <!-- /RIGHTPART -->*/}

                {/* <a className="arlo_tm_totop" href="#"></a> */}
                <FloatButton.BackTop
                    tooltip={<div>Trở về đầu trang</div>}
                />
            </div>
        </div>
    )
}