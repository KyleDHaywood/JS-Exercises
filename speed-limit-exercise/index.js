// Speed limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    let points = Math.floor((speed-speedLimit) / 5);
    switch (true){
        case (speed <= speedLimit):
            return 'Okay'
        case (points >= 12):
            return 'License suspended';
        default :
            return points}
}


console.log(checkSpeed(70))