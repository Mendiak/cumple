// Inicializar jsConfetti
const jsConfetti = new JSConfetti();

function playMusicAndConfetti() {
    document.getElementById('birthdaySong').play();
    triggerConfetti();
}

function triggerConfetti() {
    jsConfetti.addConfetti({
        emojis: ['🎉', '🎂', '🎁', '🎈', '🍰', '🥳'],
        emojiSize: 50,
        confettiNumber: 100
    });
}

// Asegurarse de que el DOM esté cargado antes de asignar la función
document.addEventListener('DOMContentLoaded', () => {
    window.playMusicAndConfetti = playMusicAndConfetti;
});
