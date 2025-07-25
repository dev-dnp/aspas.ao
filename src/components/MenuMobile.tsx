
import { Folders, House, LogIn, LogOut, Phone, Users, X } from "lucide-react";
import style from "./menumobile.module.css";

const MenuMobile = () => {

    return(
        <div className={style.boxMenuMobile}>
            <div className={style.mobileView}>
                <button className={style.closeMenu}>
                    <X />
                </button>

                <div className={style.contentMenuMobile}>
                    <div className={style.menuMobileList}>
                        <div className={style.menuMobileTitle}>Menu</div>
                        <ul>
                            <li>
                                <a href="">
                                    <House />
                                    Início
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    <Users />
                                    Sobre
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    <Phone />
                                    Contacto
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    <Folders />
                                    Categorias
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className={style.menuMobileList}>
                        <div className={style.menuMobileTitle}>Login</div>
                        <ul>
                            <li>
                                <a href="">
                                    <LogIn />
                                    Login
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    <LogOut />
                                    Criar conta
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className={style.backgroundShadow}></div>

        </div>
    );

}


export default MenuMobile;