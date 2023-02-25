const pianoKeys = document.querySelectorAll(".piano_keys .key"),
volumeSlider = document.querySelector(".volume_slider input"),
keysChekerbox = document.querySelector(".keys_checkbox input");

let allKeys = [],
 audio = new Audio("tunes/a.wav") //by default, audio src is a tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed
    audio.play(); // playing audio
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150)
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    // calling playtune function with passing data key value as an argument
    key.addEventListener("click", ()  => playTune(key.dataset.key))
});

const handleVolume = (e) => {
    audio.volume = e.target.value; // pressing the range slider values as an volume
}

const showHideKeys = () => {
    // toggle hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

const pressedKey = (e) => {

 if(allKeys.includes(e.key)) playTune(e.key);
}
keysChekerbox.addEventListener("click", showHideKeys)
volumeSlider.addEventListener("input", handleVolume)
document.addEventListener("keydown", pressedKey);