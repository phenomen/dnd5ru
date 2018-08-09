data_damage_types = [
     {
        title: "Acid",
        icon: "acid",
        bullets: [
            "The corrosive spray of a black dragon’s breath and the dissolving enzymes secreted by a black pudding deal acid damage.",
        ]
    },
    {
       title: "Bludgeoning",
       icon: "mace-head",
       bullets: [
           "Blunt force attacks—hammers, falling, constriction, and the like—deal bludgeoning damage.",
       ]
   },
   {
      title: "Cold",
      icon: "ice-cube",
      bullets: [
          "The infernal chill radiating from an ice devil’s spear and the frigid blast of a white dragon’s breath deal cold damage.",
      ]
   },
   {
      title: "Falling",
      icon: "falling",
      subtitle: "1d6 per 10 ft.",
      description: "Damage taken from falling",
      reference: "PHB, pg. 183",
      bullets: [
          "At the end of a fall, a creature takes 1d6 bludgeoning damage for every 10 feet it fell, to a maximum of 20d6. The creature lands prone, unless it avoids taking damage from the fall.",
      ]
   },
   {
      title: "Fire",
      icon: "flame",
      bullets: [
          "Red dragons breathe fire, and many spells conjure flames to deal fire damage",
      ]
   },
   {
      title: "Force",
      icon: "magic-swirl",
      bullets: [
          "Force is pure magical energy focused into a damaging form. Most effects that deal force damage are spells, including magic missile and spiritual weapon.",
      ]
   },
   {
      title: "Lightning",
      icon: "lightning-storm",
      bullets: [
          "A lightning bolt spell and a blue dragon’s breath deal lightning damage.",
      ]
   },
   {
      title: "Necrotic",
      icon: "death-skull",
      bullets: [
          "Necrotic damage, dealt by certain undead and a spell such as chill touch, withers matter and even the soul.",
      ]
   },
   {
      title: "Piercing",
      icon: "ice-spear",
      bullets: [
          "Puncturing and impaling attacks, including spears and monsters’ bites, deal piercing damage.",
      ]
   },
   {
      title: "Poison",
      icon: "poison-gas",
      bullets: [
          "Venomous stings and the toxic gas of a green dragon’s breath deal poison damage.",
      ]
   },
   {
      title: "Psychic",
      icon: "psychic-waves",
      bullets: [
          "Mental abilities such as a mind flayer’s psionic blast deal psychic damage.",
      ]
   },
   {
      title: "Radiant",
      icon: "holy-symbol",
      bullets: [
          "Radiant damage, dealt by a cleric’s flame strike spell or an angel’s smiting weapon, sears the flesh like fire and overloads the spirit with power.",
      ]
   },
   {
      title: "Slashing",
      icon: "shining-sword",
      bullets: [
          "Swords, axes, and monsters’ claws deal slashing damage.",
      ]
   },
   {
      title: "Thunder",
      icon: "ultrasound",
      bullets: [
          "A concussive burst of sound, such as the effect of the Thunderwave spell, deals thunder damage.",
      ]
   }
]

data_damage_health = [
     {
        title: "Healing",
        icon: "health-normal",
        subtitle: "Regaining health",
        description: "Regaining health",
        reference: "PHB, pg. 197",
        bullets: [
             "Unless it results in death, damage isn't permanent. Even death is reversible through powerful magic. Rest can restore a creature's hit points, and magical methods such as a <i>cure wounds</i> spell or a <i>potion of healing</i> can remove damage in an instant.",
             "When a creatures receives healing of any kind, hit points regained are added to its current hit points. A creature's hit points can't exceed its hit point maximum, so any hit points regained in excess of this number are lost. For example, a druid grants a ranger 8 hit points of healing. If the ranger has 14 current hit points and has a hit point maximum of 20, the ranger regains 6 hit points from the druid, not 8.",
             "A creature that has died can't regain hit points until magic such as the <i>revivify</i> spell has restored it to life."
        ]
    },
]

data_damage_death = [
     {
        title: "Instant Death",
        icon: "decapitation",
        subtitle: "Death by massive damage",
        description: "Death by massive damage",
        reference: "PHB, pg. 197",
        bullets: [
            "Massive damage can kill you instantly. When damage reduces you to 0 hit points and there is damage remaining, you die if the remaining damage equals or exceeds your hit point maximum.",
            "For example, a cleric with a maximum of 12 hit points currently has 6 hit points. If she takes 18 damage from an attack, she is reduced to 0 hit points, but 12 damage remains. Because the remaining damage equals her hit point maximum, the cleric dies."
        ]
    },
    {
       title: "Falling Unconscious",
       icon: "sleepy",
       reference: "PHB, pg. 197",
       bullets: [
           "If damage reduces you to 0 hit points and fails to kill you, you fall unconscious. This unconsciousness ends if you regain any hit points."
       ]
   },
]

data_damage_resting = [
     {
        title: "Short Rest",
        icon: "campfire",
        subtitle: "Resting for at least 1 hour",
        description: "Resting for at least 1 hour",
        reference: "PHB, pg. 186",
        bullets: [
             "A short rest is a period of downtime, at least 1 hour long, during which a character does nothing more strenuous than eating, drinking, reading, and tending to wounds.",
             "A character can spend one or more Hit Dice at the end of a short rest, up to the character's maximum number of Hit Dice, which is equal to the character's level. For each Hit Die spent in this way, the player rolls the die and adds the character's Constitution modifier to it. The character regains hit points equal to the total. The player can deecide to spend an additional Hit Die after each roll. A character regains some spent Hit Dice upon finishing a long rest."
        ]
    },
    {
        title: "Long Rest",
        icon: "bed",
        subtitle: "Resting for at least 8 hours",
        description: "Resting for at least 8 hours",
        reference: "PHB, pg. 186",
        bullets: [
             "A long rest is a period of extended downtime, at least 8 hours long, during which a character sleeps or performs light activity: reading, talking, eating, or standing watch for no more than 2 hours. If the rest is interrupted by a period of strenuous activity - at least 1 hour of walking, fighting, casting spells, or similar adventuring activity - the character must begin the rest again to gain any benefit from it.",
             "At the end of a long rest, a character regains all lost hit points. The character also regains spent Hit Dice, up to a number of dice equal to half of the character's total number of them. For example, if a character has eight Hit Dice, they can regain four spent Hit Dice upon finishing a long rest.",
             "A character can't benefit from more than one long rest in a 24-hour period, and a character must have at least 1 hit point at the start of the rest to gain its benefits."
        ]
   },
]
