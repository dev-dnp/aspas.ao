import clsx from "clsx";
import style from "./style.module.css";
import { Book, NotebookPen, NotepadTextDashed } from "lucide-react";

const Home = () => {
    return(
        <div>
            <section className={style.banner}>
                <div className="container">
                    <h1>
                        O espaço perfeito para casar com a leitura
                    </h1>
                </div>
            </section>

            <section>
                <div className="container">
                    <h1>O que procura?</h1>

                    <div className={style.services}>
                        <a className={style.itemService}>
                            <Book />
                            <span>Artigos</span>
                        </a>

                        <a className={style.itemService}>
                            <NotebookPen />
                            <span>Artigos</span>
                        </a>

                        <a className={style.itemService}>
                            <NotepadTextDashed/>
                            <span>Artigos</span>
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h1>Destaques de artigo</h1>

                    <div className={style.listArticle}>
                        <article className={style.articleCard}>
                            <div className={style.articleImg}>
                                <img src="" alt="Imagem do artigo" />
                            </div>

                            <div>
                                <h2 className={style.articleTitle}>
                                    Como encontrar a felicidade
                                </h2>

                                <p className={style.articleText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas vel ab. Vitae obcaecati delectus id adipisci dolorum, ratione blanditiis fugit ullam! Minus, rerum amet commodi eos aliquid officiis officia!
                                </p>
                            </div>
                        </article>

                        <article className={style.articleCard}>
                            <div className={style.articleImg}>
                                <img src="" alt="Imagem do artigo" />
                            </div>

                            <div>
                                <h2 className={style.articleTitle}>
                                    Como encontrar a felicidade
                                </h2>

                                <p className={style.articleText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas vel ab. Vitae obcaecati delectus id adipisci dolorum, ratione blanditiis fugit ullam! Minus, rerum amet commodi eos aliquid officiis officia!
                                </p>
                            </div>
                        </article>

                        <article className={style.articleCard}>
                            <div className={style.articleImg}>
                                <img src="" alt="Imagem do artigo" />
                            </div>

                            <div>
                                <h2 className={style.articleTitle}>
                                    Como encontrar a felicidade
                                </h2>

                                <p className={style.articleText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas vel ab. Vitae obcaecati delectus id adipisci dolorum, ratione blanditiis fugit ullam! Minus, rerum amet commodi eos aliquid officiis officia!
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