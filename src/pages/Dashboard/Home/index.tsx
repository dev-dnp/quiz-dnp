import { Flame, TrendingDown, TrendingUp, Gamepad2 } from "lucide-react";
import style from "./style.module.css";
import clsx from "clsx";
import MyCalendarCustom from "../Components/MyCalendarCustom";

const Home = () => {
  return (
    <div className={style.toolWrap}>

      <div className={style.WrapHomeDash}>
        <div className={style.mainContentHome}>
          <div className={style.primarySeactionCard}>
              <div className={style.boxProfileHome}>
                <div className={style.profilePhoto}>
                    <img src="/dnpPhoto.webp" alt="Perfil" width={32}/>
                </div>

                <div className={style.nameEmailProfile}>
                  <h2 >Domingos Nkula Pedro</h2>
                  <span>domingosnkulajw@gmail.com</span>
                </div>
              </div>

              <div className={style.boxCard}>
                  <div className={style.boxIconCard}>
                      <Flame absoluteStrokeWidth />
                  </div>

                  <div className={style.cardDescription}>
                    <h2 className={style.titleDescription}>75862</h2>
                    <span>Pontos acumulados</span>
                  </div>
              </div>
          </div>

          {/* SECTION */}

          <div>
            <div className={style.divTable}>
              <table className={style.tableBox}>
                
                <thead>
                  <tr>
                  <th>ID</th>
                  <th>Pontuação</th>
                  <th>Data</th>
                  <th>Hora</th>
                </tr>
                </thead>
                
                <tbody>

                  <tr>
                    <td>125</td>
                    <td className={clsx(style.cellDouble)}>
                      <TrendingUp className={style.iconColorSuccess}/>
                      <span>1.250</span>
                    </td>
                    <td>
                      04.07.2025
                    </td>
                    <td>
                      06:14 am
                    </td>
                  </tr>

                  <tr>
                    <td>125</td>
                    <td className={clsx(style.cellDouble)}>
                      <TrendingUp className={style.iconColorWarnning}/>
                      <span>1.250</span>
                    </td>
                    <td>
                      04.07.2025
                    </td>
                    <td>
                      06:14 am
                    </td>
                  </tr>

                  <tr>
                    <td>125</td>
                    <td className={clsx(style.cellDouble)}>
                      <TrendingDown className={style.iconColorError}/>
                      <span>1.250</span>
                    </td>
                    <td>
                      04.07.2025
                    </td>
                    <td>
                      06:14 am
                    </td>
                  </tr>



                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={style.asideDashHome}>
          {/* Card desafio */}

          <div className={style.dailyChallenge}>
              <h4 className={style.titleBox}>Desafio do dia</h4>
              <div  className={style.dailyChallengeBox}>
                <a href="" className={style.link}>
                  <Gamepad2 />
                  <span>Jogar agora</span>
                </a>
              </div>
          </div>

          <div className={style.quickLinks}>
              <h4 className={style.titleBox}>Links rápidos</h4>

              <div className={style.quickLinksList}>
                <a href="#">Novos Quiz</a>
                <a href="#">Estátisticas</a>
                <a href="#">Quiz recomendados</a>
                <a href="#">Novidades</a>
              </div>
          </div>

          <div className={style.activityCalendar}>
              <h4 className={style.titleBox}>Calendário de atividade</h4>
              
              <div className={style.selfCalendar}>
                <MyCalendarCustom />
              </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Home;


