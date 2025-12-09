const header = document.getElementById('header');
const rodape = document.getElementById('rodape');

function criarCabecalho(header) {
    if (header.classList.contains('cabecalho')) {
        header.innerHTML = `
                <div>
                    <img src="./assets/images/logo-recomeça.png" alt="Logo Recomeça">
                    <h3>Projeto</h3>
                    <h2>Recomeça</h2>
                    <p>O caminho para uma nova história</p>
                </div>

                <nav class="navegacao">
                    <a href="#home">Home</a>
                    <a href="#sobre">Sobre Nós</a>
                    <a href="#nossos-servicos">Nossos Serviços</a>
                    <a href="#voluntarios">Seja um Voluntário</a>
                    <a href="./cadastro.html" class="amarelo">Garanta sua Jornada</a>
                </nav>
            `;
    }

    else if (header.classList.contains('cabecalho-aluno')) {
        header.innerHTML = `
    <div class="navbar-linha1">
        <div class="linha1-esquerda">
            <img src="./assets/images/logo-clara.png" alt="Logo Recomeça" class="logo">
            <h1>Projeto Recomeça</h1>
        </div>

        <div class="linha1-direita">
            <div class="perfil-textos">
                <span class="user-name">Nome do Usuário</span>
                <a href="#" class="config" id="pessoabtn">SAIR <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/c4/logout-31dva2zl3l9ao92pwnmgnt.png/logout-6bjs3s3fnciv7c0ye52y3l.png?_a=DATAg1AAZAA0" width="15"></a>
            </div>

            <div class="perfil-foto">
               <img src="./assets/images/perfil.jpg" alt="Foto do perfil">
            </div>
        </div>
    </div>

    
    <div class="navbar-linha2">
        <nav class="menu" id="navegacao">
            <a href="aluno.html">Início</a>
            <a href="trilhas.html">Trilhas</a>
            <a href="workshop.html">Workshop</a>
            <a href="apoio.html">Apoio Psicológico</a>
        </nav>

        <div class="search-wrapper">
            <div class="search-box">
                <input type="text" placeholder="Digite sua busca">
                <button class="search-btn">🔍</button>
            </div>
        </div>
    </div>
    
    `
    }

    const navegacao = document.getElementById('navegacao');

    if (header.classList.contains('1') ||
        header.classList.contains('2') ||
        header.classList.contains('3') ||
        header.classList.contains('4')) {

        const filhos = navegacao.children;

        switch (true) {
            case header.classList.contains('1'):
                filhos[0].style.fontWeight = '700';
                break;

            case header.classList.contains('2'):
                filhos[1].style.fontWeight = '700';
                break;

            case header.classList.contains('3'):
                filhos[2].style.fontWeight = '700';
                break;

            case header.classList.contains('4'):
                filhos[3].style.fontWeight = '700';
                break;
        }
    }
}

function criarRodape(rodape) {
    rodape.innerHTML = `
        <div class="rodape-logo">
                <img src="./assets/images/logo-clara.png" alt="Logo Recomeça Branca" class="logo-rodape">
                <h3>projeto</h3>
                <h2>Recomeça</h2>
                <p>O caminho para uma nova história</p>
        </div>

            <div class="rodape-contatos">
                <h4>Nossos Contatos</h4>
                <ul>
                    <li><img src="./assets/images/github-icon.png" alt="Ícone do Github "></li>
                    <li><img src="./assets/images/youtube-icon.png" alt="Ícone do Youtube"></li>
                    <li><img src="./assets/images/instagram-icon.png" alt="Ícone do Instagram"></li>
                </ul>
        </div>
    `
}

criarCabecalho(header);
criarRodape(rodape);

const imgPesosa = document.getElementById("pessoabtn")


if (imgPesosa) {

    imgPesosa.addEventListener('click', () => {
       const resp = confirm("Tem certeza que deseja sair da página?")

       if(resp) {
        window.location.assign('index.html')
       }
    }) 
}

