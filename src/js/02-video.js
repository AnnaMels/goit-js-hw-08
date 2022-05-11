import Player from '@vimeo/player';
import { throttle } from 'throttle-debounce';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(1000, () => {
    player.getCurrentTime().then(function (seconds) {
       localStorage.setItem(CURRENT_TIME_KEY, seconds);
    });
}));


if (localStorage.getItem(CURRENT_TIME_KEY)) {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY))
}

