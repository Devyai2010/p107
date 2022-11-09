var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition(); 
var Textbox = document.getElementById("textbox");

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.result[0][0].transcript;
    console.log(content);
    document.getElementById("Textbox").innerHTML = content;
}

function speak(){
    var synth = window.SpeechSynthesis;
    speak_data = document.getElementById("textbox").Value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");