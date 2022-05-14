function openCadastro() {
  
  event.preventDefault()

  var form = document.querySelector('.login-form');
  var login = document.querySelector('.login');

  form.classList.add('hide-fade-out');
  login.classList.add('login-transition');


  $.get('components/cadastro/cadastro.html', function (response) {
    $('.cadastro').html(response);
  });


  initCadastro();

}



