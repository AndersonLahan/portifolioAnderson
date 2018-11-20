import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <section id="profile">
            <div className="container row mx-auto">
                <div id="profile-photo" className="container col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                    <figure>
                        <img src="./assets/imagens/fotoPerfil.jpg" alt="Foto de perfil"></img>
                        <a href="./assets/files/curriculumAnderson.pdf" target="_blank">
                        <button id="curriculum-button"  class="btn btn-dark" type="button">
                            Download Curriculo
                        </button>
                    </a>
                    </figure>
                    

                </div>
                <div className="container col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div>
                        <div>
						<h1>Anderso Aparecido Silva Lahan</h1>
                            <h3>Interesses</h3>
                            <ul>
                                <li>Desenvolvimento Web</li>
                                <li>Banco de Dados</li>
                                <li>Inteligencia artificial</li>
								<li>Desenvolvimento desktop</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Idiomas</h3>
                            <ul>
                                <li>Português - Nativo</li>
                                <li>Espanhol - Básico</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Formação</h3>
                            <ul>
                                <li>Cursando - UTFPR - Tecnologia em Análise e Desenvolvimento de Sistemas.</li>
                                
                            </ul>
                        </div>

                        <div>
                            <h3>Atividades</h3>
                            <ul>
                                <li>Estagiário de suporte na empresa Forlogic.</li>
                                
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;