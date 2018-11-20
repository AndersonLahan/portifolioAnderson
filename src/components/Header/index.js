import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">

                <div className="container">
                    <a className="navbar-brand" href="#top">Inicio</a>
					<a className="navbar-brand" href="#profile">Perfil</a>
					<a className="navbar-brand" href="#skills">Skill</a>
					<a className="navbar-brand" href="#portfolio">Portifólio</a>
					<a className="navbar-brand" href="#infos">Informações</a>
					<a className="navbar-brand" href="#Contato">Contatos</a>
					
                   
                </div>
            </nav>
        </Fragment>
    )
}

export default Header