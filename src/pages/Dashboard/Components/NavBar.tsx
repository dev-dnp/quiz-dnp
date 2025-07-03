import clsx from "clsx"
import { HouseIcon, Gamepad2, ChartColumnStacked, Trophy, ChartNoAxesCombined, Bookmark, Wrench, MessagesSquare, Info, LogOut } from "lucide-react"
import { useLocation, Link } from "react-router-dom"
import style1 from "../../../styles/layoutDashboard.module.css"

type BoolMenu = {
    isOpen: boolean
}
const NavBar = ({isOpen}:BoolMenu) => {

    const location = useLocation().pathname.split("/");
    const currentPath = String(location.at(-1)).length > 0 ? location.at(-1) : location[location.length-2];

    console.log(currentPath)

    return (
    <aside className={style1.dashAside}>
        <nav className={clsx(style1.dashMenu, isOpen && style1.exitMenu)}>
            <ul>
                
                <li>
                    <Link to={""} className={clsx(currentPath == "dashboard" && style1.active)}>
                        <HouseIcon />
                        <span>Início</span>
                    </Link>
                </li>

                <li>
                    <Link to={"start-game"} className={clsx(currentPath == "start-game" && style1.active)}>
                        <Gamepad2 />
                        <span>Começar o quiz</span>
                    </Link>
                </li>

                <li>
                    <Link to={"categories"} className={clsx(currentPath == "categories" && style1.active)}>
                        <ChartColumnStacked />
                        <span>Categorias</span>
                    </Link>
                </li>

                <li>
                    <Link to={"ranking"} className={clsx(currentPath == "ranking" && style1.active)}>
                        <Trophy />
                        <span>Ranking</span> 
                    </Link>
                </li>

                <li>
                    <Link to={"my-results"} className={clsx(currentPath == "my-results" && style1.active)}>
                        <ChartNoAxesCombined />
                        <span>Meus Resultados</span>
                    </Link>
                </li>

                <li>
                    <Link to={"favorites"} className={clsx(currentPath == "favorites" && style1.active)}>
                        <Bookmark />
                        <span>Favoritos</span>   
                    </Link>
                </li>

                <li>
                    <Link to={"support"} className={clsx(currentPath == "support" && style1.active)}>
                        <Wrench />
                        <span>Suporte</span> 
                    </Link>
                </li>

                <li>
                    <Link to={"feedback"} className={clsx(currentPath == "feedback" && style1.active)}>
                        <MessagesSquare />
                        <span>Feedback</span>  
                    </Link>
                </li>

                <li>
                    <Link to={"about"} className={clsx(currentPath == "about" && style1.active)}>
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
