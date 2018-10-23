$(document).ready(function(){

    $("#collapse-all").click(function(){
        $("#tog-abilities").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-abilities .section-content").slideUp("slow");
        $("#tog-movement").attr("class","toggler show").parent().animate({ height: 25 }, 600);;
        $("#section-movement .section-content").slideUp("slow");
        $("#tog-action").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-action .section-content:eq(0)").slideUp("slow");
        $("#tog-bonus-action").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-bonus-action .section-content").slideUp("slow");
        $("#tog-reaction").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-reaction .section-content").slideUp("slow");
        $("#tog-free-action").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-free-action .section-content").slideUp("slow");
        $("#tog-services").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-services .section-content").slideUp("slow");
        $("#tog-downtime").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-downtime .section-content").slideUp("slow");
        $("#tog-condition").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-condition .section-content").slideUp("slow");
        $("#tog-languages").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-languages .section-content").slideUp("slow");
        $("#tog-environment").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-environment .section-content").slideUp("slow");
        $("#tog-damage-healing").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-damage-healing .section-content").slideUp("slow");
        $("#tog-travel").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-travel .section-content").slideUp("slow");
        $("#tog-spellcasting").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-spellcasting .section-content").slideUp("slow");
        $("#tog-multiclassing").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-multiclassing .section-content").slideUp("slow");
        $("#tog-classabilities").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-classabilities .section-content").slideUp("slow");
        $("#tog-damage-types").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-damage-types .section-content").slideUp("slow");
        $("#tog-equipment").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-equipment .section-content").slideUp("slow");
        $("#tog-xp").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-xp .section-content").slideUp("slow");
    });

    $("#tog-abilities").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-abilities .section-content").slideToggle("slow");
    });

    $("#tog-equipment").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-equipment .section-content").slideToggle("slow");
    });

    $("#tog-xp").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-xp .section-content").slideToggle("slow");
    });

    $("#tog-damage-types").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-damage-types .section-content").slideToggle("slow");
    });

    $("#tog-classabilities").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-classabilities .section-content").slideToggle("slow");
    });

    $("#tog-multiclassing").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-multiclassing .section-content").slideToggle("slow");
    });

    $("#tog-spellcasting").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-spellcasting .section-content").slideToggle("slow");
    });

    $("#tog-travel").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-travel .section-content").slideToggle("slow");
    });

    $("#tog-movement").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-movement .section-content").slideToggle("slow");
    });

    $("#tog-action").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-action .section-content:eq(0)").slideToggle("slow");
    });

    $("#tog-bonus-action").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-bonus-action .section-content").slideToggle("slow");
    });

    $("#tog-reaction").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-reaction .section-content").slideToggle("slow");
    });

    $("#tog-free-action").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-free-action .section-content").slideToggle("slow");
    });

    $("#tog-services").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-services .section-content").slideToggle("slow");
    });

    $("#tog-downtime").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-downtime .section-content").slideToggle("slow");
    });

    $("#tog-condition").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-condition .section-content").slideToggle("slow");
    });

    $("#tog-languages").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-languages .section-content").slideToggle("slow");
    });

    $("#tog-environment").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-environment .section-content").slideToggle("slow");
    });

    $("#tog-damage-healing").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-damage-healing .section-content").slideToggle("slow");
    });

});
