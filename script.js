navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    const video = document.getElementById('video');
    video.srcObject = stream;
  })
  .catch(function(error) {
    console.error('Error accessing webcam: ', error);
  });

document.getElementById('capture').addEventListener('click', function() {
  // Capture the image logic
  console.log('Capture photo clicked');
});

document.getElementById('flipCamera').addEventListener('click', function() {
  // Flip the camera logic
  console.log('Flip camera clicked');
});

document.getElementById('flipSpiral').addEventListener('click', function() {
  const spiral = document.getElementById('spiral');
  const currentRotation = spiral.style.transform || 'rotate(90deg)';
  const newRotation = currentRotation === 'rotate(90deg)' ? 'rotate(270deg)' : 'rotate(90deg)';
  spiral.style.transform = newRotation;
});
