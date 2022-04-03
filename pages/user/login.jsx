import Link from "next/link";
import axios from 'axios';
import TitleForm from "components/theme/form";
const login = () => {
    return (
        <>
            <form className="ui w-[300px] p-4 m-auto">
                <TitleForm data='تسجيل الدخول' />
                <div className="py-2">
                    <p className="text-xs  px-2">الايميل  او رقم الهاتف او اسم المستخدم</p>
                    <input type="text" name="email" className="w-full" />
                </div>
                <div className="py-2">
                    <p className="text-xs	 px-2">كلمة السر</p>
                    <input type="password" name="password" className="w-full" />
                </div>
                <Link href="/user/repassword">
                    <a className="text-xs py-2 w-[-webkit-fill-available] box justify-end">نسيت كلمة السر ؟</a>
                </Link>
                <button onClick={send} className='ui' type='button'>تسجيل الدخول</button>
                <div className="box row">
                    <p className="text-xs	px-1"> اذ لم يكن لديك حساب بامكانك </p>
                    <Link href="/user/signup">
                        <a className="text-xs text-ui-1	"> تسجيل حساب جديد </a>
                    </Link>
                </div>
            </form>
        </>
    );
};

export default login;

async function send() {
    let Data = {
        email: document.forms[0].elements.email.value,
        password: document.forms[0].elements.password.value,
    }
    // let { data } = axios.post('/api/user/login', Data);
    // console.log(data);
    return //fetch('/api/user/login', data)
}