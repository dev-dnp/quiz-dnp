import style from "./styles/signup.module.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className={style.formWrap}>

                <form action="" className={style.formBox}>

                    <div className={style.divLogoPage}>
                        <img src="/icon/quizLogo.svg" alt="" />
                    </div>

                    <div className={style.boxInput}>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Seu email"/>
                    </div>

                    <div className={style.boxInput}>
                        <label htmlFor="">Senha</label>
                        <input type="password" placeholder="Sua senha"/>
                    </div>

                    <button className={style.buttonSubmit}>Criar conta</button>

                    <div className={style.loginMoreInfo}>
                        <Link to="/login">Já tem uma conta? <span className={style.linkRegisterAccount}>Entrar</span> </Link>
                    </div>
                </form>
            
            </div>        
        </>
   );
}

export default Login;