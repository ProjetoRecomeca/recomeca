import { cursosEmAndamento, cursosDisponiveis } from "./data/cursos.js";

function criarCardCursoAcessado(curso) {
    const article = document.createElement("article");
    article.classList.add("curso-card");

    const progresso = curso.progresso ?? 0;

    article.innerHTML = `
        <div class="curso-thumb" 
             style="
                background-image: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${curso.imagem}');
                background-size: cover;
                background-position: center;
             ">            
            <div class="curso-progress">
                <span class="curso-progress-text">${progresso}%</span>
                <div class="curso-progress-bar">
                    <div class="curso-progress-fill" style="width: ${progresso}%;"></div>
                </div>
            </div>
        </div>

        <div class="curso-body">
            <h3 class="curso-nome">${curso.nome}</h3>
            <p class="curso-nivel-label">Nível: ${curso.nivel}</p>
            <p class="curso-descricao">${curso.descricao}</p>
            <button class="curso-btn">Acessar</button>
        </div>
    `;

    return article;
}

function criarCardCursoDisponivel(curso) {
    const article = document.createElement("article");
    article.classList.add("trilha-card");

    article.innerHTML = `
        <div class="trilha-thumb">
            <img src="${curso.imagem}" alt="Miniatura do curso">
        </div>
        <div class="trilha-info">
            <h3 class="trilha-nome">${curso.nome}</h3>
            <p class="trilha-meta">${curso.descricao}</p>
            <div class="trilha-extra">
                <span>Carga: <strong>${curso.cargaHoraria}</strong></span>
                <span>Nível: <strong>${curso.nivel}</strong></span>
                <button class="trilha-open"><img src="./assets/images/icon-play.svg" alt="">
            </div>
        </div>
</button>
    `;

    return article;
}

function renderizarCursosAcessados(listaCursos) {
    const container = document.getElementById("listaCursosAcessados");
    container.innerHTML = "";

    listaCursos.forEach(curso => {
        const card = criarCardCursoAcessado(curso);
        container.appendChild(card);
    });
}

function renderizarCursosDisponiveis(listaCursos) {
    const container = document.getElementById("listaCursosDisponiveis");
    container.innerHTML = "";

    listaCursos.forEach(curso => {
        const card = criarCardCursoDisponivel(curso);
        container.appendChild(card);
    });
}

renderizarCursosAcessados(cursosEmAndamento);
renderizarCursosDisponiveis(cursosDisponiveis);

