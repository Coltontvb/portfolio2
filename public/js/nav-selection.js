//Adds the event listeners upon html page load
document.querySelectorAll(`.nav-item`).forEach(navItem => {
    navItem.addEventListener(`click`, () => {
        renderContent(event);
    });
});

//Renders the content based on the selection made by the user
const renderContent = (e) => {
    //Get target and set "hide" text to the nav item
    const clickedNavItemId = e.target.getAttribute(`id`);
    //Get all sections and store in array
    const sections = document.getElementsByClassName(`section-wrapper`);
    //Set the location to jump to (See span in HTML)
    const jumpLocation = document.getElementById(`jump-location`);
    //Set visibilities
    switch(clickedNavItemId){
        case (`nav-about`):
            isVisible(sections[0]) ? sections[0].classList.add(`hidden`) : sections[0].classList.remove(`hidden`);
            sections[1].classList.add(`hidden`);
            sections[2].classList.add(`hidden`);
            jumpLocation.scrollIntoView({behavior: `smooth`});
            break;
        case (`nav-what-i-do`):
            isVisible(sections[1]) ? sections[1].classList.add(`hidden`) : sections[1].classList.remove(`hidden`);
            sections[0].classList.add(`hidden`);
            sections[2].classList.add(`hidden`);
            jumpLocation.scrollIntoView({behavior: `smooth`});
            break;
        case (`nav-current-projects`):
            isVisible(sections[2]) ? sections[2].classList.add(`hidden`) : sections[2].classList.remove(`hidden`);
            sections[0].classList.add(`hidden`);
            sections[1].classList.add(`hidden`);
            jumpLocation.scrollIntoView({behavior: `smooth`});
            break;
    }
}
//Returns true if the display of the node is flex or block
const isVisible = (node) => {
    return (window.getComputedStyle(node).display === `flex` || window.getComputedStyle(node).display === 'block') ? true : false;
}