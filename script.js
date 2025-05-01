document.getElementById('upload-button').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const files = fileInput.files;
    const responseDiv = document.getElementById('file-response');

    responseDiv.innerHTML = ''; // Czyści poprzednie odpowiedzi

    for (let file of files) {
        responseDiv.innerHTML += `<p>Załadowano plik: ${file.name}</p>`;
        // Tutaj dodaj kod do wysyłania pliku do backendu i obsługi AI
        // Na razie tylko przykładowa odpowiedź
        if (file.type.startsWith('text/') || file.type === 'application/pdf') {
            responseDiv.innerHTML += `<p>Plik jest czytelny.</p>`;
        } else {
            responseDiv.innerHTML += `<p>Plik jest nieczytelny (typ: ${file.type}).</p>`;
        }
    }
});

document.getElementById('send-button').addEventListener('click', function() {
    const chatInput = document.getElementById('chat-input');
    const userMessage = chatInput.value;
    const chatWindow = document.getElementById('chat-window');

    if (userMessage) {
        chatWindow.innerHTML += `<p><strong>Ty:</strong> ${userMessage}</p>`;
        chatInput.value = '';

        // Tutaj dodaj kod do komunikacji z AI
        chatWindow.innerHTML += `<p><strong>AI:</strong> Odpowiedź na Twoje pytanie...</p>`;
    }
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
