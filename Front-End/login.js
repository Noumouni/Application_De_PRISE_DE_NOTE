const btnConnexion= document.getElementById('btn-connexion');
const btnInscription = document.getElementById('btn-inscription');
const formConnexion =document.getElementById('form-connexion');
const formInscription= document.getElementById('form-inscription');

btnConnexion.addEventListener('click' , function () {
formConnexion.style.display= 'block'
formInscription.style.display = 'none'
btnConnexion.classList.add('active')
btnInscription.classList.remove('active')
})

btnInscription.addEventListener('click', function () {
    formInscription.style.display= 'block'
    formConnexion.style.display = 'none'
    btnInscription.classList.add('active')
    btnConnexion.classList.remove('active')
})