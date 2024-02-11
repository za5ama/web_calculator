function appendtomain(x){
    let out=document.getElementById("output");
    out.value+=x;
}
function calc(){
    let out=document.getElementById("output");
    try{out.value=eval(out.value)}
    catch{out.value='Error'}
}
function clr(){
    let out=document.getElementById("output");
    out.value=""
}
function del(){
    let out=document.getElementById("output");
    let endp=out.value.length-1
    out.value=out.value.substring(0,endp)
}