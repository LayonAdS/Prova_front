
var dadoslista = [];
function SalvarGasto(){
    let Descricao = document.getElementById("Descricao").value;
    let Valor = document.getElementById("Valor").value;
    let Categotia = document.getElementById("Categoria").value;
    if(Descricao == "" || Valor == "" || Categotia == "" ){
        alert("preencha todos os campos!");
        return;
    }else{
        dadoslista.push(Descricao);
        dadoslista.push(Valor);
        dadoslista.push(Categotia);
        alert("Gasto Salvo com sucesso!");
        document.getElementById("Descricao").value = "";
        document.getElementById("Valor").value = "";
        document.getElementById("Categoria").value = "";
        console.log(dadoslista);
    }


}