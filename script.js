import {
    get,
    post,
    put,
    deleteIt
}
from "./js/crud.js";

document.addEventListener("DOMContentLoaded", start);

function start() {

    console.log("start");


    const submitButton = document.querySelector(".submit");
    const form = document.querySelector("form");

    // document.querySelector(".submit").addEventListener("mousedown", readData);

    document.querySelectorAll(".next").forEach((butt, i) => {
        console.log("next button")

        butt.setAttribute('id', `button_${i}`);
        butt.classList.add(`${i}`);
        form.addEventListener("submit", e => {
            // butt.preventDefault()
            // form.preventDefault()
            e.preventDefault()

            showNext(i);
        })

    });


    function showNext(i) {

        let nnn = i + 1

        console.log(i, nnn)

        console.log("next hide")
        document.querySelector(`.section_${i}`).classList.add('hide');
        document.querySelector(`.section_${nnn}`).classList.remove('hide');
    }


    function readData() {

        console.log("readData");

        const data = {
            firstname: form.elements.firstname.value,
            lastname: form.elements.lastname.value,
            gamertag: form.elements.gamertag.value,
            dob: form.elements.dob.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
            gamingstyle: form.elements.gaming_style.value,
            games: form.elements.game.value,
            strength: form.elements.strength.value,
            improvement: form.elements.improvement.value,
            service: form.elements.service.value
        }

        postTheData(data);

    }

    function postTheData(data) {

        post(data);

    }

}