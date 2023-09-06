const inputPage = document.getElementById("page");
const inputLimit = document.getElementById("limit");
const button = document.querySelector("button");

button.addEventListener("click", buttonClick);

function buttonClick() {
    const page = inputPage.value;
    const limit = inputLimit.value;

    if ((page < 1 || page > 10 || isNaN(page)) && (limit < 1 || limit > 10 || isNaN(limit))) {
        document.write("Номер страницы и лимит вне диапазона от 1 до 10.");
    } else
    if (page < 1 || page > 10 || isNaN(page)) {
        document.write("Номер страницы вне диапазона от 1 до 10.");
    } else
    if (limit < 1 || limit > 10 || isNaN(limit)) {
        document.write("Лимит вне диапазона от 1 до 10.");
    } else {
        document.location.href = (`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    }
};

let formData = {};
const form = document.querySelector('form');

form.addEventListener('input',function(event){
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
});

if (localStorage.getItem('formData')) {
    formData = JSON.parse(localStorage.getItem('formData'));
    
    for (let key in formData){
        form.elements[key].value = formData[key];
    }
}