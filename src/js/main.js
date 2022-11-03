"use strict";

const legendElement = document.querySelectorAll(".js-containerLegend");
const containerElement = document.querySelectorAll(".js-container");

/* const legendDesign = document.querySelector('.js-containerLegend'); */
const upArrow = document.querySelector(".js-upArrow");
const downArrow = document.querySelector(".js-downArrow");
const containerDesign = document.querySelector(".js-palettes");

const legendFill = document.querySelector(".js-containerLegendFill");
const upArrow1 = document.querySelector(".js-upArrow1");
const downArrow1 = document.querySelector(".js-downArrow1");
const containerFill = document.querySelector(".js-form__contact");

const legendShare = document.querySelector(".js-containerLegendShare");
const upArrow2 = document.querySelector(".js-upArrow2");
const downArrow2 = document.querySelector(".js-downArrow2");
const containerCreate = document.querySelector(".js-containerCreate");

const btnCreate = document.querySelector(".js-btn-create");
const shareTwitter = document.querySelector(".js-shareTwitter");

const resetBtnElement = document.querySelector(".js-resetBtn");

//bloque ocultar Diseña

/* 
posición en cabecera, obtener el indice
contenedore[indice].classList.toggle 

*/

function colapse(event) {
  const clickElement = event.currentTarget;
  const clickElementSibling = clickElement.nextElementSibling;
  clickElementSibling.classList.toggle("hide");

  /* console.log ('click'); */
  /*   console.log (legendElement[i],containerElement[i]);
  containerElement[i].classList.toggle('hide'); */
}

function toggleLegend() {
  for (let i = 0; i < legendElement.length; i++) {
    legendElement[i].addEventListener("click", colapse);
  }
}
toggleLegend();

/* for (const legend of legendElement){ 

    legend.addEventListener ('click', ()=>{
      for (const container of containerElement){ 
      .classList.toggle ('hide');
      } */

/*   legendElement[legend] 
  legendElement[legend] .classList.toggle ('hide');
  legendElement.addEventListener('click', (toggleLegend)); */
/*  }
} */
/* toggleLegend(); */

/* 
legendDesign.addEventListener('click', () => {
  containerDesign.classList.toggle ('hide');
  upArrow.classList.toggle('hide');
  downArrow.classList.toggle('hide');
}); */

/* legendFill.addEventListener('click', () => {
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

}); */

btnCreate.addEventListener("click", (event) => {
  event.preventDefault();
  shareTwitter.classList.remove("hide");
  btnCreate.classList.add("btnGrey");
});

//PENDIENTE para que siempre se muestre Diseña

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



