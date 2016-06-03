
$(document).ready(function(){

var colorChangeNum = 0;
var generateNum = 0;


  $("#generateBtn").click(function(){
    generateNum = generateNum + 1;
    document.getElementById("displayCounter").innerHTML = "counter = " + generateNum;
    var newContainer = document.createElement("div");
    newContainer.className = "buttonContainer";
    // newContainer.id = "number" + generateNum;

    var newChange = document.createElement("button");
    newChange.className = "newChange";
    newChange.textContent = "Change " + generateNum;
    newContainer.appendChild(newChange);
    $("body").append(newContainer);

    var newDelete = document.createElement("button");
    newDelete.className = "newDelete";
    newDelete.textContent = "Delete " + generateNum;
    newContainer.appendChild(newDelete);
    $("body").append(newContainer);
  }); // end click "generate function"

  $(document).on("click", ".newChange", function(){
    var clickNew = $(this).parent();
    if (colorChangeNum === 0){
      clickNew.css("background-color", "#F0E68C");
      colorChangeNum = 1;
      } // ends if
      else {
        clickNew.css("background-color", "#DC143C");
        colorChangeNum = 0;
      } // ends else
  }); // end on(click) change colorChangeNum

  $(document).on("click", ".newDelete", function(){
    var clickDelete = $(this).parent();
    clickDelete.remove();
  }); // end on(click) delete

}); // ends .ready jquery call
