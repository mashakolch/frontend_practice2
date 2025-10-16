// Обработка формы добавления записи
document.getElementById('diaryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const date = document.getElementById('entryDate').value;
    const title = document.getElementById('entryTitle').value;
    const description = document.getElementById('entryDescription').value;
    const status = document.getElementById('entryStatus').value;

    // Получаем выбранные технологии
    const techCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const technologies = Array.from(techCheckboxes).map(cb => cb.value);

    // Здесь можно добавить логику для сохранения записи
    // Например, отправка на сервер или добавление в локальное хранилище

    alert('Запись успешно добавлена!');
    this.reset();
});

// Устанавливаем сегодняшнюю дату по умолчанию
document.getElementById('entryDate').valueAsDate = new Date();
