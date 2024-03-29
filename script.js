let interval;

window.open("https://www.youtube.com/watch?v=S53_l6yjw0A&ab_channel=MaestroZiikos", '_blank');

function die() {
    interval = Math.round(4000 * Math.random()); 
    window.open("https://www.youtube.com/watch?v=S53_l6yjw0A&ab_channel=MaestroZiikos", '_blank');

    console.log(interval/1000);
    setTimeout(die, interval);
    } 

die();