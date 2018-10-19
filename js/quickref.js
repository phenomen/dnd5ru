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
    $("#modal-container").css("background-color", color).css("border-color", color);
    $("#modal-title").text(title).append("<span class=\"float-right\">" + type + "</span>");
    $("#modal-subtitle").text(subtitle);
    $("#modal-reference").text(reference);

    var bullets_html = bullets.map(function (item) { return "<p class=\"fontsize\">" + item + "</p>"; }).join("\n<hr style=\"height: 1px\">\n");
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
    fill_section(data_movement, "basic-movement", "Движение");
    fill_section(data_action, "basic-actions", "Действие");
    fill_section(data_freeaction, "basic-free-actions", "Свободное действие");
    fill_section(data_bonusaction, "basic-bonus-actions", "Бонусное действие");
    fill_section(data_reaction, "basic-reactions", "Реакция");
    fill_section(data_condition, "basic-conditions", "Состояние");
    fill_section(data_environment_obscurance, "environment-obscurance", "Окружающая среда");
    fill_section(data_environment_light, "environment-light", "Окружающая среда");
    fill_section(data_environment_vision, "environment-vision", "Окружающая среда");
    fill_section(data_environment_cover, "environment-cover", "Окружающая среда");
    fill_section(data_xp, "xp", "Опыт");
    fill_section(data_damage_types, "damage-types", "Урон и атака");
    fill_section(data_damage_death, "damage-death", "Хиты, Смерть и Отдых");
    fill_section(data_damage_health, "damage-health", "Хиты, Смерть и Отдых");
    fill_section(data_damage_resting, "damage-resting", "Хиты, Смерть и Отдых");
    fill_section(data_abilities_str, "abilities-str", "Характеристики и Навыки");
    fill_section(data_abilities_dex, "abilities-dex", "Характеристики и Навыки");
    fill_section(data_abilities_con, "abilities-con", "Характеристики и Навыки");
    fill_section(data_abilities_int, "abilities-int", "Характеристики и Навыки");
    fill_section(data_abilities_wis, "abilities-wis", "Характеристики и Навыки");
    fill_section(data_abilities_cha, "abilities-cha", "Характеристики и Навыки");
    fill_section(data_travel, "travel", "Путешествие");
    fill_section(data_languages_standard, "languages-standard", "Языки");
    fill_section(data_languages_exotic, "languages-exotic", "Языки");
    fill_section(data_equipment_packs, "equipment-packs", "Наборы снаряжения");
    fill_section(data_equipment_tools_norm, "equipment-tools-norm", "Инструменты");
    fill_section(data_equipment_tools_artisan, "equipment-tools-artisan", "Инструменты");
    fill_section(data_equipment_weapons_properties, "equipment-weap-prop", "Свойства оружия");
    //fill_section(data_classabilities_barbarian, "class-abilities-barbarian", "Способности класса");
    //fill_section(data_classabilities_bard, "class-abilities-bard", "Способности класса");
    //fill_section(data_classabilities_cleric, "class-abilities-cleric", "Способности класса");
    //fill_section(data_classabilities_druid, "class-abilities-druid", "Способности класса");
    //fill_section(data_classabilities_fighter, "class-abilities-fighter", "Способности класса");
    //fill_section(data_classabilities_monk, "class-abilities-monk", "Способности класса");
    //fill_section(data_classabilities_paladin, "class-abilities-paladin", "Способности класса");
    //fill_section(data_classabilities_ranger, "class-abilities-ranger", "Способности класса");
    //fill_section(data_classabilities_rogue, "class-abilities-rogue", "Способности класса");
    //fill_section(data_classabilities_sorcerer, "class-abilities-sorcerer", "Способности класса");
    //fill_section(data_classabilities_warlock, "class-abilities-warlock", "Способности класса");
    //fill_section(data_classabilities_wizard, "class-abilities-wizard", "Class Abilities");
    fill_section(data_spellcasting_spellinfo, "spellcasting-spellinfo", "Информация о заклинаниях");
    fill_section(data_spellcasting_casting, "spellcasting-casting", "Наложение заклинаний");
    fill_section(data_multiclassing_classreqs, "multiclassing-classreqs", "Требования мультиклассирования");
    fill_section(data_multiclassing_classfeats_reg, "multiclassing-classfeats-reg", "Особенности классов");
    fill_section(data_multiclassing_classfeats_casting, "multiclassing-classfeats-casting", "Особенности классов");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(init);
