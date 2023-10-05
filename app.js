// Toplama işlemini gerçekleştiren fonksiyon
function toplamaIslemi() {
    // İlk metin kutusunun değerini al
    var sayi1 = parseFloat(document.getElementById("plustextbox1").value);
  
    // İkinci metin kutusunun değerini al
    var sayi2 = parseFloat(document.getElementById("plustextbox2").value);
  
    // Toplama işlemi yap ve sonucu al
    var sonuc = sayi1 + sayi2;
  
    // Sonucu ekranda göster
    document.getElementById("plustextbox3").value = sonuc; 
}
  
  // Topla butonuna tıklandığında toplama işlemini çağır
  document.getElementById("toplama").addEventListener("click", toplamaIslemi);

function cikarmaIslemi(){
  var sayi1 = parseFloat(document.getElementById("ngtvtextbox1").value);
  var sayi2 = parseFloat(document.getElementById("ngtvtextbox2").value);

  var sonuc = sayi1 - sayi2;

  document.getElementById("ngtvtextbox3").value = sonuc;
}

document.getElementById("cikarma").addEventListener("click", cikarmaIslemi);

function bölmeIslemi(){
  var sayi1 = parseFloat(document.getElementById("divtextbox1").value);
  var sayi2 = parseFloat(document.getElementById("divtextbox2").value);

  var sonuc = sayi1 / sayi2;

  document.getElementById("divtextbox3").value = sonuc;

}

document.getElementById("bölme").addEventListener("click", bölmeIslemi);

function carpmaIslemi(){
  var sayi1 = parseFloat(document.getElementById("mltptextbox1").value);
  var sayi2 = parseFloat(document.getElementById("mltptextbox2").value);

  var sonuc = sayi1 * sayi2;

  document.getElementById("mltptextbox3").value = sonuc;
}

document.getElementById("carpma").addEventListener("click", carpmaIslemi);
  