function moeda (atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

}
function calcula(){
    let c = document.getElementById ("valor").Value;
    let j = document.getElementById ("juros").Value;
    let t = document.getElementById ("meses").Value;
    if (!Number(c)){
        alert("Só Número burro(a).")
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
    }
    if (!Number(j)){
        alert("Só valor numérico no juros burro(a).")
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return
    }
    if (!Number(t)){
        alert("Só valor numérico burro(a).")
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();
        return
    }
    let r = c;
    for(let m = 1; m <= t; m++){
        r = c * (1 + (j /100));
        r = r;
        document.write("Mês " + m + " - valor: " + moeda(r)+"<br>")
    }

    let r = c * (1 + (j/100));
    document.write("Resultado: " + r);
}

let op = "";
function operacao(ope){
    op = ope;

}
function calcule(){
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    let r = 0;

    if(op == "+"){
        r = Number(v1) + Number(v2);
        
    }
    if(op == "-"){
        r = Number(v1) - Number(v2);
        
    }
    document.getElementById("resultado").innerHTML = r;

}


