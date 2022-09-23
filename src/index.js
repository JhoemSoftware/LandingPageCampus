import React from 'react';
import { createRoot } from 'react-dom/client';
import PrinciplePage from './/views/PrinciplePage';
import PerfilPage from './views/PerfilPage';
import './css/index.css';
import './css/perfil.css';

const divIndex = document.querySelector('#index');
const index = createRoot(divIndex);
index.render(<PrinciplePage 
                nameDev='Jhon Alex Marín' 
                programmingLang='React JS' 
                company='Jhoem Software' 
                imgJhoem='./jhoem.jpg'
            />,
            
            <PerfilPage
                reactLogo='./react.png'
                htmlLogo='./html.png'
                cssLogo='./css.png'
                jsLogo='./js.png'
                company='Jhoem Software'
            />
            
            );






