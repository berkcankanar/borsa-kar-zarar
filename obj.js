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
    "GUBRF","EGEPO","ORCAY","YEOTK","MIATK","BMSCH","SANFM","TMPOL","RNPOL","ENSRI",
    "ISKPL", "KLKIM", "MTRKS","MAREN","PCILT",
    "QUAGR", "SASA","TEZOL","İHLAS","MEDTR","KLMSN","HUNER","INVES","GRSEL",
    "SISE", "TRILC","KIMMR","ANGEN","CELHA",
    "TUREX", "EDATA","ELITE","ISSEN",
    "METRO", "DNISI", "FENER", "IHEVA",
    "GSRAY", "NATEN", "HALKB", "KRVGD", "TTKOM", "ANELE", "ARSAN", "IZDMC", "ENJSA", "KARSN", "SAFKR",
    "GWIND", "CANTE", "ISDMR", "TUCLK", "VBTYZ", "MANAS", "DERHL", "RTALB", "KTSKR", "FADE",
]
const hisseler = [


    {
        "tarih": "29/07/2020",
        "ay": 07,
        "isim": "METRO",
        "adet": 1,
        "fiyat": 1.94,
        "alış": 1.94,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "05/08/2020",
        "ay": 08,
        "isim": "METRO",
        "adet": 1,
        "fiyat": 1.94,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1.94,
    },

    {
        "tarih": "27/08/2020",
        "ay": 08,
        "isim": "DNISI",
        "adet": 142,
        "fiyat": 3.52,
        "alış": 499.84,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "07/09/2020",
        "ay": 09,
        "isim": "FENER",
        "adet": 6,
        "fiyat": 40.2,
        "alış": 241.20,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "08/09/2020",
        "ay": 09,
        "isim": "IHEVA",
        "adet": 4,
        "fiyat": 2,
        "alış": 8.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "09/09/2020",
        "ay": 09,
        "isim": "GSRAY",
        "adet": 45,
        "fiyat": 4.70,
        "alış": 211.50,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "09/09/2020",
        "ay": 09,
        "isim": "GSRAY",
        "adet": 45,
        "fiyat": 4.71,
        "alış": 0,
        "color": "bg-danger",
        "satış": 211.95,
    },

    {
        "tarih": "09/09/2020",
        "ay": 09,
        "isim": "NATEN",
        "adet": 8,
        "fiyat": 24.4,
        "alış": 195.20,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "10/09/2020",
        "ay": 09,
        "isim": "NATEN",
        "adet": 8,
        "fiyat": 23.58,
        "alış": 0,
        "color": "bg-danger",
        "satış": 188.64,
    },

    {
        "tarih": "10/09/2020",
        "ay": 09,
        "isim": "HALKB",
        "adet": 39,
        "fiyat": 5.17,
        "alış": 201.63,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "10/09/2020",
        "ay": 09,
        "isim": "HALKB",
        "adet": 39,
        "fiyat": 5.12,
        "alış": 0,
        "color": "bg-danger",
        "satış": 199.68,
    },

    {
        "tarih": "13/09/2020",
        "ay": 09,
        "isim": "DNISI",
        "adet": 142,
        "fiyat": 7.5,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1065,
    },

    {
        "tarih": "14/09/2020",
        "ay": 09,
        "isim": "IHEVA",
        "adet": 4,
        "fiyat": 2.14,
        "alış": 0,
        "color": "bg-danger",
        "satış": 8.56,
    },

    {
        "tarih": "15/09/2020",
        "ay": 09,
        "isim": "FENER",
        "adet": 6,
        "fiyat": 34.4,
        "alış": 0,
        "color": "bg-danger",
        "satış": 206.40,
    },

    {
        "tarih": "23/10/2020",
        "ay": 10,
        "isim": "ESEN",
        "adet": 104,
        "fiyat": 8.5,
        "alış": 884.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "26/10/2020",
        "ay": 10,
        "isim": "ESEN",
        "adet": 104,
        "fiyat": 16.52,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1718.08,
    },

    {
        "tarih": "14/01/2021",
        "ay": 01,
        "isim": "KRVGD",
        "adet": 5,
        "fiyat": 9.04,
        "alış": 45.20,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "14/01/2021",
        "ay": 01,
        "isim": "KRVGD",
        "adet": 5,
        "fiyat": 15.64,
        "alış": 0,
        "color": "bg-danger",
        "satış": 78.20,
    },

    
    {
        "tarih": "21/01/2021",
        "ay": 01,
        "isim": "ISKPL",
        "adet": 29,
        "fiyat": 16.10,
        "alış": 466.90,
        "color": "bg-success",
        "satış": 0,
    }, 


    {
        "tarih": "26/01/2021",
        "ay": 01,
        "isim": "SISE",
        "adet": 65,
        "fiyat": 7.67,
        "alış": 498.55,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "26/01/2021",
        "ay": 01,
        "isim": "SISE",
        "adet": 68,
        "fiyat": 7.26,
        "alış": 493.68,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "29/01/2021",
        "ay": 01,
        "isim": "ESEN",
        "adet": 20,
        "fiyat": 29.68,
        "alış": 593.60,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "01/02/2021",
        "ay": 02,
        "isim": "ESEN",
        "adet": 25,
        "fiyat": 32,
        "alış": 800.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "02/02/2021",
        "ay": 02,
        "isim": "SISE",
        "adet": 67,
        "fiyat": 7.56,
        "alış": 0,
        "color": "bg-danger",
        "satış": 506.52,
    },

    {
        "tarih": "02/02/2021",
        "ay": 02,
        "isim": "SISE",
        "adet": 80,
        "fiyat": 7.59,
        "alış": 607.20,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "03/02/2021",
        "ay": 02,
        "isim": "SISE",
        "adet": 146,
        "fiyat": 7.60,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1109.60,
    },

    {
        "tarih": "03/02/2021",
        "ay": 02,
        "isim": "KRVGD",
        "adet": 30,
        "fiyat": 16.23,
        "alış": 486.90,
        "color": "bg-danger",
        "satış": 0,
    },

    {
        "tarih": "03/02/2021",
        "ay": 02,
        "isim": "ESEN",
        "adet": 31,
        "fiyat": 34.76,
        "alış": 1077.56,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "04/02/2021",
        "ay": 02,
        "isim": "TTKOM",
        "adet": 59,
        "fiyat": 8.42,
        "alış": 496.78,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "04/02/2021",
        "ay": 02,
        "isim": "KRVGD",
        "adet": 30,
        "fiyat": 16.2,
        "alış": 0,
        "color": "bg-danger",
        "satış": 486.00,
    },

    {
        "tarih": "05/02/2021",
        "ay": 02,
        "isim": "ISKPL",
        "adet": 29,
        "fiyat": 29.6,
        "alış": 0,
        "color": "bg-danger",
        "satış": 858.40,
    },

    {
        "tarih": "05/02/2021",
        "ay": 02,
        "isim": "ANELE",
        "adet": 35,
        "fiyat": 3.70,
        "alış": 129.50,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "09/02/2021",
        "ay": 02,
        "isim": "ARSAN",
        "adet": 84,
        "fiyat": 8.29,
        "alış": 696.36,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "10/02/2021",
        "ay": 02,
        "isim": "TTKOM",
        "adet": 59,
        "fiyat": 8.51,
        "alış": 0,
        "color": "bg-danger",
        "satış": 502.09,
    },

    {
        "tarih": "10/02/2021",
        "ay": 02,
        "isim": "GUBRF",
        "adet": 8,
        "fiyat": 69.55,
        "alış": 556.40,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "10/02/2021",
        "ay": 02,
        "isim": "ESEN",
        "adet": 1,
        "fiyat": 36.62,
        "alış": 36.62,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "11/02/2021",
        "ay": 02,
        "isim": "SASA",
        "adet": 32,
        "fiyat": 30.78,
        "alış": 984.96,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "11/02/2021",
        "ay": 02,
        "isim": "ESEN",
        "adet": 77,
        "fiyat": 41,
        "alış": 0,
        "color": "bg-danger",
        "satış": 3157.00,
    },

    {
        "tarih": "11/02/2021",
        "ay": 02,
        "isim": "SASA",
        "adet": 32,
        "fiyat": 33,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1056.00,
    },

    {
        "tarih": "12/02/2021",
        "ay": 02,
        "isim": "IZDMC",
        "adet": 144,
        "fiyat": 13.88,
        "alış": 1998.72,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "15/02/2021",
        "ay": 02,
        "isim": "ARSAN",
        "adet": 84,
        "fiyat": 8.55,
        "alış": 0,
        "color": "bg-danger",
        "satış": 718.20,
    },

    {
        "tarih": "15/02/2021",
        "ay": 02,
        "isim": "ANELE",
        "adet": 35,
        "fiyat": 4.71,
        "alış": 0,
        "color": "bg-danger",
        "satış": 164.85,
    },

    {
        "tarih": "18/02/2021",
        "ay": 02,
        "isim": "SAFKR",
        "adet": 51,
        "fiyat": 13.4,
        "alış": 683.40,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "19/02/2021",
        "ay": 02,
        "isim": "EREGL",
        "adet": 67,
        "fiyat": 14.79,
        "alış": 990.93,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "19/02/2021",
        "ay": 02,
        "isim": "ENJSA",
        "adet": 77,
        "fiyat": 13.22,
        "alış": 1017.94,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "22/02/2021",
        "ay": 02,
        "isim": "KARSN",
        "adet": 186,
        "fiyat": 5.36,
        "alış": 996.96,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "23/02/2021",
        "ay": 02,
        "isim": "GUBRF",
        "adet": 8,
        "fiyat": 81.3,
        "alış": 0,
        "color": "bg-danger",
        "satış": 650.40,
    },

    {
        "tarih": "24/02/2021",
        "ay": 02,
        "isim": "KARSN",
        "adet": 100,
        "fiyat": 4.70,
        "alış": 470.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "24/02/2021",
        "ay": 02,
        "isim": "KARSN",
        "adet": 100,
        "fiyat": 4.70,
        "alış": 470.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "24/02/2021",
        "ay": 02,
        "isim": "KARSN",
        "adet": 100,
        "fiyat": 4.70,
        "alış": 470.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "11/03/2021",
        "ay": 03,
        "isim": "EREGL",
        "adet": 30,
        "fiyat": 16.84,
        "alış": 505.20,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "17/03/2021",
        "ay": 03,
        "isim": "SAFKR",
        "adet": 51,
        "fiyat": 12.9,
        "alış": 0,
        "color": "bg-success",
        "satış": 657.90,
    },

    {
        "tarih": "22/03/2021",
        "ay": 03,
        "isim": "KARSN",
        "adet": 172,
        "fiyat": 3.80,
        "alış": 653.60,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "26/03/2021",
        "ay": 03,
        "isim": "KARSN",
        "adet": 165,
        "fiyat": 3.92,
        "alış": 0,
        "color": "bg-danger",
        "satış": 646.80,
    },

    {
        "tarih": "29/03/2021",
        "ay": 03,
        "isim": "KARSN",
        "adet": 232,
        "fiyat": 3.86,
        "alış": 0,
        "color": "bg-danger",
        "satış": 895.52,
    },

    {
        "tarih": "29/03/2021",
        "ay": 03,
        "isim": "KARSN",
        "adet": 261,
        "fiyat": 3.86,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1007.46,
    },

    {
        "tarih": "31/03/2021",
        "ay": 03,
        "isim": "MTRKS",
        "adet": 11,
        "fiyat": 28,
        "alış": 308.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "02/04/2021",
        "ay": 04,
        "isim": "TUREX",
        "adet": 30,
        "fiyat": 12,
        "alış": 360.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "06/04/2021",
        "ay": 04,
        "isim": "QUAGR",
        "adet": 29,
        "fiyat": 16.46,
        "alış": 477.34,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "15/04/2021",
        "ay": 04,
        "isim": "TUREX",
        "adet": 30,
        "fiyat": 18.07,
        "alış": 0,
        "color": "bg-danger",
        "satış": 542.10,
    },

    {
        "tarih": "15/04/2021",
        "ay": 04,
        "isim": "MTRKS",
        "adet": 10,
        "fiyat": 50.7,
        "alış": 507.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "19/04/2021",
        "ay": 04,
        "isim": "MTRKS",
        "adet": 2,
        "fiyat": 42.54,
        "alış": 85.08,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "20/04/2021",
        "ay": 04,
        "isim": "MTRKS",
        "adet": 20,
        "fiyat": 40.28,
        "alış": 805.60,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "21/04/2021",
        "ay": 04,
        "isim": "EREGL",
        "adet": 33,
        "fiyat": 17.84,
        "alış": 588.72,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "22/04/2021",
        "ay": 04,
        "isim": "IZDMC",
        "adet": 450,
        "fiyat": 1,
        "alış": 450.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "30/04/2021",
        "ay": 04,
        "isim": "GWIND",
        "adet": 100,
        "fiyat": 5.06,
        "alış": 506.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "30/04/2021",
        "ay": 04,
        "isim": "CANTE",
        "adet": 74,
        "fiyat": 3.90,
        "alış": 288.60,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "04/05/2021",
        "ay": 05,
        "isim": "GWIND",
        "adet": 100,
        "fiyat": 4.95,
        "alış": 0,
        "color": "bg-danger",
        "satış": 495.00,
    },

    {
        "tarih": "04/05/2021",
        "ay": 05,
        "isim": "QUAGR",
        "adet": 29,
        "fiyat": 25,
        "alış": 0,
        "color": "bg-danger",
        "satış": 725.00,
    },

    {
        "tarih": "05/05/2021",
        "ay": 05,
        "isim": "CANTE",
        "adet": 74,
        "fiyat": 4.77,
        "alış": 0,
        "color": "bg-danger",
        "satış": 352.98,
    },

    {
        "tarih": "06/05/2021",
        "ay": 05,
        "isim": "KLKIM",
        "adet": 109,
        "fiyat": 14.78,
        "alış": 1611.02,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "06/05/2021",
        "ay": 05,
        "isim": "TRILC",
        "adet": 1,
        "fiyat": 10,
        "alış": 10.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "24/05/2021",
        "ay": 05,
        "isim": "TRILC",
        "adet": 1,
        "fiyat": 42.9,
        "alış": 0,
        "color": "bg-danger",
        "satış": 42.90,
    },

    {
        "tarih": "01/06/2021",
        "ay": 06,
        "isim": "ENJSA",
        "adet": 23,
        "fiyat": 10.6,
        "alış": 243.80,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "01/06/2021",
        "ay": 06,
        "isim": "MTRKS",
        "adet": 7,
        "fiyat": 33.58,
        "alış": 235.06,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "01/06/2021",
        "ay": 06,
        "isim": "ISDMR",
        "adet": 19,
        "fiyat": 12.81,
        "alış": 243.39,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "24/06/2021",
        "ay": 06,
        "isim": "KLKIM",
        "adet": 109,
        "fiyat": 11.81,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1287.29,
    },

    {
        "tarih": "24/06/2021",
        "ay": 06,
        "isim": "TUCLK",
        "adet": 50,
        "fiyat": 12,
        "alış": 600.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "24/06/2021",
        "ay": 06,
        "isim": "TUCLK",
        "adet": 35,
        "fiyat": 12,
        "alış": 420.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "30/06/2021",
        "ay": 06,
        "isim": "IZDMC",
        "adet": 250,
        "fiyat": 2.5,
        "alış": 0,
        "color": "bg-danger",
        "satış": 625.00,
    },

    {
        "tarih": "01/07/2021",
        "ay": 07,
        "isim": "TUCLK",
        "adet": 85,
        "fiyat": 11.86,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1008.10,
    },

    {
        "tarih": "01/07/2021",
        "ay": 07,
        "isim": "MTRKS",
        "adet": 31,
        "fiyat": 31.56,
        "alış": 978.36,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "06/07/2021",
        "ay": 07,
        "isim": "VBTYZ",
        "adet": 80,
        "fiyat": 12.48,
        "alış": 998.40,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "13/07/2021",
        "ay": 07,
        "isim": "ENJSA",
        "adet": 100,
        "fiyat": 9.91,
        "alış": 0,
        "color": "bg-danger",
        "satış": 991.00,
    },

    {
        "tarih": "13/07/2021",
        "ay": 07,
        "isim": "EREGL",
        "adet": 130,
        "fiyat": 18,
        "alış": 0,
        "color": "bg-danger",
        "satış": 2340.00,
    },

    {
        "tarih": "13/07/2021",
        "ay": 07,
        "isim": "ISDMR",
        "adet": 19,
        "fiyat": 10.97,
        "alış": 0,
        "color": "bg-danger",
        "satış": 208.43,
    },

    {
        "tarih": "13/07/2021",
        "ay": 07,
        "isim": "MTRKS",
        "adet": 16,
        "fiyat": 30.28,
        "alış": 484.48,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "13/07/2021",
        "ay": 07,
        "isim": "IZDMC",
        "adet": 100,
        "fiyat": 2.3,
        "alış": 230.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "13/07/2021",
        "ay": 07,
        "isim": "MTRKS",
        "adet": 20,
        "fiyat": 30.24,
        "alış": 604.80,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "14/07/2021",
        "ay": 07,
        "isim": "VBTYZ",
        "adet": 80,
        "fiyat": 13.31,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1064.80,
    },

    {
        "tarih": "16/07/2021",
        "ay": 07,
        "isim": "MTRKS",
        "adet": 36,
        "fiyat": 33.18,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1194.48,
    },

    {
        "tarih": "19/07/2021",
        "ay": 07,
        "isim": "MTRKS",
        "adet": 36,
        "fiyat": 32.16,
        "alış": 1157.76,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "14/07/2021",
        "ay": 07,
        "isim": "MANAS",
        "adet": 101,
        "fiyat": 9.90,
        "alış": 999.90,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "26/07/2021",
        "ay": 07,
        "isim": "IZDMC",
        "adet": 150,
        "fiyat": 2.5,
        "alış": 0,
        "color": "bg-danger",
        "satış": 375.00,
    },

    {
        "tarih": "26/07/2021",
        "ay": 07,
        "isim": "MTRKS",
        "adet": 8,
        "fiyat": 30.6,
        "alış": 244.80,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "27/07/2021",
        "ay": 07,
        "isim": "MTRKS",
        "adet": 10,
        "fiyat": 30.62,
        "alış": 0,
        "color": "bg-danger",
        "satış": 306.20,
    },

    {
        "tarih": "27/07/2021",
        "ay": 07,
        "isim": "MTRKS",
        "adet": 8,
        "fiyat": 30.64,
        "alış": 245.12,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "29/07/2021",
        "ay": 07,
        "isim": "MANAS",
        "adet": 101,
        "fiyat": 13.16,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1329.16,
    },

    {
        "tarih": "29/07/2021",
        "ay": 07,
        "isim": "MTRKS",
        "adet": 123,
        "fiyat": 33.88,
        "alış": 0,
        "color": "bg-danger",
        "satış": 4167.24,
    },

    {
        "tarih": "29/07/2021",
        "ay": 07,
        "isim": "TRILC",
        "adet": 20,
        "fiyat": 28.14,
        "alış": 562.80,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "29/07/2021",
        "ay": 07,
        "isim": "MTRKS",
        "adet": 31,
        "fiyat": 31.56,
        "alış": 978.36,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "30/07/2021",
        "ay": 07,
        "isim": "ESEN",
        "adet": 34,
        "fiyat": 29.1,
        "alış": 989.40,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "30/07/2021",
        "ay": 07,
        "isim": "TRILC",
        "adet": 68,
        "fiyat": 29.00,
        "alış": 1929.84,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "30/07/2021",
        "ay": 07,
        "isim": "TRILC",
        "adet": 20,
        "fiyat": 30.3,
        "alış": 0,
        "color": "bg-danger",
        "satış": 606.00,
    },

    {
        "tarih": "30/07/2021",
        "ay": 07,
        "isim": "VBTYZ",
        "adet": 55,
        "fiyat": 18,
        "alış": 990.00,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "12/07/2021",
        "ay": 07,
        "isim": "IZDMC",
        "adet": 150,
        "fiyat": 2.37,
        "alış": 355.50,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "03/08/2021",
        "ay": 08,
        "isim": "TRILC",
        "adet": 17,
        "fiyat": 28.26,
        "alış": 480.42,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "03/08/2021",
        "ay": 08,
        "isim": "DERHL",
        "adet": 111,
        "fiyat": 4.48,
        "alış": 497.28,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "03/08/2021",
        "ay": 08,
        "isim": "ESEN",
        "adet": 34,
        "fiyat": 31.48,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1070.32,
    },


    {
        "tarih": "04/08/2021",
        "ay": 08,
        "isim": "TRILC",
        "adet": 26,
        "fiyat": 28.18,
        "alış": 732.68,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "04/08/2021",
        "ay": 08,
        "isim": "VBTYZ",
        "adet": 55,
        "fiyat": 18.51,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1018.05,
    },

    {
        "tarih": "04/08/2021",
        "ay": 08,
        "isim": "TRILC",
        "adet": 35,
        "fiyat": 28.18,
        "alış": 986.30,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "05/08/2021",
        "ay": 08,
        "isim": "MTRKS",
        "adet": 31,
        "fiyat": 33.3,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1032.30,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "DERHL",
        "adet": 111,
        "fiyat": 4.67,
        "alış": 0,
        "color": "bg-danger",
        "satış": 518.37,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "IZDMC",
        "adet": 519,
        "fiyat": 2.87,
        "alış": 1489.53,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "IZDMC",
        "adet": 326,
        "fiyat": 3.06,
        "alış": 997.56,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "KTSKR",
        "adet": 44,
        "fiyat": 33.64,
        "alış": 1480.16,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "KTSKR",
        "adet": 44,
        "fiyat": 33.62,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1479.28,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "KTSKR",
        "adet": 29,
        "fiyat": 33.42,
        "alış": 969.18,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "KTSKR",
        "adet": 29,
        "fiyat": 33.64,
        "alış": 0,
        "color": "bg-danger",
        "satış": 975.56,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "RTALB",
        "adet": 23,
        "fiyat": 21.30,
        "alış": 489.9,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "TRILC",
        "adet": 36,
        "fiyat": 13.53,
        "alış": 487.08,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "TRILC",
        "adet": 342,
        "fiyat": 14.54,
        "alış": 0,
        "color": "bg-danger",
        "satış": 4972.68,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "EDATA",
        "adet": 61,
        "fiyat": 16.95,
        "alış": 1033.95,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "EDATA",
        "adet": 65,
        "fiyat": 15.23,
        "alış": 989.95,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "IZDMC",
        "adet": 338,
        "fiyat": 2.91,
        "alış": 983.58,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "TRILC",
        "adet": 71,
        "fiyat": 14.15,
        "alış": 1004.65,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "09/08/2021",
        "ay": 08,
        "isim": "TRILC",
        "adet": 71,
        "fiyat": 15.06,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1069.26,
    },

    {
        "tarih": "09/08/2021",
        "ay": 08,
        "isim": "FADE",
        "adet": 83,
        "fiyat": 11.25,
        "alış": 933.75,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "10/08/2021",
        "ay": 08,
        "isim": "EDATA",
        "adet": 126,
        "fiyat": 18.7,
        "alış": 0,
        "color": "bg-danger",
        "satış": 2356.20,
    },

    {
        "tarih": "10/08/2021",
        "ay": 08,
        "isim": "FADE",
        "adet": 8,
        "fiyat": 9.89,
        "alış": 79.12,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "10/08/2021",
        "ay": 08,
        "isim": "EDATA",
        "adet": 66,
        "fiyat": 15.32,
        "alış": 1011.12,
        "color": "bg-success",
        "satış": 0,
    },

    {
        "tarih": "12/08/2021",
        "ay": 08,
        "isim": "KTSKR",
        "adet": 25,
        "fiyat": 39.18,
        "alış": 979.50,
        "color": "bg-success",
        "satış": 0,
    },


    {
        "tarih": "06/08/2021",
        "ay": 08,
        "isim": "RTALB",
        "adet": 23,
        "fiyat": 21.36,
        "alış": 0,
        "color": "bg-danger",
        "satış": 491.28,
    },

    {
        "tarih": "12/08/2021",
        "ay": 08,
        "isim": "KTSKR",
        "adet": 25,
        "fiyat": 40.50,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1012.50,
    }, 

    {
        "tarih": "13/08/2020",
        "ay": 08,
        "isim": "TRILC",
        "adet": 65,
        "fiyat": 14.76,
        "alış": 0,
        "color": "bg-danger",
        "satış": 959.40,
    }, 

    
    {
        "tarih": "09/08/2021",
        "ay": 08,
        "isim": "TRILC",
        "adet": 65,
        "fiyat": 15.16,
        "alış": 985.40,
        "color": "bg-success",
        "satış": 0,
    }, 


    {
        "tarih": "13/08/2020",
        "ay": 08,
        "isim": "FADE",
        "adet": 115,
        "fiyat": 8.35,
        "alış": 960.25,
        "color": "bg-success",
        "satış": 0,
    }, 

    {
        "tarih": "12/08/2021",
        "ay": 08,
        "isim": "FADE",
        "adet": 156,
        "fiyat": 8.66,
        "alış": 1350.96,
        "color": "bg-success",
        "satış": 0,
    }, 

   
    {
        "tarih": "16/08/2021",
        "ay": 08,
        "isim": "EDATA",
        "adet": 66,
        "fiyat": 16.10,
        "alış": 0,
        "color": "bg-danger",
        "satış": 1062.60,
    }, 
    
    {
        "tarih": "19/08/2021", "ay": 08, "isim": "FADE", "adet": 272, "fiyat": 8.85, "alış": 0, "color": "bg-danger", "satış": 2407.20,
    },
    {
        "tarih": "23/08/2021", "ay": 08, "isim": "FADE", "adet": 91, "fiyat": 8.64, "alış": 0, "color": "bg-danger", "satış": 786.24,
    }, {
        "tarih": "23/08/2021", "ay": 08, "isim": "IZDMC", "adet": 250, "fiyat": 2.73, "alış": 0, "color": "bg-danger", "satış": 682.50,
    },
    {
        "tarih": "26/08/2021", "ay": 08, "isim": "EGEPO", "adet": 160, "fiyat": 5.00, "alış": 800.00, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "26/08/2021", "ay": 08, "isim": "EGEPO", "adet": 160, "fiyat": 5, "alış": 800.00, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "27/08/2021", "ay": 08, "isim": "ORCAY", "adet": 80, "fiyat": 9.90, "alış": 792.00, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "31/08/2021", "ay": 08, "isim": "YEOTK", "adet": 40, "fiyat": 20.00, "alış": 800.00, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "27/08/2021", "ay": 08, "isim": "ORCAY", "adet": 81, "fiyat": 9.9, "alış": 801.9, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "31/08/2021", "ay": 08, "isim": "YEOTK", "adet": 40, "fiyat": 20, "alış": 800.00, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "06/09/2021", "ay": 09, "isim": "EGEPO", "adet": 160, "fiyat": 7.25, "alış": 0, "color": "bg-danger", "satış": 1160.00,
    }, {
        "tarih": "06/09/2021", "ay": 09, "isim": "EGEPO", "adet": 160, "fiyat": 7.15, "alış": 0, "color": "bg-danger", "satış": 1144.00,
    },

    {
        "tarih": "07/09/2021", "ay": 09, "isim": "ORCAY", "adet": 81, "fiyat": 14.47, "alış": 0, "color": "bg-danger", "satış": 1172.07,
    }, {
        "tarih": "07/09/2021", "ay": 09, "isim": "ORCAY", "adet": 80, "fiyat": 14.47, "alış": 0, "color": "bg-danger", "satış": 1157.60,
    },
    {
        "tarih": "10/09/2021", "ay": 09, "isim": "YEOTK", "adet": 40, "fiyat": 35.40, "alış": 0, "color": "bg-danger", "satış": 1416.00,
    },
    {
        "tarih": "10/09/2021", "ay": 09, "isim": "YEOTK", "adet": 40, "fiyat": 38.94, "alış": 0, "color": "bg-danger", "satış": 1557.60,
    },
    {
        "tarih": "10/09/2021", "ay": 09, "isim": "TEZOL", "adet": 112, "fiyat": 13.87, "alış": 1553.44, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "20/09/2021", "ay": 09, "isim": "TEZOL", "adet": 112, "fiyat": 20.20, "alış": 0, "color": "bg-danger", "satış": 2262.40,
    },
    {
        "tarih": "17/09/2021", "ay": 09, "isim": "KIMMR", "adet": 776, "fiyat": 3.51, "alış": 2723.76, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "24/09/2021", "ay": 09, "isim": "KIMMR", "adet": 776, "fiyat": 3.98, "alış": 0, "color": "bg-danger", "satış": 3088.48,
    },
    {
        "tarih": "23/09/2021", "ay": 09, "isim": "MAREN", "adet": 409, "fiyat": 8.3, "alış": 3394.70, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "05/10/2021", "ay": 10, "isim": "IZDMC", "adet": 1359, "fiyat": 2.30, "alış": 0, "color": "bg-danger", "satış": 3125.70,
    },
    {
        "tarih": "05/10/2021", "ay": 10, "isim": "MAREN", "adet": 409, "fiyat": 10.00, "alış": 0, "color": "bg-danger", "satış": 4090.00,
    },
    {
        "tarih": "03/11/2021", "ay": 11, "isim": "İHLAS", "adet": 437, "fiyat": 4.60, "alış": 2010.20, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "05/11/2021", "ay": 11, "isim": "İHLAS", "adet": 437, "fiyat": 4.39, "alış": 0, "color": "bg-danger", "satış": 1918.43,
    },
    {
        "tarih": "01/11/2021", "ay": 11, "isim": "ANGEN", "adet": 19, "fiyat": 21.12, "alış": 401.28, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "15/11/2021", "ay": 11, "isim": "ELITE", "adet": 37, "fiyat": 16.30, "alış": 603.10, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "15/11/2021", "ay": 11, "isim": "ISSEN", "adet": 37, "fiyat": 11.85, "alış": 438.45, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "15/11/2021", "ay": 11, "isim": "ELITE", "adet": 37, "fiyat": 16.30, "alış": 603.10, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "16/11/2021", "ay": 11, "isim": "ELITE", "adet": 74, "fiyat": 18.68, "alış": 0, "color": "bg-danger", "satış": 1382.32,
    },
    {
        "tarih": "01/01/2021", "ay": 01, "isim": "MIATK", "adet": 195, "fiyat": 15.83, "alış": 3081, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "15/11/2021", "ay": 11, "isim": "ISSEN", "adet": 46, "fiyat": 11.85, "alış": 545.10, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "18/11/2021", "ay": 11, "isim": "ISSEN", "adet": 83, "fiyat": 11.94, "alış": 0, "color": "bg-danger", "satış": 991.02,
    },
    {
        "tarih": "25/11/2021", "ay": 11, "isim": "BMSCH", "adet": 92, "fiyat": 8.82, "alış": 811.44, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "25/11/2021", "ay": 11, "isim": "BMSCH", "adet": 112, "fiyat": 8.86, "alış": 992.32, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "25/11/2021", "ay": 11, "isim": "SANFM", "adet": 28, "fiyat": 35.32, "alış": 988.96, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "25/11/2021", "ay": 11, "isim": "TMPOL", "adet": 64, "fiyat": 15.56, "alış": 995.84, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "25/11/2021", "ay": 11, "isim": "BMSCH", "adet": 22, "fiyat": 8.82, "alış": 194.04, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "26/11/2021", "ay": 11, "isim": "TMPOL", "adet": 64, "fiyat": 16.31, "alış": 0, "color": "bg-danger", "satış": 1043.84,
    },
    {
        "tarih": "29/11/2021", "ay": 11, "isim": "MIATK", "adet": 195, "fiyat": 27.82, "alış": 0, "color": "bg-danger", "satış": 5424.90,
    },
    {
        "tarih": "26/11/2021", "ay": 11, "isim": "PCILT", "adet": 198, "fiyat": 9.52, "alış": 1884.96, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "29/11/2021", "ay": 11, "isim": "ANGEN", "adet": 19, "fiyat": 24.16, "alış": 0, "color": "bg-danger", "satış": 459.04,
    },
    {
        "tarih": "29/11/2021", "ay": 11, "isim": "YEOTK", "adet": 26, "fiyat": 57.25, "alış": 1488.50, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "30/11/2021", "ay": 11, "isim": "BMSCH", "adet": 226, "fiyat": 9.23, "alış": 0, "color": "bg-danger", "satış": 2085.98,
    },
    {
        "tarih": "30/11/2021", "ay": 11, "isim": "MEDTR", "adet": 23, "fiyat": 41.80, "alış": 961.40, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "07/12/2021", "ay": 12, "isim": "YEOTK", "adet": 26, "fiyat": 62.50, "alış": 0, "color": "bg-danger", "satış": 1625.00,
    },
    {
        "tarih": "10/12/2021", "ay": 12, "isim": "PCILT", "adet": 198, "fiyat": 14.03, "alış": 0, "color": "bg-danger", "satış": 2777.94,
    },
    {
        "tarih": "06/12/2021", "ay": 12, "isim": "RNPOL", "adet": 153, "fiyat": 9.92, "alış": 1517.76, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "06/12/2021", "ay": 12, "isim": "RNPOL", "adet": 153, "fiyat": 15.91, "alış": 0, "color": "bg-danger", "satış": 2434.23,
    },
    {
        "tarih": "15/12/2021", "ay": 12, "isim": "MEDTR", "adet": 23, "fiyat": 48.80, "alış": 0, "color": "bg-danger", "satış": 1122.40,
    },
    {
        "tarih": "15/12/2021", "ay": 12, "isim": "SANFM", "adet": 30, "fiyat": 32.60, "alış": 978.00, "color": "bg-success", "satış": 0,
    },
    {
        "tarih": "17/12/2021", "ay": 12, "isim": "KIMMR", "adet": 304, "fiyat": 3.29, "alış": 1000.16, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "06/01/2022", "ay": 01, "isim": "KIMMR", "adet": 304, "fiyat": 3.42, "alış": 0, "color": "bg-danger", "satış": 1039.68,
    }, {
        "tarih": "20/12/2021", "ay": 12, "isim": "SANFM", "adet": 16, "fiyat": 30.64, "alış": 490.24, "color": "bg-success", "satış": 0,
    },  {
        "tarih": "22/12/2021", "ay": 12, "isim": "SANFM", "adet": 74, "fiyat": 33.18, "alış": 0, "color": "bg-danger", "satış": 2455.32,
    },  {
        "tarih": "01/12/2021", "ay": 12, "isim": "CELHA", "adet": 171, "fiyat": 8.76, "alış": 1497.96, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "02/12/2021", "ay": 12, "isim": "CELHA", "adet": 55, "fiyat": 8.95, "alış": 492.25, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "02/12/2021", "ay": 12, "isim": "CELHA", "adet": 54, "fiyat": 9.20, "alış": 496.80, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "02/12/2021", "ay": 12, "isim": "CELHA", "adet": 102, "fiyat": 9.80, "alış": 999.60, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "02/12/2021", "ay": 12, "isim": "CELHA", "adet": 127, "fiyat": 9.80, "alış": 1244.60, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "02/12/2021", "ay": 12, "isim": "CELHA", "adet": 115, "fiyat": 8.65, "alış": 994.75, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "15/12/2021", "ay": 12, "isim": "CELHA", "adet": 114, "fiyat": 8.73, "alış": 995.22, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "15/12/2021", "ay": 12, "isim": "CELHA", "adet": 58, "fiyat": 8.58, "alış": 497.64, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "17/12/2021", "ay": 12, "isim": "CELHA", "adet": 119, "fiyat": 8.39, "alış": 998.41, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "17/12/2021", "ay": 12, "isim": "CELHA", "adet": 64, "fiyat": 8.00, "alış": 512.00, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "17/12/2021", "ay": 12, "isim": "CELHA", "adet": 55, "fiyat": 8.17, "alış": 449.35, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "11/01/2022", "ay": 01, "isim": "CELHA", "adet": 738, "fiyat": 8.96, "alış": 0, "color": "bg-danger", "satış": 6612.48,
    }, {
        "tarih": "11/01/2022", "ay": 01, "isim": "CELHA", "adet": 296, "fiyat": 8.76, "alış": 0, "color": "bg-danger", "satış": 2592.96,
    },  {
        "tarih": "11/01/2022", "ay": 01, "isim": "MEDTR", "adet": 43, "fiyat": 45.78, "alış": 1968.54, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "11/01/2022", "ay": 01, "isim": "KLMSN", "adet": 169, "fiyat": 11.77, "alış": 1989.13, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "11/01/2022", "ay": 01, "isim": "KLMSN", "adet": 43, "fiyat": 11.62, "alış": 999.32, "color": "bg-success", "satış": 0,
    },  {
        "tarih": "12/01/2022", "ay": 01, "isim": "KLMSN", "adet": 85, "fiyat": 11.63, "alış": 988.55, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "11/01/2022", "ay": 01, "isim": "KLMSN", "adet": 43, "fiyat": 11.62, "alış": 0, "color": "bg-danger", "satış": 499.66,
    }, {
        "tarih": "12/01/2022", "ay": 01, "isim": "MEDTR", "adet": 21, "fiyat": 45.64, "alış": 958.44, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "12/01/2022", "ay": 01, "isim": "MEDTR", "adet": 22, "fiyat": 44.88, "alış": 987.36, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "13/01/2022", "ay": 01, "isim": "MEDTR", "adet": 22, "fiyat": 43.52, "alış": 957.44, "color": "bg-success", "satış": 0,
    },  {
        "tarih": "18/01/2022", "ay": 01, "isim": "MEDTR", "adet": 108, "fiyat": 45.54, "alış": 0, "color": "bg-danger", "satış": 4918.32,
    }, {
        "tarih": "19/01/2022", "ay": 01, "isim": "KLMSN", "adet": 93, "fiyat": 10.66, "alış": 991.38, "color": "bg-success", "satış": 0,
    }, {
        "tarih": "19/01/2022", "ay": 01, "isim": "MEDTR", "adet": 22, "fiyat": 43.86, "alış": 964.92, "color": "bg-success", "satış": 0,
    }, {
            "tarih": "19/01/2022", "ay": 01, "isim": "KLMSN", "adet": 94, "fiyat": 10.55, "alış": 991.70, "color": "bg-success", "satış": 0,
        }, {
            "tarih": "07/02/2021", "ay": 02, "isim": "KLMSN", "adet": 484, "fiyat": 11.29, "alış": 0, "color": "bg-danger", "satış": 5464.36,
        }, {
            "tarih": "16/02/2022", "ay": 02, "isim": "HUNER", "adet": 985, "fiyat": 1.82, "alış": 1792.70, "color": "bg-success", "satış": 0,
        }, {
            "tarih": "21/02/2021", "ay": 02, "isim": "MEDTR", "adet": 22, "fiyat": 44.00, "alış": 0, "color": "bg-danger", "satış": 968.00,
        }, {
            "tarih": "24/02/2022", "ay": 02, "isim": "HUNER", "adet": 547, "fiyat": 2.60, "alış": 0, "color": "bg-danger", "satış": 1422.20,
        }, {
            "tarih": "24/02/2022", "ay": 02, "isim": "HUNER", "adet": 438, "fiyat": 2.41, "alış": 0, "color": "bg-danger", "satış": 1055.58,
        }, {
            "tarih": "23/02/2022", "ay": 02, "isim": "INVES", "adet": 40, "fiyat": 24, "alış": 960.00, "color": "bg-success", "satış": 0,
        },{
            "tarih": "03/03/0022", "ay": 03, "isim": "GRSEL", "adet": 88, "fiyat": 8.25, "alış": 726, "color": "bg-success", "satış": 0,
            }, {
            "tarih": "03/03/0022", "ay": 03, "isim": "GRSEL", "adet": 88, "fiyat": 8.27, "alış": 727.76, "color": "bg-success", "satış": 0,
            }, {
            "tarih": "03/03/0022", "ay": 03, "isim": "GRSEL", "adet": 87, "fiyat": 8.25, "alış": 717.75, "color": "bg-success", "satış": 0,
            }, {
                "tarih": "07/03/2022", "ay": 03, "isim": "INVES", "adet": 40, "fiyat": 28.36, "alış": 0, "color": "bg-danger", "satış": 1134.40,
            }, {
                "tarih": "15/03/2022", "ay": 03, "isim": "GRSEL", "adet": 263, "fiyat": 9.64, "alış": 0, "color": "bg-danger", "satış": 2535.32,
            }, {
                "tarih": "23/03/2022", "ay": 03, "isim": "ENSRI", "adet": 66, "fiyat": 14.00, "alış": 924.00, "color": "bg-success", "satış": 0,
            }, {
                "tarih": "24/03/2022", "ay": 03, "isim": "ENSRI", "adet": 33, "fiyat": 17.59, "alış": 0, "color": "bg-danger", "satış": 579.45,
            },
              
        
]