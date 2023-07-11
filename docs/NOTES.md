Really want to put the responsive sun in my notes - because I think its good CSS; even if I get rid of the gradient background. The code is: 


.center-circle {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.sun {
    flex-grow: 8;
    aspect-ratio: 1 / 1;
    background-color: black;
    border-radius: 50%;
}

.space {
    flex-grow: 1;
}

/* Rotates the flexbox action if height becomes greater than width */
@media (orientation:portrait) {
    .center-circle {
        flex-direction: row;
    }
    .space {
        flex-grow: 0.5;
    }
}

I'm not sure if I can explain exactly how I worked it out but should try - essentially it stopped being a circle once height became greater than width.

I've sort of made CSS Grid but with flex box with these 'space' divs - and only on one plane.