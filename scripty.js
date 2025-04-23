let dadoslista = [];

function salvarGasto(){
    let Descricao = document.getElementById("Descricao").value;
    let Valor = document.getElementById("Valor").value;
    let Categotia = document.getElementById("Categoria").value;

    if(Descricao == "" || Valor == "" || Categotia == ""){
        alert("Preencha todos os campos!");
    }
    else{
        dadoslista.push({ descricao: Descricao, valor: parseFloat(Valor), categoria: Categotia });
        alert("Gasto Salvo com sucesso!");
        document.getElementById("Descricao").value = "";
        document.getElementById("Valor").value = "";
        document.getElementById("Categoria").value = "";
        console.log(dadoslista);
        criarLista();
        totalGastos();
    }
}

function criarLista(){
    let tabela = "<tr><th>Descrição</th><th>Valor</th><th>Categoria</th><th>Ações</th></tr>";
    for(let i = 0; i < dadoslista.length; i++){
        tabela += "<tr><td>" + dadoslista[i].descricao + "</td><td>" + dadoslista[i].valor.toFixed(2) + "</td><td>" + dadoslista[i].categoria + "</td><td><button class='btn btn-warning' onclick = 'excluirGasto(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
    }
    document.getElementById("tabela").innerHTML = tabela;
}

function excluirGasto(i){
    dadoslista.splice((i-1),1);
    document.getElementById("tabela").deleteRow(i);
    criarLista(); 
    totalGastos(); 
    alert("Gasto excluído com sucesso!");
}

function totalGastos(){
    let total = 0;
    for(let i = 0; i < dadoslista.length; i++){
        total += dadoslista[i].valor;
    }
    document.getElementById("total").innerHTML = "Total de Gastos: R$" + total.toFixed(2);
}

