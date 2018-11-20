import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h2>Skills</h2>
                <h4>Quais minhas habilidades.</h4>
				<h5>Lista de algumas das minhas habilidade</h5>
                <ul id="list-skills" className="container">
                    <a class="badge badge-light">C</a>
					<a class="badge badge-light">HTML5</a>
					<a class="badge badge-light">CSS3</a>
					<a class="badge badge-light">JAVASCRIPT</a>
					<a class="badge badge-light">JAVA</a>
					<a class="badge badge-light">DELPHI</a>
					<a class="badge badge-light">POSTGRE SQL</a>
					<a class="badge badge-light">SQL SERVER</a>
					<a class="badge badge-light">SQL </a>
                </ul>
            </div>
        </section>
    )
}

export default Skills