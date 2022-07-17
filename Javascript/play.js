var audio = new Audio(); 
    audio.src = 'audio/2.mp4'; loop;

function play() {
    window.alert('音割れポッターを再生します');
    audio.play();
}
function pause() {
    audio.pause();
}
