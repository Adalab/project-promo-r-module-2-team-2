'use strict';

const legendDesign = document.querySelector('.js-containerLegend');
const upArrow = document.querySelector('.js-upArrow');
const downArrow = document.querySelector('.js-downArrow');
const containerDesign = document.querySelector('.js-palettes');

const legendFill = document.querySelector('.js-containerLegendFill');
const upArrow1 = document.querySelector('.js-upArrow1');
const downArrow1 = document.querySelector('.js-downArrow1');
const containerFill = document.querySelector('.js-form__contact');

const legendShare = document.querySelector('.js-containerLegendShare');
const upArrow2 = document.querySelector('.js-upArrow2');
const downArrow2 = document.querySelector('.js-downArrow2');
const containerCreate = document.querySelector('.js-containerCreate');

const btnCreate = document.querySelector('.js-btn-create');
const shareTwitter = document.querySelector('.js-shareTwitter');

//bloque ocultar Diseña

legendDesign.addEventListener('click', () => {
  containerDesign.classList.toggle ('hide');
  upArrow.classList.toggle('hide');
  downArrow.classList.toggle('hide');
});

legendFill.addEventListener('click', () => {
  containerFill.classList.toggle('hide');
  upArrow1.classList.toggle('hide');
  downArrow1.classList.toggle('hide');

  containerDesign.classList.add('hide');
  upArrow.classList.add('hide');
  downArrow.classList.remove('hide');

  containerCreate.classList.add('hide');
  upArrow2.classList.add('hide');
  downArrow2.classList.remove('hide');
  shareTwitter.classList.add ('hide');
  btnCreate.classList.remove('btnGrey');
  btnCreate.classList.add('btnOrange');

});

legendShare.addEventListener('click', () => {
  containerCreate.classList.toggle('hide');
  upArrow2.classList.toggle('hide');
  downArrow2.classList.toggle('hide');
  shareTwitter.classList.add ('hide');
  btnCreate.classList.remove('btnGrey');
  btnCreate.classList.add('btnOrange');
  
  containerDesign.classList.add('hide');
  upArrow.classList.add('hide');
  downArrow.classList.remove('hide');

  containerFill.classList.add('hide');
  upArrow1.classList.add('hide');
  downArrow1.classList.remove('hide');

});

btnCreate.addEventListener('click', (event) => {
  event.preventDefault();
  shareTwitter.classList.remove('hide');
  btnCreate.classList.add('btnGrey');
});

//para que siempre se muestre Diseña

/* if (containerFill.classList.contains('hide') && containerCreate.classList.contains('hide')) {
  
  containerDesign.classList.remove('hide');
  upArrow.classList.remove('hide');
  downArrow.classList.add('hide');
  console.log('FUNCIONA');
} */