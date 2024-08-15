let val = 0

function changeBodyColor() {
    
   if(val==0){
    document.body.style.backgroundColor = "#333333"
    document.getElementById("container").style.borderColor = "white"
    // document.getElementById("container").style.justifyContent = "left"
    btn.style.transform = 'translateX(0px)';
    btn.style.backgroundColor = '#E8F0FE';
    val = 1
   }
   
  else{
    document.body.style.backgroundColor = "white"
    document.getElementById("container").style.borderColor = "black"
    // document.getElementById("container").style.justifyContent = "right"
    btn.style.transform = 'translateX(300px)';
    btn.style.backgroundColor = 'orange'

    val = 0
   }
}

//  document.body.style.backgroundColor = "black"