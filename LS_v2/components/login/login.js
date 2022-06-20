function loginAcess() {

    event.preventDefault();

    let email = login.querySelector('#email');
    let password = login.querySelector('#password');

    for (let i = 0; i < alunos.length; i++) {

        if (alunos[i].email == email.value && alunos[i].senha == password.value) {
            $.get('components/home/home.html', function (response) {
                $('.home').html(response);
            });

            
            login.style.display = "none";
            home.style.display = "flex";

            updateData();

        } else {


        }

    }
}

function updateData() {

    

    setTimeout(() => {
        let homeEmail = home.querySelector('.home__email');
        let homeSenha = home.querySelector('.home__senha');
        let homeNome = home.querySelector('.home__nome');
        let homeSobrenome = home.querySelector('.home__sobrenome');
        let homeApelido = home.querySelector('.home__apelido');
        let homeNascimento = home.querySelector('.home__nascimento');
        let homeGenero = home.querySelector('.home__genero');
        let homeEstado = home.querySelector('.home__estado');
        let homeAcesso = home.querySelector('.home__acesso');
        let homeAvatar = home.querySelector('.home__avatar');


        homeEmail.textContent = alunos[0].email;
        homeSenha.textContent = alunos[0].senha;
        homeNome.textContent = alunos[0].nome;
        homeSobrenome.textContent = alunos[0].sobrenome;
        homeApelido.textContent = alunos[0].apelido;
        homeNascimento.textContent = alunos[0].nascimento;
        homeGenero.textContent = alunos[0].genero;
        homeEstado.textContent = alunos[0].estado;
        homeAcesso.textContent = alunos[0].acesso;
        homeAvatar.textContent = 
        alunos[0].avatar.pele + "-" +
        alunos[0].avatar.cabelo.estilo + "_" + 
        alunos[0].avatar.cabelo.cor + "-" +
        alunos[0].avatar.olhos.estilo + "_" + 
        alunos[0].avatar.olhos.cor + "-" +
        alunos[0].avatar.nariz + "-" +
        alunos[0].avatar.boca;

        let avatarPele = home.querySelector('.home__avatar-pele');
        let avatarCabeloEstilo= home.querySelector('.home__avatar-cabelo_estilo');
        let avatarCabeloCor = home.querySelector('.home__avatar-cabelo_cor');
        let avatarOlhosEstilo = home.querySelector('.home__avatar-olhos_estilo');
        let avatarOlhosCor = home.querySelector('.home__avatar-olhos_cor');
        let avatarBoca = home.querySelector('.home__avatar-boca');
        let avatarNariz = home.querySelector('.home__avatar-nariz');
        let avatarAcessorio= home.querySelector('.home__avatar-acessorio');


        avatarPele.textContent = alunos[0].avatar.pele;
        avatarCabeloEstilo.textContent = alunos[0].avatar.cabelo.estilo;
        avatarCabeloCor.textContent = alunos[0].avatar.cabelo.cor;
        avatarOlhosEstilo.textContent = alunos[0].avatar.olhos.estilo;
        avatarOlhosCor.textContent = alunos[0].avatar.olhos.cor;
        avatarBoca.textContent = alunos[0].avatar.boca;
        avatarNariz.textContent = alunos[0].avatar.nariz;
        avatarAcessorio.textContent = alunos[0].avatar.acessorio;
       

    }, 300);

    
    
    
}