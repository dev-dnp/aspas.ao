import Footer from "../components/Footer";
import Header from "../components/Header";
import style from "./style.module.css";
import { Outlet } from "react-router-dom";



const MainLayout = () => {
    return (
       <div>
            <Header />
            
            <main className={style.mainBox}>
                <Outlet />
            </main>
            
            <Footer />
       </div>
    );
}

export default MainLayout;