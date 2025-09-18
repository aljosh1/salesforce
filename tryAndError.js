
// getElementsByClassName("displayA")
function hover1(){
    let text = document.getElementsByClassName("displayA")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}

function hover2(){
    let text = document.getElementsByClassName("displayc")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}

function hover3(){
    let text = document.getElementsByClassName("displayD")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}

function hover4(){
    let text = document.getElementsByClassName("displayE")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}
function hover5(){
    let text = document.getElementsByClassName("displayF")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}

function hover6(){
    let text = document.getElementsByClassName("displayG")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}

function hover7(){
    let text = document.getElementsByClassName("displayH")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}

function hover8(){
    let text = document.getElementsByClassName("displayI")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}


function hoverMM(){
    let text = document.getElementsByClassName("generalMenu")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
    `.Industries{
        display:none
    }`
}

function hoverM1(){
    let text = document.getElementsByClassName("Product")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
    `.Industries{
        display:none
    }`
}

function hoverM2(){
    let text = document.getElementsByClassName("Industries")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}

function hoverM3(){
    let text = document.getElementsByClassName("Customer")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}

function hoverM4(){
    let text = document.getElementsByClassName("Event")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}

function hoverM5(){
    let text = document.getElementsByClassName("Learning")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}

function hoverM6(){
    let text = document.getElementsByClassName("Support")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}

function hoverM7(){
    let text = document.getElementsByClassName("Company")[0]
    if (text.style.display ==="none"){
        text.style.display = "block"
    }
    else {text.style.display = "none"}
}



// // JavaScript to handle hover effect
//   const image = document.getElementsByClassName('net');
//   const countriesNone = document.getElementsByClassName('countriesNone')[0];

//   image.addEventListener('mouseenter', () => {
//     countriesNone.style.display = 'block';
//   });

//   image.addEventListener('mouseleave', () => {
//     countriesNone.style.display = 'none';
//   });

// JavaScript to handle hover effect
  const countriesNone = document.getElementsByClassName('countriesNone')[0];
  const image = document.getElementsByClassName('parent');
//   const dropdown = document.getElementsByClassName('countriesNone')[0];

  // Show dropdown on image hover
  image.addEventListener('mouseenter', () => {
    countriesNone.style.display = 'block';
  });

  // Hide dropdown when mouse leaves both image and dropdown
  image.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!countriesNone.matches(':hover')) {
        countriesNone.style.display = 'none';
      }
    }, 200); // slight delay to allow pointer to move into dropdown
  });

  countriesNone.addEventListener('mouseleave', () => {
    countriesNone.style.display = 'none';
  });



