let correctAnswers = 0
let inCorrectAnswers = 0
const qestion1 = prompt('Сколько будет 2 + 2?')
const answer1 = '4'
if (qestion1 === answer1) {
    alert('Ответ Верный')
    correctAnswers++
} else {
    alert('Ответ Неверный')
    inCorrectAnswers++
}
const qestion2 = prompt('Сколько будет 2 * 2?')
const answer2 = '4'
if (qestion2 === answer2) {
    alert('Ответ Верный')
    correctAnswers++
} else {
    alert('Ответ Неверный')
    inCorrectAnswers++
}
const qestion3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?')
const answer3 = '1'
if (qestion3 === answer3) {
    alert('Ответ Верный')
    correctAnswers++
} else {
    alert('Ответ Неверный')
    inCorrectAnswers++
}
const qestion4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?')
const answer4 = '12'
if (qestion4 === answer4) {
    alert('Ответ Верный')
    correctAnswers++
} else {
    alert('Ответ Неверный')
    inCorrectAnswers++
}
const qestion5 = prompt('Сколько будет 2 + 2 * 2?')
const answer5 = '6'
if (qestion5 === answer5) {
    alert('Ответ Верный')
    correctAnswers++
} else {
    alert('Ответ Неверный')
    inCorrectAnswers++
}
alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${inCorrectAnswers}`)





