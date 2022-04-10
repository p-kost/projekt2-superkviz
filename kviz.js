//data

let otazka1 = {
    otazka: 'Co je ikonická hračka z 80. let?',
    moznostA: 'Kočičák',
    moznostB: 'Mončičák',
    moznostC: 'Opičák',
    obrazek: 'obrazky/moncicak.jpg'
};

let otazka2 = {
    otazka: 'Jaké je Matějovo nejoblíbenější ovoce?',
    moznostA: 'Kokos',
    moznostB: 'Melounek',
    moznostC: 'Jahoda',
    obrazek: 'obrazky/ovoce.jpg'
};

let otazka3 = {
    otazka: 'Pro úspěšné absolvování kurzu je potřeba..',
    moznostA: 'Umět JavaScript',
    moznostB: 'Chodit po kurzu do hospody',
    obrazek: 'obrazky/pivo.jpg'
};



//vlozeni otazky

let otazka = document.querySelector('#otazka');
otazka.textContent = otazka1.otazka;

let odpovedA = document.querySelector('#a');
odpovedA.textContent = otazka1.moznostA;

let odpovedB = document.querySelector('#b');
odpovedB.textContent = otazka1.moznostB;

let odpovedC = document.querySelector('#c');
odpovedC.textContent = otazka1.moznostC;
