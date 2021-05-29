import * as Tone from 'tone'

window.addEventListener("load", ()=>{
  const button = document.querySelector('button');
  button.onclick = async ()=>{
    await Tone.start();
    play();
  };
});

function play() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
}
