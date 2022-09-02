const socket = io('http://localhost:8000');

const form = document.getElementById('send-form');

const messageInput = document.getElementById('messageInp');

const messageContainer = document.querySelector('container');

// const user = prompt("Enter Your Name To Join ");
// socket.emit('new-user-joined',user);

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add('message');
    messageContainer.append('messageElement');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.ariaValueMax;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
})

socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'right');
})
socket.on('recieve', data => {
    append(`${data.name} : ${data.message} `, 'left');
})