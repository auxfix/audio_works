import './style.css'
import { runAudio } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Audio App</h1>
    <div class="card">
      <button id="audio" type="button">Hear me out</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`


document.querySelector<HTMLButtonElement>('#audio')?.addEventListener('click', runAudio)
