function getBitcoinPrice() {
  // Ваш код для отримання ціни біткоїна (наприклад, використовуючи API)
  // В цьому місці ви можете вставити логіку для взаємодії з API та оновлення ціни на сторінці

  // Приклад тестових даних:
  const testPrice = Math.floor(Math.random() * 10000) + 5000;

  // Оновлення тексту ціни на сторінці
  document.getElementById("bitcoin-price").textContent = `$${testPrice}`;
}
