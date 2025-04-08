document.getElementById('burger-icon').addEventListener('click', function () {
    const modal = document.getElementById('modal');
    modal.classList.toggle('active'); // Додаємо/забираємо клас active
});

document.getElementById('modal').addEventListener('click', function (event) {
    if (event.target === this) {
        this.classList.remove('active'); // Закриття при кліку поза контентом
    }
});


const quotes = [
    '«Не думкам треба вчити, а думати» – Іммануїл Кант.',
    '«7 вересня відзначають День кіберспорту в Україні. Саме в цей день кіберспорт був офіційно визнаний видом спорту в Україні завдяки Федерації Кіберспорту України (UESF)',
    '«З 18 січня по 28 березня 2021 року в Києві відбувся перший Національний Кубок України з кіберспорту.',
    '«Історія цифрового спорту почалася з таких ігор, як  Quake, які дозволяли грати в мережі через локальну мережу або інтернет.',
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById('quote').textContent = randomQuote;