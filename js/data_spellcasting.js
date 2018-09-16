data_spellcasting_spellinfo = [
     {
         title: "Cantrips",
         icon: "bolt-spell-cast",
         subtitle: "Spells that can be cast at no cost",
         description: "Spells that can be cast at no cost",
         reference: "PHB, pg. 201",
         bullets: [
             "A cantrip is a spell that can be cast at will, without using a spell slot and without being prepared in advance. Repeated practice has fixed the spell in the caster's mind and infused the caster with the magic needed to produce the effect over and over. A cantrip's spell level is 0."
         ]
     },
     {
         title: "Rituals",
         icon: "rune-stone",
         subtitle: "A spell that can take longer to cast",
         description: "A spell that can take longer to cast",
         reference: "PHB, pgs. 201-202",
         bullets: [
             "Certain spells have a special tag: ritual. Such a spell can be cast following the normal rules for spellcasting, or the spell can be cast as a ritual. The ritual version of a spell takes 10 minutes longer to cast than normal.",
             "It also doesn't expend a spell slot, which means the ritual version of a spell can't be cast at a higher level.",
             "To cast a spell as a ritual, a spellcaster must have a feature that grants the ability to do so. The cleric and the druid, for example, have such a feature. The caster must also have the spell prepared or on his or her list of spells known, unless the character's ritual feature specifies otherwise, as the wizard's does."
         ]
     },
     {
         title: "Spell Slots",
         icon: "shotgun",
         subtitle: "How many spells a caster can cast",
         description: "How many spells a caster can cast",
         reference: "PHB, pg. 201",
         bullets: [
             "Regardless of how many spells a caster knows or prepares, he or she can cast only a limited number of spells before resting. Manipulating the fabric of magic and channeling its energy into even a simple spell is physically and mentally taxing, and higher-level spells are even more so. Thus, each spellcasting class's description (except that of the warlock) includes a table showing how many spell slots of each spell level a character can use at each character level.",
             "<div class='section-title-reverse-black'>Casting a Spell at a Higher Level</div> When a spellcaster casts a spell using a slot that is of a higher level than the spell, the spell assumes the higher level for that casting. <br><br> Some spells, such as <i>magic missile</i> and <i>cure wounds</i>, have more powerful effects when cast at a higher level, as detailed in the spell's description."
         ]
     },
]

data_spellcasting_casting = [
     {
         title: "Casting Time",
         icon: "alarm-clock",
         subtitle: "How long a spell takes to cast",
         description: "Most spells require a single action to cast, but some spells require a bonus action, a reaction, or much more time to cast.",
         reference: "PHB, pg. 203",
         bullets: [
             "<div class='section-title-reverse-black'>Bonus Action</div>A spell cast with a bonus action is especially swift. You must use a bonus action on your turn to cast the spell, provided that you haven't already taken a bonus action this turn. You can't cast another spell during the same turn, except for a cantrip with a casting time of 1 action.",
             "<div class='section-title-reverse-black'>Reactions</div>Some spells can be cast as reactions. These spells take a fraction of a second to bring about and are cast in response to some event. If a spell can be cast as a reaction, the spell description tells you exactly when you can do so.",
             "<div class='section-title-reverse-black'>Longer Casting Times</div>Certain spells (including spells cast as rituals) require more time to cast: minutes or even hours. When you cast a spell with a casting time longer than a single action or reaction, you must spend your action each turn casting the spell, and you must maintain your concentration while you do so. If your concentration is broken, the spell fails, but you don't expend a spell slot. If you want to try casting the spell again, you must start over."
         ]
     },
     {
         title: "Range",
         icon: "path-distance",
         subtitle: "How far a spell can reach",
         description: "How far a spell can reach",
         reference: "PHB, pgs. 203-204",
         bullets: [
             "The target of a spell must be within the spell's range. For a spell like <i>magic missile</i>, the target is a creature. For a spell like <i>fireball</i>, the target is the point in space where the ball of fire erupts.",
             "Most spells have ranges expressed in feet. Some spells can target only a creature (including you) that you touch. Other spells, such as the <i>shield</i> spell, affect only you. These spells have a range of self.",
             "Spells that create cones or lines of effect that originate from you also have a range of self, indicating that the origin point of the spell's effect must be you."
         ]
     },
     {
         title: "Components",
         icon: "feather",
         subtitle: "Physical requirements of a spell",
         description: "A spell's components are the physical requirements you must meet in order to cast it. Each spell's description indicates whether it requires verbal (V), somatic (S), or material (M) components. If you can't provide one or more of a spell's components, you are unable to cast the spell.",
         reference: "PHB, pg. 204",
         bullets: [
             "<div class='section-title-reverse-black'>Verbal (V)</div> Most spells require the chanting of mystic words. The words themselves aren't the source of the spell's power, rather, the particular combination of sounds, with specific pitch and resonance, sets the threads of magic in motion. Thus a character who is gagged or in an area of silence, such as one created by the <i>silence</i> spell, can't cast a spell with a verbal component.",
             "<div class='section-title-reverse-black'>Somatic (S)</div> Spellcasting gestures might include a forceful gesticulation or an intricate set of gestures. If a spell requires a somatic component, the caster must have free use of at least one hand to perform these gestures.",
             "<div class='section-title-reverse-black'>Material (M)</div> Casting some spells require particular objects, specified in parentheses in the component entry. A character can use a <b>component pouch</b> or a <b>spellcasting focus</b> in place of the components specified for a spell. But if a cost is indicated for a component, a character must have that specific component before he or she can cast the spell. <br><br> If a spell states that a material component is consumed by the spell, the caster must provide this component for each casting of the spell. <br><br> A spellcaster must have a hand free to access these components, but it can be the same hand that he or she uses to perform somatic components.",
         ]
     },
     {
         title: "Duration",
         icon: "empty-hourglass",
         subtitle: "How long a spell persists",
         description: "A spell's duration is the length of time the spell persists. A duration can be expressed in rounds, minutes, hours, or even years. Some spells specify that their effects last until the spells are dispelled or destroyed.",
         reference: "PHB, pgs. 204-205",
         bullets: [
             "<div class='section-title-reverse-black'>Instantaneous</div> Many spells are instantaneous. The spell harms, heals, creates, or alters a creature or an object in a way that can't be dispelled, because its magic exists only for an instant.",
             "<div class='section-title-reverse-black'>Concentration</div> Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. <br><br> If a spell must be maintained with concentration, that fact appears in its Duration entry, and the spell specifies how long you can concentrate on it. You can end concentration at any time (no action required). <br><br> Normal activity, such as moving and attacking, doesn't interfere with concentration. The following factors can break concentration:\
             <ul>\
               <li><b>Casting another spell that requires concentration.</b> You lose concentration on a spell if you cast another spell that requires concentration. You can't concentrate on two spells at once.</li>\
               <li><b>Taking damage.</b> Whenever you take damage while you are concentrating on a splel, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher. If you take damage from multiple sources, such as an arrow and a dragon's breath, you make a seperate saving throw for each source of damage.</li>\
               <li><b>Being incapacitated or killed.</b> You lose concentration on a spell if you are incapacitated or if you die.</li>\
             </ul>\
             The DM might also decide that certain environmental phenomena, such as a wave crashing over you while you're on a storm-tossed ship, require you to succeed on a DC 10 Constitution saving throw to maintain concentration on a spell."
         ]
     },
     {
         title: "Targets",
         icon: "archery-target",
         subtitle: "The target of a spell",
         description: "The target of a spell",
         reference: "PHB, pg. 205",
         bullets: [
             "A typical spell requires you to pick one or more targets to be affected by the spell's magic. A spell's description tells you whether the spell targets creatures, objects, or a point of origin for an area of effect. <br><br> Unless a spell has a perceptible effect, a creature might not know it was targeted by a spell at all. An effect like crackling lightning is obvious, but a more subtle effect, such as an attempt to read a creature's thoughts, typically goes unnoticed, unless a spell says otherwise.",
             "<div class='section-title-reverse-black'>A Clear Path to the Target</div> To target something, you must have a clear path to it, so it can't be behind total cover. <br><br> If you place an area of effect at a point that you can't see and an obstruction, such as a wall, is between you and that point, the point of origin comes into being on the near side of that obstruction.",
             "<div class='section-title-reverse-black'>Targeting Yourself</div> If a spell targets a creature of your choice, you can choose yourself, unless the creature must be hostile or specifically a creature other than you. If you are in the area of effect of a spell you cast, you can target yourself."
         ]
     },
     {
         title: "Areas of Effect",
         icon: "stone-sphere",
         subtitle: "The area that a spell affects",
         description: "The area that a spell affects",
         reference: "PHB, pgs. 205-206",
         bullets: [
             "Spells such as <i>burning hands</i> and <i>cone of cold</i> cover an area, allowing them to affect multiple creatures at once. <br><br> A spell's description specifies its area of effect, which typically has one of five different shapes: cone, cube, cylinder, line, or sphere. Every area of effect has a <b>point of origin</b>, a location from which the spell's energy erupts. The rules for each shape specify how you position its origin. Typically, a point of origin is a point in space, but some spells have an area whose origin is a creature or an object. <br><br> A spell's effect expands in straight lines from the point of origin. If no unblocked straight line extends from the point of origin to a location within the area of effect, that location isn't included in the spell's area. To block one of these imaginary lines, an obstruction must provided total cover.",
             "<div class='section-title-reverse-black'>Cone</div> A cone extends in a direction you choose from its point of origin. A cone's width at a given point along its length is equal to that point's distance from the point of origin. A cone's area of effect specifies its maximum length.",
             "<div class='section-title-reverse-black'>Cube</div> You select a cube's point of origin, which lies anywhere on a face of the cubic effect. The cube's size is expressed as the length of each side.",
             "<div class='section-title-reverse-black'>Cylinder</div> A cylinder's point of origin is the center of a circle of a particular radius, as given in the spell's description. The circle must either be on the ground or at the height of the spell effect. The energy in a cylinder expands in straight lines from the point of origin to the perimeter of the circle, forming the base of the cylinder. The spell's effect then shoots up from the base of the cylinder. The spell's effect then shoots up from the base or down from the top, to a distance equal to the height of the cylinder.",
             "<div class='section-title-reverse-black'>Line</div> A line extends from its point of origin in a straight path up to its length and covers an area defined by its width.",
             "<div class='section-title-reverse-black'>Sphere</div> You select a sphere's point of origin, and the sphere extends outward from that point. The sphere's size is expressed as a radius in feet that extends from the point."
         ]
     },
     {
         title: "Saving Throws",
         icon: "run",
         subtitle: "A save to avoid a spell's effects",
         description: "A save to avoid a spell's effects",
         reference: "PHB, pg. 206",
         bullets: [
             "Many spells specify that a target can make a saving throw to avoid some or all of a spell's effects. The spell specifies the ability that the target uses for the save and what happens on a success or failure.",
             "The DC to resist one of your spells equals 8 + your spellcasting ability modifier + your proficiency bonus + any special modifiers."
         ]
     },
     {
         title: "Attack Rolls",
         icon: "fireball",
         subtitle: "Attack rolls for spells",
         description: "Attack rolls for spells",
         reference: "PHB, pg. 206",
         bullets: [
             "Some spells require the caster to make an attack roll to determine whether the spell effect hits the intended target. Your attack bonus with a spell attack equals your spellcasting ability modifier + your proficiency bonus.",
             "Most spells that require attack rolls involve ranged attacks. Remember that you have disadvantage on a ranged attack roll if you are within 5 feet of a hostile creature that can see you and that isn't incapacitated."
         ]
     },
     {
         title: "Combining Magical Effects",
         icon: "crafting",
         subtitle: "How spell effects stack",
         description: "How spell effects stack",
         reference: "PHB, pg. 206",
         bullets: [
             "The effects of different spells add together while the durations of those spells overlap. The effects of the same spell cast multiple times don't combine, however. Instead, the most potent effect -- such as the highest bonus -- from those castings applies while their durations overlap.",
             "For example, if two clerics cast <i>bless</i> on the same target, that character gains the spell's benefit only once; he or she doesn't get to roll two bonus dice."
         ]
     },
]
