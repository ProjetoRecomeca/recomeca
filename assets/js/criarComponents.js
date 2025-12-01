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

function renderizarCursosAcessados(listaCursos) {
    const container = document.getElementById("listaCursosAcessados");
    container.innerHTML = "";

    listaCursos.forEach(curso => {
        const card = criarCardCursoAcessado(curso);
        container.appendChild(card);
    });
}

renderizarCursosAcessados(cursosEmAndamento);
