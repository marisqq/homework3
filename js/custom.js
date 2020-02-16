

//--------------------------------------------------------------------//

function addelem() {
    document.querySelector("#test_div")
    let clearBtn = document.querySelector("#clearBtn")
    clearBtn.addEventListener("click", clearDivs);
    listen()
}
function clearDivs() {
    while (test_div.firstChild) {
        test_div.removeChild(test_div.firstChild);
    }
}
function listen() {
    const submit = document.getElementById("generateBtn");
    submit.onclick = btnClick;
}
//-------------------------Main function---------------------------------//
function btnClick() {

    clearDivs()
    let fizz_val = $('#fizz_val').val();
    let buzz_val = $('#buzz_val').val();
    let from_val = $("#slider-range").slider("values", 0);
    let to_val = $("#slider-range").slider("values", 1);
    for (let i = from_val; i < to_val; i++) {
        let newElem = document.createElement("div");
        let class_ = 'no';
        let text_ = i;
        if (i % fizz_val === 0 && i % buzz_val === 0) {
            class_ = "fizz-buzz";
            text_ = "FizzBuzz " + i;
        } else if (i % fizz_val === 0 && i % buzz_val !== 0) {
            class_ = "fizz";
            text_ = "Fizz " + i;
        } else if (i % buzz_val === 0 && i % fizz_val !== 0) {
            class_ = "buzz";
            text_ = "Buzz " + i;
        }

        class_ += " element-" + i;
        newElem.setAttribute("class", class_);
        newElem.setAttribute("id", "newid" + i);
        newElem.innerText = text_;

        test_div.appendChild(newElem);
    }

}

addelem()
//------------------------------jquery slider from web--------------------------//
$("#slider-range").slider({
    range: true,
    min: 1,
    max: 100,
    values: [1, 100],
    slide: function (event, ui) {
        $("#amount").val(ui.values[0] + " - " + ui.values[1]);
         //btnClick();                         //does wierd stuff  ¯\_(ツ)_/¯
    }
});
