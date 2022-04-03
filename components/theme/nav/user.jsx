import Link from "next/link";
import { IconUser } from "components/icons";

const UserBoxNav = () => {
    const dark = () => {
        document.body.classList.toggle("dark");
        let context = document.querySelector("#darkMode")
        if (document.querySelector('body.dark')) context.textContent = "الوضع النهاري";
        else context.textContent = "الوضع الليلي"

    };
    return (
        <div>
            <div className="box p-4" onClick={openCard}>
                <IconUser />
            </div>
            <div id="user" className="box col center pup none inset-x-0 w-[300px] ui min-h-[-webkit-fill-available] " >
                <b className="p-4">المستخدم</b>
                <Link href={"/user/signup"} >
                    <a className="border-ui-1 border-2 p-2 rounded-xl mt-4 m-4" onClick={openCard} > تسجيل </a>
                </Link>
                <Link href={"/user/login"} >
                    <a className="border-ui-1 border-2 p-2 rounded-xl mt-4 m-4 " onClick={openCard}>تسجيل الدخول</a>
                </Link>
                <Link href='/user/join' >
                    <a className="border-ui-1 border-2 p-2 rounded-xl mt-4 m-4 	" onClick={openCard}>الانضمام كمصدر</a>
                </Link>
                <div className="border-ui-1 border-2 p-2 rounded-xl mt-4 m-4 	" id="darkMode" onClick={dark}>الوضع الليلي</div>
            </div>
        </div >
    );
};

function openCard() {
    let menu = document.querySelector("nav #user.none");
    if (menu) menu.classList.remove("none");
    else document.querySelector("nav #user").classList.add("none");
}
export default UserBoxNav;
