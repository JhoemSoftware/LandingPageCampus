import React from 'react';
import { createRoot } from 'react-dom/client';
import PrincipleView from './views/PrincipleView';
import PerfilView from './views/PerfilView';
import ProjectsView from './views/ProjectsView';
import EducationPage from './views/EducationPage';
import './css/index.css';

const divIndex = document.querySelector('#index');
const index = createRoot(divIndex);
index.render(
            <PrincipleView 
                nameDev='Jhon Alex Marín' 
                programmingLang='React JS' 
                company='Jhoem Software' 
                imgJhoem='./assets/jhoem.jpg'
            />           
);

const divPerfil = document.querySelector('#perfil');
const perfil = createRoot(divPerfil);
perfil.render(          
            <PerfilView
                reactLogo='./assets/react.png'
                htmlLogo='./assets/html.png'
                cssLogo='./assets/css.png'
                jsLogo='./assets/js.png'
                company='Jhoem Software'
            />
);

const divProyectos = document.querySelector('#proyectos');
const proyectos = createRoot(divProyectos);
proyectos.render(
            <ProjectsView
                imgKanban='./assets/kanban.png'
                imgBlackJack='./assets/blackjack.png'
                imgClima='./assets/api.png'
                imgMusic='./assets/mentoria.png'
                imgView='./assets/view.png'
                imgGit='./assets/git.png'
            />
);

const divFormacion = document.querySelector('#formacion');
const formacion = createRoot(divFormacion);
formacion.render(
            <EducationPage
                imgCampus='./assets/campus.png'
                imgReact='./assets/react.png'
                imgTwtt='./assets/twtt.png'
                imgWp='./assets/wp.png'
                imgGitH='./assets/gitH.png'
            />
);





