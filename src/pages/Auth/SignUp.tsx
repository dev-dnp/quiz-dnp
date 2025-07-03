import style from "../../styles/login.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormData = {
    name: string,
    email: string,
    password: string
}

const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmitForm = (data: FormData) => {
        console.log(errors.password);
    }

    return (
        <>
            <div className={style.formWrap}>

                <form onSubmit={handleSubmit(onSubmitForm)} className={style.formBox}>

                    <div className={style.divLogoPage}>
                        <img src="/icon/quizLogo.svg" alt="" />
                    </div>

                    <div className={style.boxInput}>
                        <label htmlFor="fullName">Nome Completo</label>
                        <input id="fullName" type="text" placeholder="Seu nome completo"
                        {...register("name", {required: true})}
                        />
                        
                    </div>

                    <div className={style.boxInput}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" placeholder="Seu email"
                        {...register("email", {required: true})}
                        />
                    </div>

                    <div className={style.boxInput}>
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" placeholder="Sua senha"
                        {...register("password", {required: true, minLength: 6})}
                        />

                        {errors.password && <span className={style.inputMessageError}>Preencha corretamente todos campos</span>}
                    </div>

                    <button className={style.buttonSubmit} type="submit">Criar conta</button>

                    <div className={style.loginMoreInfo} style={{justifyContent: "center"}}>
                        <Link to="/login">Já tem uma conta? <span className={style.linkRegisterAccount}>Entrar</span> </Link>
                    </div>
                </form>
            
            </div>        
        </>
   );
}

export default Login;