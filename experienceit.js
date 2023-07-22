// SIGNUP LOGIN JS CODE

let loginMailEle = document.getElementById("login-mail");
let loginPasswordEle = document.getElementById("login-password");
let loginSubmitBtnEle = document.getElementById("login-submit-btn");
let loginSubmitBtnEle2 = document.getElementById("login-submit-btnn");

let signupMailEle = document.getElementById("signup-mail");
let signupPasswordEle = document.getElementById("signup-password");
let signupConfirmPasswordEle = document.getElementById("signup-confirm-password");
let signupCreateBtnEle = document.getElementById("signup-create-btn");
let signupNameEle = document.getElementById("signup-username");

signupCreateBtnEle.addEventListener("click", function(event) {
    event.preventDefault();
    if (signupPasswordEle.value !== signupConfirmPasswordEle.value) {
        alert("Passwords doesnot match !!");
    } else {
        if (signupPasswordEle.value.length >= 8) {
            localStorage.setItem("name", signupNameEle.value);
            localStorage.setItem("email", signupMailEle.value);
            localStorage.setItem("password", signupPasswordEle.value);
            alert("Account Created!!");
        } else {
            alert("Password length should be greater than 8");
        }
    }
});

loginSubmitBtnEle.addEventListener("click", function(event) {
    event.preventDefault();
    let mail = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if (loginMailEle.value === mail || loginMailEle.value === "experienceit@gmail.com") {
        if (loginPasswordEle.value === password || (loginPasswordEle.value === "admin123" && loginMailEle.value === "experienceit@gmail.com")) {
            alert("Login Success 👋");
            //content to display when successful login
            loginSubmitBtnEle2.classList.remove("d-none");
            loginSubmitBtnEle.classList.add("d-none");
        } else {
            alert("Wrong password!!");
        }
    } else {
        alert("Account doesnot exist with your mail!!");
    }

});


// HYDERABAD 
let golcondaSelectEle = document.getElementById("golcondaselect");
let charminarSelectEle = document.getElementById("charminarselect");
let salarSelectEle = document.getElementById("salarselect");
let birlaSelectEle = document.getElementById("birlaselect");


let hydInputPersonsEle = document.getElementById("hydinputpersons");
let hydtotalamount = document.getElementById("hydtotalamount");
let hydpayele = document.getElementById("hydpay");
let amountpayingEle = document.getElementById("amountpaying");

let hydEnterEle = document.getElementById("hydenter");
let priceshyd = {
    "golconda": 2000,
    "charminar": 1500,
    "salarjung": 2500,
    "birla": 1500
};
let totalPrice;
hydEnterEle.addEventListener("click", function() {
    totalPrice = 0;
    if (parseInt(hydInputPersonsEle.value) === 0) {
        alert("Please Enter Valid Details");
    } else {
        let list_places = [];
        if (golcondaSelectEle.checked === true) {
            list_places.push("golconda");
        }
        if (charminarSelectEle.checked === true) {
            list_places.push("charminar");
        }
        if (salarSelectEle.checked === true) {
            list_places.push("salarjung");
        }
        if (birlaSelectEle.checked === true) {
            list_places.push("birla");
        }

        for (let i of list_places) {
            let p = priceshyd[i];
            totalPrice += parseInt(p);
        }
        totalPrice = totalPrice * parseInt(hydInputPersonsEle.value);

        if (totalPrice !== 0) {
            hydtotalamount.textContent = "Amount for " + hydInputPersonsEle.value + " persons is ₹" + totalPrice;
            hydpayele.classList.remove("d-none");
        }
    }
});

hydpayele.addEventListener("click", function() {
    amountpayingEle.value = "₹ " + totalPrice;
});


// GOA
let vagatorSelectEle = document.getElementById("vagatorselect");
let dudhsagarSelectEle = document.getElementById("dudhsagarselect");
let bagaSelectEle = document.getElementById("bagaselect");
let fontagoaSelectEle = document.getElementById("fontagoaselect");

let goaInputPersonsEle = document.getElementById("goainputpersons");
let goatotalamount = document.getElementById("goatotalamount");
let goapayele = document.getElementById("goapay");

let goaEnterEle = document.getElementById("goaenter");
let pricesgoa = {
    "vagator": 800,
    "dudh sagar": 3000,
    "baga": 1000,
    "fontainhas": 1000
};

goaEnterEle.addEventListener("click", function() {
    if (parseInt(goaInputPersonsEle.value) === 0) {
        alert("Please Enter Valid Details");
    } else {
        let list_places = [];
        if (vagatorSelectEle.checked === true) {
            list_places.push("vagator");
        }
        if (dudhsagarSelectEle.checked === true) {
            list_places.push("dudh sagar");
        }
        if (bagaSelectEle.checked === true) {
            list_places.push("baga");
        }
        if (fontagoaSelectEle.checked === true) {
            list_places.push("fontainhas");
        }

        totalPrice = 0;

        for (let i of list_places) {
            let p = pricesgoa[i];
            totalPrice += parseInt(p);
        }
        totalPrice = totalPrice * parseInt(goaInputPersonsEle.value);

        if (totalPrice !== 0) {
            goatotalamount.textContent = "Amount for " + goaInputPersonsEle.value + " persons is ₹" + totalPrice;
            goapayele.classList.remove("d-none");
        }
    }
});
goapayele.addEventListener("click", function() {
    amountpayingEle.value = "₹ " + totalPrice;
});

//MUMBAI
let mumbai1SelectEle = document.getElementById("mumbai1select");
let mumbai2SelectEle = document.getElementById("mumbai2select");
let mumbai3SelectEle = document.getElementById("mumbai3select");
let mumbai4SelectEle = document.getElementById("mumbai4select");


let mumbaiInputPersonsEle = document.getElementById("mumbaiinputpersons");
let mumbaitotalamount = document.getElementById("mumbaitotalamount");
let mumbaipayele = document.getElementById("mumbaipay");

let mumbaiEnterEle = document.getElementById("mumbaienter");
let pricesmumbai = {
    "mumbai1": 2000,
    "mumbai2": 1500,
    "mumbai3": 2500,
    "mumbai4": 1500
};
mumbaiEnterEle.addEventListener("click", function() {
    totalPrice = 0;
    if (parseInt(mumbaiInputPersonsEle.value) === 0) {
        alert("Please Enter Valid Details");
    } else {
        let list_places = [];
        if (mumbai1SelectEle.checked === true) {
            list_places.push("mumbai1");
        }
        if (mumbai2SelectEle.checked === true) {
            list_places.push("mumbai2");
        }
        if (mumbai3SelectEle.checked === true) {
            list_places.push("mumbai3");
        }
        if (mumbai4SelectEle.checked === true) {
            list_places.push("mumbai4");
        }

        for (let i of list_places) {
            let p = pricesmumbai[i];
            totalPrice += parseInt(p);
        }
        totalPrice = totalPrice * parseInt(mumbaiInputPersonsEle.value);

        if (totalPrice !== 0) {
            mumbaitotalamount.textContent = "Amount for " + mumbaiInputPersonsEle.value + " persons is ₹" + totalPrice;
            mumbaipayele.classList.remove("d-none");
        }
    }
});

mumbaipayele.addEventListener("click", function() {
    amountpayingEle.value = "₹ " + totalPrice;
});

//CHENNAI
let chennai1SelectEle = document.getElementById("chennai1select");
let chennai2SelectEle = document.getElementById("chennai2select");
let chennai3SelectEle = document.getElementById("chennai3select");
let chennai4SelectEle = document.getElementById("chennai4select");


let chennaiInputPersonsEle = document.getElementById("chennaiinputpersons");
let chennaitotalamount = document.getElementById("chennaitotalamount");
let chennaipayele = document.getElementById("chennaipay");

let chennaiEnterEle = document.getElementById("chennaienter");
let priceschennai = {
    "chennai1": 2000,
    "chennai2": 1500,
    "chennai3": 2500,
    "chennai4": 1500
};
chennaiEnterEle.addEventListener("click", function() {
    totalPrice = 0;
    if (parseInt(chennaiInputPersonsEle.value) === 0) {
        alert("Please Enter Valid Details");
    } else {
        let list_places = [];
        if (chennai1SelectEle.checked === true) {
            list_places.push("chennai1");
        }
        if (chennai2SelectEle.checked === true) {
            list_places.push("chennai2");
        }
        if (chennai3SelectEle.checked === true) {
            list_places.push("chennai3");
        }
        if (chennai4SelectEle.checked === true) {
            list_places.push("chennai4");
        }

        for (let i of list_places) {
            let p = priceschennai[i];
            totalPrice += parseInt(p);
        }
        totalPrice = totalPrice * parseInt(chennaiInputPersonsEle.value);

        if (totalPrice !== 0) {
            chennaitotalamount.textContent = "Amount for " + chennaiInputPersonsEle.value + " persons is ₹" + totalPrice;
            chennaipayele.classList.remove("d-none");
        }
    }
});

chennaipayele.addEventListener("click", function() {
    amountpayingEle.value = "₹ " + totalPrice;
});

//MUSIC
let musicEle = document.getElementById("music");

function musicPlay() {
    musicEle.src = "https://prodigits.co.uk/content2/mp3-ringtones/tone/2022/dance/preview/pfn2fc67.mp3";
    musicEle.play();
}

let finalPaymentBtnEle = document.getElementById("finalPaymentBtn");