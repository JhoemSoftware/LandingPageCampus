import React from 'react';
import { createRoot } from 'react-dom/client';
//import PrimeraApp from './PrimeraApp';
//import CounterApp from './CounterApp';
import PrinciplePage from './principle';
import './index.css';

const divIndex = document.querySelector('#index');
const index = createRoot(divIndex);
index.render(<PrinciplePage 
                nameDev="Jhon Alex Marín" 
                programmingLang="React JS" 
                imgReact="./logo512.png" 
                imgJhoem="./jhoem.jpg"
            />);






