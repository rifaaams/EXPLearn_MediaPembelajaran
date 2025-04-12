function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5dKAHj1L8bQ":
        Script1();
        break;
      case "5qY8OYCqANO":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var videoTime = player.GetVar("Slider1"); // Ambil nilai slider

var videoElement = document.querySelector("video"); // Ambil elemen video 
videoElement.currentTime = videoTime; // Lompat ke waktu yang diinginkan
}

function Script2()
{
  var player = GetPlayer();

var videoElement = document.querySelector("video"); // Ambil elemen video



// Update slider berdasarkan waktu video setiap detik 
setInterval(function(){
    player.SetVar("Slider1", videoElement.currentTime);
}, 1000);
}

