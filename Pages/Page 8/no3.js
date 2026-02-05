//Changing gif while hovering on a button
const img = document.getElementById('image');

const images = {
    depressed: '../Assets/attitude.gif',
    ori: "../Assets/angry.gif"
};

function ChangeImage(giphy) {
    img.src = images[giphy];
}
function ResetImage() {
    img.src = images.ori;
};

//BG image change while hovering on a button
var body = document.body;

function bg2() {
	body.className = 'noo';
};

function resetBG(){
	body.className = '';
};

//Moving button
const buttonHeight = 50;
const buttonWidth = 150;

//Making bg
function lines(){
    let sizeW = Math.random() * 12;
    let duration = Math.random() * 3;
    let e = document. createElement('div');
    e.setAttribute('class', 'circle');
    document.body.appendChild(e);
    e.style.width = 2*sizeW + 'px';
    e.style.left = Math.random() * + innerWidth + 'px';
    e.style.animationDuration = 2 + duration + 's';
    setTimeout(function(){
        document.body.removeChild(e)
    }, 4000);
}

setInterval(function(){
    lines();
}, 200);

// const maxWidth = 650; // Will be dynamic now
// const maxHeight = 600; // Will be dynamic now

window.addEventListener('DOMContentLoaded', () =>{
    const button = document.getElementById('yes');

    // Ensure button has some dimensions before trying to read them
    // These are fallback values if offsetWidth/Height are 0 initially.
    const buttonWidth = button.offsetWidth || 150;
    const buttonHeight = button.offsetHeight || 50;

    button.addEventListener('mouseover', () => {
        // Calculate maximum coordinates based on viewport and button size
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Max random position should ensure the button stays fully within view
        const maxRandomX = viewportWidth - buttonWidth;
        const maxRandomY = viewportHeight - buttonHeight;

        // Ensure maxRandomX/Y are not negative if button is larger than viewport (unlikely for this button)
        const targetX = Math.floor(Math.random() * Math.max(0, maxRandomX));
        const targetY = Math.floor(Math.random() * Math.max(0, maxRandomY));

        button.style.position = 'absolute'; // Ensure it's absolutely positioned for left/bottom to work
        button.style.left = targetX + 'px';
        button.style.bottom = targetY + 'px'; // Using bottom; could use top as well
    });
});

//BG image change while hovering on a button
var body = document.body;

function bg() {
	body.className = 'noo';
};

function resetBG(){
	body.className = '';
};

//Linking to no page
function noFunction() {
    window.location.href = "../Page 5/yes.html";
}