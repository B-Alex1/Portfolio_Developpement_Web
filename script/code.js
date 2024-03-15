//Dark / Light
function dark_light(){
    let elements = document.querySelectorAll('.dark, .light');

    elements.forEach(element => {
        element.classList.toggle('dark');
        element.classList.toggle('light');
    });
}

//Deplacement sur site
function sedeplacer(sectionid){
    var section = document.getElementById(sectionid);

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

//Changer style text
let divs = document.getElementsByTagName('p');

function reinitialiser(){
    for (div of divs){
        div.classList.remove("fond");
        div.classList.remove("poids");
        div.classList.remove("penche");
        div.classList.remove("pluspenche");
        div.classList.add("defaultfond");
    }
}

function changerParagraphes(){
    reinitialiser();
    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    for(div of divs){
        div.classList.remove("defaultfond");
        div.classList.add("fond");
        document.documentElement.style.setProperty('--main-bg-color', randomColor);
    }

    const randomPoids = Math.floor(Math.random()*3); 
    for(div of divs){
        if(randomPoids){
            if(randomPoids>1){
                div.classList.add("poids");
            }else{
                div.classList.add("penche")
            }
        }else{
            div.classList.remove("penche");
            div.classList.remove("poids");
        }
    }
}

//Collapse
function collapse(idcollapse){
    var content = document.getElementById(idcollapse);
    if(content.style.display === "block"){
        content.style.display = "none";
    }else{
        content.style.display = "block"
    }
}

//Pause gif
var pause = false;
function pauseGIF(){
    var vid = document.getElementById("video");
    if(pause){
        document.getElementById("gif").setAttribute("src", "images/sunsetCity.gif");
        vid.classList.remove('paused');
        pause = false;
    }else{
        document.getElementById("gif").setAttribute("src", "images/pausedGIF.png");
        vid.classList.add('paused');
        pause = true;
    }
}

//Header
document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var sections = document.getElementById('sections');

    var isScrollingUp = false;
    var lastScroll = 0;

    // Event listener for scroll
    window.addEventListener('scroll', function () {
      // Check if the user has scrolled down 80vh
      var scrolled = window.scrollY;
      var scrollThreshold = 120 * window.innerHeight / 100;

      isScrollingUp = scrolled < lastScroll;
      lastScroll = scrolled;

      // Change the class of the header based on the scroll position
      if (scrolled > scrollThreshold) {
        header.classList.add('scrolled');
        sections.classList.add('scrolled');

        setTimeout(function () {
            header.classList.add('visible');
        }, 10);
      } else {
        header.classList.remove('scrolled','visible');
        sections.classList.remove('scrolled');
      }
    });
});