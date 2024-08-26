import About from "./content/About";
import Contact from "./content/Contact";
import HomeCV from "./content/HomeCV";
import Projects from "./content/Projects";
import Skills from "./content/Skills";

interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
}
export default function RightPart(props: IProps) {
    return (
        <div className={props.hideLeftPart === true ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"}>
            <div className="rightpart_inner">
                <HomeCV />

                {/*  <!-- ABOUT -->*/}
                <About />
                {/*  <!-- /ABOUT -->*/}

                {/*  <!-- SKILLS -->*/}
                <Skills />
                {/*  <!-- /SKILLS -->*/}

                {/*  <!-- SERVICES -->*/}
                <Projects />
                {/*  <!-- /SERVICES -->*/}

                {/*  <!-- CONTACT & FOOTER -->*/}
                <Contact />
                {/*  <!-- /CONTACT & FOOTER -->*/}

            </div>
        </div>
    )
}