import clsx from "clsx"
import { HouseIcon, Gamepad2, ChartColumnStacked, Trophy, ChartNoAxesCombined, Bookmark, Wrench, MessagesSquare, Info, LogOut } from "lucide-react"
import { useLocation, Link } from "react-router-dom"
import style1 from "../../../styles/layoutDashboard.module.css"

type NavBarProps = {
  dataState: {
    menuIsOpen: boolean;
    setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  menuMobile: {
    menuMobile: boolean;
    setMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const NavBar = ({dataState}: NavBarProps) => {

    const location = useLocation().pathname.split("/");
    const currentPath = String(location.at(-1)).length > 0 ? location.at(-1) : location[location.length-2];

    console.log(currentPath)

    return (
    <aside className={clsx(style1.dashAside, dataState.menuIsOpen && style1.menuMobileActive)}>
        <nav className={clsx(style1.dashMenu, dataState.menuIsOpen && style1.exitMenu)}>
            <ul>
                
                <li>
                    <Link to={""} className={clsx(currentPath == "dashboard" && style1.active)} onClick={()=> ""}>
                        <HouseIcon />
                        <span>Início</span>
                    </Link>
                </li>

                <li>
                    <Link to={"start-game"} className={clsx(currentPath == "start-game" && style1.active)} onClick={()=> ""}>
                        <Gamepad2 />
                        <span>Começar o quiz</span>
                    </Link>
                </li>

                <li>
                    <Link to={"categories"} className={clsx(currentPath == "categories" && style1.active)} onClick={()=> ""}>
                        <ChartColumnStacked />
                        <span>Categorias</span>
                    </Link>
                </li>

                <li>
                    <Link to={"ranking"} className={clsx(currentPath == "ranking" && style1.active)} onClick={()=> ""}>
                        <Trophy />
                        <span>Ranking</span> 
                    </Link>
                </li>

                <li>
                    <Link to={"my-results"} className={clsx(currentPath == "my-results" && style1.active)} onClick={()=> ""}>
                        <ChartNoAxesCombined />
                        <span>Meus Resultados</span>
                    </Link>
                </li>

                <li>
                    <Link to={"favorites"} className={clsx(currentPath == "favorites" && style1.active)} onClick={()=> ""}>
                        <Bookmark />
                        <span>Favoritos</span>   
                    </Link>
                </li>

                <li>
                    <Link to={"support"} className={clsx(currentPath == "support" && style1.active)} onClick={()=> ""}>
                        <Wrench />
                        <span>Suporte</span> 
                    </Link>
                </li>

                <li>
                    <Link to={"feedback"} className={clsx(currentPath == "feedback" && style1.active)} onClick={()=> ""}>
                        <MessagesSquare />
                        <span>Feedback</span>  
                    </Link>
                </li>

                <li>
                    <Link to={"about"} className={clsx(currentPath == "about" && style1.active)} onClick={()=> ""}>
                        <Info />
                        <span>Sobre</span> 
                    </Link>
                </li>

                <li>
                    <a href={"/login"}>
                        <LogOut />
                        <span>Sair</span> 
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default NavBar;
