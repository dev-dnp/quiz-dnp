import { Link } from "react-router-dom";
import style from "../../styles/login.module.css";
import {useForm} from "react-hook-form";

type FormData = {
    email: string
}

const Login = () => {

    const { register, handleSubmit, formState:{errors}} = useForm<FormData>();

    const onSubmitForm = (data:FormData) => {
        console.log(data);
    }

    return (
        <>
            <div className={style.formWrap}>

                <form onSubmit={handleSubmit(onSubmitForm)} className={style.formBox}>

                    <div className={style.divLogoPage}>
                        <img src="/icon/quizLogo.svg" alt="" />
                    </div>

                    <div className={style.boxInput}>
                        <label htmlFor="email">Informe-nos seu email</label>
                        <input type="text" id="email" placeholder="Seu email"
                        {...register("email", {required: true})}
                        />
                    </div>
                    
                    <button type="submit" className={style.buttonSubmit}>Receber código</button>

                    <div className={style.loginMoreInfo}>
                        <Link to="/signup">Criar conta</Link>
                        <Link to="/login" className={style.linkRegisterAccount}>Login</Link>
                    </div>
                </form>
            
            </div>        
        </>
   );
}

export default Login;