import Link from "next/link";
import {
  IconCall,
  IconLive,
  IconMenu,
  IconNotification,
  IconRadio,
  IconUser,
} from "components/icons";

export default function Menu() {
  return (
    <div>
      <div id="menu" className="mt-[109px] pup w-[300px] ui none">
        {menuList.map((item) => {
          if (item.href) {
            return (
              <Link href={item.href} key={item.name}>
                <a className={`box row p-4 ${item.status ? "active" : ""}`}>
                  <div className="box px-4">{item.icon}</div>
                  <p>{item.name}</p>
                </a>
              </Link>
            );
          } else
            return (
              <div
                className={`box row p-4 ${item.status ? "active" : ""}`}
                key={item.name}
              >
                <div className="box px-4">{item.icon}</div>
                <p>{item.name}</p>
              </div>
            );
        })}
      </div>
      <button className="box p-4" onClick={openMenu}>
        <IconMenu />
      </button>
    </div>
  );
}

function openMenu() {
  let menu = document.querySelector("#menu.none");
  if (menu) menu.classList.remove("none");
  else document.querySelector("#menu").classList.add("none");
}
let menuList = [
  { icon: <IconMenu />, name: "القائمة", status: true },
  { icon: <IconCall />, name: "تواصل معنا", href: "/contact", status: false },
  { icon: <IconLive />, name: "البث المباشر", href: "/live", status: false },
  { icon: <IconRadio />, name: "الراديو", href: "/radio", status: false },
  {
    icon: <IconNotification />,
    name: "الاشعارات",
    href: "/notification",
    status: false,
  },
  { icon: <IconUser />, name: "حساب المستحدم", href: "/user", status: false },
];
