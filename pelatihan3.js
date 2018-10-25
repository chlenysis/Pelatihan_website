function ON(){
    document.getElementById('lampu').src='pic_bulbon.gif';
}
function OFF(){
    document.getElementById('lampu').src='pic_bulboff.gif';
}
function Destroy(){
    document.getElementById('Tulisan').style.display='none'
}
function show(){
    document.getElementById('Tulisan').style.display='block'
}

var x;
x=10;
y="test";
z=x+y;
function Hitung(){
    window.alert(z);
}
var x = new Date(2012,12,21,12);
function show_Tanggal(){
    document.getElementById('Tulisan').innerHTML=x;
}
function input_show(){
    var teks= document.getElementById("mytext").value;
    document.getElementById("Tampilkan").innerHTML=teks;
}