var step = 0;
var graduation = "EF2";
var gender = "no-gender-";
// let step = 0;

function nextStep() {

    event.preventDefault()

    var imgs = document.querySelectorAll('.cadastro-img');
    var astro = cadastro.querySelector('.cadastro-images-1 ');
    var aluno = cadastro.querySelector('.aluno ');
    let hairFront = cadastro.querySelector('.aluno-hair-front');
    let hairBack = cadastro.querySelector('.aluno-hair-back');
    let helmet = cadastro.querySelector('.astro-helmet');
    let sections =cadastro.querySelectorAll('SECTION');
    let astroBody = cadastro.querySelector('.astro-body');
    

    if (step === 0) {
        astro.classList.add('step-1');
        astroBody.src = "../../assets/astro-body-" + graduation + "-front.svg";
        
        step = step + 1;

        setTimeout(() => {
            helmet.classList.add('helmet-out');
            aluno.classList.remove('silhouette');
            
        }, 1000);

        sections[0].classList.remove('show-block');
        sections[1].classList.add('show-block');
    }



    // if (step < imgs.length - 1) {


    //     imgs[step].classList.add('center-to-left');
    //     imgs[step + 1].classList.add('right-to-center');
    //     imgs[step].classList.remove('right-to-center');
    //     imgs[step].classList.remove('left-to-center');
    //     imgs[step + 1].classList.remove('center-to-right');



    //     step = step + 1;
    //     console.log(step);
    // }


}

function prevStep() {

    event.preventDefault()

    var imgs = document.querySelectorAll('.cadastro-img');
    let helmet = cadastro.querySelector('.astro-helmet');
    var aluno = cadastro.querySelector('.aluno ');
    var astro = cadastro.querySelector('.cadastro-images-1 ');
    let sections =cadastro.querySelectorAll('SECTION');
    let astroBody = cadastro.querySelector('.astro-body');

    if(step === 1){
        helmet.classList.remove('helmet-out');
        helmet.classList.add('helmet-out-reverse');
        astro.classList.remove('step-1');
        astro.classList.add('step-1-reverse');
        astroBody.src = "../../assets/astro-body-" + graduation + ".svg";
        

        setTimeout(() => {
            helmet.classList.remove('helmet-out-reverse');
            aluno.classList.add('silhouette');
            astro.classList.remove('step-1-reverse');
            
        }, 1000);
        // aluno.classList.add('silhouette');

        step = step - 1;

        sections[1].classList.remove('show-block');
        sections[0].classList.add('show-block');
    }
    // if (step > 0) {


    //     imgs[step].classList.remove('right-to-center');
    //     imgs[step].classList.remove('left-to-center');
    //     imgs[step].classList.add('center-to-right');

    //     imgs[step - 1].classList.remove('center-to-left');
    //     imgs[step - 1].classList.add('left-to-center');



    //     step = step - 1;
    //     console.log(step);
    // }
}



function initCadastro() {

    setTimeout(() => {
        let pictureContainer = cadastro.querySelector(".cadastro-images-1");
        pictureContainer.classList.add('no-gravity');
    }, 8000);

    setTimeout(() => {

        let generoSelect = cadastro.querySelector("#genero");
        let grauSelect = cadastro.querySelector("#grau");
        let imageAstro = cadastro.querySelector(".cadastro-images-1");
        let astroBody = cadastro.querySelector(".astro-body");
        let pictureContainer = cadastro.querySelector(".cadastro-images");
        let hairFront = cadastro.querySelector('.aluno-hair-front');
        let hairBack = cadastro.querySelector('.aluno-hair-back');
        let customHairRow = cadastro.querySelector('.custom-hair');
        let customHairItens = customHairRow.querySelectorAll('.custom-item');

        generoSelect.addEventListener("change", function () {


            if (generoSelect.value === 'masculino') {

                gender = 'male-';
                alunos[0].genero = 'masculino';
                imageAstro.classList.remove('opacity-show');


                console.log(customHairItens);


                for (let i = 0; i < customHairItens.length; i++) {
                    customHairItens[i].classList.remove('custom-item--selected');
                }

                customHairItens[1].classList.add('custom-item--selected');


                setTimeout(() => {
                    imageAstro.classList.add('opacity-show');
                    // hairFront.classList.remove('C2c1');
                    // hairBack.classList.remove('C2c1');
                    // hairFront.classList.add('C1c1');

                    hairFront.id = 'C1c1';
                    hairBack.id = 'C1c1';
                    // astroBody.setAttribute('src', '../../assets/astro-' + gender + graduation + ".SVG");
                }, 600);

            }

            else if (generoSelect.value === 'feminino') {

                gender = 'female-';
                alunos[0].genero = 'feminino';
                imageAstro.classList.remove('opacity-show');

                for (let i = 0; i < customHairItens.length; i++) {
                    customHairItens[i].classList.remove('custom-item--selected');
                }

                customHairItens[2].classList.add('custom-item--selected');


                setTimeout(() => {
                    imageAstro.classList.add('opacity-show');
                    // astroBody.setAttribute('src', '../../assets/astro-' + gender + graduation + ".SVG");
                    // hairFront.classList.remove('C1c1');
                    // hairFront.classList.add('C2c1');
                    // hairBack.classList.add('C2c1');

                    hairFront.id = 'C2c1';
                    hairBack.id = 'C2c1';
                }, 600);

            }

            else {
                gender = 'no-gender-';
                alunos[0].genero = 'non';
                imageAstro.classList.remove('opacity-show');
                // hairFront.classList.remove('C2c1');
                // hairBack.classList.remove('C2c1');
                // hairFront.classList.remove('C1c1');
                // hairBack.classList.remove('C1c1');
                for (let i = 0; i < customHairItens.length; i++) {
                    customHairItens[i].classList.remove('custom-item--selected');
                }

                customHairItens[0].classList.add('custom-item--selected');



                setTimeout(() => {
                    imageAstro.classList.add('opacity-show');
                    // astroBody.setAttribute('src', '../../assets/astro-' + gender + graduation + ".SVG");
                    hairFront.id = 'C0c0';
                    hairBack.id = 'C0c0';
                }, 600);
            }

        });

        grauSelect.addEventListener("change", function () {




            if (grauSelect.value === 'EI') {

                graduation = 'EI';
                imageAstro.classList.remove('opacity-show');

                setTimeout(() => {
                    imageAstro.classList.add('opacity-show');
                    astroBody.setAttribute('src', '../../assets/astro-body-' + graduation + ".SVG");
                }, 600);

            }

            else if (grauSelect.value === 'EF1') {

                graduation = 'EF1';
                imageAstro.classList.remove('opacity-show');

                setTimeout(() => {
                    imageAstro.classList.add('opacity-show');
                    astroBody.setAttribute('src', '../../assets/astro-body-' + graduation + ".SVG");
                }, 600);

            }

            else if (grauSelect.value === 'EF2') {

                graduation = 'EF2';
                imageAstro.classList.remove('opacity-show');

                setTimeout(() => {
                    imageAstro.classList.add('opacity-show');
                    astroBody.setAttribute('src', '../../assets/astro-body-' + graduation + ".SVG");
                }, 600);
            }



        });

    }, 500);


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
    let customColors = customRow.querySelector('.custom-colors--selected');

    console.log(customRow);

    let avatarFace = cadastro.querySelector('.aluno-head');
    let avatarEars = cadastro.querySelector('.aluno-ears');
    let avatarNose = cadastro.querySelector('.aluno-nose');

    if (!obj.classList.contains('custom-item--selected')) {
        
        

        for (let i = 0; i < customitens.length; i++) {
            
            customitens[i].classList.remove('custom-item--selected');
        }

        obj.classList.add('custom-item--selected');


        if (customRow.classList.contains('custom-face')) {
            alunos[0].avatar.rosto = obj.id;
            avatarFace.id = obj.id;
            avatarEars.id = "Or" + obj.id;
            avatarNose.id = "N" + obj.id;
            
        }

        if (customRow.classList.contains('custom-hair')) {

            let avatarHairFront = cadastro.querySelector('.aluno-hair-front');
            let avatarHairBack = cadastro.querySelector('.aluno-hair-back');

            alunos[0].avatar.cabelo = obj.id;

            avatarHairFront.id = obj.id + customColors.id;
            avatarHairBack.id = obj.id + customColors.id;
        }


        if (customRow.classList.contains('custom-eyes')) {

            let avatarEyeR = cadastro.querySelector('.aluno-eyes-R');
            let avatarEyeL = cadastro.querySelector('.aluno-eyes-L');

            alunos[0].avatar.olho = obj.id + customColors.id;

            avatarEyeR.id = obj.id + customColors.id + "-R";
            avatarEyeL.id = obj.id + customColors.id + "-L";
        }

    }
}



function changeColorCustom(obj) {

    let customColors = obj.parentNode.querySelectorAll('.custom-colors-item');
    let avatarHairFront = cadastro.querySelector('.aluno-hair-front');
    let avatarHairBack = cadastro.querySelector('.aluno-hair-back');
    let avatarEyeR = cadastro.querySelector('.aluno-eyes-R');
    let avatarEyeL = cadastro.querySelector('.aluno-eyes-L');
    let customRow = obj.parentNode.parentNode;
    let customSelected = customRow.querySelector('.custom-item--selected');



    if (!obj.classList.contains('custom-colors--selected')) {
        
        

        for (let i = 0; i < customColors.length; i++) {
            
            customColors[i].classList.remove('custom-colors--selected');
        }

        obj.classList.add('custom-colors--selected');

        if(customRow.classList.contains('custom-eyes')){
            
            avatarEyeR.id = customSelected.id + obj.id + "-R";
            avatarEyeL.id = customSelected.id + obj.id + "-L";
        }

        if(customRow.classList.contains('custom-hair')){
            
            avatarHairFront.id = customSelected.id + obj.id;
            avatarHairBack.id = customSelected.id + obj.id;
        }




    }
}