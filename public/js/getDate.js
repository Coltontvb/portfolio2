function displayDate() {
    const dateLabel = document.getElementById('dateLabel');
    let fullYear = new Date().getFullYear();
    dateLabel.innerHTML = `Coltontvb.Codes ${fullYear}`;
}

displayDate();
