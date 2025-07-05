import { Flame, TrendingUp } from "lucide-react";
import style from "./style.module.css";

const Home = () => {
  return (
    <div>
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
        <div>
          <table className={style.tableBox} border={1}>
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
                <td>
                  <TrendingUp />
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
  )
}

export default Home;


