let video = document.querySelector('.video')
document.querySelectorAll('.img-animation').forEach(element => {
    element.addEventListener('click', () => {
        video.style.display = 'flex';
    //    document.body.style.opacity = '0.9';
    //    video.style.opacity = '1';
    });
});
