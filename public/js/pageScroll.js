
//Collect container to work on
//const scrollBtn = document.getElementsByClassName('scroll-btn')
//Add wheel listener
//scrollBtn.addEventListener('click', pageScroll);

document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        pageScroll();
    });
})

//Hides and reveals content 
function pageScroll() {
    const introContent = document.getElementById('intro-content');
    const aboutContent = document.getElementById(`about-content`);

    //Hide the intro content, show the about content
    if (isVisible(introContent)){
        aboutContent.style.color = 'rgba(0,0,0,0.9)'
        introContent.style.color = 'rgba(0,0,0,0.0)'
        //changeOpacity(aboutContent);
        //changeOpacity(introContent);
        aboutContent.style.visibility = 'visible';
        introContent.style.visibility = 'hidden';
    }
    //Hide the about content, show the intro content
    else if (isVisible(aboutContent)){
        aboutContent.style.color = 'rgba(0,0,0,0.0)'
        introContent.style.color = 'rgba(0,0,0,0.9)'
        //changeOpacity(introContent);
        //changeOpacity(aboutContent);
        introContent.style.visibility = 'visible';
        aboutContent.style.visibility = 'hidden';
    } 
}

//Check if a given node is hidden or not
function isVisible(node) {
    return (window.getComputedStyle(node).visibility === 'visible') ? true : false;
}