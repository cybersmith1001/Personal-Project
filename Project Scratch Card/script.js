window.addEventListener('click', (event)=>{        // For all pages, makes the project name flash red and back to blue on a click
    const h1 = document.getElementById("projectName")
    h1.style.color = "red"
    setTimeout(() => {
      h1.style.color = "rgb(0, 160, 255)"}, 3000) // Delays the color change until 3 seconds

    })


window.addEventListener("click", (event)=>{  // On click
    const button = document.getElementById("365")
    button.innerHTML = "365 SCRATCH CARDS" // Changes (inside the JavaScript) the words of the button when clicked
    setTimeout(() => {
        button.innerHTML = "365 DAYS"}, 3000)  //The original words automatically re-appear after 3 seconds
    }
    )

// Process repeated due to different words required in the JavaScript change
    window.addEventListener("click", (event)=>{
        const button = document.getElementById("predictions")
        button.innerHTML = "52 WEEKS" 
        setTimeout(() => {
            button.innerHTML = "PREDICTIONS"}, 3000)  
        }
        )

        window.addEventListener("click", (event)=>{
            const button = document.getElementById("bigwin")
            button.innerHTML= "OR LOSE BADLY" 
            setTimeout(() => {
                button.innerHTML = "WIN BIG"}, 3000)  
            }
            )
       
            window.addEventListener("click", (event)=>{
                const button = document.getElementById("author")
                button.innerHTML="LOOKING FOR THE JACKPOT" 
                setTimeout(() => {
                    button.innerHTML = "AUTHOR'S NOTES"}, 3000)  
                }
                )

                window.addEventListener("click", (event)=>{
                    const button = document.getElementById("witness")
                    button.innerHTML = "60 SECONDS" 
                    setTimeout(() => {
                        button.innerHTML = "WITNESS THE SCRATCH"}, 3000)  
                    }
                    )

                    window.addEventListener("click", (event)=>{
                        const button = document.getElementById("good")
                        button.innerHTML = "IS IT A WINNER?" 
                        setTimeout(() => {
                            button.innerHTML = "LOOKING GOOD"}, 3000)  
                        }
                        )
                              
       // For the blog page                 

// Instructions of how to code date/time stamp from https://stackoverflow.com/questions/74007492/how-can-i-add-a-date-stamp-to-comments-added
// I edited the code to suite my preferences 


    let textbox=document.getElementById("blog_entry")   // Refers to the blog HTML page
    let add=()=>{
    let value=textbox.value
    let ul=document.getElementById("dataIn")
    let list=document.createElement("div")
    var date = new Date();                              // Coding for data/time stamp
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    var date_time = current_date+" "+strTime;
    list.innerHTML=`${value}<br><br>`+`Created At:<br>${date_time}`  // Adding the stamp and comment with line breaks
    ul.insertBefore(list,ul.firstElementChild)
    textbox.value=""   // Clears the box ready for next entry
}


// For the scratch photos page
{
let slideIndex = 0; // Starts on slide zero
let maxIterations = 3; // Loops the automatic images three times
let currentIteration = 0; // Starts on loop zero
  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");  // Refers to the HTML page 
    const dots = document.getElementsByClassName("dot");   // For each slide there is a dot

    for (i = 0; i < slides.length; i++) {   // This allows me to update many images and it changes by +1 at a time
      slides[i].style.display = "none";   // Hides inactive slides
    }

    slideIndex++;

  if (slideIndex > slides.length) {  // Resets the loop
    slideIndex = 1;
    currentIteration++;

    if (currentIteration >= maxIterations) {  // Stops the slideshow after reaching the desired number of iterations (1)
  
      return;
    }
  }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");  // Links dots with current slide
    }

    slides[slideIndex - 1].style.display = "block";  // Displays the current slide
    dots[slideIndex - 1].className += " active"; // // Highlights the dot corresponding to the current slide
    setTimeout(showSlides, 1000);   // Changes slide every 1 seconds
  }
}
  // Starts the slideshow
  showSlides(); 


  function getRandomColor(){  //Just adds a little fun - unfortunately lost the page link where I got this idea from
    let letters = '0123456789ABCDEF';
    let color = '#';     // Selects a color from the hexadecimal system
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function changeColor(){  // Changes the color
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
  }