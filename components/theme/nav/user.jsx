import Link from "next/link";
import { IconUser } from "components/icons";
import { IconDark, IconLight } from "../../icons";
import { useState } from "react";

const UserBoxNav = () => {
   

    return (
        <div>
            <div className="box p-4" onClick={openCard}>
                <IconUser />
            </div>
            <div id="user" className="box col center pup z-10 m4 none left-0 w-[300px] ui min-h-[-webkit-fill-available] " >

                <div className="p-4 box row">
                    <b className="w-full">المستخدم</b>
                  
                </div>
                <Link href={"/user/signup"} >
                    <a className="border-ui-1 border-2 p-2 rounded-xl mt-4 m-4" onClick={openCard} > تسجيل </a>
                </Link>
                <Link href={"/user/login"} >
                    <a className="border-ui-1 border-2 p-2 rounded-xl mt-4 m-4 " onClick={openCard}>تسجيل الدخول</a>
                </Link>
                
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
