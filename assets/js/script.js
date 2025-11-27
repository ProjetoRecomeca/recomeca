const header = document.getElementById('header');

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
}

criarCabecalho(header);

