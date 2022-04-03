import TitleForm from "components/theme/form";
import Link from "next/link";

const Signup = () => {
    return (
        <>
            <form className="ui w-[300px] p-4 m-auto">
                <TitleForm data={'تسجيل'} />
                {/* name */}
                <div className="box row py-2">
                    <div >
                        <p className="text-xs px-2">الاسم</p>
                        <input type="text" name="frestname" className="w-[129px] my-2" />
                    </div>
                    <div className="mx-2">
                        <p className="text-xs px-2">الكنية</p>
                        <input type="text" name="lastname" className="w-[129px] my-2" />
                    </div>
                </div>
                {/* username */}
                <div className="py-2">
                    <p className="text-xs px-2 ">اسم المستخدم</p>
                    <input type="text" name="username" className="w-full " />
                </div>
                {/* country */}
                <div className="py-2">
                    <p className="text-xs px-2 ">البلد</p>
                    <select className="w-full  btn " id="country">
                        {country.map(a => {
                            return <option value={a.value} key={a.value}>{a.ar}</option>
                        })}
                    </select>
                </div>

                {/* email */}
                <div className="py-2">
                    <p className="text-xs px-2 ">الايميل</p>
                    <input type="email" name="email" className="w-full " />
                </div>
                <div className="py-2">
                    <p className="text-xs px-2	">كلمة السر</p>
                    <input type="password" name="password" className="w-full " />
                </div>
                <div className="py-2">
                    <p className="text-xs px-2	"> اعادة كلمة السر</p>
                    <input type="password" name="repassword" className="w-full " />
                </div>
                <div className="box">
                    <input type={'checkbox'} />
                    <p className="text-xs px-2	">الموافقة على </p>
                    <Link href={'/شروط-الاستخدام'}>
                        <a className="text-xs text-ui-1	">شروط الاستخدام</a>
                    </Link>
                </div>
                <button onClick={send} className='ui' type='button'>تسجيل  </button>
                <div className="box row">
                    <p className="text-xs	px-1"> اذ كان لديك حساب بامكانك </p>
                    <Link href="/user/login">
                        <a className="text-xs text-ui-1	"> تسجيل دخول</a>
                    </Link>
                </div>
                <div className="alert none text-red text-xs"> مشكلة </div>
            </form> 

        </>
    );
};

export default Signup;

function send() {
    let alert = document.querySelector('.alert')
    if (document.querySelector('[type="checkbox"]').checked) {
        let Data = {
            frestname: document.forms[0].elements.frestname.value,
            lastname: document.forms[0].elements.lastname.value,
            username: document.forms[0].elements.username.value,
            email: document.forms[0].elements.email.value,
            password: document.forms[0].elements.password.value,
            country: document.querySelector('#country').value,
        }
        console.log(Data);
        return
    } else {
        alert.classList.remove('none')
        alert.classList.add('err')
        alert.textContent = 'لم توافق على الشروط'
    }
}

let country = [
    { value: 'syria', ar: "سوريا ", en: 'syria', de: 'syria' },
    { value: 'lb', ar: "لبنان ", en: 'lb', de: 'lb' },
    { value: 'jrdon', ar: "الاردن ", en: 'jrdon', de: 'jrdon' },
    { value: 'turkua', ar: "تركيا ", en: 'turkua', de: 'turkua' },
]