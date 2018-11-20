import React from 'react'
import './Blog.css'

const Blog = () => {
    return (
        <section id="blog">
        <h2>Blog</h2>
            <div className="container row mx-auto">
                <article className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <a href="https://www.tecmundo.com.br/mercado/136097-conheca-exoesqueleto-fazer-pessoas-voltarem-andar.htm" target="_blank">
                        
						<figure>
                            <img src="./assets/imagens/exoesqueleto.jpg"></img>
                            <figcaption>
							   Conheça o exoesqueleto que pode fazer pessoas voltarem a andar
                            </figcaption>
                        </figure>
                    </a>
                </article>

                <article className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <a href="https://www.tecmundo.com.br/software/136172-cara-nova-microsoft-launcher-5-0-liberado-download.htm" target="_blank">
                        <figure>
                            <img src="./assets/imagens/launcher.jpg"></img>
                            <figcaption>
                                De cara nova: Microsoft Launcher 5.0 é liberado para download.
                            </figcaption>
                        </figure>

                        <p></p>
                    </a>
                </article>
				
				
				<article className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <a href="https://www.tecmundo.com.br/nokia/65016-nome-nokia-reaparecer-dispositivos-moveis-futuro-rumor.htm" target="_blank">
                        <figure>
                            <img src="./assets/imagens/nokia.jpg"></img>
                            <figcaption>
                                Nome “Nokia” pode reaparecer em dispositivos móveis no futuro.
                            </figcaption>
                        </figure>

                        <p></p>
                    </a>
                </article>

               

            </div>
        </section>
    )
}

export default Blog