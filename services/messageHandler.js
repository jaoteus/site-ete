document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Cria um objeto para enviar os dados
    const formData = {
        username: name,
        userEmail: email,
        message: message
    };

    // Envia a requisição POST
    fetch('http://localhost:8080/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        
        if (response.status === 200) {
            return {}
        }

        if (!response.ok) {
            throw new Error('erro na red');
        }

        return response.json();
    })
    .then(data => {
        console.log('Sucesso:', data);
        alert('Mensagem enviada com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Houve um problema ao enviar a mensagem.');
    });
});
