noseX = 0;
noseY = 0;
leftEyeX = 0;
leftEyeY = 0;
lefteyex = 0;
lefteyey = 0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/L8BbzdDf/Red-Nose-Transparent.png');
    hat = loadImage('https://i.postimg.cc/8z9mJZQW/R.png');
    sunglasses = loadImage('https://i.postimg.cc/Vkh92DKv/black-sunglasses-free-clip-art.png');
}

function setup()
{
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-17;
        noseY = results[0].pose.nose.y-13;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        leftEyeX = results[0].pose.leftEye.x - 85;
        leftEyeY = results[0].pose.leftEye.y- 110;
        lefteyex = results[0].pose.leftEye.x - 60;
        lefteyey = results[0].pose.leftEye.y - 20;
        console.log("leftEye x = " + leftEyeX);
        console.log("leftEye y = " + leftEyeY);
    }
}

function modelLoaded()
{
    console.log("PoseNet Model is loaded!");
}


function draw()
{
    image(video, 0, 0, 400, 300);
    image(clown_nose, noseX, noseY, 30, 30);
    image(hat, leftEyeX, leftEyeY, 120, 90);
    image(sunglasses, lefteyex,lefteyey, 80, 40);
}

function take_snapshot()
{
    save('my_filter_image.png');
}