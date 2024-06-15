document.addEventListener("DOMContentLoaded", function() {
    // Получаем доступ к кнопке
    const button_cart = document.getElementsByClassName("to_cart");

    // Добавляем обработчик события клика
    button_cart[0].addEventListener("click", function() {
    // Изменяем текст кнопки
    button_cart[0].innerText = "Ты нажал на меня!";
    });

    // document.getElementById('to_cart').innerText = 'nnnn';

});
