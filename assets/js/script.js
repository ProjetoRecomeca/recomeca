const header = document.getElementById('header');
const rodape = document.getElementById('rodape');

function criarCabecalho(header) {
    console.log(header)
    if (header.classList.contains('cabecalho')) {
        header.innerHTML = `
                <div>
                    <img src="./assets/images/logo-recomeça.png" alt="Logo Recomeça">
                    <h3>Projeto</h3>
                    <h2>Recomeça</h2>
                    <p>O caminho para uma nova história</p>
                </div>

                <nav class="navegacao">
                    <a href="">Home</a>
                    <a href="">Sobre Nós</a>
                    <a href="">Nossos Serviços</a>
                    <a href="">Seja um Voluntário</a>
                    <a href="./cadastro.html" class="amarelo">Garanta sua Jornada</a>
                </nav>
            `;
    }

    else if (header.classList.contains('cabecalho-aluno')) {
        header.innerHTML = `
    <div class="navbar-linha1">
        <div class="linha1-esquerda">
            <img src="./assets/images/logo-recomeça.png" alt="Logo Recomeça" class="logo">
            <h1>Projeto Recomeça</h1>
        </div>

        <div class="linha1-direita">
            <div class="perfil-textos">
                <span class="user-name">Nome do Usuário</span>
                <a href="#" class="config">Configuração ⚙</a>
            </div>

            <div class="perfil-foto" id="pessoabtn">
               <img src="./assets/images/perfil.jpg" alt="Foto do perfil">
            </div>
        </div>
    </div>

    
    <div class="navbar-linha2">
        <nav class="menu">
            <a href="index.html">Início</a>
            <a href="aluno.html">Aluno</a>
            <a href="trilhas.html">Trilhas</a>
            <a href="#">Workshop</a>
            <a href="#">Apoio Psicológico</a>
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

imgPesosa.addEventListener('click', () => {
    alert("Você clicou na imagem")
})

