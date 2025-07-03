import clsx from "clsx"
import { HouseIcon, Gamepad2, ChartColumnStacked, Trophy, ChartNoAxesCombined, Bookmark, Wrench, MessagesSquare, Info } from "lucide-react"
import { useLocation, Link } from "react-router-dom"
import style1 from "../../../styles/layoutDashboard.module.css"

const NavBar = () => {

    const location = useLocation();
    const currentPath = location.pathname.split("/").at(-1);

    return (
    <aside className={style1.dashAside}>
        <nav className={style1.dashMenu}>
            <ul>
                <li>
                    <Link to={""} className={clsx(currentPath == "dashboard" && style1.active)}>
                        <HouseIcon />
                        Início
                    </Link>
                </li>

                <li>
                    <Link to={"start-game"} className={clsx(currentPath == "start-game" && style1.active)}>
                        <Gamepad2 />
                        Começar o quiz
                    </Link>
                </li>

                <li>
                    <Link to={"categories"} className={clsx(currentPath == "categories" && style1.active)}>
                        <ChartColumnStacked />
                        Categorias
                    </Link>
                </li>

                <li>
                    <Link to={"ranking"} className={clsx(currentPath == "ranking" && style1.active)}>
                        <Trophy />
                        Ranking 
                    </Link>
                </li>

                <li>
                    <Link to={"my-results"} className={clsx(currentPath == "my-results" && style1.active)}>
                        <ChartNoAxesCombined />
                        Meus Resultados
                    </Link>
                </li>

                <li>
                    <Link to={"favorites"} className={clsx(currentPath == "favorites" && style1.active)}>
                        <Bookmark />
                        Favoritos   
                    </Link>
                </li>

                <li>
                    <Link to={"support"} className={clsx(currentPath == "support" && style1.active)}>
                        <Wrench />
                        Suporte 
                    </Link>
                </li>

                <li>
                    <Link to={"feedback"} className={clsx(currentPath == "feedback" && style1.active)}>
                        <MessagesSquare />
                        Feedback  
                    </Link>
                </li>

                <li>
                    <Link to={"about"} className={clsx(currentPath == "about" && style1.active)}>
                        <Info />
                        Sobre 
                    </Link>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default NavBar;
