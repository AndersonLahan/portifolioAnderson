import React from 'react'
import './Contato.css'

const Contato = () => {
    return (
        <section id="Contato">
            <div className="container">
                <h1>Contato</h1>
                <div id="contact-form" className="container mx-auto col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <form>
                        <div className="form-group">
                            <input className="form-control" type="text" name="name" placeholder="Nome..." />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="email" name="_replyto" placeholder="Email..." />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="subject" placeholder="Assunto..." />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" type="textarea" rows="11" name="messagem" placeholder="Mensagem" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" value="Enviar" />
                        </div>
                    </form>
                </div>

                <div id="redes-sociais" className="container mx-auto col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <h1>Redes Sociais</h1>
                    <div>
                        <a href="https://www.facebook.com/anderson.lahan" target="_blank">
                            <figure>
                                <img className="icones" src="./assets/icones/facebook.png" alt="Facebook" />
                            </figure>
                        </a>
                        <a href="https://www.instagram.com/andersonlahan" target="_blank">
                            <figure>
                                <img className="icones" src="./assets/icones/instagran.png" alt="Instagram" />
                            </figure>
                        </a>
						
						<a href="https://github.com/AndersonLahan" target="_blank">
                            <figure>
                                <img className="icones" src="./assets/icones/github.png" alt="github" />
                            </figure>
                        </a>
                        
                        
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contato
