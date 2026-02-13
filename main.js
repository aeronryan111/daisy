const btn = document.getElementById('click-me');
const overlay = document.getElementById('overlay');
const messageBox = document.getElementById('message-box');
const typingText = document.getElementById('typing-text');
const title = document.querySelector('.valentines-title');

const message = "Hi! Happy Valentine's Day. 🌸 I know u don't have idea how much I miss you, mag iingat ka po palagi, I love you! ❤️";

onload = () => {
    document.body.classList.remove("container");
};

btn.addEventListener('click', () => {

    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 1000);

    messageBox.classList.remove('hidden');
    
    setTimeout(() => {
        title.classList.add('show-title');
        startTyping();
    }, 500);
});

let index = 0;
function startTyping() {
    if (index < message.length) {
        typingText.innerHTML += message.charAt(index);
        index++;
        setTimeout(startTyping, 70);
    }
}