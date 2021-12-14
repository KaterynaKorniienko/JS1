let credits = 35500
let pricePerDroid = 3000
let totalPrice
let drnumber = prompt('Сколько дроидов Вы хотите купить?');
if (drnumber === null) {
    console.log('Отменено пользователем');
} else {
    totalPrice = Number(drnumber) * pricePerDroid;
    if (totalPrice > credits){
    alert('Недостаточно средств на счету!');
} else {
    let balance = credits - totalPrice;
    alert(`Вы купили ${drnumber}  дроидов, на счету осталось ${balance} кредитов.`);
}
}
