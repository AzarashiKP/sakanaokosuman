var audio = new Audio(); 
    audio.src = 'audio/1.mp4';

function play() {
    window.alert('音割れポッターを再生します');
    audio.play();
}