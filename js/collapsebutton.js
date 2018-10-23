$(document).ready(function() {

    $("#tog-abilities").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-abilities .section-content").slideUp("fast");
    $("#tog-movement").attr("class", "toggler show").parent().animate({ height: 25 }, 600);;
    $("#section-movement .section-content").slideUp("fast");
    $("#tog-action").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-action .section-content").slideUp("fast");
    $("#tog-bonus-action").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-bonus-action .section-content").slideUp("fast");
    $("#tog-reaction").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-reaction .section-content").slideUp("fast");
    $("#tog-free-action").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-free-action .section-content").slideUp("fast");
    $("#tog-services").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-services .section-content").slideUp("fast");
    $("#tog-downtime").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-downtime .section-content").slideUp("fast");
    $("#tog-condition").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-condition .section-content").slideUp("fast");
    $("#tog-languages").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-languages .section-content").slideUp("fast");
    $("#tog-environment").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-environment .section-content").slideUp("fast");
    $("#tog-damage-healing").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-damage-healing .section-content").slideUp("fast");
    $("#tog-travel").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-travel .section-content").slideUp("fast");
    $("#tog-spellcasting").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-spellcasting .section-content").slideUp("fast");
    $("#tog-multiclassing").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-multiclassing .section-content").slideUp("fast");
    $("#tog-classabilities").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-classabilities .section-content").slideUp("fast");
    $("#tog-damage-types").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-damage-types .section-content").slideUp("fast");
    $("#tog-equipment").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-equipment .section-content").slideUp("fast");
    $("#tog-xp").attr("class", "toggler show").parent().animate({ height: 25 }, 600);
    $("#section-xp .section-content").slideUp("fast");

  $("#tog-abilities").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-abilities .section-content").slideToggle("fast");
  });

  $("#tog-equipment").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-equipment .section-content").slideToggle("fast");
  });

  $("#tog-xp").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-xp .section-content").slideToggle("fast");
  });

  $("#tog-damage-types").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-damage-types .section-content").slideToggle("fast");
  });

  $("#tog-classabilities").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-classabilities .section-content").slideToggle("fast");
  });

  $("#tog-multiclassing").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-multiclassing .section-content").slideToggle("fast");
  });

  $("#tog-spellcasting").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-spellcasting .section-content").slideToggle("fast");
  });

  $("#tog-travel").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-travel .section-content").slideToggle("fast");
  });

  $("#tog-movement").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-movement .section-content").slideToggle("fast");
  });

  $("#tog-action").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-action .section-content:eq(0)").slideToggle("fast");
  });

  $("#tog-bonus-action").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-bonus-action .section-content").slideToggle("fast");
  });

  $("#tog-reaction").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-reaction .section-content").slideToggle("fast");
  });

  $("#tog-free-action").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-free-action .section-content").slideToggle("fast");
  });

  $("#tog-services").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-services .section-content").slideToggle("fast");
  });

  $("#tog-downtime").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-downtime .section-content").slideToggle("fast");
  });

  $("#tog-condition").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-condition .section-content").slideToggle("fast");
  });

  $("#tog-languages").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-languages .section-content").slideToggle("fast");
  });

  $("#tog-environment").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-environment .section-content").slideToggle("fast");
  });

  $("#tog-damage-healing").click(function() {
    $(this).parent().animate({
      height: ($(this).parent().height() == 32) ? 25 : 32
    }, 600);
    $(this).toggleClass("hide show");
    $("#section-damage-healing .section-content").slideToggle("fast");
  });

});
