function addRecommendation() {
    
    let recommendation = document.getElementById("new_recommendation");
    
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      
      var element = document.createElement("div");
      element.setAttribute("class","recommendation");
      element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span>`;

 
      document.getElementById("all_recommendations").appendChild(element); 

           recommendation.value = "";
    }
  }

  function showPopup(bool) {
    if (bool) {
        document.querySelector('.popup').style.visibility = 'visible';
        
    } else {
        document.querySelector('.popup').style.visibility = 'hidden';
        
    }
  }