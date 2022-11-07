"use strict";

const legendElement = document.querySelectorAll(".js-containerLegend");


const upArrow = document.querySelector(".js-upArrow");
const containerDesign = document.querySelector(".js-palettes");
const upArrow1 = document.querySelector(".js-upArrow1");
const containerFill = document.querySelector(".js-form__contact");
const upArrow2 = document.querySelector(".js-upArrow2");
const containerCreate = document.querySelector(".js-containerCreate");

const btnCreate = document.querySelector(".js-btn-create");
const shareTwitter = document.querySelector(".js-shareTwitter");

const resetBtnElement = document.querySelector(".js-resetBtn");

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


//mostrar section abierta ocultar el resto

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


//boton CREAR TARJETA

btnCreate.addEventListener("click", (event) => {
  event.preventDefault();
  console.log('HOLA');
  removeClass (shareTwitter,'hide');
  addClass (btnCreate,'btnGrey');
});




// VOLCADO DE DATOS A LA TARJETA

const careerInput = document.querySelector(".js-career");
const nameInput = document.querySelector(".js-name");
const careerCardInput = document.querySelector(".js-careerCard");
const nameCardInput = document.querySelector(".js-nameCard");

const mailInput = document.querySelector(".js-mailInput");
const telInput = document.querySelector(".js-telInput");
const linkedinInput = document.querySelector(".js-linkedinInput");
const githubInput = document.querySelector(".js-githubInput");
const telCard = document.querySelector(".js-telCard");
const mailCard = document.querySelector(".js-mailCard");
const linkedinCard = document.querySelector(".js-linkedinCard");
const githubCard = document.querySelector(".js-githubCard");

const fieldsetFill = document.querySelector(".js-fieldsetFill");

const data = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

//meter valores al objeto
function dataCollect() {
  const inputTarget = event.target;
  let inputTargetValue = inputTarget.value;
  data[inputTarget.name] = inputTargetValue;
}

function renderCard() {
  nameCardInput.innerHTML = data.name;
  careerCardInput.innerHTML = data.job;
  telCard.href = data.phone;
  mailCard.href = data.email;
  linkedinCard.href = data.linkedin;
  githubCard.href = data.github;
  if (data.name === "") {
    nameCardInput.innerHTML = "Nombre Apellido";
  }
  if (data.job === "") {
    careerCardInput.innerHTML = "Front-end developer";
  }
}

fieldsetFill.addEventListener("input", (event) => {
  event.preventDefault();
  dataCollect();
  renderCard();
});

// Boton reset

function handleReset(event) {
  event.preventDefault();

  //vaciar el objeto pte renderizar recorrer el array del objeto data
  data.palette = '';
  data.name= '';
  data.job= '';
  data.phone= '';
  data.email= '';
  data.linkedin= '';
  data.github= '';
  data.photo= '';


  nameInput.value = "";
  careerInput.value = "";
  mailInput.value = "";
  telInput.value = "";
  linkedinInput.value = "";
  githubInput.value = "";
  nameCardInput.innerHTML = "Nombre Apellido";
  careerCardInput.innerHTML = "Front-end developer";
  telCard.href = "tel:example";
  mailCard.href = "mailto:example@gmail.com";
  linkedinCard.href = "https://www.linkedin.com";
  githubCard.href = "https://github.com/";
}

resetBtnElement.addEventListener("click", handleReset);


//PALETAS

const paletteOption1 = document.querySelector('.js-palette1');
const paletteOption2 = document.querySelector('.js-palette2');
const paletteOption3 = document.querySelector('.js-palette3');
const cardDisplayContainer = document.querySelector('.js-cardDisplay__card');


const changePalette = (event) => {
  cardDisplayContainer.classList.remove ('palette1');
  cardDisplayContainer.classList.remove ('palette2');  
  cardDisplayContainer.classList.remove ('palette3');  
  cardDisplayContainer.classList.add(event.currentTarget.value);
};

paletteOption1.addEventListener ('click', changePalette);
paletteOption2.addEventListener ('click', changePalette);
paletteOption3.addEventListener ('click', changePalette); 

