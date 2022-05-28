//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atılabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).

const yas=25;
console.log(yas);

console.log(typeof yas);

//! hata const degeri degistirilemez
//yas=27;
//console.log(yas);

//! const keyword une basklangic atamasi yapmak zorunlu
//const pi;

const kelime="osman";
console.log(kelime, typeof kelime);

const isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);

const parite = 1.1;
console.log(parite);
console.log(typeof parite);

const name1 = "Clarusway";
const name2 = "developer";
console.log(name1, name2);

// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil;
dil="javascript";

console.log(dil);

dil=true;
console.log(dil, typeof dil);

dil=null;
console.log(dil, typeof dil);

let sayi=5;
let sonuc=sayi+6;
console.log(sonuc);

//! degisken taminlama keyword u kullanilmasa bile JS derleyicisi otomatik olarak tanimlar
sayi1="6"
console.log(sayi1, typeof sayi1);

//! Bir string ile number toplanirsa aslinda toplama yapmaz, concatination yapar.
sonuc1=sayi1+5;
console.log(sonuc1);

// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.

var x=5;
console.log(x);

console.log("*********************************");

var ilk="Global";
console.log(ilk);

{
    console.log(ilk);//Global
    ilk="Suslu";
    console.log(ilk);//Suslu
}

// ilk="Bosluk";
console.log(ilk);//Suslu

console.log("*********************************");
// en üste global olarak yazarsak let kullansakta başka scope lardan ulaşabiliriz
let first="ahmet";

// scope içindeki let e yapılan değişiklik scope da kalır, dışarıdan kimse ulaşama
{let first="osman";
console.log(first);}

{
 let first="ipek";
 console.log(first); //ipek
}
console.log(first); //ahmet
{console.log(first)} //ahmet,


   








