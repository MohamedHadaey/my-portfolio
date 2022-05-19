let bgColors = ["#FFDF00", "#00FA9A", "#FF2400", "#FF1493"];
var r = document.querySelector(":root");

for (var i = 0; i < bgColors.length; i++) {
  $(".color-options li").eq(i).css("backgroundColor", bgColors[i]);
}
$(".color-options li").click(function () {
  let currentBg = $(this).css("backgroundColor");
  $(".main-color").css({ color: currentBg, transition: "all 1s" });
  $(".main-bg-color").css({ backgroundColor: currentBg, transition: "all 1s" });
  $(".color-options").css({
    border: `3px solid ${currentBg}`,
    transition: "all 1s",
  });
  $("#home .slider .head h1").css("borderTop", `10px solid ${currentBg}`);
  $("#home .slider .head h1").css("borderBottom", `10px solid ${currentBg}`);
  r.style.setProperty("--scrollBarBg", currentBg);
});
let optionsWidth = $(".color-options").outerWidth();
$(".color-box").css("left", -optionsWidth);
$(".color-box i").click(function () {
  if ($(".color-box").css("left") == "0px") {
    $(".color-box").animate({ left: -optionsWidth }, 1500);
  } else {
    $(".color-box").animate({ left: 0 }, 1500);
  }
});
let navHeight = $(".navbar").outerHeight();
let aboutOffSet = $("#about").offset().top;
$(window).scroll(function () {
  let currentOffSet = $(window).scrollTop();
  if (currentOffSet > aboutOffSet - 2 * navHeight) {
    $(".navbar").css({
      backgroundColor: "rgba(33, 37, 41)",
      transition: "all 1s",
    });
    $("#topBtn").fadeIn(2000);
  } else {
    $(".navbar").css({
      backgroundColor: "rgba(33, 37, 41, 0.8)",
      transition: "all 1s",
    });
    $("#topBtn").fadeOut(2000);
  }
});
let skillsOffSet = $("#skills").offset().top;
$(window).scroll(function () {
  let currentOffSet = $(window).scrollTop();
  if (currentOffSet >= skillsOffSet - 500) {
    $(".test1").css("width", "95%");
    $(".test2").css("width", "90%");
    $(".test3").css("width", "80%");
    $(".test4").css("width", "65%");
    $(".test5").css("width", "85%");
    $(".test6").css("width", "70%");
    $(".test7").css("width", "60%");
    $(".test8").css("width", "65%");
    $(".progress-bar").css({ transition: "width 3s" });
  } else {
    $(".progress-bar").css({ width: "0", transition: "width 2s" });
  }
});
let col1Width = $(".col1").width();
let col2Width = $(".col2").width();
$(".col1").css("left", -1.5 * col1Width);
$(".col2").css("right", -1.5 * col2Width);

$(window).scroll(function () {
  let currentOffSet = $(window).scrollTop();
  if (currentOffSet > aboutOffSet - 500 && currentOffSet < 1580) {
    $(".col1").css({ left: "0", transition: "all 2s" });
    $(".col2").css({ right: "0", transition: "all 2s" });
  } else if (currentOffSet > 1580) {
    $(".col1").css({ left: -1.5 * col1Width, transition: "all 2s" });
    $(".col2").css({ right: -1.5 * col2Width, transition: "all 2s" });
  } else {
    $(".col1").css({ left: -1.5 * col1Width, transition: "all 2s" });
    $(".col2").css({ right: -1.5 * col2Width, transition: "all 2s" });
  }
});

$(".nav-link").click(function () {
  let currentLink = $(this).attr("href");
  let currenOffset = $(currentLink).offset().top;
  $("html,body").animate({ scrollTop: currenOffset }, 1500);
});

// scrollmenu
$("#topBtn").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 2000);
});
// loading screen
$(document).ready(function () {
  $(".loading-screen").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
  });
});

// jQuery plugins "skitter slider"

$(document).ready(function () {
  $(".skitter-large").skitter({
    interval: 1000,
    with_animations: [
      "cube",
      "cubeRandom",
      "block",
      "cubeStop",
      "cubeStopRandom",
      "cubeHide",
      "cubeSize",
      "horizontal",
      "showBars",
      "showBarsRandom",
      "tube",
      "fade",
      "fadeFour",
      "paralell",
      "blind",
      "blindHeight",
      "blindWidth",
      "directionTop",
      "directionBottom",
      "directionRight",
      "directionLeft",
      "cubeSpread",
      "glassCube",
      "glassBlock",
      "circles",
      "circlesInside",
      "circlesRotate",
      "cubeShow",
      "upBars",
      "downBars",
      "hideBars",
      "swapBars",
      "swapBarsBack",
      "swapBlocks",
      "cut",
    ],
  });
});
