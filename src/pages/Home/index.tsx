import clsx from "clsx";
import Separator from "../../components/Separator";
import style from "./style.module.css";

const Home = () => {
    return(
        <div>
            <section className={style.banner}>
                <div className="container">
                    <h1>
                        O espaço perfeito para amar a leitura
                    </h1>
                </div>
            </section>

            <section className={style.knowMore}>
                
                <div className="container">
                    <h1 className={style.knowMoreTitle}>O que procura?</h1>

                    <div className={style.services}>
                        <a className={style.itemService}>
                            <h2>Artigos</h2>
                            <span>125 posts</span>
                        </a>

                        <a className={style.itemService}>
                            <h2>Citações</h2>
                            <span>1253 frases</span>
                        </a>

                        <a className={style.itemService}>
                            <h2>Comunidade</h2>
                            <span>+12500 comentários</span>
                        </a>

                        <a className={style.itemService}>
                            <h2>Eventos</h2>
                            <span>8 eventos</span>
                        </a>
                    </div>
                </div>
            </section>

            <div className="container">
                <Separator />
            </div>

            <section className={style.boxListArticle}>
                <div className="container">
                    <h1 className={style.hTitle1}>Destaques de artigo</h1>

                    <div className={style.listArticle}>
                        <article className={style.articleCard}>
                            <div className={clsx(style.articleImg, style.health)}>
                            </div>

                            <div className={style.boxReviewArticle}>
                                <h2 className={style.articleTitle}>
                                    Como encontrar a felicidade
                                </h2>

                                <p className={style.articleText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas vel ab.  
                                </p>
                            </div>
                        </article>

                         <article className={style.articleCard}>
                            <div className={clsx(style.articleImg, style.sports)}>
                            </div>

                            <div className={style.boxReviewArticle}>
                                <h2 className={style.articleTitle}>
                                    Como encontrar a felicidade
                                </h2>

                                <p className={style.articleText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas vel ab.  
                                </p>
                            </div>
                        </article>

                         <article className={style.articleCard}>
                            <div className={clsx(style.articleImg, style.technology)}>
                            </div>

                            <div className={style.boxReviewArticle}>
                                <h2 className={style.articleTitle}>
                                    Como encontrar a felicidade
                                </h2>

                                <p className={style.articleText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas vel ab.  
                                </p>
                            </div>
                        </article>

                         <article className={style.articleCard}>
                            <div className={clsx(style.articleImg, style.quotes)}>
                            </div>

                            <div className={style.boxReviewArticle}>
                                <h2 className={style.articleTitle}>
                                    Como encontrar a felicidade
                                </h2>

                                <p className={style.articleText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas vel ab.  
                                </p>
                            </div>
                        </article>

                        <article className={style.articleCard}>
                            <div className={clsx(style.articleImg, style.nature)}>
                            </div>

                            <div className={style.boxReviewArticle}>
                                <h2 className={style.articleTitle}>
                                    Como encontrar a felicidade
                                </h2>

                                <p className={style.articleText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas vel ab.  
                                </p>
                            </div>
                        </article>

                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;