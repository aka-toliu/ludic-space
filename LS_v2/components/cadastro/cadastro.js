
    function verifyAcess() {
        let cardInfo = cadastro.querySelector('.cadastro__card-info');
        let email = cadastro.querySelector('#acesso__email');
        let password = cadastro.querySelector('#acesso__password');
        let passwordConfirm = cadastro.querySelector('#acesso__password-confirm');
        let locksEl = cardInfo.querySelectorAll('b');


        var mailformat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(email.value.match(mailformat) && email.value !== ''){
            locksEl[2].classList.add('locks-light');
            email.classList.add('input-valid');
            email.classList.remove('input-invalid');
        }else{
            locksEl[2].classList.remove('locks-light');
            email.classList.remove('input-valid');
            email.classList.add('input-invalid');
        }

        if(password.value.length > 5  && password.value !== ''){
            locksEl[1].classList.add('locks-light');
            password.classList.add('input-valid');
        }else{
            locksEl[1].classList.remove('locks-light');
            password.classList.remove('input-valid');
        }

        if(password.value === passwordConfirm.value && passwordConfirm.value !== ''){
            locksEl[0].classList.add('locks-light');
            passwordConfirm.classList.add('input-valid');
        }else{
            locksEl[0].classList.remove('locks-light');
            passwordConfirm.classList.remove('input-valid');
        }

        let lock = cardInfo.querySelector('.card-info__lock');

        if(email.value.match(mailformat) && password.value.length > 5 && password.value === passwordConfirm.value && passwordConfirm.value !== ''){
            
            cardInfo.querySelector('img').setAttribute('src', '../../assets/icons/unlock-solid.svg');
            lock.classList.add('unlock__img-anim');
            cardInfo.querySelector('img').classList.add('unlock__img');

        }else{
            cardInfo.querySelector('img').setAttribute('src', '../../assets/icons/lock-solid.svg');
            lock.classList.remove('unlock__img-anim');
            cardInfo.querySelector('img').classList.remove('unlock__img');
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

    

    setTimeout(() => {
        var avatar = document.querySelector('.avatar');

        avatar.classList.add('avatar-floating');
    }, 6000);


    
    let generoSelect = cadastro.querySelector('.genero__select');
   

    generoSelect.addEventListener("change", function(){ 

        let cabecaFrente = cadastro.querySelector('.avatar__head-front');
        let cabecaTras= cadastro.querySelector('.avatar__head-back');

        let cabeloFrente = cabecaFrente.querySelector('.avatar__hair')
        let cabeloTras= cabecaTras.querySelector('.avatar__hair')

        

        let hair = cadastro.querySelector('.custom-hair');


        let customItens = hair.querySelectorAll('.custom-item');
        
        
        if (generoSelect.value === 'non') {
            cabeloFrente.setAttribute('hair-style', "H3");
            cabeloTras.setAttribute('hair-style', "H3");

            for (let i = 0; i < customItens.length; i++) {
                customItens[i].classList.remove('custom-item--selected')
            }

            hair.querySelector('#H0').classList.add('custom-item--selected');

        }

        if (generoSelect.value === 'feminino') {
            cabeloFrente.setAttribute('hair-style', "H1");
            cabeloTras.setAttribute('hair-style', "H1");

            for (let i = 0; i < customItens.length; i++) {
                customItens[i].classList.remove('custom-item--selected')
            }

            hair.querySelector('#H1').classList.add('custom-item--selected');

        }

        if (generoSelect.value === 'masculino') {
            cabeloFrente.setAttribute('hair-style', "H2");
            cabeloTras.setAttribute('hair-style', "H2");

            for (let i = 0; i < customItens.length; i++) {
                customItens[i].classList.remove('custom-item--selected')
            }

            hair.querySelector('#H2').classList.add('custom-item--selected');

        }
     });
}

let step = 1;


function nextStep(btn) {
    var avatar = document.querySelector('.avatar');
    var head = document.querySelector('.avatar__head');
    var cadastroSections = cadastro.querySelector('.cadastro__sections');
    var sections = cadastroSections.querySelectorAll('section');


    
    if (step === 1) {
        avatar.setAttribute("pose", "faceCustom");
        head.setAttribute("silhuette", "false");
    }

    if (step === 2) {

        let card = cadastro.querySelector('.cadastro__card-info');
        let cardCable = cadastro.querySelector('.card-cable');
        avatar.setAttribute("pose", "cardInfo");
        card.classList.add('show-flex');
        cardCable.classList.add('show-flex');

        btn.setAttribute('btn-style', 'complete');
        btn.textContent = "Concluir";

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

        sections[step].classList.add('show-block');
        sections[step -1].classList.remove('show-block');

        step += 1;

        btn.classList.add('complete');
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

        var btnNext = btn.parentNode.querySelector('.complete');

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
            
            avatar.setAttribute('skin-color', obj.id)
  
        }

        if (customRow.classList.contains('custom-hair')) {

            let avatarHeadFront = avatar.querySelector('.avatar__head-front');
            let avatarHeadBack = avatar.querySelector('.avatar__head-back');
            let avatarHairFront = avatarHeadFront.querySelector('.avatar__hair');
            let avatarHairBack = avatarHeadBack.querySelector('.avatar__hair');
            

            avatarHairFront.setAttribute('hair-style', obj.id);
            avatarHairBack.setAttribute('hair-style', obj.id);
        }

        if (customRow.classList.contains('custom-eyes')) {

            let avatarEyes = avatar.querySelector('.avatar__eyes');

            avatarEyes.setAttribute('eyes-style', obj.id);

        }

        if (customRow.classList.contains('custom-nose')) {

            let avatarNose = avatar.querySelector('.avatar__nose');
            avatarNose.setAttribute('nose-style', obj.id);

        }

        if (customRow.classList.contains('custom-mouth')) {

            let avatarMouth = avatar.querySelector('.avatar__mouth');
            avatarMouth.setAttribute('mouth-style', obj.id);

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


        if(customRow.classList.contains('custom-eyes')){
            
            avatarEyes.setAttribute('eyes-color', obj.id)
        }

        if(customRow.classList.contains('custom-hair')){
            
            avatarHairFront.setAttribute('hair-color', obj.id)
            avatarHairBack.setAttribute('hair-color', obj.id)
        }




    }
}