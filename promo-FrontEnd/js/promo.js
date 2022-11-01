carregarPromo();

document.getElementById("formCadastroPromo").addEventListener("submit", function(event){
    event.preventDefault();

    let tipoMetodo = "POST";
    let idPromo = document.getElementById("inputId").value;
    if(idPromo !== ""){
        tipoMetodo = "PUT";
    }
    fetch('http://localhost:8080/promo', {
        method: tipoMetodo,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id: idPromo,
            titulo: document.getElementById("inputTitulo").value, 
            cupom: document.getElementById("inputCupom").value, 
            preco: document.getElementById("inputPreco").value, 
            descricao: document.getElementById("inputDescricao").value, 
            link: document.getElementById("inputLink").value
        })
    }).then( response => {
        if(!response.ok){
            throw new Error(response);
        }
        carregarPromo();
        document.getElementById("formCadastroPromo").reset();
    }).catch( error => {
        console.log(error);
        alert("Houve um erro. Favor verificar o log");
    });
});

function carregarPromo(){
    fetch('http://localhost:8080/promo', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if(!response.ok){
            throw new Error(response);
        }
        return response.json();
    }).then( content => {
        let div = document.getElementById('promocoes');
        div.innerHTML = '';
        content.forEach( c => {
            let div0 = document.createElement('div');
            div0.className = "border border-dark p-3 border-opacity-50 rounded my-2";
            div.appendChild(div0);

            let row_div1 = document.createElement('div');
            row_div1.className = 'row';
            div0.appendChild(row_div1);

            let div1 = document.createElement('div');
            div1.className = 'col-9';
            row_div1.appendChild(div1);

            let tagTitulo = document.createElement('h5');
            tagTitulo.textContent = c.titulo;
            div1.appendChild(tagTitulo);
            let tagParag = document.createElement('p');
            tagParag.innerHTML = c.descricao;
            div1.appendChild(tagParag);

            let div2 = document.createElement('div');
            row_div1.appendChild(div2);
            div2.className = 'col-2 text-center m-auto';
            row_div1.appendChild(div2);

            if(c.preco != null){
                let tagPreco = document.createElement('h5');
                tagPreco.innerHTML = `R$ ${c.preco},00`;
                div2.appendChild(tagPreco);
            }

            let tagCupom = document.createElement('h5');
            tagCupom.setAttribute('style', 'text-transform: uppercase;');
            tagCupom.innerHTML = c.cupom;
            div2.appendChild(tagCupom);

            let divAcoes = document.createElement('div');
            divAcoes.className = 'col-1 text-end';
            row_div1.appendChild(divAcoes);

            let botaoEditar = document.createElement('button');
            botaoEditar.setAttribute('style', 'background: none; border: 0; text-align: end;');
            botaoEditar.setAttribute('onclick', `editarPromo(${c.id})`);
            botaoEditar.innerHTML = '<span class="material-symbols-outlined">edit_square</span>';
            divAcoes.appendChild(botaoEditar);

            let botaoExcluir = document.createElement('button');
            botaoExcluir.setAttribute('style', 'background: none; border: 0; text-align: end;');
            botaoExcluir.setAttribute('onclick', `apagarPromo(${c.id})`);
            botaoExcluir.innerHTML = '<span class="material-symbols-outlined">delete</span>';
            divAcoes.appendChild(botaoExcluir);

            let botaoLink = document.createElement('button');
            botaoLink.setAttribute('style', 'background: none; border: 0; text-align: end;');
            divAcoes.appendChild(botaoLink);
            let a = document.createElement('a');
            a.setAttribute('href', `${c.link}`);
            a.setAttribute('target', '_blank');
            a.innerHTML = '<span class="material-symbols-outlined">north_east</span>';
            botaoLink.appendChild(a);
            
            // tagAcoes.innerHTML = htmlBotaoEditarPromo(c.id) + htmlBotaoApagarPromo(c.id) + htmlBotaoDirecionarPromo(c.link);
        });
    }).catch( error => {
        console.log(error);
        alert("Houve um erro. Favor verificar o log!");
    });
}

function apagarPromo(id){
    fetch('http://localhost:8080/promo/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if(!response.ok){
            throw new Error(response);
        }
        carregarPromo();
    }).catch( error => {
        console.log(error);
        alert("Houve um erro. Favor verificar o log.");
    });
}

function htmlBotaoApagarPromo(id){
    return `<div class="row">
                <button style="background: none; border: 0; text-align: end;" onclick="editarPromo(${id})">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>`;
}

function htmlBotaoDirecionarPromo(link){
    return `<div>
                <button style="background: none; border: 0; text-align: end;">
                    <a href="${link}">
                        <span class="material-symbols-outlined text-dark">north_east</span>
                    </a>
                </button>
            </div>`;
}

function editarPromo(id){
    fetch('http://localhost:8080/promo/'+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if(!response.ok){
            throw new Error(response);
        }
        return response.json();
    }).then( content =>{
        document.getElementById("inputId").value = content.id;
        document.getElementById("inputTitulo").value = content.titulo;
        document.getElementById("inputCupom").value = content.cupom;
        document.getElementById("inputPreco").value = content.preco;
        document.getElementById("inputDescricao").value = content.descricao;
        document.getElementById("inputLink").value = content.link;
    }).catch( error => {
        console.log(error);
        alert("Houve um erro. Favor verificar o log.");
    });
}

function htmlBotaoEditarPromo(id){
    return `<div class="row">
                <button style="background: none; border: 0; text-align: end;" onclick="editarPromo(${id})>
                    <span class="material-symbols-outlined">edit_square</span>
                </button>
            </div>`;
}

