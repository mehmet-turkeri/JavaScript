const yaricapInput=document.querySelector("#yaricap");

const buton=document.querySelector("#btn");

buton.onclick=()=>{

    //*ilk yapacagimiz alan cevre icin sonuclari bulmak
    const r=yaricapInput.value;

    const alan= (Math.PI*r*r).toFixed(2)

    const cevre= (2*Math.PI*r).toFixed(2)

    //* 2. yapacagimiz islem sonuclarini ekrana bastirmak

    document.querySelector(".alan").textContent=alan;
    document.querySelector(".cevre").textContent=cevre;



}

//* 2.yol butona basmak yerine Enter tusuna basincada hesap yapsin
yaricapInput.onkeydown=(e)=>{

    if(e.keyCode===13)

    buton.click() //* Buraya click yerine onclick de yazabiliriz ayni sonucu verir
}

yaricapInput.onmouseover=function(){

    yaricapInput.style.backgroundColor="darkgray"
}

yaricapInput.onmouseout=function(){

    yaricapInput.style.backgroundColor="white"
}

//* sayfa ilk yuklendiginde mouse (cursor) inputun icinde olsun =focus();
window.onload=()=>{
    yaricapInput.focus();
}