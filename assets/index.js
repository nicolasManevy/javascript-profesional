import MediaPlayer from './MediaPlayer.js'
import Autoplay from './pluggins/AutoPlay.js';
import AutoPause from './pluggins/AutoPause.js';
  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video, plugins:[new Autoplay(), new AutoPause()] });

  const button = document.querySelector('button#playButton');
  button.onclick = () => player.togglePlay();

  const muteButton= document.querySelector('button#muteButton');
  muteButton.onclick = () =>{
      if(player.media.muted ) {
          player.unMute();
      } else {
          player.mute();
      }
  }