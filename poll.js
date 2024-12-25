// poll.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('poll-form');
    const resultDiv = document.getElementById('poll-result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Собираем данные формы
        const formData = new FormData(form);
        let score = 0;
        // Пробегаем по всем вопросам q1-q5
        for(let i = 1; i <= 5; i++) {
            let value = formData.get('q' + i);
            if(value) {
                score += parseInt(value, 10);
            }
        }

        // Имитируем AJAX запрос с задержкой
        resultDiv.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div> Calculating your result...';
        setTimeout(() => {
            // Выводим результат "опроса" без обращения к серверу
            resultDiv.innerHTML = `<div class="alert alert-success" role="alert">Your score is: ${score}</div>`;
        }, 1000); // Задержка 1 секунда
    });
});
