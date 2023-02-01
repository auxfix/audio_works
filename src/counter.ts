const context = new AudioContext();

export function runAudio() {

  setupContext();
}

async function setupContext() {
  const guitar = await getAudioMedia()
  if (context.state === 'suspended') {
    await context.resume()
  }
  const source = context.createMediaStreamSource(guitar)
  source.connect(context.destination)
}

function getAudioMedia() {
  return navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: false,
      autoGainControl: false,
      noiseSuppression: false,
      latency: 0
    }
  })
}