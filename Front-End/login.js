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
    return 
}

window.location.href='index.html'
})

const inscription= document.getElementById('password-inscription');
const repeatPassword= document.getElementById('repeat-password');

if(inscription.value !== repeatPassword.value){
  alert('Les mots de passe ne sont pas identiques')

}

const togglePassword= document.getElementById('toggle-password');
togglePassword.addEventListener('click', function() {
  if (password.type === 'password') {
    password.type = 'text'           // mot de passe visible
    togglePassword.classList.remove('fa-eye')
    togglePassword.classList.add('fa-eye-slash') // œil barré
  } else {
    password.type = 'password'       // mot de passe caché
    togglePassword.classList.remove('fa-eye-slash')
    togglePassword.classList.add('fa-eye') // œil normal
  }
})


const togglePasswordInscription = document.getElementById('toggle-password-inscription')
const passwordInscription = document.getElementById('password-inscription')

togglePasswordInscription.addEventListener('click', function() {
  if (passwordInscription.type === 'password') {
    passwordInscription.type = 'text'
    togglePasswordInscription.classList.remove('fa-eye')
    togglePasswordInscription.classList.add('fa-eye-slash')
  } else {
    passwordInscription.type = 'password'
    togglePasswordInscription.classList.remove('fa-eye-slash')
    togglePasswordInscription.classList.add('fa-eye')
  }
})