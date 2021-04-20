const inputEmail = document.querySelector('.input-email');
const svgEmail = document.querySelector('.div-email svg');


inputEmail.addEventListener('click', (event) => {
    console.log(event.target);

    console.log(svgEmail);
    
})

svgEmail.classList.add('teste')