// let string = 14;
// let yas = 23;

// console.log(string - yas);


// let sayi1 = 15;
// let sayi2 = 15;

// console.log(sayi1+sayi2);


// let not1 = 40;
// let not2 = 65;

// let sonuc = (not1+not2)/2;



// console.log(sonuc);



// let a =5;

// console.log(2<3 && 4<1);

// let yas =20;
// let para =3500;
// let saglikliMi =false;
// let hakSayisi = 3;

// let sonuc = "";

// document.write = "Ehliyet Almaya hak kazandınız"


// console.log((para>3000 && hakSayisi>1 ) || (yas>18 && saglikliMi));


/*

== eşitmi
!= eşit değilmi





*/

// let yas = 12;

// console.log(yas<=11);


// diyalog kutuları


// -alert
// -prompt
// -prompt


// console.log(window)

// alert("işleminize devam etmeden önce kayıt etmelisiniz");

// let isim = prompt("Kullanıcı Adı:");
// let sifre = prompt("şifre");

// console.log("Kullanıcı Adı" + isim, "Şifre"  + sifre);


// let sonuc = confirm("Silmek isteğinize Eminmisiniz ?");

// console.log(sonuc);


// if true ise else blokları çalışmaz false ise else blokları çalışır


// let not = 56;


// if(not>50){

//     console.log("geçtiniz , :" + not)


// }

// else{

//     console.log("Kaldınız, notunuz :" + not)


// }


// let yas = Number(prompt("Yaşınız :"));
// let para = Number (prompt("Paranız :"));

// if(yas>=18 && para>= 3000){

//     alert("ehliyet alabilirsiniz")




// }

// else{

//     alert("Ehliyet alamazsın")

// }






// let secilenyol = prompt("Yol Seçiniz")

// if(secilenyol==1){

//      alert("Seçilen yol " + secilenyol + ". yoldur");

// }

// else if(secilenyol==2){

//     alert("seçilen yol " + secilenyol +".yoldur");


// }


/* ad soyad tckn

    Ad: boş olamaz
    tckn : 11 karakterden oluşsun


// */
// let ad = prompt("isminizi girin");

// let tckn = prompt("Tckn giriniz");

// check(ad, tckn);

// function check(ad, tckn){

//    if ( ad!= ""){

//           if(tckn.length ==11){

//             console.log("isim ve tckn doğrulandı")

//           }
//           else{

//             console.log("tckn 11 karakterden az veya daha fazla olamaz")
//           }


//    }
//    else {

//     console.log("İsiminizi Giriniz")
//    }


// }



// vize1 %40 final %60


// let vize1 = Number(prompt("Vize Notunuz : "));
// let final = Number(prompt("Final Notunuz :"));

// function ortalama (vize1, final)

// let ortalama = vize1*0.4 + final*0.6;



// if(ortalama>=60){

//     alert("Dersten geçtiniz");

// }

// else{

//    alert("Dersten kaldınız")

// }



// let kilo = Number(prompt("Kilonuzu Giriniz"));

// let boy = Number(prompt("Boyunuzu Metre cinsinden giriniz"))


// let sonuc = kilo/(boy*2);


// if(sonuc<=18.5){

// console.log("İdeal kilo altında" + sonuc)
// }

// else if (sonuc>=18.5 && sonuc<=24.9){

//   console.log("İdeal kilo üstünde" + sonuc)

// }

// else if(sonuc>=25 && sonuc<=29.9){
//   console.log("İdeal kiloda " + sonuc)
// }

// else if(sonuc>=30 && sonuc<=39.9){
//   console.log("İdeal Çok üstünde" + sonuc)
// }

// else if(sonuc>=40 + sonuc){
//   console.log("İdeal kilonun çok üstünde doktora danışın")
// }



// let dizel = 24.50;
// let benzin = 22.20;
// let lpg = 11;

// const yeniSatir = "\r\n";

// const yakitmetni = "1-dizel" +yeniSatir
// +"2-Benzin" + yeniSatir
// +"3-Lpg" + yeniSatir
// + "Yakit Türünüzü Seçiniz";

// let yakitTipi = prompt(yakitmetni);
// let yakitLitresi = Number(prompt("Yakıt Litre"))
// let bakiye = Number(prompt("Bakiye"))


// if(yakitTipi==1){
//     //Dizel
//      let tutar = dizel*yakitLitresi;
//      if(tutar<=bakiye){
//        // Bakiyeniz yeterlidir

//        alert("Teşekkür ederiz ödeme başarılı")
//      }
//      else{

//        alert("Bakiyeniz Yetersizdir" + yeniSatir +
//        "Ödenecek tutar" + "-->" + tutar + yeniSatir +
//        "Geriye Kalan ödeme tutarı" + (tutar-bakiye)


//       )

//      }



// }

// else if(yakitTipi==2){
//    //BENZİN 
// }

// else if(yakitTipi){
//   //LPG
// }

// let sayi = prompt("Lütfen bir sayı giriniz");

// switch(sayi){


//  case "1" :
//       console.log("girilen sayı 1'dir");

//       break;

//  case "2" :

//       console.log("girilen sayı 2");

//       break;
// case "3" :

//     console.log("girilen sayı 3");

//     break;

// case "4" :
//     console.log("girilen sayı 4");


//     break;


// case "5" :

// console.log("girilen sayı 5")

// break;

// case "6" :


// console.log("girilen sayı 6")

// break;


// case "7" :


//   console.log("girile sayı 7")

//   break;


//   default :

//   console.log("girilen sayı 1 ile 7 arasında olmalıdır")

//   break;

// }

// let yeniSatir = "\r\n";
// let metin = "1-Pazartesi" + yeniSatir
//     + " 2 Salı" + yeniSatir
//     + "3 Çarşamba" + yeniSatir
//     + "4 Perşembe" + yeniSatir
//     + "5 Cuma" + yeniSatir
//     + "6 Cumartesi" + yeniSatir
//     + " 7Pazar";


// let deger = prompt("Bir sayı giriniz");

// switch (deger) {

//     case "1":

//         alert("Seçilen Gün Pazartesidir");

//         break;

//     case "2":

//         alert("Seçilen gün Salıdır")


//         break;

//     case "3":

//         alert("Seçilen gün çarşambadır")

//         break;


//     case "4":


//         alert("Seçilen gün perşembedir")

//         break;

//     case "5":

//         alert("Seçilen gün Cumadır")

//         break;


//     case "6":

//         alert("Seçilen Gün Cumartesidir")

//         break;

//     case "7":

//         alert("Seçilen Gün Pazardır")

//         break;


//         default : "Geçerli bir sayı giriniz"


//         break;



// }

// let yeniSatir = "\r\n"
// let bakiye = 1500;



// let metin = "1-Bakiye görüntüleme"+ yeniSatir
// + "2-Para çekme" + yeniSatir 
// + "3-Para Yatırma" + yeniSatir
// + "4-Çıkış" + yeniSatir
// +"Lütfen bir değer seçiniz";

// // alert(metin);

// let secim = prompt(metin);

// switch(secim){

//    case "1" : 

//           alert("Bakiyeniz : " + bakiye)

//           break;


//     case "2" : 

//        let cekilecekTutar = prompt("Çekmek istediğiniz Tutarı Giriniz : ")

//        if(cekilecekTutar<=bakiye){

//               alert("Çekim işlemi başarılı İşlem Sonrası Bakiyeniz" + ("---->") + (bakiye - cekilecekTutar))
        
//               break;

//        }else(cekilecekTutar>bakiye)

//        alert("Yetersiz Bakiye çekim işlemi yapılamadı")

      
    
//         break;

//         case "3" :

//         let  yatirma = Number(prompt("Yatırmak İstediğiniz tutarı giriniz: "))

//         alert("Yatırma İşlemi Sonrası bakiyeniz" + (bakiye+yatirma));

//         console.log(typeof yatirma);
//         console.log(typeof bakiye);

//         break;


//         case "4" : 

//        alert( "Çıkış Yapıldı")

//         break;


//         default : 
//         alert("Lütfen 1-4 Arası bir sayı giriniz")

//         break;
 
// }



//  let yeniSatir = "\r\n";
//  let turkcedogru , turkceyanlis = 0;
//  let matdogru  , matyanlis = 0;
//  let sosdogru , sosyanlis = 0;
//  let fendogru , fenyanlis = 0;

//  let mesaj = "Tyt puan hesaplama uygulaması" + yeniSatir
//  + "1- Puan Hesapla" + yeniSatir + "2-Çıkış yap"

// //  alert(mesaj);
//  let secim = prompt(mesaj)

//  switch(secim){

//   case "1" :
 
//     let turkcedogru = Number(prompt("Türkçe Doğru Sayısı"));
//     let turkceyanlis = Number(prompt("Türkçe Yanlış Sayısı"));
//     let turkcenet = turkcedogru-turkceyanlis;

//     let matdogru = Number(prompt("Matematik Doğru Sayısı"));
//     let matyanlis = Number(prompt("Matematik Yanlış Sayısı"))
//     let matnet = matdogru-matyanlis;

//     let sosdogru = Number(prompt("Sosyal Bilimler Doğru Sayısı"));
//     let sosyanlis = Number(prompt("Sosyal Bilimler Yanlış Sayısı"));
//     let sosnet = sosdogru-sosyanlis;

//     let fendogru = Number(prompt("Fen Bilgileri Doğru Sayısı"))
//     let fenyanlis = Number(prompt("Fen Bilimleri Yanlış Sayısı"))
//     let fennet = fendogru-fenyanlis;


//     let toplamsayi = (turkcenet*4) + (matnet*4) + (sosnet*4) + (fennet*4) ;
    

//     let osym = 100;
//     alert(toplamsayi+osym);


//   break;




//  }



// let yeniSatir = "\r\n";

// let mesaj = "Vize Puanı" + yeniSatir 
// + "Final Puanı"


// let vize = 0;
// let final = 0;


// let vizepuanı = Number(prompt("Vize Puanı Giriniz"));
// let finalpuanı = Number(prompt("Final Notunuzu Giriniz"));

// let sonuc = (vizepuanı*0.4) + (finalpuanı*0.6)

// if(sonuc<=50){
   
//     alert("Başarısız" + sonuc)

 
// }

// else if(sonuc>=50){

//     alert("Başarılı" + sonuc)

    
// }


       
//  for(let i =0; i<=10 ; i+=2){


//    console.log(i);


//  }


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))






    







