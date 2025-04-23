let dadoslista = [];
let indiceEdicao = -1; // Variável global para rastrear o índice do item sendo editado

function salvarGasto() {
    let Descricao = document.getElementById("Descricao").value;
    let Valor = document.getElementById("Valor").value;
    let Categotia = document.getElementById("Categoria").value;

    if (Descricao == "" || Valor == "" || Categotia == "") {
        alert("Preencha todos os campos!");
    } else {
        if (indiceEdicao !== -1) { 
            dadoslista[indiceEdicao] = { descricao: Descricao, valor: parseFloat(Valor), categoria: Categotia };
            alert("Gasto atualizado com sucesso!");
            indiceEdicao = -1; 
        } else {
            dadoslista.push({ descricao: Descricao, valor: parseFloat(Valor), categoria: Categotia });
            alert("Gasto Salvo com sucesso!");
        }
        document.getElementById("Descricao").value = "";
        document.getElementById("Valor").value = "";
        document.getElementById("Categoria").value = "";
        criarLista(); 
        totalGastos(); 
    }
}

function criarLista() {
    let tabela = "<tr><th>Descrição</th><th>Valor</th><th>Categoria</th><th>Ações</th></tr>";
    for (let i = 0; i < dadoslista.length; i++) {
        tabela += `<tr>
            <td>${dadoslista[i].descricao}</td>
            <td>${dadoslista[i].valor.toFixed(2)}</td>
            <td>${dadoslista[i].categoria}</td>
            <td>
                <button class='btn btn-warning' onclick='editarGasto(${i})'>Editar</button>
                <button class='btn btn-warning' onclick='excluirGasto(${i})'>Excluir</button>
            </td>
        </tr>`;
    }
    document.getElementById("tabela").innerHTML = tabela;
}

function excluirGasto(i) {
    if (confirm("Tem certeza que deseja excluir este gasto?")) {
        dadoslista.splice(i, 1);
        document.getElementById("tabela").deleteRow(i + 1); 
        criarLista();
        totalGastos();
        alert("Gasto excluído com sucesso!");
    }
}

function editarGasto(i) {
    const gasto = dadoslista[i];
    document.getElementById("Descricao").value = gasto.descricao;
    document.getElementById("Valor").value = gasto.valor;
    document.getElementById("Categoria").value = gasto.categoria;
    indiceEdicao = i; 
}

function totalGastos() {
    let total = 0;
    for (let i = 0; i < dadoslista.length; i++) {
        total += dadoslista[i].valor;
    }
    document.getElementById("total").innerHTML = "Total de Gastos: R$" + total.toFixed(2);
}

window.onload = function () {
    criarLista();
    totalGastos();
};