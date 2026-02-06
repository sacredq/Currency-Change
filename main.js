let convertBtn = document.getElementById("action");
let inputField = document.getElementById("amount");
let pText = document.getElementById("res");

convertBtn.addEventListener("click", function(){
    let dollars = inputField.value;
    const euroCourse = 0.8467;
    let euro = (dollars * euroCourse); 
    pText.textContent = "The result is: €" + euro;
})