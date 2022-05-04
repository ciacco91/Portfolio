var words = ['A YOUNG DEVELOPER..', '..GROWING FAST!']
var counter = 0;
var word = document.getElementById('carousel');

setInterval(update_words, 4000);

function update_words () {
    word.innerHTML = words[counter];
    counter ++;
    if(counter >= words.length) {
        counter = 0;
    }
}