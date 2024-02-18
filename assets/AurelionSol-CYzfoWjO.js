const e="champion",a="standAloneComplex",n="14.3.1",o={AurelionSol:{id:"AurelionSol",key:"136",name:"Aurelion Sol",title:"The Star Forger",image:{full:"AurelionSol.png",sprite:"champion0.png",group:"champion",x:0,y:48,w:48,h:48},skins:[{id:"136000",num:0,name:"default",chromas:!1},{id:"136001",num:1,name:"Ashen Lord Aurelion Sol",chromas:!1},{id:"136002",num:2,name:"Mecha Aurelion Sol",chromas:!0},{id:"136011",num:11,name:"Storm Dragon Aurelion Sol",chromas:!1},{id:"136021",num:21,name:"Inkshadow Aurelion Sol",chromas:!1}],lore:"Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his star-forging ways, Aurelion Sol will drag the very stars from the sky, if he must, in order to regain his freedom.",blurb:"Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his...",allytips:[],enemytips:[],tags:["Mage"],partype:"Mana",info:{attack:2,defense:3,magic:8,difficulty:7},stats:{hp:620,hpperlevel:90,mp:530,mpperlevel:40,movespeed:335,armor:22,armorperlevel:4,spellblock:30,spellblockperlevel:1.3,attackrange:550,hpregen:5.5,hpregenperlevel:.55,mpregen:8,mpregenperlevel:.75,crit:0,critperlevel:0,attackdamage:55,attackdamageperlevel:3.2,attackspeedperlevel:1.5,attackspeed:.625},spells:[{id:"AurelionSolQ",name:"Breath of Light",description:"Aurelion Sol channels his dragon breath for a few seconds, damaging the first enemy hit and splashing reduced damage onto nearby enemies. Each second the breath is channeled directly at an enemy will deal bonus damage, which is improved by the amount of Stardust that's been collected. This ability collects Stardust if the target is a champion.",tooltip:'Aurelion Sol breathes starfire for up to {{ maxchannelduration }} seconds, dealing <magicDamage>{{ damagepersecond }} magic damage</magicDamage> per second to the first enemy hit and {{ aoemodifier*100 }}% of the damage to surrounding enemies.<br /><br />Each full second of breath on the same enemy deals a burst of <magicDamage>{{ burstdamage }} magic damage</magicDamage> plus <magicDamage>{{ burstbonustruedamagetochamps }} max Health magic damage</magicDamage> and absorbs <span class="color3458eb">{{ qmassstolen }} Stardust</span> if they are a champion.{{ spellmodifierdescriptionappend }}',leveltip:{label:["@AbilityResourceName@ Cost","Damage Per Second","Burst Damage","Maximum Channel Duration"],effect:["{{ cost }} -> {{ costNL }}","{{ rankdamagepersecond }} -> {{ rankdamagepersecondNL }}","{{ rankburstdamage }} -> {{ rankburstdamageNL }}","{{ maxchannelduration }} -> {{ maxchanneldurationNL }}"]},maxrank:5,cooldown:[3,3,3,3,3],cooldownBurn:"3",cost:[30,35,40,45,50],costBurn:"30/35/40/45/50",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" Mana per second",maxammo:"-1",range:[750,750,750,750,750],rangeBurn:"750",image:{full:"AurelionSolQ.png",sprite:"spell1.png",group:"spell",x:384,y:48,w:48,h:48},resource:"{{ manacostpersecond }} Mana per second"},{id:"AurelionSolW",name:"Astral Flight",description:"Aurelion Sol flies over terrain in a targeted direction. While in this state, he can cast other abilities. Breath of Light no longer has a cooldown or maximum channel duration and deals increased damage while flying.\\n\\nAstral Flight's remaining cooldown is reduced whenever an enemy champion dies after being recently damaged by Aurelion Sol.\\n\\nStardust increases Astral Flight's maximum range.",tooltip:"Aurelion Sol flies in a direction. While flying, <spellName>Breath of Light</spellName> has no Cooldown, no max channel duration, and its flat damage is increased by {{ truedamagebonus*100 }}%.<br /><br />Takedowns on champions within {{ resetwindow }} seconds of damaging them refunds {{ tooltiptakedowncooldownmultiplier }}% of this Ability's Cooldown.<br /><br /><recast>Recast:</recast> End flight early.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Percent Bonus Magic Damage","@AbilityResourceName@ Cost","Cooldown"],effect:["{{ truedamagebonus*100.000000 }}% -> {{ truedamagebonusnl*100.000000 }}%","{{ cost }} -> {{ costNL }}","{{ cd }} -> {{ cdNL }}"]},maxrank:5,cooldown:[0,0,0,0,0],cooldownBurn:"0",cost:[50,55,60,65,70],costBurn:"50/55/60/65/70",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[1200,1200,1200,1200,1200],rangeBurn:"1200",image:{full:"AurelionSolW.png",sprite:"spell1.png",group:"spell",x:432,y:48,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"AurelionSolE",name:"Singularity",description:"Aurelion Sol summons a black hole, damaging enemies and slowly pulling them toward its center. This ability grants Stardust each time an enemy dies within the black hole and for each second an enemy champion is caught inside it. The center of the black hole executes enemies who are below a certain percentage of their maximum health. Stardust increases Singularity's area as well as the execution threshold.",tooltip:'Aurelion Sol summons a black hole, dealing <magicDamage>{{ damagepersecond }} magic damage</magicDamage> per second and <status>Dragging</status> enemies towards the center for {{ duration }} seconds. Enemies in the center below <scaleHealth>{{ currentexecutionthreshold }}% max Health</scaleHealth> die instantly.<br /><br />The black hole absorbs <span class="color3458eb">Stardust</span> when enemies die within it and each second an enemy champion is inside.{{ spellmodifierdescriptionappend }}',leveltip:{label:["Damage Per Second","@AbilityResourceName@ Cost"],effect:["{{ basedamagepersecond }} -> {{ basedamagepersecondNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[12,12,12,12,12],cooldownBurn:"12",cost:[80,85,90,95,100],costBurn:"80/85/90/95/100",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[750,750,750,750,750],rangeBurn:"750",image:{full:"AurelionSolE.png",sprite:"spell1.png",group:"spell",x:0,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"AurelionSolR",name:"Falling Star / The Skies Descend",description:"Falling Star: Aurelion Sol crashes a star into the earth. This impact deals magic damage and stuns enemies while also granting Stardust for each enemy champion it hits. Gathering enough Stardust transforms Aurelion Sol's next Falling Star into The Skies Descend. The Skies Descend: Aurelion Sol drags a giant star down from the heavens with an increased impact zone and increased damage, knocking up enemies rather than stunning them. A shockwave then spreads from the edge of the impact zone, which damages and slows the enemies it hits. Stardust increases the impact area of both Falling Star and The Skies Descend.",tooltip:`Aurelion Sol plucks a star from the heavens and crashes it into the earth, dealing <magicDamage>{{ maxdamagetooltip }} magic damage</magicDamage>, <status>Stunning</status> enemies {{ stunduration }} second, and absorbing <span class="color3458eb">{{ massstolen }} Stardust</span> for each champion hit.<br /><br />Gathering <span class="color3458eb">{{ calamitystacks }} Stardust</span> transforms the next <spellName>Falling Star</spellName> into <spellName>The Skies Descend</spellName>.<br /><br /><spellName>The Skies Descend</spellName>: Aurelion Sol drags a constellation's worth of fury down from the cosmos, dealing <magicDamage>{{ r2damage }} magic damage</magicDamage> in a larger area, <status>Knocking Up</status> enemies hit for {{ stunduration }} second, and unleashing a massive shockwave that deals <magicDamage>{{ shockwavedamage }} magic damage</magicDamage> to champions and Epic Monsters and <status>Slows</status> all enemies hit by {{ shockwaveslow*100 }}% for 1 second.{{ spellmodifierdescriptionappend }}`,leveltip:{label:["Cooldown","Damage","Empowered Damage","Shockwave Damage"],effect:["{{ cooldown }} -> {{ cooldownNL }}","{{ basedamage }} -> {{ basedamageNL }}","{{ basedamage*1.250000 }} -> {{ basedamagenl*1.250000 }}","{{ basedamage }} -> {{ basedamageNL }}"]},maxrank:3,cooldown:[120,110,100],cooldownBurn:"120/110/100",cost:[100,100,100],costBurn:"100",datavalues:{},effect:[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[1250,1250,1250],rangeBurn:"1250",image:{full:"AurelionSolR.png",sprite:"spell1.png",group:"spell",x:48,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"}],passive:{name:"Cosmic Creator",description:"Aurelion Sol's damaging Abilities break down enemies into stacks of <font color='#3458eb'>Stardust</font>, which permanently improves each of his abilities. ",image:{full:"AurelionSolP.png",sprite:"passive0.png",group:"passive",x:0,y:48,w:48,h:48}},recommended:[]}},s={type:e,format:a,version:n,data:o};export{o as data,s as default,a as format,e as type,n as version};
