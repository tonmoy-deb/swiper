const container = document.querySelector('.container');

let swipeEnabled = false;
let swipeStartAt = 0;
let swipeEndAt = 0;
let swipeDistance = 100;


// FUNCTIONS

const rightToLeft = () => {
    alert("right to left")
}

const leftToRight = () => {
    alert("left to right")
}

const swipeStart = (e) => {
    // ENABLE SWIPE
    swipeEnabled = true;
    // SET SWIPE START POINT
    swipeStartAt = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;

    // console.log(e)
}

const swipeEnd = (e) => {
    if(swipeEnabled) {
        // DISABLE SWIPE
        swipeEnabled = false
        // SET SWIPE END POINT
        swipeEndAt = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;

        // CHECK SWIPE DIRECTION
        if ((swipeStartAt - swipeEndAt) >= swipeDistance) {
            rightToLeft()
        }else if ((swipeEndAt - swipeStartAt) >= swipeDistance) {
            leftToRight()
        }
    }

    // RESET SWIPE ENDPOINTS
    swipeStartAt = 0;
    swipeEndAt = 0;
}

// TOUCH EVENTS [MOBILE]
container.addEventListener('touchstart', swipeStart);
container.addEventListener('touchend', swipeEnd);

// MOUSE EVENTS [DESKTOP]
container.addEventListener('mousedown', swipeStart);
container.addEventListener('mouseup', swipeEnd);
container.addEventListener('mouseleave', swipeEnd);

