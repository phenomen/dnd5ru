function add_quickref_item(parent, data, type) {
    var icon = data.icon || "perspective-dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[no title]";

    var item = document.createElement("div");
    item.className += "item itemsize"
    item.innerHTML =
    '\
    <div class="item-icon iconsize icon-' + icon + '"></div>\
    <div class="item-text-container text">\
        <div class="item-title">' + title + '</div>\
        <div class="item-desc">' + subtitle + '</div>\
    </div>\
    ';

    var style = window.getComputedStyle(parent.parentNode.parentNode);
    var color = style.backgroundColor;

    item.onclick = function () {
        show_modal(data, color, type);
    }

    parent.appendChild(item);
}

function show_modal(data, color, type) {
    var title = data.title || "[no title]";
    var subtitle = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var reference = data.reference || "";
    type = type || "";
    color = color || "black"

    $("body").addClass("modal-open");
    $("#modal").addClass("modal-visible");
    $("#modal-backdrop").css("height", window.innerHeight + "px");
    $("#modal-container").css("background-color", color).css("border-color", color);
    $("#modal-title").text(title).append("<span class=\"float-right\">" + type + "</span>");
    $("#modal-subtitle").text(subtitle);
    $("#modal-reference").text(reference);

    var bullets_html = bullets.map(function (item) { return "<p class=\"fonstsize\">" + item + "</p>"; }).join("\n<hr>\n");
    $("#modal-bullets").html(bullets_html);
}

function hide_modal() {
    $("body").removeClass("modal-open");
    $("#modal").removeClass("modal-visible");
}

function fill_section(data, parentname, type) {
    var parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_quickref_item(parent, item, type);
    });
}

function init() {
    fill_section(data_movement, "basic-movement", "Move");
    fill_section(data_action, "basic-actions", "Action");
    fill_section(data_freeaction, "basic-free-actions", "Free Action");
    fill_section(data_bonusaction, "basic-bonus-actions", "Bonus Action");
    fill_section(data_reaction, "basic-reactions", "Reaction");
    fill_section(data_condition, "basic-conditions", "Condition");
    fill_section(data_environment_obscurance, "environment-obscurance", "Environment");
    fill_section(data_environment_light, "environment-light", "Environment");
    fill_section(data_environment_vision, "environment-vision", "Environment");
    fill_section(data_environment_cover, "environment-cover", "Environment");
    fill_section(data_xpchart_player, "xp-player", "XP Chart");
    fill_section(data_xpchart_cr, "xp-cr", "XP-CR Chart");
    fill_section(data_damage_types, "damage-types", "Damage Types");
    fill_section(data_damage_death, "damage-death", "Health, Dying, and Resting");
    fill_section(data_damage_health, "damage-health", "Health, Dying, and Resting");
    fill_section(data_damage_resting, "damage-resting", "Health, Dying, and Resting");
    fill_section(data_abilities_str, "abilities-str", "Ability Scores & Skills");
    fill_section(data_abilities_dex, "abilities-dex", "Ability Scores & Skills");
    fill_section(data_abilities_con, "abilities-con", "Ability Scores & Skills");
    fill_section(data_abilities_int, "abilities-int", "Ability Scores & Skills");
    fill_section(data_abilities_wis, "abilities-wis", "Ability Scores & Skills");
    fill_section(data_abilities_cha, "abilities-cha", "Ability Scores & Skills");
    fill_section(data_travel, "travel", "Traveling");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(init);
