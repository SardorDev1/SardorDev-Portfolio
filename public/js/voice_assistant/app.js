document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      let home = document.querySelector('#homenav') 
      about = document.querySelector('#aboutnav'),
        skills = document.querySelector('#skillsnav'),
        teams = document.querySelector('#teamsnav'),
        portfolio = document.querySelector('#portfolionav'),
        google = document.querySelector('#google'),
        aboutmep = document.querySelector('#aboutmep'),
        resume = document.querySelector('.resumeactive'),
        contact = document.querySelector('#contactnav');

        const soundCloud = document.querySelector('.sound-cloud'),
     off = document.querySelector('#off'),
     on = document.querySelector('#on'),
     myAudio = document.querySelector('#myAudio');
        var alanBtnInstance = alanBtn({
            key: "1bcd753339783a61647bc516eb2998242e956eca572e1d8b807a3e2338fdd0dc/stage",
            onCommand: function (commandData) {
                if (commandData.command === "go:back") {

                }
            },
            onCommand: function (commandData) {
                if (commandData.command === 'play-music') {

                    on.style.display = 'block';
                    off.style.display = 'none';
                    soundCloud.style.color = "#08fdd8";
                    myAudio.play();

                }
                else if (commandData.command === 'stop_music') {
                    on.style.display = 'none';
                    off.style.display = 'block';
                 soundCloud.style.color = "#f50057";
                    myAudio.pause();
                }
                if (commandData.command === 'home') {
                    home.click()
                }
                if (commandData.command === 'about') {
                   
                    about.click()
                setTimeout(() => {
                    aboutmep.style.color="gold"
                }, 1000);
                    setTimeout(() => {
                        aboutmep.style.color="white";
                }, 36000);
                }
                if (commandData.command === 'skills') {
                    skills.click()
                }
                if (commandData.command === 'teams') {
                    teams.click()
                }
                if (commandData.command === 'portfolio') {
                    portfolio.click()
                }
                if (commandData.command === 'contact') {
                    contact.click()
                }
                if(commandData.command === 'google'){
                    google.click()
                }
                if(commandData.command === 'resume'){
                    setTimeout(() => {
                        resume.click()
                    }, 1200);
                }
            },



            rootEl: document.getElementById("alan-btn"),
        });
    }, 2200);
})





