function calcula(){
    let c = document.getElementById ("valor").Value;
    let j = document.getElementById ("juros").Value;
    let r = c * (1 + (j/100));
    document.write("Resultado: " + r);
}
