Webcam.set({
width: 300,
height: 200,
image_format: "png",
png_quality: 90
});
camera = document.getElementById("webcam");
Webcam.attach(camera);

function C_I(){
Webcam.snap(function(data_URL){
document.getElementById("I_T_R").innerHTML = "<img id='pic_to_identify' src='"+data_URL+"'>";
});
}


console.log("ml5 version is"+""+ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zjj367ePj/model.json",model_loaded)

function model_loaded(){
console.log("model is loaded");
}

function Check(){
img = document.getElementById('pic_to_identify');
classifier.classify(img, goresult);
}

function goresult(error, results){
if(error){
console.log(error);
}
else{
console.log(results);
document.getElementById("output_object").innerHTML = results[0].label;
document.getElementById("output_acc").innerHTML = results[0].confidence.toFixed(3);
}
}

