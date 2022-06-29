leftWristX = 0
leftWristY = 0

rightWristX = 0
rightWristY = 0

song1 = ''
song2 = ''

function preload() {
  song1 = loadSound('Bon_Bon_Chocolat_EVERGLOW.mp3')
  song2 = loadSound('Mixed_Up_ENHYPEN.mp3')
}

function setup() {
  canvas = createCanvas(500, 500)
  canvas.center()

  video = createCapture(VIDEO)
  video.hide()

  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', gotPoses)
}

function modelLoaded() {
  console.log('Model has loaded')
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results)

    leftWristX = results[0].pose.leftWrist.x
    leftWristY = results[0].pose.leftWrist.y
    console.log('Left wrist x = ' + leftWristX + 'Left wrist y = ' + leftWristY)

    rightWristX = results[0].pose.rightWrist.x
    rightWristY = results[0].pose.rightWrist.y
    console.log(
      'Right wrist x = ' + rightWristX + 'Right wrist y = ' + rightWristY,
    )
  }
}

function draw() {
  image(video, 0, 0, 500, 500)
}
