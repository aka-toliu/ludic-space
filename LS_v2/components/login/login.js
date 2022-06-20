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
        homeEmail.textContent = alunos[0].email;
    }, 300);

    
    
    
}