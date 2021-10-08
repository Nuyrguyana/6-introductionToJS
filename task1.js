const existedUserLogin = 'the_best_user'
const existedUserPassword = '12345678'
const userLogin = prompt('Введите логин')
const userPassword = prompt('Введите пароль')

if ((userLogin.trim() === existedUserLogin) && (userPassword.trim() === existedUserPassword)) {
    alert(`Добро пожаловать, ${existedUserLogin}!`)
} else {
    alert('Логин и(или) Пароль введены неверно!')
}
