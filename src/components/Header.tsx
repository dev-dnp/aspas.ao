import { Menu } from "lucide-react";
import style from "./header.module.css";
import logoAspas from "../assets/aspas-ao-logo-x.png";
import clsx from "clsx";

const Header = () => {
  return ( 
    <header>
        <div className={clsx("container")}>
            <div className={style.logo}>
                <img src={logoAspas} width={32} alt="Aspas Logo" />
            </div>

            <div className={style.logoMenu}>
                <Menu />
            </div>
        </div>
    </header>
  )
}

export default Header
