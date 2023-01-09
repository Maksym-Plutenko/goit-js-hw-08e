import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onTimeupdate(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

const throttledOnTimeupdate = throttle(onTimeupdate, 1000);

player.on('timeupdate', throttledOnTimeupdate);

const savedTime = localStorage.getItem("videoplayer-current-time");
if (savedTime) {
    player.setCurrentTime(savedTime);
}
