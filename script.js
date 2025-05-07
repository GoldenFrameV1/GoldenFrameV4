
const video = document.getElementById('camera');
const canvas = document.getElementById('canvas');
const spiral = document.getElementById('spiral');
let currentStream = null;
let useFrontCamera = false;

async function initCamera() {
  if (currentStream) {
    currentStream.getTracks().forEach(track => track.stop());
  }
  const constraints = {
    video: {
      facingMode: useFrontCamera ? 'user' : 'environment',
      width: { ideal: 1280 },
      height: { ideal: 720 }
    }
  };
  currentStream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = currentStream;
}

document.getElementById('flip').addEventListener('click', () => {
  useFrontCamera = !useFrontCamera;
  initCamera();
});

document.getElementById('flip-spiral').addEventListener('click', () => {
  spiral.style.transform = spiral.style.transform === 'scaleX(1)' ? 'scaleX(-1)' : 'scaleX(1)';
});

document.getElementById('capture').addEventListener('click', () => {
  const ctx = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(spiral, 0, 0, canvas.width, canvas.height);
  const image = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = image;
  a.download = 'fibonacci_photo.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

initCamera();
