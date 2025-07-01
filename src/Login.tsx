import style from "./styles/login.module.css";

const Login = () => {
    return (
        <>
            <div className={style.formWrap}>

                <form action="" className={style.formBox}>
                    <div className={style.boxInput}>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Seu email"/>
                    </div>

                    <div className={style.boxInput}>
                        <label htmlFor="">Senha</label>
                        <input type="text" placeholder="Sua senha"/>
                    </div>

                    <button className={style.buttonSubmit}> Acessar</button>

                    <div className={style.loginMoreInfo}>
                        <a href="">Esqueceu sua senha?</a>
                        <a href="" className={style.linkRegisterAccount}>Criar conta</a>
                    </div>
                </form>
            
            </div>        
        </>
   );
}

export default Login;