"use strict";

/*create data structure*/
let legendList = [
    ['ronaldo', 'Cristiano Ronaldo',
        {
            fullname: "Cristiano Ronaldo",
            name: "ronaldo",
            birth: "5/2/1985",
            national: "portugal",
            general: `The top scorer in the history of Real Madrid`,
            Matches: 438,
            goal: 541,
            title: [
                "-With Real Madrid",
                "4 European Cups",
                "3 Club World Cups",
                "3 European Super Cups",
                "2 Leagues",
                "2 King's Cups",
                "2 Spanish Super Cups",
                "- With the Portuguese national team:",
                " 1 European Championship",
            ]
        }],
    ['Bale', 'Gareth Bale', {
        fullname: "Gareth Bale",
        name: "Bale",
        birth: "31/12/1941",
        general: "Gareth Bale has been the protagonist of one of the most successful stages in the history of our club with the conquest of five European Cups , three of them in a consecutive, between 2014 and 2022.",
        national: "",
        Matches: 258,
        goal: 106,
        title: [
            "5 Champions League",
            "4 Club World Cups",
            "3 European Super Cups",
            "3 Leagues",
            "1 Copa del Rey",
            "3 Spanish Super Cups",
        ]
    }],
    ['Zidane', 'Zinédine Zidane', {
        fullname: "Zinédine Zidane",
        name: "Zidane",
        birth: "23/06/1972",
        general: "A genius that marked an era.",
        national: "france",
        Matches: 227,
        goal: 49,
        title: [
            "Records as player:",
            "1 European Cup",
            "1 Intercontinental Cup 1 European",
            "Super Cup",
            "1 League",
            "2 Spanish Super Cups",
            "1 World Cup with the French team",
            "1 European Championship with the French team",

            "Records as coach:",
            "3 European Cups",
            "2 Club World Cups",
            "2 European Super Cups",
            "2 Leagues",
            "2 Spanish Super Cups"
        ]
    }],
    ['Ramos', 'Sergio Ramos', {
        fullname: "Sergio Ramos",
        name: "Ramos",
        birth: "30/03/1986",
        general: "Hero of la Décima and captain of the three consecutive Champions Leagues",
        national: "",
        Matches: 671,
        goal: 101,
        title: [
            "4 Champions League",
            "4 Club World Cups",
            "3 European Super Cups",
            "5 Leagues",
            "2 King's Cups",
            "4 Spanish Super Cups",
            "1 World Cup with the Spanish team",
            "2 Euro Cups with the Spanish team",
        ]
    }],
    ['Pepe', 'Pepe', {
        fullname: "Pepe",
        name: "Pepe",
        birth: "26/02/1983",
        general: "3 European Cups in a decade as a madridista.",
        national: "portugal",
        Matches: 334,
        goal: 15,
        title: [
            "3 European Cups",
            "2 Club World Cups",
            "2 European Super Cups",
            "3 Leagues",
            "2 King's Cups",
            "2 Spanish Super Cups",
            "1 European Championship with the Portuguese national team",
            "1 League of Nations with the Portuguese national team",
        ]
    }],
    ['Marcelo', 'Marcelo Vieira', {
        fullname: "Marcelo Vieira",
        name: "Marcelo",
        birth: "12/05/1988",
        general: "The player with the most titles in the history of the club.",
        national: "",
        Matches: 546,
        goal: 38,
        title: [
            "5 Champions League",
            "4 Club World Cups",
            "3 European Super Cups",
            "6 Leagues",
            "2 Copas del Rey",
            "5 Spanish Super Cups",
            "1 silver medal at the London Olympics",
            "1 bronze medal at the Beijing Olympics",
            "1 Confederations Cup",
        ]
    }],
    ['Navas', 'Keylor Navas', {
        fullname: "Keylor Navas",
        name: "Navas",
        birth: "15/12/1986",
        general: "The goalkeeper of the Eleventh, Twelfth and Thirteenth.",
        national: "",
        Matches: 162,
        goal: "",
        title: [
            "3 European Cups",
            "4 Club World Cups",
            "3 European Super Cups",
            "1 League",
            "1 Spanish Super Cup",
        ]
    }],
    ['RonaldoDeLima', 'Ronaldo De Lima', {
        fullname: "Ronaldo De Lima",
        name: "Ronaldodelima",
        birth: "22/09/1976",
        general: "One of the greats in football history.",
        national: "",
        Matches: 177,
        goal: 104,
        title: [
            "1 Intercontinental Cup",
            "2 Leagues",
            "1 Spanish Super Cup",
            "2 World Cups with the Brazilian team",
        ]
    }],
    ['Varane', 'Raphaël Varane', {
        fullname: "Raphaël Varane",
        name: "Varane",
        birth: "25/04/1993",
        general: "18 titles in 10 seasons",
        national: "france",
        Matches: 360,
        goal: 17,
        title: [
            "4 Champions League",
            "4 Club World Cups",
            "3 European Super Cups",
            "3 Leagues",
            "1 Copa del Rey",
            "3 Spanish Super Cups",
            "1 World Cup with the French national team",
        ]
    }],
    ['Carlos', 'Roberto Carlos', {
        fullname: "Roberto Carlos",
        name: "Carlos",
        birth: "10/04/1973",
        general: "Owner and lord of the left band.",
        national: "",
        Matches: 527,
        goal: 69,
        title: [
            "3 European",
            "Cups 2 Intercontinental Cups",
            "1 European Super Cup",
            "4 Leagues",
            "3 Spanish Super Cups",
            "1 World Cup with the Brazilian team",
        ]
    }],
    ['Casillas', 'Iker Casillas', {
        fullname: "Iker Casillas",
        name: "Casillas",
        birth: "20/05/1981",
        general: "The best goalkeeper in our history.",
        national: "france",
        Matches: 725,
        goal: "",
        title: [
            "3 European Cups",
            "3 Club World Cups",
            "2 European Super Cups",
            "5 Leagues",
            "2 King's Cups",
            "4 Spanish Super Cups",
            "1 World Cup with the Spanish team",
            "2 European Cups with the Spanish team",
        ]
    }],
    ['Cannavaro', 'Fabio Cannavaro', {
        fullname: "Fabio Cannavaro",
        name: "Cannavaro",
        birth: "13/09/1973",
        general: "a golden defense.",
        national: "",
        Matches: 118,
        goal: 1,
        title: [
            "2 Leagues",
            "1 Spanish Super Cup",
            "1 World Cup with the Italian national team",
        ]
    }],
    ['kaka', 'Kaká', {
        fullname: "Kaká",
        name: "kaka",
        birth: "13/09/1973",
        general: "Brazilian elegance.",
        national: "",
        Matches: 120,
        goal: 29,
        title: [
            "1 League",
            "1 Copa del Rey",
            "1 Spanish Super Cup",
            "1 World Cup with the Brazilian team"
        ]
    }]
];
/*Close and open the information large window*/
let overlay = document.querySelector(".overlay");
let info = document.querySelector(".info-zoom");
const openModal = function () {
    info.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
/*=====================
sub-buton(click to show the large window
=======================================*/
let btnSet = document.querySelector('.sub-button');
for (let [legend, fullName, info] of legendList) {
    let btn = document.createElement("DIV");
    btn.classList.add('btn');
    let img = document.createElement("IMG");
    img.setAttribute('src', `pic/btnImage/${legend}.jpg`);
    img.classList.add('btn-image');
    let name = document.createElement("DIV");
    name.classList.add('btn-name');
    name.textContent = `${fullName}`;
    btn.appendChild(img);
    btn.appendChild(name);
    btn.addEventListener("click", function () {
        openModal();
        upload_info(info);
    });
    btnSet.appendChild(btn);
}
const closeModal = function () {
    info.classList.add("hidden");
    overlay.classList.add("hidden");
    deletingtitle();
};
let times = document.querySelector('.toast__times');
times.addEventListener('click', closeModal);
overlay.addEventListener("click", closeModal);

/*Convert tab between general and title*/
let general = document.querySelector(".general");
let title = document.querySelector(".title");
let iGeneral = document.querySelector(".info-general");
let iTitle = document.querySelector(".info-title");
general.addEventListener("click", function () {
    iTitle.classList.add("hidden");
    title.classList.remove("info-items--background");
    general.classList.add("info-items--background");
    iGeneral.classList.remove("hidden");
});
title.addEventListener("click", function () {
    iGeneral.classList.add("hidden");
    general.classList.remove("info-items--background");
    title.classList.add("info-items--background");
    iTitle.classList.remove("hidden");
});

/*function that make the legend infomation automatically*/
let upload_info = function ({
    fullname,
    name,
    birth,
    national,
    general,
    Matches,
    goal,
    title,
}) {
    /*image*/
    let image = document.querySelector(".image");
    image.setAttribute("src", `pic/LegendName/${name}.jpg`);
    /*name*/
    let LegendName = document.querySelector(".legend-name");
    LegendName.textContent = `${fullname}`;
    /*birth*/
    let legendBirth = document.querySelector(".legend-birth");
    legendBirth.textContent = `Birth: ${birth}`;
    /*nation*/
    let nation = document.querySelector(".nation-image");
    nation.setAttribute("src", `pic/Nationality/${national}.png`);
    document.querySelector('.nation-name').textContent = `${national}`
    /*general text*/
    document.querySelector('.general-text').textContent =
        `${general}`;
    document.querySelector('.appearance').textContent = `${Matches}`;
    document.querySelector('.goal').textContent = `${goal}`;
    /*title*/
    let infoTitle = document.querySelector('.info-title');
    for (let cup of Object.values(title)) {
        let wrap = document.createElement("P");
        wrap.classList.add('wrap');
        wrap.textContent = `${cup}`
        infoTitle.appendChild(wrap);
    }

}
/*DELETING ALL THE INFOMATION AUTOMATICALLY;*/
function deletingtitle() {

    let dat = document.querySelectorAll('.wrap');
    for (let p of dat) p.classList.add('hidden');
}

