/* eslint-disable indent */
'use strict';

//querySelectors

const legendElement = document.querySelectorAll('.js-containerLegend');
const upArrow = document.querySelector('.js-upArrow');
const containerDesign = document.querySelector('.js-palettes');
const upArrow1 = document.querySelector('.js-upArrow1');
const containerFill = document.querySelector('.js-form__contact');
const upArrow2 = document.querySelector('.js-upArrow2');
const containerCreate = document.querySelector('.js-containerCreate');
const btnCreate = document.querySelector('.js-btn-create');
const shareTwitter = document.querySelector('.js-shareTwitter');
const resetBtnElement = document.querySelector('.js-resetBtn');

const careerInput = document.querySelector('.js-career');
const nameInput = document.querySelector('.js-name');
const careerCardInput = document.querySelector('.js-careerCard');
const nameCardInput = document.querySelector('.js-nameCard');

const mailInput = document.querySelector('.js-mailInput');
const telInput = document.querySelector('.js-telInput');
const linkedinInput = document.querySelector('.js-linkedinInput');
const githubInput = document.querySelector('.js-githubInput');
const telCard = document.querySelector('.js-telCard');
const mailCard = document.querySelector('.js-mailCard');
const linkedinCard = document.querySelector('.js-linkedinCard');
const githubCard = document.querySelector('.js-githubCard');

const fieldsetFill = document.querySelector('.js-fieldsetFill');

const cardLinkElement = document.querySelector('.js-cardLink ');
const twitterBtn = document.querySelector('.js-twitterBtn');

const paletteOption1 = document.querySelector('.js-palette1');
const paletteOption2 = document.querySelector('.js-palette2');
const paletteOption3 = document.querySelector('.js-palette3');
const cardDisplayContainer = document.querySelector('.js-cardDisplay__card');



//Funciones básicas de clases

function addClass (element, classElement) {
  element.classList.add(classElement);
  }
function removeClass (element, classElement) {
  element.classList.remove(classElement);
  }
function toggleClass (element, classElement) {
  element.classList.toggle(classElement);
  }


//SECCIONES: mostrar y cerrar secciones no seleccionadas

function colapse(event) {
  const clickElement = event.currentTarget;
  const clickElementSibling = clickElement.nextElementSibling;
  toggleClass (clickElementSibling,'hide' );

  if (containerDesign !== clickElementSibling){
    addClass (containerDesign, 'hide');
    addClass (upArrow,'rotate');
  } else {toggleClass (upArrow,'rotate');}

  if (containerFill !== clickElementSibling) {
    addClass (containerFill, 'hide');
    addClass (upArrow1,'rotate');
  }else {toggleClass (upArrow1,'rotate');}

  if (containerCreate !== clickElementSibling){
    addClass (containerCreate, 'hide');
    addClass (upArrow2,'rotate');
    addClass (shareTwitter,'hide');
    removeClass (btnCreate,'btnGrey');
  } else {
    toggleClass (upArrow2,'rotate');
    addClass (shareTwitter,'hide');
    removeClass (btnCreate,'btnGrey');
  }
  if (containerFill.classList.contains('hide')&&containerCreate.classList.contains('hide')){
    removeClass(containerDesign,'hide');
    removeClass (upArrow,'rotate');
    }
}


function toggleLegend() {
  for (let i = 0; i < legendElement.length; i++) {
    legendElement[i].addEventListener("click", colapse);
    }
  }
toggleLegend();


//BOTON CREAR: mostrar Twitter

btnCreate.addEventListener('click', (event) => {
  event.preventDefault();
  removeClass (shareTwitter,'hide');
  addClass (btnCreate,'btnGrey');
});



// VOLCADO DE DATOS A LA TARJETA

let data = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};


//meter valores al objeto
function dataCollect() {
  const inputTarget = event.target;
  let inputTargetValue = inputTarget.value;
  data[inputTarget.name] = inputTargetValue;
  //si no se elige paleta, se selecciona la predefinida
  if (data.palette === '') {
    data.palette = 1;
    }
  }

//función pintar
function renderCard() {
  nameCardInput.innerHTML = data.name;
  careerCardInput.innerHTML = data.job;
  telCard.href = data.phone;
  mailCard.href = data.email;
  linkedinCard.href = data.linkedin;
  githubCard.href = data.github;
  if (data.name === '') {
    nameCardInput.innerHTML = 'Nombre Apellido';
  }
  if (data.job === '') {
    careerCardInput.innerHTML = 'Front-end developer';
  }
}


//recoger info de los inputs
fieldsetFill.addEventListener('input', (event) => {
  event.preventDefault();
  dataCollect();
  renderCard();
});

containerDesign.addEventListener('input', (event) => {
  event.preventDefault();
  dataCollect();
});





//PALETAS - volcado
const changePalette = (event) => {
  cardDisplayContainer.classList.remove ('palette1');
  cardDisplayContainer.classList.remove ('palette2');
  cardDisplayContainer.classList.remove ('palette3');
  cardDisplayContainer.classList.add(`palette${event.currentTarget.value}`);
  };

paletteOption1.addEventListener ('click', changePalette);
paletteOption2.addEventListener ('click', changePalette);
paletteOption3.addEventListener ('click', changePalette); 


updatePreview(data);


//Crear tarjeta

btnCreate.addEventListener('click', (event)=> {
  event.preventDefault();
  // guardar datos en local
  localStorage.setItem('dataFromForm', JSON.stringify(data));
  //enviar datos a API
  const datastring = JSON.stringify(data);
  localStorage.setItem('dataFromForm', datastring);
  fetch ('https://awesome-profile-cards.herokuapp.com/card',
    {
      method:'POST',
      body: datastring,
      headers:{
        'Content-Type': 'application/json',
        },
    })
  .then((response) => response.json())
  .then((responseJson)=> {
    const responseURL = responseJson.cardURL;
    if (responseJson.success) {
      cardLinkElement.innerHTML = responseURL;
      cardLinkElement.href=responseURL;
      const messageTwitter = 'Aquí%20esta%20mi%20tarjeta%20de%20visita%20creada%20con%20Awesome%20profile%20cards';
      const twitterHref = `https://twitter.com/intent/tweet?text=${messageTwitter}&url=${responseURL}&hashtags=businesscard,awesomeprofilecards`;
      twitterBtn.href = twitterHref;
      } else {
        cardLinkElement.innerHTML = 'Rellena todos los campos';
        twitterBtn.href = '';
      }
    });
  });



//Cuando cargue la página:

function updatePreview(data){
  data=JSON.parse(localStorage.getItem('dataFromForm'));
  nameInput.value = data.name;
  careerInput.value = data.job;
  mailInput.value = data.email;
  telInput.value = data.phone;
  linkedinInput.value = data.linkedin;
  githubInput.value = data.github;

  cardDisplayContainer.classList.remove ('palette1','palette2','palette3');
  cardDisplayContainer.classList.add(`palette${data.palette}`);

  switch (data.palette){
    case '3':
      paletteOption1.removeAttribute('checked');
      paletteOption2.removeAttribute('checked');
      paletteOption3.setAttribute('checked','checked');
      break;
    case '2':
      paletteOption2.setAttribute('checked','checked');
      paletteOption1.removeAttribute('checked');
      paletteOption3.removeAttribute('checked');
      break;
    default:
    paletteOption1.setAttribute('checked','checked');
    paletteOption2.removeAttribute('checked');
    paletteOption3.removeAttribute('checked');
  }
}


updatePreview(data);

// Boton reset

function handleReset(event) {
  event.preventDefault();

  //vaciar el objeto pte renderizar recorrer el array del objeto data
  data = {
    palette: '',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  };

  // Vaciar, sobresescribir datos en local
  localStorage.setItem('dataFromForm', JSON.stringify(data));
  nameInput.value = '';
  careerInput.value = '';
  mailInput.value = '';
  telInput.value = '';
  linkedinInput.value = '';
  githubInput.value = '';
  nameCardInput.innerHTML = 'Nombre Apellido';
  careerCardInput.innerHTML = 'Front-end developer';
  telCard.href = 'tel:example';
  mailCard.href = 'mailto:example@gmail.com';
  linkedinCard.href = 'https://www.linkedin.com';
  githubCard.href = 'https://github.com/';
}

resetBtnElement.addEventListener('click', handleReset);