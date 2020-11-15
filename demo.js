
//$("body").on("click", "#mode", function(e) {
  //  e.preventDefault();
    //if($("#theme").attr("href")==="day.css"){
 //       alert("Changing from theme 2");
  //      $("#theme").attr("href", "night.css");
  //      alert("Changed from theme 2");
  //  } else {
   //     alert("Changing from theme 1");
   //     $("#theme").attr("href", "day.css");
   //     alert("Changed from theme 1");
  //  }
    //alert($("#changeMe").attr("href"));
//});

function switch_mode() {
    var m1 = document.getElementById('daymode');
    var m2 = document.getElementById('nightmode');
    m2.disabled = !m2.disabled; 
    m1.disabled = !m2.disabled;

}
function change_img() {
    if ($('#coverpizza').attr(src)==='./IMG/day-pizza.png') {
        $('#coverpizza').attr(src,'./IMG/night-pizza.png');
    } else {
        $('#coverpizza').attr(src,'./IMG/day-pizza.png');
    }
}


function openWin1() {
    
    window.location.href = "friedricepage.html";
  }

function openWin2() {
    window.location.href = "recipe.html";
  }


function backtoindex() {
    window.location.href = "index.html";
}

function openWinrec1() {
    window.location.href = "pizza.html";
}

function loading1() {
    alert("Do you know that you can follow JD's food blog @hamzihashma on instagram?");
}

$(window).load(function(e) {
    e.preventDefault()
    $("#loader").remove(); //call the image with id like #loader
});
//setTimeout(function(){ 
  //  $('.loader').css('display', 'none');
//}, 1000); // it will remove after 5 seconds

