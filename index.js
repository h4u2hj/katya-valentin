// $(document).ready(function() {
//     console.log('Document is ready!');
//     // When the element with the class 'title' is clicked
//     $('.title').on('click', function() {
//         console.log('Title clicked!');
//         // Add the class 'open' to the element with the class 'container'
//         $('.container').addClass('open');
//     });
//
//     // When the element with the class 'close' is clicked
//     $('.close').on('click', function() {
//         // Remove the class 'open' from the element with the class 'container'
//         $('.container').removeClass('open');
//     });
// });


document.addEventListener('DOMContentLoaded', () => {

    let titleEl = document.getElementsByClassName('title')[0];
    let closeEl = document.getElementsByClassName('close')[0];
    let containerEl = document.getElementsByClassName('container')[0];
    let yesBtn = document.getElementById('yesbtn');
    let noBtn = document.getElementById('nobtn');


    titleEl.addEventListener('click', () => {
        containerEl.classList.add('open');
    });

    closeEl.addEventListener('click', () => {
        containerEl.classList.remove('open');
    });

    yesBtn.addEventListener('click', () => {
        window.location.href = "yes.html"
    })

    noBtn.addEventListener('click', async () => {
        noBtn.textContent = 'HAHA azt hitted kattinthatsz erre';
        await new Promise(resolve => setTimeout(resolve, 3000));
        noBtn.textContent = 'NEM';
    });

    noBtn.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - noBtn.offsetWidth - 100;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        let x = Math.random() * maxX;
        let y = Math.random() * maxY;

        // Ensure the button doesn't go outside the viewport
        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));

        console.log('New Position:', x, y);
        console.log('Viewport Dimensions:', window.innerWidth, window.innerHeight);
        console.log('Button Dimensions:', noBtn.offsetWidth, noBtn.offsetHeight);
        console.log('Parent Dimensions:', noBtn.parentElement.offsetWidth, noBtn.parentElement.offsetHeight);

        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    })
});