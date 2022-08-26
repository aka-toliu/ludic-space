
function validateStep() {

    let actualYear = new Date().getFullYear();

    var btnNext = cadastro.querySelector('.form__btn-next');
    var cadastroSections = cadastro.querySelector('.cadastro__sections');
    var sections = cadastroSections.querySelectorAll('section');
    var form = sections[0].querySelector('form');

    let cardInfoName = cadastro.querySelector('.card-info__name');
    let cardInfoCity = cadastro.querySelector('.card-info__city');

    let msgError = cadastro.querySelector('.form__msg-error');

    let generoSelect = cadastro.querySelector('.genero__select');
    let nome = cadastro.querySelector('#form__nome');
    let nascimento = cadastro.querySelector('#form__nascimento');
    let sobrenome = cadastro.querySelector('#form__sobrenome');
    let apelido = cadastro.querySelector('#form__apelido');
    let refCall = cadastro.querySelector('#form__reference');
    let estado = cadastro.querySelector('#form__estado');

    

    

     form.addEventListener("change", function () {

        

        let anoNascimento = nascimento.value.split('-', 3);
        let anoNascimentoNumber = anoNascimento[0];
        let idade = actualYear - anoNascimentoNumber;

        cardInfoName.textContent = nome.value + ", " + idade;
        cardInfoCity.textContent = estado.value + " - BR";

        
       
        if (nome.value !== "" && sobrenome.value !== "" && nascimento.value !== "" && estado.value !== "") {
            btnNext.setAttribute('btn-style', "lite");
            btnNext.classList.add('btn--active');

            alunos[0].nome = nome.value;
            alunos[0].sobrenome = sobrenome.value;
            alunos[0].nascimento = nascimento.value;
            alunos[0].estado = estado.value;
            alunos[0].genero = generoSelect.value;
            alunos[0].apelido = apelido.value;


        }else{
            btnNext.setAttribute('btn-style', "");
            btnNext.classList.remove('btn--active');
        }
        
     });

     form.addEventListener("keyup", function () {
        let generoSelect = cadastro.querySelector('.genero__select');
        let nome = cadastro.querySelector('#form__nome');
        let nascimento = cadastro.querySelector('#form__nascimento');
        let sobrenome = cadastro.querySelector('#form__sobrenome');
        let apelido = cadastro.querySelector('#form__apelido');
        let refCall = cadastro.querySelector('#form__reference');
        let estado = cadastro.querySelector('#form__estado');
        // let acesso = cadastro.querySelector('#form__acesso');

        let anoNascimento = nascimento.value.split('-', 3);
        let anoNascimentoNumber = anoNascimento[0];
        let idade = actualYear - anoNascimentoNumber;

        cardInfoName.textContent = nome.value + ", " + idade;
        cardInfoCity.textContent = estado.textContent + " - BR";

       
        if (nome.value !== "" && sobrenome.value !== "" && nascimento.value !== "" && estado.value !== "") {
            btnNext.setAttribute('btn-style', "lite");
            btnNext.classList.add('btn--active');
            // alunos[0].acesso = acesso.value;

        }else{
            btnNext.setAttribute('btn-style', "");
            btnNext.classList.remove('btn--active');
        }

        if(apelido.value !== ""){
            refCall.removeAttribute("disabled");
            refCall.previousElementSibling.style.color = "black";
        }else{
            refCall.disabled = true;
            refCall.previousElementSibling.style.color = "";
        }
        
     });
    
    
    


    generoSelect.addEventListener("change", function () {

        let cabecaFrente = cadastro.querySelector('.avatar__head-front');
        let cabecaTras = cadastro.querySelector('.avatar__head-back');

        let cabeloFrente = cabecaFrente.querySelector('.avatar__hair')
        let cabeloTras = cabecaTras.querySelector('.avatar__hair');
        let cadastroWelcome = login.querySelector('.cadastro__finished-welcome');



        let hair = cadastro.querySelector('.custom-hair');


        let customItens = hair.querySelectorAll('.custom-item');


        if (generoSelect.value === 'non') {
            cabeloFrente.setAttribute('hair-style', "H3");
            cabeloTras.setAttribute('hair-style', "H3");

            for (let i = 0; i < customItens.length; i++) {
                customItens[i].classList.remove('custom-item--selected')
            }

            hair.querySelector('#H0').classList.add('custom-item--selected');
            cadastroWelcome.textContent = "Bem-vinde";

        }

        if (generoSelect.value === 'feminino') {
            cabeloFrente.setAttribute('hair-style', "H2");
            cabeloTras.setAttribute('hair-style', "H2");

            for (let i = 0; i < customItens.length; i++) {
                customItens[i].classList.remove('custom-item--selected')
            }

            hair.querySelector('#H2').classList.add('custom-item--selected');
            cadastroWelcome.textContent = "Bem-vinda";
        }

        if (generoSelect.value === 'masculino') {
            cabeloFrente.setAttribute('hair-style', "H1");
            cabeloTras.setAttribute('hair-style', "H1");

            for (let i = 0; i < customItens.length; i++) {
                customItens[i].classList.remove('custom-item--selected')
            }

            hair.querySelector('#H1').classList.add('custom-item--selected');
            cadastroWelcome.textContent = "Bem-vindo";

        }
    });



}

function verifyAcess() {
    let cardInfo = cadastro.querySelector('.cadastro__card-info');
    let email = cadastro.querySelector('#acesso__email');
    let password = cadastro.querySelector('#acesso__password');
    let passwordConfirm = cadastro.querySelector('#acesso__password-confirm');
    let locksEl = cardInfo.querySelectorAll('b');
    var btnNext = cadastro.querySelector('.form__btn-next');


    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(mailformat) && email.value !== '') {
        locksEl[2].classList.add('locks-light');
        email.classList.add('input-valid');
        email.classList.remove('input-invalid');
       
    } else {
        locksEl[2].classList.remove('locks-light');
        email.classList.remove('input-valid');
        email.classList.add('input-invalid');
    }

    if (password.value.length > 5 && password.value !== '') {
        locksEl[1].classList.add('locks-light');
        password.classList.add('input-valid');
        
    } else {
        locksEl[1].classList.remove('locks-light');
        password.classList.remove('input-valid');
    }

    if (password.value === passwordConfirm.value && passwordConfirm.value !== '') {
        locksEl[0].classList.add('locks-light');
        passwordConfirm.classList.add('input-valid');
    } else {
        locksEl[0].classList.remove('locks-light');
        passwordConfirm.classList.remove('input-valid');
    }

    let lock = cardInfo.querySelector('.card-info__lock');

    if (email.value.match(mailformat) && password.value.length > 5 && password.value === passwordConfirm.value && passwordConfirm.value !== '') {

        cardInfo.querySelector('img').setAttribute('src', '../../assets/icons/unlock-solid.svg');
        lock.classList.add('unlock__img-anim');
        cardInfo.querySelector('img').classList.add('unlock__img');
        btnNext.setAttribute('btn-style', 'complete');
        btnNext.classList.add('complete');
        
        alunos[0].email = email.value;
        alunos[0].senha = password.value;
    } else {
        cardInfo.querySelector('img').setAttribute('src', '../../assets/icons/lock-solid.svg');
        lock.classList.remove('unlock__img-anim');
        cardInfo.querySelector('img').classList.remove('unlock__img');
        btnNext.setAttribute('btn-style', '');
        btnNext.classList.remove('complete');
    }

}


function cartaoAcesso() {

    let email = cadastro.querySelector('.acesso__email');
    let password = cadastro.querySelector('.acesso__password');
    let confirmPassword = cadastro.querySelector('.acesso__password-confirm');
    let cable = cadastro.querySelector('.card-cable');
    let cardInfo = cadastro.querySelector('.cadastro__card-info');



    email.addEventListener("keyup", createElementsCable);
    password.addEventListener("keyup", createElementsCable);
    confirmPassword.addEventListener("keyup", createElementsCable);



    function createElementsCable() {

        let element = document.createElement('span');

        cable.appendChild(element);

        setTimeout(() => {
            element.remove();
        }, 1000);




        verifyAcess();

    }




}




function openCadastro() {

    event.preventDefault();

    // $.get('components/cadastro/cadastro.html', function (response) {
    // $('.cadastro').html(response);
    // });

    login.classList.add('login-out');
    cadastro.classList.add('cadastro-in');
    validateStep();



    setTimeout(() => {
        var avatar = document.querySelector('.avatar');

        avatar.classList.add('avatar-floating');
    }, 6000);



    
}

let step = 1;


function nextStep(btn) {
    var avatar = document.querySelector('.avatar');
    var head = document.querySelector('.avatar__head');
    var cadastroSections = cadastro.querySelector('.cadastro__sections');
    var sections = cadastroSections.querySelectorAll('section');



    if (step === 1 && btn.classList.contains('btn--active')) {
    
        avatar.setAttribute("pose", "faceCustom");
        head.setAttribute("silhuette", "false");

        
    }

    if (step === 2) {

        let card = cadastro.querySelector('.cadastro__card-info');
        let cardCable = cadastro.querySelector('.card-cable');
        avatar.setAttribute("pose", "cardInfo");
        card.classList.add('show-flex');
        cardCable.classList.add('show-flex');

        btn.setAttribute('btn-style', '');        
        btn.textContent = "Finalizar";


        cartaoAcesso();
    }

    if (step === 3 && btn.classList.contains('complete')) {
        let cadastroSVG = cadastro.querySelector('.cadastro__svg');
        let ship = login.querySelector('.login__svg-ship');
        let imgShip = ship.querySelector('img');
        let cable = cadastro.querySelector('.card-cable');
        let finishedMsg1 = login.querySelector('.cadastro__finished-1');
        let finishedMsg2 = login.querySelector('.cadastro__finished-2');
        


        cable.classList.add('cable-out');
        sections[2].classList.remove('show-block');
        finishedMsg1.classList.add('show-flex');

        setTimeout(() => {
            finishedMsg1.classList.remove('show-flex');
            finishedMsg2.classList.add('show-flex');

            setTimeout(() => {
                finishedMsg2.classList.remove('show-flex');
            }, 2500);
        }, 4500);


        setTimeout(() => {
            login.classList.add('back-to-login');
            login.classList.remove('login-out');
            cadastro.classList.add('cadastro-fade-out');
            cadastroSVG.classList.add('card-complete');
            imgShip.setAttribute('src', '../../assets/ship2.svg');

            setTimeout(() => {
                imgShip.setAttribute('src', '../../assets/ship.svg');
            }, 4000);

            setTimeout(() => {
                cadastro.classList.remove('cadastro-fade-out');
                cadastro.classList.remove('cadastro-in');
                login.classList.remove('back-to-login');

                $.get('components/cadastro/cadastro.html', function (response) {
                    $('.cadastro').html(response);
                });

                step = 1;

            }, 8000);
        }, 1000);



    }



    if (step < sections.length) {
        let msgError = cadastro.querySelector('.form__msg-error');

        if(btn.classList.contains('btn--active')){

            sections[step].classList.add('show-block');
            sections[step - 1].classList.remove('show-block');
    
            step += 1;

            // btn.classList.add('complete');
            msgError.textContent = ""
        }else{
            

            msgError.textContent = "Ops, falta preencher alguns dados obrigatórios."
        }

        
    }





    console.log(step);
}

function prevStep(btn) {
    let avatar = document.querySelector('.avatar');
    let head = document.querySelector('.avatar__head');
    let cadastroSections = cadastro.querySelector('.cadastro__sections');
    let sections = cadastroSections.querySelectorAll('section');



    if (step === 2) {
        avatar.setAttribute("pose", "faceCustomBack");
        head.setAttribute("silhuette", "true");

        setTimeout(() => {
            avatar.setAttribute("pose", "floating");
        }, 2000);
    }


    if (step === 3) {
        let avatar = document.querySelector('.avatar');
        let card = cadastro.querySelector('.cadastro__card-info');
        let cardCable = cadastro.querySelector('.card-cable');
        // avatar.classList.remove('avatar-card-anim');
        card.classList.add('card-out');
        avatar.setAttribute("pose", "cardInfoBack");
        cardCable.classList.remove('show-flex');

        var btnNext = btn.parentNode.querySelector('.form__btn-next');

        btnNext.setAttribute('btn-style', 'lite');
        btnNext.textContent = "Próximo";


        setTimeout(() => {
            card.classList.remove('card-out');
            card.classList.remove('show-flex');
        }, 3000);

    }


    if (step > 1) {

        sections[step - 2].classList.add('show-block');
        sections[step - 1].classList.remove('show-block');


        step -= 1;
    }



    console.log(step);
}

function changeTabCustom(obj, num) {

    let customRows = cadastro.querySelectorAll('.custom-row');
    let customCategories = cadastro.querySelectorAll('.custom-category');

    if (!obj.classList.contains('show-flex')) {



        for (let i = 0; i < customRows.length; i++) {
            customRows[i].classList.remove('show-flex');
            customCategories[i].classList.remove('custom-category--active');
        }

        obj.classList.add('custom-category--active');
        customRows[num].classList.add('show-flex');
    }
}

function changeItemCustom(obj) {

    let customitens = obj.parentNode.querySelectorAll('.custom-item');
    let customRow = obj.parentNode;
    let avatar = cadastro.querySelector('.avatar');


    if (!obj.classList.contains('custom-item--selected')) {



        for (let i = 0; i < customitens.length; i++) {

            customitens[i].classList.remove('custom-item--selected');
        }

        obj.classList.add('custom-item--selected');


        if (customRow.classList.contains('custom-face')) {

            avatar.setAttribute('skin', obj.id);
            alunos[0].avatar.pele = obj.id;

        }

        if (customRow.classList.contains('custom-hair')) {

            let avatarHeadFront = avatar.querySelector('.avatar__head-front');
            let avatarHeadBack = avatar.querySelector('.avatar__head-back');
            let avatarHairFront = avatarHeadFront.querySelector('.avatar__hair');
            let avatarHairBack = avatarHeadBack.querySelector('.avatar__hair');


            avatarHairFront.setAttribute('hair-style', obj.id);
            avatarHairBack.setAttribute('hair-style', obj.id);

            alunos[0].avatar.cabelo.estilo = obj.id;
        }

        if (customRow.classList.contains('custom-eyes')) {

            let avatarEyes = avatar.querySelector('.avatar__eyes');

            avatarEyes.setAttribute('eyes-style', obj.id);
            alunos[0].avatar.olhos.estilo = obj.id;

        }

        if (customRow.classList.contains('custom-nose')) {

            let avatarNose = avatar.querySelector('.avatar__nose');
            avatarNose.setAttribute('nose-style', obj.id);
            alunos[0].avatar.nariz = obj.id;

        }

        if (customRow.classList.contains('custom-mouth')) {

            let avatarMouth = avatar.querySelector('.avatar__mouth');
            avatarMouth.setAttribute('mouth-style', obj.id);
            alunos[0].avatar.boca = obj.id;

        }

        if (customRow.classList.contains('custom-acessories')) {

            let avatarAcessories = avatar.querySelector('.avatar__acessories');
            avatarAcessories.setAttribute('avatar-style', obj.id);
            alunos[0].avatar.acessorio = obj.id;

        }

    }
}

function changeColorCustom(obj) {

    let avatar = cadastro.querySelector('.avatar');
    let customColors = obj.parentNode.querySelectorAll('.custom-colors-item');
    let avatarHeadFront = avatar.querySelector('.avatar__head-front');
    let avatarHeadBack = avatar.querySelector('.avatar__head-back');
    let avatarHairFront = avatarHeadFront.querySelector('.avatar__hair');
    let avatarHairBack = avatarHeadBack.querySelector('.avatar__hair');
    let avatarEyes = avatar.querySelector('.avatar__eyes');
    let customRow = obj.parentNode.parentNode;
    let customSelected = customRow.querySelector('.custom-item--selected');



    if (!obj.classList.contains('custom-colors--selected')) {



        for (let i = 0; i < customColors.length; i++) {

            customColors[i].classList.remove('custom-colors--selected');
        }

        obj.classList.add('custom-colors--selected');


        if (customRow.classList.contains('custom-eyes')) {

            avatarEyes.setAttribute('eyes-color', obj.id)
            alunos[0].avatar.olhos.cor = obj.id;
        }

        if (customRow.classList.contains('custom-hair')) {

            avatarHairFront.setAttribute('hair-color', obj.id)
            avatarHairBack.setAttribute('hair-color', obj.id)
            alunos[0].avatar.cabelo.cor = obj.id;
        }




    }
}