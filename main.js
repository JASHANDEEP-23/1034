Webcam.set({
    width:400,
    height:300,
    image_format: "jpeg",
    jpeg_quality:90,
    crop_width :350,
    crop_height:250
});

camera = document.getElementById("camera");


Webcam.attach('#camera');


function snapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+ '">'
    })
}
console.log("ml5 version = "+ ml5.version);

