//<[(mapa)]>

// 1#>efeito-visual-links
// 1#>efeito-visual-strong
// 1#>abrir/fechar-menu
// 1#>carrossel-home
// 1#>blocos-sobre-min
// 1#>barras-seletoras-conhecimentos
// 1#>game-boy


// 1#>efeito-visual-links ---------------------------------------------------------------------------
var links = document.getElementsByTagName('a')

var cores = ['var(--azul)', 'var(--rosa)', 'var(--vermelho)', 'var(--verde)', 'var(--amarelo)']
function link_hover(n) {
    let random_color = Math.floor(Math.random() * 5)
    random_color = cores[random_color]

    links[n].addEventListener('mousemove', function () {
        links[n].style.color = 'white'
        links[n].style.background = `${random_color}`
    })
    
}

function link_hover_saiu(n) {
    links[n].style.background = '#ffffff00'
    links[n].style.color = 'var(--preto)'
}

for (let c=0; c<links.length; c++) {    
    links[c].addEventListener('mouseenter', function() { link_hover(c)})
    links[c].addEventListener('mouseout', function() { link_hover_saiu(c)})

}


// 1#>efeito-visual-strong --------------------------------------------------------------------------------

setInterval(function () {
    let strong = document.getElementsByTagName('strong')
    for (let c=0; c<strong.length; c++) {
        (function (c) {
            let random_color = Math.floor(Math.random() * 5)
            strong[c].style.color = `${cores[random_color]}`
        })(c)
    }
}, 3000)

// 1#>abrir/fechar-menu ------------------------------------------------------------------------------------
var menu = document.querySelector('span.material-symbols-outlined')
menu.addEventListener('click', clicou_menu)

var clicou_menu_cont = 0
var menu = document.querySelector('li#nav-bar-itens') 
function clicou_menu() {
    if (clicou_menu_cont == 0) {
        menu.style.left = '0%'
        clicou_menu_cont++
    } else {
        menu.style.left = '-100%'
        clicou_menu_cont--
    }
}

var link_menu = document.getElementsByClassName('link-menu')
for (var c=0; c<link_menu.length; c++) {
    (function (c) {
        link_menu[c].addEventListener('click', esconder_menu)
    })(c)
}

function esconder_menu() {
    {setTimeout(function () {
        menu.style.left = '-100%'
        clicou_menu_cont--
    }, 250)}    
}


// 1#>carrossel-home ---------------------------------------------------------------------------------------
var carrossel = document.querySelector('div#carrossel-itens')
carrossel_cont = 1

var esquerda = document.querySelector('div.home-seta-esquerda')
esquerda.addEventListener('click', function () {
    if (0 < carrossel_cont && carrossel_cont < 3) {
        carrossel_cont--
        carrossel.style.left = `-${carrossel_cont}00%` 
    } else if (carrossel_cont == 0) {
        carrossel_cont += 2
        carrossel.style.left = `-${carrossel_cont}00%`
    }
})

var direita = document.querySelector('div.home-seta-direita')
direita.addEventListener('click', function () {
    if (-1 < carrossel_cont && carrossel_cont < 2) {
        carrossel_cont++
        carrossel.style.left = `-${carrossel_cont}00%`
    } else if (carrossel_cont == 2) {
        carrossel_cont -= 2 
        carrossel.style.left = `-${carrossel_cont}00%`
    }
})



// 1#>blocos-sobre-min --------------------------------------------------------------------------------------
var bloco = document.getElementsByClassName('texto')
var botao = document.getElementsByClassName('setas')

for (let c=0; c<botao.length; c++) {
    (function (c) {
        botao[c].addEventListener('click', function() { clicou_bloco(c) });
    })(c)
}
var cont = [0, 0, 0, 0, 0]

function clicou_bloco(valor) {
    if (cont[valor] == 0) {
        //vira o bloco de informações
        bloco[valor].style.transform = 'rotateX(90deg)'
        bloco[valor].style.top = '45%'

        //vira o bloco de setas
        botao[valor].style.transform = 'rotateX(90deg)'
        botao[valor].style.top = '-55.15%'
        botao[valor].style.bottom = '40%'
        
        
        cont[valor] += 1
    } else {
        //volta o bloco de texto a posição normal
        bloco[valor].style.transform = 'rotateX(0deg)'
        bloco[valor].style.top = '-4.5%'

        //vira o bloco de setas para a posição normal
        botao[valor].style.transform = 'rotateX(0deg)'
        botao[valor].style.top = '-4.5%'
        
        cont[valor] -= 1
    }
}

// 1#>barras-seletoras-conhecimentos --------------------------------------------------------------------

var seletor_um = document.querySelector('select#seletor-um')
seletor_um.addEventListener('change', organizar_opções)

var seletor_dois = document.querySelector('select#seletor-dois')
seletor_dois.addEventListener('change', organizar_opções)

var titulo_barra_seletora_1 = document.querySelector('h3#titulo-barra-seletora-um')

function organizar_opções() {
    var paragrafo_resposta = document.querySelector('div#paragrafo')
    var grafico = document.querySelector('div.quantidade')
    var altura_grafico = 0

    if (seletor_um.value == 'HTML&CSS') { 
        if (seletor_dois.value == 'o-que-sei') {
            paragrafo_resposta.innerHTML = 
            'Meus conhecimentos de <strong>HTML&CSS</strong> abrangem des de as propriedades basicas de <strong>CSS</strong> como margin, paddin, border até recursos mais avançados como display flex, keyframes, pseudo-class e pseudo-elements. Ja com  <strong>HTML</strong> tenho todos os conhecimentos nescessarios para a construção de uma web page do zero, alem de outros conhecimentos, tambem importantes, como a teoria do box-model e muito mais.'
        } else if (seletor_dois.value == 'o-que-acho-sobre') {
            paragrafo_resposta.innerHTML = 
            'Particularmente eu tenho <strong>HTML&CSS</strong> como as minhas tecnologias favoritas até o presente momento, me divirto muito trabalhando com ambas as duas, gosto de como elas tem um funcionamento simples. Alem de todos esses fatores tambem tenho facilidade em criar animações e efeitos com o <strong>CSS</strong>, como a roda gigante no inicio da pagina que é feita apenas com <strong>HTML&CSS.</strong>'
        } else if (seletor_dois.value == 'para-que-serve') {
            paragrafo_resposta.innerHTML = 
            '<strong>HTML&CSS</strong>, são tecnologias usadas pra desenvolvimento front-end de web pages. O <strong>HTML</strong> é uma linguagem de marcação, serve para demarcar o conteudo e organizalo na pagina, ja o <strong>CSS</strong>, são as folhas de estilo que servem para dar os efeitos visuais, esteticos e etc.. Ambas precisam ser utilizadas em conjunto para se ter um bom resultado no final do desenvolvimento (Alem do <strong>JavaScript</strong>)'
        }
        altura_grafico = 7
        
    } else if (seletor_um.value == 'JavaScript') {
        if (seletor_dois.value == 'o-que-sei') {
            paragrafo_resposta.innerHTML = 
            'Meu conhecimento de <strong>JavaScript</strong> vão de todas as normalidades de programação como estruturas de controle e repetição, vetores, arrays até algumas especificidades do JavaScript como funções anonimas e arrow functions. Atualmente estou estudando para me especializar melhor e aprender mais coisas como <strong>callback</strong> e <strong>RegEx</strong> e mais futuramente ter um foco em algo como <strong>react</strong>, <strong>angular</strong> ou <strong>vue JS.</strong>'
        } else if (seletor_dois.value == 'o-que-acho-sobre') {
            paragrafo_resposta.innerHTML = 
            '<strong>JavaScript</strong> é uma linguagem extremamente popular e conhecida, apesar de algumas diferenças e especificidades em relação a outras linguagens eu não vejo problema em trabalhar com ela e acho-a muito boa e pratica para algumas tarefas.'
        } else if (seletor_dois.value == 'para-que-serve') {
            paragrafo_resposta.innerHTML = 
            'O <strong>JavaScript</strong> é uma linguagem usada no front-end para adicionar funcionalidades e muitas vezes efeitos a pagina como animações. Ele junto ao <strong>HTML&CSS</strong> compõe as tecnologias mais utilizadas na criação de sites, e até de alguns aplicativos com o uso de bibliotecas como o discord que é desenvolvido em <strong>react</strong> que é uma biblioteca do <strong>JavaScript</strong>.'
        }
        altura_grafico = 5

    } else if (seletor_um.value == 'Python') {
        if (seletor_dois.value == 'o-que-sei') {
            paragrafo_resposta.innerHTML = 
            'Tenho um dominio exelente com <strong>python</strong>, foi a primeira linguagem que aprendi e tenho mais experiencia com ela, sei todas as generalidades como estruturas de controle e reptição, laços, arrays, vetores, funções, modularização e etc... Tambem tenho mais afinidade com algumas bibliotecas como o <strong>pyautogui</strong> para automações e outras'
        } else if (seletor_dois.value == 'o-que-acho-sobre') {
            paragrafo_resposta.innerHTML = 
            'Particularmente eu adoro o <strong>Python</strong> devido a sua simplicidade, tanto para aprendizado como para uso. Gosto muito do <strong>Python</strong> para automações e coisas mais simples, ele tambem é muito util para exercitar logica de programação pois tem poucos detalhes a se lembrar o que faz com que seja facil achar erros e problemas quando os mesmos aparecem.'
        } else if (seletor_dois.value == 'para-que-serve') {
            paragrafo_resposta.innerHTML = 
            'Hoje em dia o <strong>Python</strong> não tem uma utilidade especifica, ele é mais usado para se aprender logica de programação do que para realmente programar, mas existem previsoes de que sera muito utilizado no futuro por ser uma linguagem de alto nivel muito versatil e '
        }
        altura_grafico = 7

    } else if (seletor_um.value == 'Logica-de-Programação') {
        if (seletor_dois.value == 'o-que-sei') {
            paragrafo_resposta.innerHTML = 
            'Minha <strong>logica de programção</strong> é extremamente avançada abrangendo tudos os coteudos existentes, des de arrays e vetores as estrututaras de controle e repetição. Tambem entendo muito bem o funcionamento dos <strong>operadores</strong>, tanto <strong>ternarios</strong> como <strong>logicos</strong> e os <strong>relacionais</strong>, tambem tenho uma boa noção sobre validação de dados.'
        } else if (seletor_dois.value == 'o-que-acho-sobre') {
            paragrafo_resposta.innerHTML = 
            'A <strong>logica de programação</strong> é muito importante para que se saiba o que esta fazendo, apenas saber o que um bloco especifico de comandos faz não é o suficiente. Um bom programdor sabe o que cada linha e cada comando faz, sabe quando usar um <strong>for</strong> ou um <strong>while</strong>, sabe quando aninhar um <strong>if</strong> dentro de outro e quando usar um operador de conjunção. Por todos esses motivos <strong>logica de programação</strong> é muito importante.'
        } else if (seletor_dois.value == 'para-que-serve') {
            paragrafo_resposta.innerHTML = 
            '<strong>Logica de programação</strong> serve para aprender a logistica por tras de um codigo, sem se preocupar com as particularidades de uma linguagem especifica. Com o entendimento da logica de programação o parendizado de outras linguagens é muito agilisado e torna o precosso muito mais facil'
        }
        altura_grafico = 9

    } else if (seletor_um.value == 'UX/UI') {
        if (seletor_dois.value == 'o-que-sei') {
            paragrafo_resposta.innerHTML = 
            'Meu conhecimento sobre <strong>UX/UI design</strong> é limitado. Sei alguns conceitos basicos como teoria das cores e que devemos usar multiplos de 8 para mais armonia nas paginas. Sei que o <strong>UI designer</strong> é responsavel pela aparencia e armonia da aplicação, ja o <strong>UX designer</strong> é responsavel pela pisicologia e logica da pagina como, quantos cliques são nescessarios para uma tarefa ou a altura, tamanho e cor de um botão'
        } else if (seletor_dois.value == 'o-que-acho-sobre') {
            paragrafo_resposta.innerHTML = 
            'Acho que em uma aplicação é muito emportante ter um especialista para cada area trabalhando no projeto, um <strong>UX</strong> e um <strong>UI designer</strong>, um programador front-end e um back-and etc... Mas infelizmente casos onde se tem apenas um programador são comuns então é exencial que se tenha pelo menos um conhecimentos minimo de <strong>designe</strong> e das outras areas que estão proximas'
        } else if (seletor_dois.value == 'para-que-serve') {
            paragrafo_resposta.innerHTML = 
            'O <strong>designer de UX</strong> faz a logistica da pagina e define coisas como, o tamanho e a altura de um botão, quantos cliques são nescessarios para executar uma tarefa, o tamanho e as posições de cada item na aplicação. Ja o <strong>UI designer</strong> faz o trabalho de escolher as fontes, cores, icones e estilizar aplicação para que ela fique com a aparencia certa e passe a impreção desejada.'
        }
        altura_grafico = 3

    } else if (seletor_um.value == 'Git&GitHub') {
        if (seletor_dois.value == 'o-que-sei') {
            paragrafo_resposta.innerHTML = 
            'Entendo muito da logica e do funcionamento de <strong>Git&GitHub</strong> apesar se ter pouco conhecimento pratico, sei usar o <strong>GitHub</strong> para ospedar projetos e codigos sem problema, não tenho dificuldade nisso. Em relação ao <strong>git</strong> eu tenho noção do seu uso com interfaces apenas pelo <strong>GitHub</strong> desktop mas entendo seu funcionamento e sei para que serve.'
        } else if (seletor_dois.value == 'o-que-acho-sobre') {
            paragrafo_resposta.innerHTML = 
            '<strong>Git&GitHub</strong> são muito praticos e facilitam muito a vide de um programador, fazendo comites certos por motivos certos eles podem agilizar e tranquilizar muito o trabalho de um programador. Sem ter que que se preocupar com salvamentos e beckups a todo instante é muito mais facil fazer um bom trabalho'

        } else if (seletor_dois.value == 'para-que-serve') {
            paragrafo_resposta.innerHTML = 
            'O <strong>Git</strong> é um software de versionamento que serve para criar verções e salvar etapas do projeto. Caso seja necessario restauar uma parte antiga do codigo o <strong>Git</strong> é a ferramenta para isso, ele é o que chamamaos de repositorio local. Ja o <strong>GitHub</strong> é um repositorio na nuvem que ospeda a "verção original" do projeto, tornando possivel que sejam feitos comites de varios computadores.'
        }
        altura_grafico = 4 
    }
    
    alturas = ['5px', '40px', '80px', '117px', '156px', '195px', '234px', '272px', '312px', '350px']
    grafico.style.height = `${alturas[altura_grafico-1]}`
    
    let random_color = Math.floor(Math.random() * 5)
    grafico.style.background = `${cores[random_color]}`
}

// 1#>game-boy -----------------------------------------------------------------------------------------------

var start = document.querySelector('div.botao-start')
start_cont = 0

start.addEventListener('click', function () {
    start.style.boxShadow = '0px 0px 0px rgba(255, 255, 255, 0)'
    start.style.top = '7px'
    start.style.left = '3px'
    setTimeout(function () {
        start.style.boxShadow = '3px 7px 0px var(--amarelo-escuro)'
        start.style.top = '0px'
        start.style.left = '0px'
    }, 200)

    let tela_desligada = document.querySelector('div#desligado')
    if (start_cont == 0) {
        start_cont++
        tela_desligada.style.display = 'block'
    } else if (start_cont == 1) {
        start_cont--
        tela_desligada.style.display = 'none'
    }
})

var projetos = document.getElementsByClassName('projeto')
projetos[0].style.display = 'block'
var projetos_cont = 0

var seta_direita = document.querySelector('div.botao-seta-direita')
seta_direita.addEventListener('click', function () {
    seta_direita.style.boxShadow = '0px 0px 0px rgba(255, 255, 255, 0)'
    seta_direita.style.top = '7px'
    seta_direita.style.left = '3px'

    if (start_cont == 0) {
        if (projetos_cont == projetos.length-1) {
            projetos_cont = 0
        } else {
            projetos_cont++
        }

        for (let c=0; c<projetos.length; c++) {
            if (c == projetos_cont) {
                projetos[c].style.display = 'block'
            } else {
                projetos[c].style.display = 'none'
            }
        }
    }

    setTimeout(function () {
        seta_direita.style.boxShadow = '3px 7px 0px var(--amarelo-escuro)'
        seta_direita.style.top = '0px'
        seta_direita.style.left = '0px'
    }, 200)
})

var seta_esquerda = document.querySelector('div.botao-seta-esquerda')
seta_esquerda.addEventListener('click', function () {
    seta_esquerda.style.boxShadow = '0px 0px 0px rgba(255, 255, 255, 0)'
    seta_esquerda.style.top = '7px'
    seta_esquerda.style.left = '3px'

    if (start_cont == 0) {
        if (projetos_cont == 0) {
            projetos_cont = projetos.length-1
        } else {
            projetos_cont--
        }
        for (let c=0; c<projetos.length; c++) {
            if (c == projetos_cont) {
                projetos[c].style.display = 'block'
            } else {
                projetos[c].style.display = 'none'
            }
        }
    }
    
    setTimeout(function () {
        seta_esquerda.style.boxShadow = '3px 7px 0px var(--amarelo-escuro)'
        seta_esquerda.style.top = '0px'
        seta_esquerda.style.left = '0px'
    }, 200)
})

