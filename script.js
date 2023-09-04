// Function for text animation.
function animation(text){
    const textAnime = document.querySelector('.text-anime');
        let i = 0;
        textAnime.textContent = '';
        function animate(){
            if(i < text.length){
                textAnime.textContent += text.charAt(i);
                i++;
                setTimeout(animate, 100);
            }
        }  
    animate()
    }
animation("Fight With AI to Save your job.")
// Function for button to sound on click
const sound = document.querySelectorAll('.options')
const audio = new Audio('./audio/button.wav')
sound.forEach(sound=>{
    sound.addEventListener('click',()=>{
        audio.play()
    });
});
