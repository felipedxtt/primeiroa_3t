function calcula(){
    let c = document.getElementById ("valor").Value;
    let j = document.getElementById ("juros").Value;
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











