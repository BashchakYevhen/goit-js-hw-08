import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const throttle = require(`lodash.throttle`);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
const CURRENT_TIME_VIDEO = "videoplayer-current-time";

onAuditVideoTime()
function onAuditVideoTime(){
if (localStorage.getItem(CURRENT_TIME_VIDEO)) {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME_VIDEO)).then(function (seconds) {
        console.log(seconds)
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
};}

function onPlay(timeupdate) {
        localStorage.setItem(CURRENT_TIME_VIDEO, JSON.stringify(timeupdate.seconds));
    }



