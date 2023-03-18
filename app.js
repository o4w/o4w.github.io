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
				document.getElementById("sonuclar").innerHTML = `Sayı 1, Sayı 2 ve Sayı 3'ün çarpımı ${carpim}'dir ve Sayı 4'e bölündüğünde sonuç ${bolum}'dir.`;
			}
