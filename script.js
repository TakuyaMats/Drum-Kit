// try to get one key working at a time
// use keydown function?

let key = document.getElementsByClassName('key');
document.addEventListener('keydown', playKey);

function playKey(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    audio.play();
}
