import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container mx-auto">
                <h2>Portfólio</h2>
                <h4>Alguns pequenos projetos desenvolvidos</h4>
                <div className="container row">
                    
                    <div className="card col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="card-body centered">
                            <div id="port">
                                <h4 className="card-title">Geovanna Garcia</h4>
								
                                <p className="card-text">Trabalho realizado para a disciplina de programação web.</p>
                                <a className="btn btn-dark" href="https://github.com/AndersonLahan/www.geovannagarcia.com.br" target="_blank" rel="noopener noreferrer">Link do Repositório</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Portfolio