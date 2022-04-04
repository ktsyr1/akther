import Link from "next/link";
import { IconCall, IconItem, IconLive, IconNotification, IconRadio, IconSearch, IconTqs } from "components/icons";
import Image from 'next/image'

import Menu from "./menu";
import Lang from "./lang";
import UserBoxNav from "./user";

const Nav = () => {
    return (
        <nav className="sh" >
            {/* start */}
            <div>
                <div className="box">
                    <Menu />
                    <UserBoxNav />
                    <div className="box p-4"><IconNotification /></div>
                </div>
                <div className="box">
                    <div className="box p-4"><IconCall /></div>
                    <div className="box p-4"><IconTqs /></div>
                </div>
            </div>
            {/* logo */}
            <Link href='/' >
                <a>
                    <Image src="/images/logo.png" width={40} height={80} id="logo" alt="logo akther" />
                </a>
            </Link>
            {/* end */}
            <div >
                <div className="box">
                    <Lang />
                    <div className="box p-4"><IconSearch /></div>
                    <div className="box p-4 w-12"><IconItem /></div>
                </div>
                <div className="box justify-end">
                    <div className="box p-4"><IconLive /></div>
                    <div className="box p-4"><IconRadio /></div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
