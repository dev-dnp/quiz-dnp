import { Outlet } from "react-router-dom";
import style1 from "../../styles/layoutDashboard.module.css";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import {SVGLeftMenu, SVGRightMenu} from "./Components/SVGLeftMenu";


const Home = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div className={style1.dashWrap}>
            <header className={style1.dashHeader}>
                
                <div className={style1.menuLogo}>
                    <button className={style1.boxLogoMenu} onClick={()=> setMenuIsOpen(!menuIsOpen)}>
                        {menuIsOpen ? <SVGRightMenu/> : <SVGLeftMenu />}
                    </button>

                    <div className={style1.boxLogoHeader}>
                        <img src="/icon/quizLogo2.png" />
                    </div>
                </div>

                <div className={style1.profileName}>
                    <span>Olá, Domingos</span>

                    <div className={style1.boxPhotoProfile}>
                        <img src="/dnpPhoto.webp" alt="Photo Profile" />
                    </div>
                </div>
            </header>

            <main className={style1.dashMain}>

                <NavBar isOpen = {menuIsOpen} />

                <div className={style1.centralDiv}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}


export default Home;