let country = prompt('Введите страну');
if (country !== null) {
    country = country.toLowerCase();
}
let price;
switch (country) {
    case "china":
        price = 150;
        break;
    case "chili":
        price = 250;
        break;
    case "australia":
        price = 165;
        break;
    case "india":
        price=90;
        break;
    case "jamaica":
        price=130;
        break;
}
if(price !== -1){
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
} else {
    alert("В вашей стране доставка не доступна");
}
