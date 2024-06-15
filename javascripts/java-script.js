document.addEventListener("DOMContentLoaded", function() {
    // Получаем доступ к кнопке
    const button_cart = document.getElementsByClassName("to_cart");

    // Добавляем обработчик события клика
    button_cart.addEventListener("click", function() {
    // Изменяем текст кнопки
    button_cart.innerText = "Ты нажал на меня!";
    });

});
