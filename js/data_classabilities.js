data_classabilities_barbarian = [
  {
    title: "Ярость",
    icon: "enrage",
    subtitle: "Стоимость: Бонусное действие",
    description: "Бонусное действие",
    reference: "КИ, стр. 48",
    bullets: [
             "В бою вы сражаетесь с первобытной свирепостью. В свой ход вы можете бонусным действием войти в состояние ярости.",
             "В состоянии ярости вы получаете следующие преимущества, если не носите тяжёлую броню: <br /><ul><li>Вы совершаете с преимуществом проверки и спасброски Силы.</li> <li>Если вы совершаете рукопашную атаку оружием, используя Силу, вы получаете бонус к броску урона, соответствующий вашему уровню варвара, как показано в колонке «урон ярости» таблицы «Варвар».</li> <li>Вы получаете сопротивление дробящему, колющему и рубящему урону.</li> </ul>"
         ]
     },
  {
    title: "Дополнительная атака",
    icon: "saber-slash",
    subtitle: "Используется при действии Атаки",
    description: "Используется при действии Атаки",
    reference: "КИ, стр. 49",
    bullets: [
             "Начиная с 5 уровня, если вы в свой ход совершаете действие Атака, вы можете совершить две атаки вместо одной."
         ]
     },
]

data_classabilities_bard = [
  {
    title: "Bardic Inspiration",
    icon: "music-spell",
    subtitle: "Стоимость: Бонусное действие",
    description: "Inspire others with your performances",
    reference: "КИ, стр. 53-54",
    bullets: [
             "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.",
             "Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
             "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.",
             "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
         ]
     },
]

data_classabilities_cleric = [
  {
    title: "Channel Divinity: Turn Undead",
    icon: "shambling-zombie",
    subtitle: "Стоимость: Действие",
    description: "Action",
    reference: "КИ, стр. 59",
    bullets: [
             "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
             "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its actions, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
         ]
     },
  {
    title: "Divine Intervention",
    icon: "hand-of-god",
    subtitle: "Стоимость: Действие",
    description: "Request your deity's aid",
    reference: "КИ, стр. 59",
    bullets: [
             "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.",
             "Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.",
             "If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.",
             "At 20th level, your call for intervention succeeds automatically, no roll required."
         ]
     },
]

data_classabilities_druid = [
  {
    title: "Wild Shape",
    icon: "bestial-fangs",
    subtitle: "Стоимость: Действие",
    description: "",
    reference: "КИ, стр. 66-67",
    bullets: [
             "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
             "Your druid level determines the beast you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swim speed.",
             "<div class='section-title-reverse-black' align='center'>Beast Shapes</div><table id='t01' style='width:100%'>\
                <tr>\
                  <th><b>Level</b></th>\
                  <th><b>Max. CR</b></th>\
                  <th><b>Limitations</b></th>\
                  <th><b>Example</b></th>\
                </tr>\
                <tr>\
                  <td>2nd</td>\
                  <td>1/4</td>\
                  <td>No flying or swimming speed</td>\
                  <td>Wolf</td>\
                </tr>\
                <tr>\
                  <td>4th</td>\
                  <td>1/2</td>\
                  <td>No flying speed</td>\
                  <td>Crocodile</td>\
                </tr>\
                <tr>\
                  <td>8th</td>\
                  <td>1</td>\
                  <td>---</td>\
                  <td>Giant eagle</td>\
                </tr>\
              </table>",
             "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
             "Additional rules can be found on pgs. 66-67 of the Player's Handbook."
         ]
     },
  {
    title: "Revert Wild Shape",
    icon: "person",
    subtitle: "Стоимость: Бонусное действие",
    description: "Turn back to your normal form",
    reference: "КИ, стр. 66",
    bullets: [
             "You can revert to your normal form earlier by using a bonus action on your turn."
         ]
     },
]

data_classabilities_fighter = [
  {
    title: "Second Wind",
    icon: "healing",
    subtitle: "Стоимость: Бонусное действие",
    description: "Heal yourself with a bonus action",
    reference: "КИ, стр. 72",
    bullets: [
             "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.",
             "Once you use this feature, you must finish a short or long rest before you can use it again."
         ]
     },
  {
    title: "Дополнительная атака",
    icon: "saber-slash",
    subtitle: "Используется при действии Атаки",
    description: "Используется при действии Атаки",
    reference: "КИ, стр. 72",
    bullets: [
             "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
             "The number of attacks increases to three when you reach 11th level, and to four when you reach 20th level in this class."
         ]
     },
]

data_classabilities_monk = [
  {
    title: "Flurry of Blows",
    icon: "punch",
    subtitle: "Стоимость: 1 ki point",
    description: "Стоимость: 1 ki point",
    reference: "КИ, стр. 78",
    bullets: [
             "Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action."
         ]
     },
  {
    title: "Patient Defense",
    icon: "dodge",
    subtitle: "Стоимость: 1 ki point",
    description: "Стоимость: 1 ki point",
    reference: "КИ, стр. 78",
    bullets: [
             "You can spend 1 ki point to take the Dodge action as a bonus action on your turn."
         ]
     },
  {
    title: "Step of the Wind",
    icon: "sprint",
    subtitle: "Стоимость: 1 ki point",
    description: "Стоимость: 1 ki point",
    reference: "КИ, стр. 78",
    bullets: [
             "You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
         ]
     },
  {
    title: "Deflect Missiles",
    icon: "catch",
    subtitle: "Стоимость: Reaction (ki point to throw)",
    description: "Стоимость: Reaction (ki point to throw)",
    reference: "КИ, стр. 78",
    bullets: [
             "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.",
             "If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack."
         ]
     },
  {
    title: "Slow Fall",
    icon: "falling-leaf",
    subtitle: "Стоимость: Reaction",
    description: "Стоимость: Reaction",
    reference: "КИ, стр. 78",
    bullets: [
             "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
         ]
     },
  {
    title: "Extra Attack",
    icon: "saber-slash",
    subtitle: "Used when taking the Attack action",
    description: "Used when taking the Attack action",
    reference: "КИ, стр. 79",
    bullets: [
             "Beginning at 5th level, you can attack twice, instead of once, when you take the Attack action on your turn."
         ]
     },
  {
    title: "Stunning Strike",
    icon: "punch-blast",
    subtitle: "Стоимость: 1 ki point",
    description: "Стоимость: 1 ki point",
    reference: "КИ, стр. 79",
    bullets: [
             "Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn."
         ]
     },
  {
    title: "Stillness of Mind",
    icon: "brain",
    subtitle: "Стоимость: Действие",
    description: "Стоимость: Действие",
    reference: "КИ, стр. 79",
    bullets: [
             "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened."
         ]
     },
  {
    title: "Diamond Soul",
    icon: "spark-spirit",
    subtitle: "Стоимость: 1 ki point",
    description: "Стоимость: 1 ki point",
    reference: "КИ, стр. 79",
    bullets: [
             "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.",
             "Additionally whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
         ]
     },
  {
    title: "Empty Body",
    icon: "invisible",
    subtitle: "Стоимость: 4/8 ki points",
    description: "Стоимость: 4/8 ki points",
    reference: "КИ, стр. 181",
    bullets: [
             "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.",
             "Additionally, you can spend 8 ki points to cast he <i>astral projection</i> spell, without needing material components. When you do so, you can't take any other creatures with you."
         ]
     },
]

data_classabilities_paladin = [
  {
    title: "Divine Sense",
    icon: "evil-minion",
    subtitle: "Стоимость: Действие",
    description: "Стоимость: Действие",
    reference: "КИ, стр. 84",
    bullets: [
             "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the <i>hallow</i> spell.",
             "You can use this feature a number of times equal to your 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
         ]
     },
  {
    title: "Lay on Hands",
    icon: "healing",
    subtitle: "Стоимость: Действие",
    description: "Стоимость: Действие",
    reference: "КИ, стр. 181",
    bullets: [
             "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. Wth that pool, you can restore a total number of hit points equal to your paladin level * 5.",
             "As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.",
             "Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points seperately for each one.",
             "This feature has no effect on undead and constructs."
         ]
     },
  {
    title: "Divine Smite",
    icon: "flame",
    subtitle: "Used when hitting with a melee weapon attack",
    description: "Used when hitting with a melee weapon attack",
    reference: "КИ, стр. 181",
    bullets: [
             "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one paladin spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend."
         ]
     },
  {
    title: "Extra Attack",
    icon: "saber-slash",
    subtitle: "Used when taking the Attack action",
    description: "Used when taking the Attack action",
    reference: "КИ, стр. 85",
    bullets: [
             "Beginning at 5th level, you can attack twice, instead of once, when you take the Attack action on your turn."
         ]
    },
  {
    title: "Cleansing Touch",
    icon: "glowing-hands",
    subtitle: "Стоимость: Действие",
    description: "Стоимость: Действие",
    reference: "КИ, стр. 85",
    bullets: [
            "Beginning at 14th level, you can use your action to end one spell on yourself, or one willing creature that you touch.",
            "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
        ]
   },

]

data_classabilities_ranger = [
  {
    title: "Primeval Awareness",
    icon: "six-eyes",
    subtitle: "Стоимость: Действие",
    description: "Стоимость: Действие",
    reference: "КИ, стр. 92",
    bullets: [
             "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number."
         ]
     },
  {
    title: "Extra Attack",
    icon: "saber-slash",
    subtitle: "Used when taking the Attack action",
    description: "Used when taking the Attack action",
    reference: "КИ, стр. 85",
    bullets: [
             "Beginning at 5th level, you can attack twice, instead of once, when you take the Attack action on your turn."
         ]
    },
  {
    title: "Vanish",
    icon: "invisible",
    subtitle: "Стоимость: Бонусное действие",
    description: "Стоимость: bonus action",
    reference: "КИ, стр. 85",
    bullets: [
            "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail."
        ]
    },
]

data_classabilities_rogue = [
  {
    title: "Cunning Action",
    icon: "sprint",
    subtitle: "Стоимость: Бонусное действие",
    description: "Стоимость: Бонусное действие",
    reference: "КИ, стр. 96",
    bullets: [
             "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can only be used only to take the Dash, Disengage, or Hide action."
         ]
     },
  {
    title: "Sneak Attack",
    icon: "cloak-dagger",
    subtitle: "Used when attacking with advantage",
    description: "Used when attacking with advantage",
    reference: "КИ, стр. 96",
    bullets: [
             "Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you candeal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.",
             "You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.",
             "The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
         ]
     },
  {
    title: "Uncanny Dodge",
    icon: "dodge",
    subtitle: "Стоимость: Reaction",
    description: "Стоимость: Reaction",
    reference: "КИ, стр. 96",
    bullets: [
             "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
         ]
     },
]

data_classabilities_sorcerer = [
  {
    title: "Convert Sorcery Points/Spell Slots",
    icon: "trade",
    subtitle: "Стоимость: Бонусное действие",
    description: "Стоимость: Бонусное действие, sorcery points/spell slots",
    reference: "КИ, стр. 101",
    bullets: [
             "<b>Creating Spell Slots:</b> You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th.",
             "<div class='section-title-reverse-black' align='center'>Creating Spell Slots</div><table id='t01' style='width:100%'>\
                <tr>\
                  <th><b>Spell Slot Level</b></th>\
                  <th><b>Sorcery Point Cost</b></th>\
                </tr>\
                <tr>\
                  <td>1st</td>\
                  <td>2</td>\
                </tr>\
                <tr>\
                  <td>2nd</td>\
                  <td>3</td>\
                </tr>\
                <tr>\
                  <td>2nd</td>\
                  <td>3</td>\
                </tr>\
                <tr>\
                  <td>3rd</td>\
                  <td>5</td>\
                </tr>\
                <tr>\
                  <td>4th</td>\
                  <td>6</td>\
                </tr>\
                <tr>\
                  <td>5th</td>\
                  <td>7</td>\
                </tr>\
              </table>",
             "<b>Converting a Spell Slot to Sorcery Points:</b> As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level."
         ]
     },
  {
    title: "Quickened Spell",
    icon: "bolt-spell-cast",
    subtitle: "Стоимость: Бонусное действие",
    description: "Стоимость: Бонусное действие",
    reference: "КИ, стр. 102",
    bullets: [
             "When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting."
         ]
     },
]

data_classabilities_warlock = [
  {
    title: "Familiar Attack",
    icon: "imp",
    subtitle: "Стоимость: 1 attack",
    description: "Requires Pact of the Chain",
    reference: "КИ, стр. 107",
    bullets: [
             "Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own."
         ]
     },
  {
    title: "Pact Weapon",
    icon: "broadsword",
    subtitle: "Стоимость: Действие",
    description: "Requires Pact of the Blade",
    reference: "КИ, стр. 107-108",
    bullets: [
             "You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it (see chapter 5 for weapon options). You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
         ]
     },
]

//data_classabilities_wizard = [
//]
