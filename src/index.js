import React from 'react';
import { createRoot } from 'react-dom/client';
import PrincipleView from './views/PrincipleView';
import PerfilView from './views/PerfilView';
import ProjectsView from './views/ProjectsView';
import './css/index.css';

const divIndex = document.querySelector('#index');
const index = createRoot(divIndex);
index.render(
            <PrincipleView 
                nameDev='Jhon Alex Marín' 
                programmingLang='React JS' 
                company='Jhoem Software' 
                imgJhoem='./jhoem.jpg'
            />           
);

const divPerfil = document.querySelector('#perfil');
const perfil = createRoot(divPerfil);
perfil.render(          
            <PerfilView
                reactLogo='./react.png'
                htmlLogo='./html.png'
                cssLogo='./css.png'
                jsLogo='./js.png'
                company='Jhoem Software'
            />
);

const divProyectos = document.querySelector('#proyectos');
const proyectos = createRoot(divProyectos);
proyectos.render(
            <ProjectsView
                imgKanban='./kanban.png'
                imgBlackJack='./blackjack.png'
                imgClima='./api.png'
                imgMusic='./mentoria.png'
                imgView='./view.png'
                imgGit='./git.png'
            />
);






