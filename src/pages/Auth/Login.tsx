import { Link } from "react-router-dom";
import style from "../../styles/login.module.css";
import { useForm } from "react-hook-form";

type FormData = {
    email: string,
    password: string
}

const Login = () => {
    
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const formOnSubmit = (data: FormData) => {
        // 🔴 Tratamento dos dados recebidos
    }

    return (
        <>
            <div className={style.formWrap}>

                <form onSubmit={handleSubmit(formOnSubmit)} className={style.formBox}>

                    <div className={style.divLogoPage}>
                        <img src="/icon/quizLogo.svg" alt="" />
                    </div>

                    <div className={style.boxInput}>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Seu email"
                        {...register("email", {required: true})}
                        />
                    </div>

                    <div className={style.boxInput}>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" placeholder="Sua senha"
                        {...register("password", {required: true})}
                        />
                    </div>

                    <button className={style.buttonSubmit} type="submit">Entrar</button>

                    <div className={style.loginMoreInfo}>
                        <Link to="/forgot-password">Esqueceu sua senha?</Link>
                        <Link to="/signup" className={style.linkRegisterAccount}>Criar conta</Link>
                    </div>
                </form>
            
            </div>        
        </>
   );
}

export default Login;