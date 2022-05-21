function openCadastro() {
  
  event.preventDefault()

  var form = document.querySelector('.login-form');
  var login = document.querySelector('.login');

  form.classList.add('hide-fade-out');
  login.classList.add('login-transition');

  console.log(cadastro);


setTimeout(() => {
  cadastro.classList.add('cadastro-transition');
}, 200);




  initCadastro();

}



