//data pro otazky

let otazky = [
    {
    otazka: 'Co je ikonická hračka z 80. let?',
    odpovedA: 'Kočičák',
    odpovedB: 'Mončičák',
    odpovedC: 'Opičák',
    poleMoznosti: ['Kočičák', 'Mončičák', 'Opičák'],
    obrazek: 'obrazky/moncicak.jpg',
    indexSpravne: 1,
    cisloOtazky: 1
    },

    {
    otazka: 'Jaké je Matějovo nejoblíbenější ovoce?',
    odpovedA: 'Kokos',
    odpovedB: 'Melounek',
    odpovedC: 'Jahoda',
    odpovedD: 'Ani jedna z možností',
    poleMoznosti: ['Kokos','Melounek','Jahoda', 'Ani jedna z možností'],
    obrazek: 'obrazky/ovoce.jpg',
    indexSpravne: 1,
    cisloOtazky: 2
    },

    {
    otazka: 'Pro úspěšné absolvování kurzu je potřeba..',
    odpovedA: 'Umět JavaScript',
    odpovedB: 'Chodit po kurzu do hospody',
    poleMoznosti: ['Umět JavaScript', 'Chodit po kurzu do hospody'],
    obrazek: 'obrazky/pivo.jpg',
    indexSpravne: 0,
    cisloOtazky: 3
    },
];


// vytahnuti promennych z html

let kviz = document.querySelector('.kviz')
let poradi = document.querySelector('#poradi')
let otazka = document.querySelector('#otazka')
let obsah = document.querySelector('.obsah')
let foto = document.querySelector('.foto')
let obrazek = document.querySelector('#obrazek')
let moznosti = document.querySelector('#moznosti')
let odpovedi = document.querySelector('#odpovedi');

poradi.textContent = 'Otázka ' + otazky[0].cisloOtazky + '/3';
obrazek.src = otazky[0].obrazek;
otazka.textContent = otazky[0].otazka;



for (let i=0; i < otazky[0].poleMoznosti.length; i=i+1) {

    let volba = document.createElement('li');
    odpovedi.appendChild(volba);


    volba.dataset.poleMoznosti = i;
    volba.textContent = otazky[0].poleMoznosti[i];
}

