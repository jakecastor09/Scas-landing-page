const ourStoryImg = document.getElementById('ourStoryImg');
const missionImg = document.getElementById('missionImg');
const visionImg = document.getElementById('visionImg');

const ourStory = document.getElementById('ourStory');
const mission = document.getElementById('mission');
const vision = document.getElementById('vision');


function showSection(element) {
    const aboutToggle = [ourStory, mission, vision];
    aboutToggle.forEach(item => {
        if (item === element) {
            item.classList.remove('about-us__text-hidden');
        }
        else {
            item.classList.add('about-us__text-hidden');
        }
    })
}


ourStoryImg.addEventListener('click', () => {
    showSection(ourStory);
    ourStoryImg.classList.add('active');
    missionImg.classList.remove('active');
    visionImg.classList.remove('active');

});

missionImg.addEventListener('click', () => {
    showSection(mission);
    missionImg.classList.add('active');
    ourStoryImg.classList.remove('active');
    visionImg.classList.remove('active');
});

visionImg.addEventListener('click', () => {
    showSection(vision);

    visionImg.classList.add('active');
    missionImg.classList.remove('active');
    ourStoryImg.classList.remove('active');
});


