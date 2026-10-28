console.log("complete");
console.log($(window).width());
console.log($(window).height());

// man1 클릭 시 벌어지는 일들...
$(".man1").on("click", function () {
  $(".bg-wrap").addClass("play");
  $(".chat-wrap").addClass("disappear");
  $(".man1").addClass("disappear");
  $(".logo").addClass("show");
  $(".man1-sense").addClass("disappear");
  $(".man2").addClass("show");
  $(".final-frame").addClass("show");
});

// man1 호버 시 벌어지는 일들...
$(".man1").on("mouseenter", function () {
  $(".man1-sense").addClass("show");
});
$(".man1").on("mouseleave", function () {
  $(".man1-sense").removeClass("show");
});

// man2 호버 시 벌어지는 일들...
$(".man2").on("mouseenter", function () {
  $(".glitch-wrap").addClass("active");
});
$(".man2").on("mouseleave", function () {
  $(".glitch-wrap").removeClass("active");
});
