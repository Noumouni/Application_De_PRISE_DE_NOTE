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

formConnexion.addEventListener('submit', function(e) {
e.preventDefault()
    
const email= document.getElementById('email');
const emailError= document.getElementById('email-error');
const password= document.getElementById('password');

// Vérifier email
if(email.value === ''|| !email.value.includes('@')){
    emailError.style.display='block'
    return
} 

emailError.style.display='none'


  // Vérifier mot de passe
  if(password.value === ''){
    alert('Veuillez entrer votre mot de passe')
    return 
  }
if(password.value.length < 6){
    alert('Le mot de passe doit contenir au moins 6 caractères')
}

window.location.href='index.html'
})