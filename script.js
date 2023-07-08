
var cores = ['var(--azul)', 'var(--rosa)', 'var(--vermelho)', 'var(--verde)', 'var(--amarelo)']

;(function(){ // 1#>efeito-visual-links
    var links = document.getElementsByTagName('a')
    
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
})()


setInterval(function () { // 1#>efeito-visual-strong
    let strong = document.getElementsByTagName('strong')
    for (let c=0; c<strong.length; c++) {
        (function (c) {
            let random_color = Math.floor(Math.random() * 5)
            strong[c].style.color = `${cores[random_color]}`
        })(c)
    }
}, 3000)


;(function () { // 1#>abrir/fechar-menu

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
})()


;(function(){ // 1#>carrossel-home

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
})()


;(function(){ // 1#>blocos-sobre-min

    var bloco = document.getElementsByClassName('texto')
    var botao = document.getElementsByClassName('setas')
    
    for (let c=0; c<botao.length; c++) {
        (function (c) {
            botao[c].addEventListener('click', () => { clicou_bloco(c) });
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
})()


;(function (){ // 1#>barras-seletoras-conhecimentos    
    var seletor_um = document.querySelector('select#seletor-um')
    var seletor_dois = document.querySelector('select#seletor-dois')

    function organizar_opções(barra) {   

        //muda as opções do segundo select e formata seus values par aminusculas e troca " " por "-"
        function selecionarOpções(opções) { 
            seletor_dois.innerHTML = ''
            
            for (let c=0; c<opções.length; c++) {
                // console.log(opções[c])
                seletor_dois.innerHTML += `<option value="${opções[c].toLowerCase().replaceAll(" ", "-")}">${opções[c]}</option>`
            }
        }

        
        let resposta  = ''        
        if (seletor_um.value == 'HTML&CSS') { 
            if (barra == 1) {
                selecionarOpções(["Sintaxe HTML e CSS",  "Tags HTML", "Meta tags", "Listas tabelas e formularios", "Box model", "Responsividade", "SEO", "Animações e efeitos CSS", "Flex e grid display", "Position", "Pseudo classes e elements", "Boas praticas"])
            }   
            
            if (seletor_dois.value == 'sintaxe-html-e-css') {
                resposta = `
                <p>Meus conhecimentos de <strong>HTML&CSS</strong> abrangem des de as propriedades basicas de <strong>CSS</strong> como margin, paddin,</p>
                <div id="code-box">
                    <div id="botoes">
                        <abbr title="limpar"><div class="vermelho-html botao"></div></abbr>
                        <abbr title="copiar"><div class="amarelo-html botao"></div></abbr>
                        <abbr title="resetar"><div class="verde-html botao"></div></abbr>
                    </div>
                    <textarea name="code-area" id="code-area-html" cols="30" rows="5">
                        
<h1>Titulo De Exemplo</h1>

                    </textarea>
                </div>`
            } else if (seletor_dois.value == 'tags-html') {
                resposta = 'tags html'
            } else if (seletor_dois.value == 'meta-tags') {
                resposta = `meta tags`
            } else if (seletor_dois.value == 'listas-tabelas-e-formularios') {
                resposta = `listas tabelas e formularios`
            } else if (seletor_dois.value == 'box-model') {
                resposta = `box model`
            } else if (seletor_dois.value == 'responsividade') {
                resposta = `responsividade`
            } else if (seletor_dois.value == 'seo') {
                resposta = `SEO`
            } else if (seletor_dois.value == 'animações-e-efeitos-css') {
                resposta = `animações e e efeitos css`
            } else if (seletor_dois.value == 'flex-e-grid-display') {
                resposta = `flex e grid display`
            } else if (seletor_dois.value == 'position') {
                resposta = `position`
            } else if (seletor_dois.value == 'pseudo-classes-e-elements') {
                resposta = `pseudo classes e elements`
            } else if (seletor_dois.value == 'boas-praticas') {
                resposta = `boas praticas`
            }

        } else if (seletor_um.value == 'JavaScript') {
            if (barra == 1) {
                selecionarOpções(["Sintaxe", "DOM", "Variaveis e Tipos de Dados", "CallBacks", "Funções Anonimas e IIFE", "Arrays e Objetos", "Entrada e Formatação de Dados", "React"])
            }
            
            if (seletor_dois.value == 'sintaxe') {
                resposta = 
                `sintaxe`
            } else if (seletor_dois.value == 'dom') {
                resposta = 
                `dom`
            } else if (seletor_dois.value == 'variaveis-e-tipos-de-dados') {
                resposta = `variavies e tipos de dados`
            } else if (seletor_dois.value == 'callbacks') {
                resposta = `As CallBacks são funções que recebem como parametro outras funções`
            } else if (seletor_dois.value == 'funções-anonimas-e-iife') {
                resposta = 
                `As IIFE (<strong>I</strong>mediatli <strong>I</strong>nvoked <strong>F</strong>unction <strong>E</strong>xpression)`
            } else if (seletor_dois.value == 'arrays-e-objetos') {
                resposta = `arrays e objetos`
            } else if (seletor_dois.value == 'entrada-e-formatação-de-dados') {
                resposta = `entrada e formatação de dados`
            } else if (seletor_dois.value == 'react') {
                resposta = `react`
            }
        } else if (seletor_um.value == 'React') {
            if (barra == 1) {
                selecionarOpções(["Componentes", "JSX", "State e Props"])
            }
            
            if (seletor_dois.value == 'componentes') {
                resposta = 
                "componentes react"
            } else if (seletor_dois.value == 'jsx') {
                resposta = `jsx`
            } else if (seletor_dois.value == 'state-e-props') {
                resposta = `state e props`
            }
        } else if (seletor_um.value == 'Python') {
            if (barra == 1) {
                selecionarOpções(["Sintaxe",  "Estruturas de Controle e Repetição", "Funções", "Bibliotecas e Modularização", "Orientação a Objeto", "Manipulação de arquivos", "Automação", "Manipulação e Entrada de Dados e Strings"])
            }
            
            if (seletor_dois.value == 'sintaxe') {
                resposta = `sintaxe`
            } else if (seletor_dois.value == 'estruturas-de-controle-e-repetição') {
                resposta = `estruturas de controle e repetição`
            } else if (seletor_dois.value == 'funções') {
                resposta = `funções`
            } else if (seletor_dois.value == 'bibliotecas-e-modularização') {
                resposta = `biblioteca-e-modularização`
            } else if (seletor_dois.value == 'orientação-a-objeto') {
                resposta = `orientação a objeto`
            } else if (seletor_dois.value == 'manipulação-de-arquivos') {
                resposta = `manipulação de arquivos`
            } else if (seletor_dois.value == 'automação') {
                resposta = `automação`
            } else if (seletor_dois.value == 'manipulação-e-entrada-de-dados-e-strings') {
                resposta = `manipulação e entrada de dados e strings`
            }
        } else if (seletor_um.value == 'Logica-de-Programação') {
            if (barra == 1) {
                selecionarOpções(["Estrutura basica",  "Estruturas Condicionais", "Estruturas de Repetição", "Tipos Premitivos", "Funções", "Listas e Dicionarios"])
            }
            
            if (seletor_dois.value == 'estrutura-basica') {
                resposta = 
                `estrutura basica`
            } else if (seletor_dois.value == 'estruturas-condicionais') {
                resposta = 
                `estruturas condicionais`
            } else if (seletor_dois.value == 'estruturas-de-repetição') {
                resposta = 
                `estruturas de repetição`
            } else if (seletor_dois.value == 'tipos-premitivos') {
                resposta = `tipos premitivos`
            } else if (seletor_dois.value == 'funções') {
                resposta = `funções`
            } else if (seletor_dois.value == 'listas-e-dicionarios') {
                resposta = `listas e dicionarios`
            } 
        } else if (seletor_um.value == 'SASS') {
            if (barra == 1) {
                selecionarOpções(["Sintaxe",  "Logica e Beneficios", "Encadeamento e Modularização", "Variaveis e @mixin", "Funções e @extend", "Estruturas", "Limitações"])
            }
            
            if (seletor_dois.value == 'sintaxe') {
                resposta = 
                `sintaxe`
            } else if (seletor_dois.value == 'logica-e-beneficios') {
                resposta = 
                `logica e beneficios`
            } else if (seletor_dois.value == 'encadeamento-e-modularização') {
                resposta = 
                `encadeamento e modularização`
            } else if (seletor_dois.value == 'variaveis-e-@mixin') {
                resposta =
                `variaveis e @mixin`
            } else if (seletor_dois.value == 'funções-e-@extend') {
                resposta = 
                `funções e @extend`
            } else if (seletor_dois.value == 'estruturas') {
                resposta =
                `estruturas`
            } else if (seletor_dois.value == 'limitações') {
                resposta =
                `limitações`
            }

        } else if (seletor_um.value == 'Git&GitHub') {
            if (barra == 1) {
                selecionarOpções(["O que são?",  "Para que servem?"])
            }
            
            if (seletor_dois.value == 'o-que-são?') {
                resposta = 
                `o que são`
            } else if (seletor_dois.value == 'para-que-servem?') {
                resposta = 
                `para que servem`
            } else if (seletor_dois.value == '') {
                resposta = 
                ``
            }
            altura_grafico = 4 
        } else if (seletor_um.value == 'Conceitos-Gerais-e-Outros') {
            if (barra == 1) {
                selecionarOpções(["Clean Code", "Mobile First", "Soft Skils","Mecanismos de Busca", "Inteligencia Artificial", "Ingles", "UX/UI"]) 
            }

            if (seletor_dois.value == "clean-code") {
                resposta = 
                `clean code`
            } else if (seletor_dois.value == "mobile-first") {
                resposta = 
                `mobile first`
            } else if (seletor_dois.value == 'soft-skils') {
                resposta = 
                `soft skils`
            }
        } 

        

        let paragrafo_resposta = document.querySelector('div#paragrafo')
        paragrafo_resposta.innerHTML = resposta
    }

    organizar_opções(1)
    seletor_um.addEventListener('change', () => {organizar_opções(1)})
    seletor_dois.addEventListener('change', () => {organizar_opções(2)})
})()


;(function(){// 1#>game-boy

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

})()