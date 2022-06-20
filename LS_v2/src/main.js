var alunos = [

    {
        id: 0,
        email: "exemple@email.com",
        senha: "123123",
        nome: 'string',
        sobrenome: 'string',
        apelido: "string",
        refNome: "nome",
        acesso: "aluno",
        nascimento: 'dd/mm/aaa',
        estado: 'string',
        instituicao: 'string',
        nivel: 'EF1',
        periodo: 'Matutino',
        genero: 'non',
        classe: '1ª Série',
        turma: 'A',
        avatar: {
            pele: "S0",
            cabelo: {
                estilo: "H0",
                cor: "c1"
            },
            olho: {
                estilo: "E1",
                cor: "c1"
            },
            nariz: "N0",
            boca: "M0",
            acessorio: "A0"
        }
    }
]




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


 
var cadastro = document.querySelector('.cadastro');
var login = document.querySelector('.login');
var home = document.querySelector('.home');





function ajax() {

    // Injeta o html do componente "target".
    $.get('components/login/login.html', function (response) {
      $('.login').html(response);
    });


    $.get('components/cadastro/cadastro.html', function (response) {
      $('.cadastro').html(response);
    });

    // $.get('components/cadastro/cadastro.html', function (response) {
    //   $('.cadastro').html(response);
    // });
    
}

ajax();

