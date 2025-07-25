import { Menu } from "lucide-react";
import style from "./header.module.css";
import logoAspas from "../assets/aspas-ao-logo-x.png";
import clsx from "clsx";
import MenuMobile from "./MenuMobile";

const Header = () => {
  return ( 
    <>
    <header className={style.headerTop}>
        <div className={clsx("container", style.headerContainer)}>
            <div className={style.logo}>
                <img src={logoAspas} width={32} alt="Aspas Logo" />
            </div>

            <div className={style.logoMenu}>
                <Menu color="#fff" />
            </div>
        </div>

    </header>

    <MenuMobile />

    </>

  )
}

export default Header
