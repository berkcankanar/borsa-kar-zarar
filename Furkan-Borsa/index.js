//Tablolar arasında geçiş fonksiyonu
$(function () {
    function visible(x) {
        $("#alışSatışTable").hide();
        $("#karZararTable").hide();
        $("#jsObjects").hide();
        $("#jsSymbols").hide();
        $('.searchBar').hide();
        x.show();
    }
    $("#tableSpan1").click(function () {
        visible($("#alışSatışTable"))
    })
    $("#tableSpan2").click(function () {
        visible($("#karZararTable").show())
    })
    $("#tableSpan3").click(function () {
        visible($("#jsObjects").css("display", "flex"))
    })
    $("#tableSpan4").click(function () {
        visible($("#jsSymbols").css("display", "flex"))
    })
})
//Sayfa yüklenince çalışacaklar
function run(hisse, whoIsIt = "berkcan") {
    // Datalist options oluşturucu
    $("#sembollerDOM").empty();
    for (i = 0; i < semboller.length; i++) {
        $("#sembollerDOM").append(`<option value="${semboller[i]}">${semboller[i]}</option>`);
        if (hisse) {
            if (!(semboller.includes(hisse.isim))) {
                $("#sym").append(`"${hisse.isim}",`)
                semboller.push(hisse.isim);
            }
        }
    }
    table1Func();
    table2Func();
    gt();
}
run("");

function Hisse(tarih, ay, isim, adet, fiyat, alış, satış) {
    this.tarih = tarih;
    this.ay = ay;
    isim = isim.trim();
    this.isim = isim;
    this.adet = adet;
    this.fiyat = fiyat;
    if (alış) {
        this.alış = (adet * fiyat).toFixed(2);
        this.color = "bg-success";
        this.satış = 0;
    }
    else if (satış) {
        this.satış = (adet * fiyat).toFixed(2);
        this.alış = 0;
        this.color = "bg-danger";
    }
}
function hisseFunc() {
    const date = $("#tarih").val().split("-");
    const tarih = [date[2], date[1], date[0]];

    const hisse = new Hisse(
        tarih.join("/"),
        tarih[1],
        $("#sembol").val(),
        $("#adet").val(),
        $("#fiyat").val(),
        $("#alış").is(":checked"),
        $("#satış").is(":checked")
    );
    hisseler.push(hisse);
    if (semboller.length == 0) {
        $("#sym").append(`"${hisse.isim}",`)
        semboller.push(hisse.isim);
    }
    run(hisse);
    jsObjectFunc(hisse);

    //reset
    $("#sembol").val("");
    $("#adet").val("");
    $("#fiyat").val("");
}

function table1Func() {
    $("#table1").empty();
    for (i = hisseler.length - 1; i >= 0; i--) {
        $("#table1").append(`
        <tr class="${hisseler[i].color}">
            <td>${hisseler[i].tarih}</td>
            <td>${hisseler[i].isim}</td>
            <td>${hisseler[i].adet}</td>
            <td>${hisseler[i].fiyat}</td>
            <td>${hisseler[i].alış}</td>
            <td>${hisseler[i].satış}</td>
        </tr>`)
    }
}
function table2Func() {
    $("#table2").empty();
    semboller.sort().forEach(element => {
        let alışlar = 0;
        let satışlar = 0;
        let alınanHisse = 0;
        let satılanHisse = 0;
        for (i = 0; i < hisseler.length; i++) {
            if (hisseler[i].isim == element && hisseler[i].alış != 0) {
                alışlar += parseFloat(hisseler[i].alış);
                alınanHisse += parseInt(hisseler[i].adet);
            }
            else if (hisseler[i].isim == element && hisseler[i].satış != 0) {
                satışlar += parseFloat(hisseler[i].satış);
                satılanHisse += parseInt(hisseler[i].adet);
            }
        }
        $("#table2").append(`
            <tr>
                <td>${element}</td>
                <td>${alınanHisse}</td>
                <td>${Math.round(alışlar)}</td>
                <td>${satılanHisse}</td>
                <td>${Math.round(satışlar)}</td>
                <td>${(satışlar - alışlar).toFixed(2)}</td>
                <td>${((satışlar - alışlar) / alışlar * 100).toFixed(2)}%</td>
            </tr>`
        )
    });
}

// Objeler
function jsObjectFunc(hisse) {
    $("#obj").append(` {<br>
            "tarih": "${hisse.tarih}", "ay": ${hisse.ay}, "isim": "${hisse.isim}", "adet": ${hisse.adet}, "fiyat": ${hisse.fiyat}, "alış": ${hisse.alış}, "color": "${hisse.color}", "satış": ${hisse.satış},
        <br>},`)
}
//Copy
$(function () {
    $("#objCopy").click(function () {
        let textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        let copy = $("#obj").text();
        textarea.value = copy;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    })
    $("#symCopy").click(function () {
        let textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        let copy = $("#sym").text();
        textarea.value = copy;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    })
})
// Genel Toplam
function gt() {
    let genelToplam = 0;
    let tr = $("#table2 tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        genelToplam += parseFloat(td.innerText);
    }
    genelToplam = parseInt(genelToplam);
    console.log(genelToplam);
    $("#gt").text(genelToplam);
}
// Hesapla 
function hesapla(){
    let sonuc = parseInt($("#gt").text()) + parseInt($("#portfoy").val());
    $("#k-z").text("Kar/Zarar: " + sonuc);
}
// Search
function search() {
    let tr = $("#table1 tr");
    let filter = $("input[type='search']").val().toLowerCase();
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}