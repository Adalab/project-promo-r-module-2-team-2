'use strict';

const legendDesign = document.querySelector ('.js-containerLegend');
const upArrow = document.querySelector ('.js-upArrow');
const downArrow = document.querySelector ('.js-downArrow');
const containerDesign = document.querySelector ('.js-palettes');

const legendFill = document.querySelector ('.js-containerLegendFill');
const upArrow1 = document.querySelector ('.js-upArrow1');
const downArrow1 = document.querySelector ('.js-downArrow1');
const containerFill = document.querySelector ('.js-form__contact');

const legendShare = document.querySelector ('.js-containerLegendShare');
const upArrow2 = document.querySelector ('.js-upArrow2');
const downArrow2 = document.querySelector ('.js-downArrow2');
const containerCreate = document.querySelector ('.js-containerCreate');




//bloque ocultar Diseña

legendDesign.addEventListener ('click', (event)=> {
    event.preventDefault();
    if (containerDesign.classList.contains('hide'))
    {
        containerDesign.classList.remove('hide');
        upArrow.classList.remove('hide');
        downArrow.classList.add('hide');
        }
    else {
        containerDesign.classList.add('hide');
        upArrow.classList.add('hide');
        downArrow.classList.remove('hide');
    }
})

//bloque ocultar Rellena

/*
 legendFill.addEventListener ('click', (event)=> {
    event.preventDefault();
    if (containerFill.classList.contains ('hide')) {
        containerFill.classList.remove ('hide');
        upArrow1.classList.remove ('hide');
        downArrow1.classList.add ('hide');
    }
    else {
        containerFill.classList.add ('hide');
        upArrow1.classList.add ('hide');
        downArrow1.classList.remove ('hide');
    }
}) 
*/

legendFill.addEventListener ('click', (event)=> {
    event.preventDefault();
    containerFill.classList.toggle ('hide');
    upArrow1.classList.toggle ('hide');
    downArrow1.classList.toggle ('hide');
})


legendShare.addEventListener ('click', (event)=> {
    event.preventDefault();
    containerCreate.classList.toggle ('hide');
    upArrow2.classList.toggle ('hide');
    downArrow2.classList.toggle ('hide');
})

//NOTA HACER EL BOTON MAÑANA Y LA SIGUENTE PARTE DE LA TARJETA

