a=[];
function s(){
    var b=document.getElementById("i1").value;
    var c=document.getElementById("i2").value;
    var d=document.getElementById("i3").value;
    var e=document.getElementById("i4").value;
    a.push(b);
    a.push(c);
    a.push(d);
    a.push(e);
    console.log(a);
    document.getElementById("ans").innerHTML=a;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

}
function sort(){
    a.sort();
    console.log(a);
    document.getElementById("ans").innerHTML=a;
}