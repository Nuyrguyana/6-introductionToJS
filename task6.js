const clientName = 'Игорь'
let clientSpentForAllTime = 110
let clientSpentToday = 25

const  discount10 = 10
const  discount20 = 20
const  discount30 = 30
let discountClient = 0

if ((clientSpentForAllTime >= 100) && (clientSpentForAllTime < 300)){
    discountClient = discount10
    alert(`Вам предоставляется скидка в ${discountClient}%!`)
} else if ((clientSpentForAllTime >= 300) && (clientSpentForAllTime < 500)){
    discountClient = discount20
    alert(`Вам предоставляется скидка в ${discountClient}%!`)
} else if (clientSpentForAllTime >= 500) {
    discountClient = discount30
    alert(`Вам предоставляется скидка в ${discountClient}%!`)
}

clientSpentToday = clientSpentToday - (clientSpentToday / discountClient)
clientSpentForAllTime += clientSpentToday

alert(`Спасибо,${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`)