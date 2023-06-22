function hesapla() {
    // kullanıcının girdiği sayıları al
    const sayi1 = Number(document.getElementById("sayi1").value);
    const sayi2 = Number(document.getElementById("sayi2").value);
    const sayi3 = Number(document.getElementById("sayi3").value);
    const sayi4 = Number(document.getElementById("sayi4").value);
    

    // çarpma işlemi
    const carpim = sayi1 * sayi2 * sayi3;
   

    // bölme işlemi
    const bolum = carpim / sayi4;
   

    // sonuçları göster
    document.getElementById("sonuclar").innerHTML = ` %e1 ${bolum}'dir.`;
    
}

function hesapla2(){

    //%e2 verilerini al

    const  e1 = Number(document.getElementById("e1").value);
    const  e2 = Number(document.getElementById("e2").value);
    const  e3 = Number(document.getElementById("e3").value);
    const  e4 = Number(document.getElementById("e4").value);
    //carpma 

    const carpim2 = e1 * e2 * e3;

    //bölme

    const bolum2 = carpim2 / e4

    //sonuc

    document.getElementById("sonuclar2").innerHTML = `%e2 ${bolum2}'dir.`;
}


function hesapla3(){

    //%e2 verilerini al

    const  e5 = Number(document.getElementById("e5").value);
    const  e6 = Number(document.getElementById("e6").value);
    const  e7 = Number(document.getElementById("e7").value);
    const  e8 = Number(document.getElementById("e8").value);
   
    //carpma 

    const carpim3 = e5 * e6 * e7;

    //bölme

    const bolum4 = carpim3 / e8

    //sonuc

    document.getElementById("sonuclar3").innerHTML = `%e3 ${bolum4}'dir.`;
}


function hesapla() {
    var girilenDeger = parseInt(document.getElementById("girilenDeger").value);
    var ilkKisim = girilenDeger <= 8000 ? (girilenDeger * 0.6) : (8000 * 0.6);
    var ikinciKisim = girilenDeger <= 8000 ? 0 : ((girilenDeger - 8000) * 0.4);
    var toplam = ilkKisim + ikinciKisim;
    document.getElementById("sonuc").innerHTML = "Sonuç: " + toplam;
  }
