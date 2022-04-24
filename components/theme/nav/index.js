import Link from "next/link";
import { IconDark, IconLight, IconCall, IconItem, IconLive, IconNotification, IconRadio, IconSearch, IconTqs } from "components/icons";
import Image from 'next/image'

import Menu from "./menu";
import Lang from "./lang";
import UserBoxNav from "./user";
import { useState } from "react";

const Nav = () => {
    let [icon, setIcon] = useState(<IconDark />);
    const dark = () => {
        let query = (q) => document.querySelector(q)
        let navBG = (q) => query('nav').style.backgroundImage = `url(/images/${q}.png) `
        document.body.classList.toggle("dark");

        if (query('body.dark')) {
            setIcon(<IconLight />);
            navBG('map2')
        } else {
            navBG('map')
            setIcon(<IconDark />);
        }

    };
    return (
        <nav className="sh" >
            {/* start */}
            <div className="box">
                <Menu />
                <Link href='/' >
                    <a style={{ margin: 'auto' }}>
                        <Image src="/images/logo.png" width={40} height={40} id="logo" alt="logo akther" />
                    </a>
                </Link>
            </div>
            {/* logo */}
            {/* end */}
            <div className="box">
                <UserBoxNav />
                {/* <div className="box p-4"><IconNotification /></div> */}
                <div id="darkBtn" onClick={dark} >
                    <div className="box p-4">  {icon}</div>
                </div>
                <div className="box p-4"><IconSearch /></div>
                <div className="box p-4 w-12"><IconItem /></div>
            </div>
        </nav>
    );
}

export default Nav;
