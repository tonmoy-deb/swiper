const container = document.querySelector('.container');

let swipeEnabled = false;
let swipeStartAt = 0;
let swipeEndAt = 0;


// FUNCTIONS

const swipeToLeft = () => {
    console.log("swipe to left")
}

const swipeToRight = () => {
    console.log("swipe to right")
}

const swipeStart = (e) => {
    // ENABLE SWIPE
    swipeEnabled = true;
    // SET SWIPE START POINT
    swipeStartAt = e.type.includes('touch') ? e.touches[0].clientX : event.pageX;

    // console.log(e)
}

const swipeMove = (e) => {
    if (swipeEnabled) {
        // DISABLE SWIPE
        swipeEnabled = false
        // SET SWIPE END POINT
        swipeEndAt = e.type.includes('touch') ? e.touches[0].clientX : event.pageX;

        // console.log(e) 
    }  
}

const swipeEnd = () => {

    // console.log(swipeStartAt) 
    // console.log(swipeEndAt)

    if (swipeStartAt > swipeEndAt) {
        swipeToLeft()
    }else if (swipeStartAt < swipeEndAt) {
        swipeToRight()
    }
}

// TOUCH EVENTS [MOBILE]
container.addEventListener('touchstart', swipeStart);
container.addEventListener('touchmove', swipeMove);
container.addEventListener('touchend', swipeEnd);

// MOUSE EVENTS [DESKTOP]
container.addEventListener('mousedown', swipeStart);
container.addEventListener('mousemove', swipeMove);
container.addEventListener('mouseup', swipeEnd);

