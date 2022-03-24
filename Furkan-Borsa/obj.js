const mounts = [
    [01, "jan", "Ocak"],
    [02, "feb", "Şubat"],
    [03, "mar", "Mart"],
    [04, "apr", "Nisan"],
    [05, "may", "Mayıs"],
    [06, "jun", "Haziran"],
    [07, "jul", "Temmuz"],
    [08, "aug", "Ağustos"],
    [09, "sep", "Eylül"],
    [10, "oct", "Ekim"],
    [11, "nov", "Kasım"],
    [12, "dec", "Aralık"],
]


const semboller = [
    "EREGL", "ESEN",
    "GUBRF","EGEPO","ORCAY","YEOTK","MIATK",
    "ISKPL", "KLKIM", "MTRKS","MAREN","IHLAS","ULUFA","HUNER","INVES","ENSRI",
    "QUAGR", "SASA","TEZOL","İHLAS","PCILT","GRSEL",
    "SISE", "TRILC","KIMMR","ANGEN",
    "TUREX", "EDATA","ELITE","ISSEN","RNPOL",
    "METRO", "DNISI", "FENER", "IHEVA",
    "GSRAY", "NATEN", "HALKB", "KRVGD", "TTKOM", "ANELE", "ARSAN", "IZDMC", "ENJSA", "KARSN", "SAFKR",
    "GWIND", "CANTE", "ISDMR", "TUCLK", "VBTYZ", "MANAS", "DERHL", "RTALB", "KTSKR", "FADE",
]
const hisseler = [
    {
        "tarih": "23/09/2021", "ay": 09, "isim": "MAREN", "adet": 290, "fiyat": 8.30, "alış": 2407.00, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "17/09/2021", "ay": 09, "isim": "KIMMR", "adet": 388, "fiyat": 3.50, "alış": 1358.00, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "23/09/2021", "ay": 09, "isim": "KIMMR", "adet": 388, "fiyat": 4.23, "alış": 0, "color": "bg-danger", "satış": 1641.24,
    }, {
        "tarih": "04/10/2021", "ay": 10, "isim": "MAREN", "adet": 290, "fiyat": 10.00, "alış": 0, "color": "bg-danger", "satış": 2900.00,
    }, {
        "tarih": "27/10/2021", "ay": 10, "isim": "IHLAS", "adet": 303, "fiyat": 4.60, "alış": 1393.80, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "08/11/2021", "ay": 11, "isim": "IHLAS", "adet": 303, "fiyat": 4.52, "alış": 0, "color": "bg-danger", "satış": 1369.56,
    }, {
        "tarih": "10/11/2021", "ay": 11, "isim": "ULUFA", "adet": 36, "fiyat": 2.49, "alış": 89.64, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "10/11/2021", "ay": 11, "isim": "ULUFA", "adet": 36, "fiyat": 2.72, "alış": 0, "color": "bg-danger", "satış": 97.92,
    }, {
        "tarih": "16/11/2021", "ay": 11, "isim": "MIATK", "adet": 72, "fiyat": 15.80, "alış": 1137.60, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "12/11/2021", "ay": 11, "isim": "ELITE", "adet": 37, "fiyat": 16.30, "alış": 603.10, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "16/11/2021", "ay": 11, "isim": "ELITE", "adet": 37, "fiyat": 18.68, "alış": 0, "color": "bg-danger", "satış": 691.16,
    }, {
        "tarih": "17/11/2021", "ay": 11, "isim": "ISSEN", "adet": 90, "fiyat": 11.85, "alış": 1066.50, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "18/11/2021", "ay": 11, "isim": "ISSEN", "adet": 90, "fiyat": 11.93, "alış": 0, "color": "bg-danger", "satış": 1073.70,
    },
    {
        "tarih": "26/11/2021", "ay": 11, "isim": "PCILT", "adet": 66, "fiyat": 9.52, "alış": 628.32, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "29/11/2021", "ay": 11, "isim": "MIATK", "adet": 72, "fiyat": 27.82, "alış": 0, "color": "bg-danger", "satış": 2003.04,
    },
    {
        "tarih": "10/12/2021", "ay": 12, "isim": "PCILT", "adet": 66, "fiyat": 13.98, "alış": 0, "color": "bg-danger", "satış": 922.68,
    },  {
        "tarih": "03/03/2022", "ay": 03, "isim": "GRSEL", "adet": 87, "fiyat": 8.25, "alış": 717.75, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "15/03/2022", "ay": 03, "isim": "GRSEL", "adet": 87, "fiyat": 9.64, "alış": 0, "color": "bg-danger", "satış": 838.68,
    }, {
        "tarih": "06/12/2021", "ay": 12, "isim": "RNPOL", "adet": 153, "fiyat": 9.92, "alış": 1517.76, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "06/12/2021", "ay": 12, "isim": "RNPOL", "adet": 153, "fiyat": 15.91, "alış": 0, "color": "bg-danger", "satış": 2434.23,
    }, {
        "tarih": "17/09/2021", "ay": 09, "isim": "KIMMR", "adet": 776, "fiyat": 3.51, "alış": 2723.76, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "24/09/2021", "ay": 09, "isim": "KIMMR", "adet": 776, "fiyat": 3.98, "alış": 0, "color": "bg-danger", "satış": 3088.48,
    },{
        "tarih": "16/02/2022", "ay": 02, "isim": "HUNER", "adet": 985, "fiyat": 1.82, "alış": 1792.70, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "24/02/2022", "ay": 02, "isim": "HUNER", "adet": 547, "fiyat": 2.60, "alış": 0, "color": "bg-danger", "satış": 1422.20,
    }, {
        "tarih": "24/02/2022", "ay": 02, "isim": "HUNER", "adet": 438, "fiyat": 2.41, "alış": 0, "color": "bg-danger", "satış": 1055.58,
    }, {
        "tarih": "23/02/2022", "ay": 02, "isim": "INVES", "adet": 40, "fiyat": 24, "alış": 960.00, "color": "bg-success", "satış": 0,
    },{
        "tarih": "07/03/2022", "ay": 03, "isim": "INVES", "adet": 40, "fiyat": 28.36, "alış": 0, "color": "bg-danger", "satış": 1134.40,
    }, {
        "tarih": "23/03/2022", "ay": 03, "isim": "ENSRI", "adet": 33, "fiyat": 14.00, "alış": 462.00, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "24/03/2022", "ay": 03, "isim": "ENSRI", "adet": 33, "fiyat": 17.35, "alış": 0, "color": "bg-danger", "satış": 572.55,
    },
   
];