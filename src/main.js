var LSdata = {

    instituicoes: [
        {
            id: 0,
            nome: 'Colégio Target',
            cnpj: 0000111122233,
            niveis: [
                {
                    id: 0,
                    nome: "Educação Infantil",
                    classes: [
                        {
                            id: 0,
                            nome: "1ª série",
                            periodos: [
                                {
                                    id: 0,
                                    nome: "Matutino",
                                    turmas: [
                                        {
                                            id: 0,
                                            nome: "A"
                                        },
                                        {
                                            id: 0,
                                            nome: "B"
                                        },
                                        {
                                            id: 0,
                                            nome: "C"
                                        },
                                    ]
                                },
                                {
                                    id: 0,
                                    nome: "Vespetino",
                                    turmas: [
                                        {
                                            id: 0,
                                            nome: "A"
                                        }
                                    ]
                                }

                            ]
                        }
                    ]
                },
                {
                    id: 1,
                    nome: "Educação Fundamental 1",
                    classes: [
                        {
                            id: 0,
                            nome: "1ª série",
                            periodos: [
                                {
                                    id: 0,
                                    nome: "Matutino",
                                    turmas: [
                                        {
                                            id: 0,
                                            nome: "A"
                                        },
                                        {
                                            id: 0,
                                            nome: "B"
                                        },
                                        {
                                            id: 0,
                                            nome: "C"
                                        },
                                    ]
                                },
                                {
                                    id: 0,
                                    nome: "Vespetino",
                                    turmas: [
                                        {
                                            id: 0,
                                            nome: "A"
                                        }
                                    ]
                                }

                            ]
                        }
                    ]
                },
                {
                    id: 0,
                    nome: "Educação Fundamental 2",
                    classes: [
                        {
                            id: 0,
                            nome: "1ª série",
                            periodos: [
                                {
                                    id: 0,
                                    nome: "Matutino",
                                    turmas: [
                                        {
                                            id: 0,
                                            nome: "A"
                                        },
                                        {
                                            id: 0,
                                            nome: "B"
                                        },
                                        {
                                            id: 0,
                                            nome: "C"
                                        },
                                    ]
                                },
                                {
                                    id: 0,
                                    nome: "Vespetino",
                                    turmas: [
                                        {
                                            id: 0,
                                            nome: "A"
                                        }
                                    ]
                                }

                            ]
                        }
                    ]
                }
            ]

        }
    ]
}



var alunos = [

    {
        nome: 'Exemple',
        sobrenome: 'Exemple',
        nascimento: '10/02/2000',
        estado: 'São Paulo',
        instituicao: 'Colégio Target',
        nivel: 'EF1',
        periodo: 'Matutino',
        genero: 'non',
        classe: '1ª Série',
        turma: 'A',
        avatar: {
            rosto: "R1",
            cabelo: "C0c1",
            olho: "O1c1",
            nariz: "N1",
            boca: "B1",
            acessorio: "A0"
        }
    }
]
 
var cadastro = document.querySelector('.cadastro');




function ajax() {

    // Injeta o html do componente "target".
    $.get('components/login/login.html', function (response) {
      $('.login').html(response);
    });


    // $.get('components/cadastro/cadastro.html', function (response) {
    //   $('.cadastro').html(response);
    // });

    $.get('components/cadastro/cadastro.html', function (response) {
      $('.cadastro').html(response);
    });
    
}

ajax();

