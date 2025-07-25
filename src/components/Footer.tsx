import style from "./footer.module.css";
import logoAspas from "../assets/aspas-ao-logo-x.png";
import clsx from "clsx";
import { Mail, Phone } from "lucide-react";


const Footer = ()=> {
    return (
        <footer className={style.boxFooter}>
            <div className={clsx("container", style.footerContainer)}>
                <div className={style.footerLogo}>
                    <img src={logoAspas} alt="" width={40}/>
                    <span>Aspas.ao</span>
                </div>

                <div className={style.footerLinks}>

                    <h2 className={style.footerTitle}>Links rápidos</h2>

                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#">Home</a>
                        </li>
                    </ul>
                </div>

                <div className={style.footerContact}>
                    <div>
                        <h2 className={style.footerTitle}>Contactos</h2>
                        <div className={style.phoneEmail}>
                            <a href="">
                                <Phone size={16}/>
                                +244 944 895 118
                            </a>
                            <a href="">
                                <Mail size={16}/>
                                domingosnkulajw@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className={style.boxNewletter}>
                        <h2 className={style.footerTitle}>Newsletter</h2>
                        <form className={style.footerFormInput}>
                            <input type="text" placeholder="Insira seu email"/>
                            <button>Receber novidades</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;