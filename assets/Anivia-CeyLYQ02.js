const e="champion",a="standAloneComplex",i="14.3.1",n={Anivia:{id:"Anivia",key:"34",name:"Anivia",title:"the Cryophoenix",image:{full:"Anivia.png",sprite:"champion0.png",group:"champion",x:288,y:0,w:48,h:48},skins:[{id:"34000",num:0,name:"default",chromas:!1},{id:"34001",num:1,name:"Team Spirit Anivia",chromas:!1},{id:"34002",num:2,name:"Bird of Prey Anivia",chromas:!1},{id:"34003",num:3,name:"Noxus Hunter Anivia",chromas:!1},{id:"34004",num:4,name:"Hextech Anivia",chromas:!1},{id:"34005",num:5,name:"Blackfrost Anivia",chromas:!1},{id:"34006",num:6,name:"Prehistoric Anivia",chromas:!1},{id:"34007",num:7,name:"Festival Queen Anivia",chromas:!1},{id:"34008",num:8,name:"Papercraft Anivia",chromas:!0},{id:"34017",num:17,name:"Cosmic Flight Anivia",chromas:!0},{id:"34027",num:27,name:"Divine Phoenix Anivia",chromas:!0},{id:"34037",num:37,name:"Bewitching Batnivia",chromas:!0},{id:"34046",num:46,name:"Victorious Anivia",chromas:!0}],lore:"Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new tomorrow.",blurb:"Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland...",allytips:["Timing Flash Frost with Frostbite can lead to devastating combinations.","Anivia is extremely reliant on Mana for Glacial Storm. Try getting items with Mana or going for a Crest of the Ancient Golem buff on Summoner's Rift.","It can be very difficult for enemy champions to kill her egg early in game. Seize the advantage by playing aggressively."],enemytips:["Try to gank Anivia when she's laning. With multiple people, it is easier to ensure that her egg dies.","If you're playing a ranged champion, stay far enough away from Anivia so you can dodge Flash Frost more easily.","Try to fight Anivia in the lanes. In the jungle she can block pathways with lower ranks of Crystallize."],tags:["Mage","Support"],partype:"Mana",info:{attack:1,defense:4,magic:10,difficulty:10},stats:{hp:550,hpperlevel:92,mp:495,mpperlevel:45,movespeed:325,armor:21,armorperlevel:4.9,spellblock:30,spellblockperlevel:1.3,attackrange:600,hpregen:5.5,hpregenperlevel:.55,mpregen:8,mpregenperlevel:.8,crit:0,critperlevel:0,attackdamage:51,attackdamageperlevel:3.2,attackspeedperlevel:1.68,attackspeed:.658},spells:[{id:"FlashFrost",name:"Flash Frost",description:"Anivia brings her wings together and summons a sphere of ice that flies towards her opponents, chilling and damaging anyone in its path. When the sphere explodes it does moderate damage in a radius, stunning anyone in the area.",tooltip:"Anivia fires a massive chunk of ice, dealing <magicDamage>{{ totalpassthroughdamage }} magic damage</magicDamage> and <keywordMajor>Chilling</keywordMajor> enemies for {{ slowduration }} seconds, <status>Slowing</status> them by {{ spell.glacialstorm:slowamount }}%. At the end of its range, the ice detonates, <status>Stunning</status> enemies for {{ stunduration }} seconds and dealing <magicDamage>{{ totalexplosiondamage }} magic damage</magicDamage>.<br /><br />Anivia can <recast>Recast</recast> this ability while the ice flies to detonate it early.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Detonation Damage","Stun Duration","Cooldown","@AbilityResourceName@ Cost"],effect:["{{ passthroughbasedamage }} -> {{ passthroughbasedamageNL }}","{{ explosionbasedamage }} -> {{ explosionbasedamageNL }}","{{ stunduration }} -> {{ stundurationNL }}","{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[12,11,10,9,8],cooldownBurn:"12/11/10/9/8",cost:[80,85,90,95,100],costBurn:"80/85/90/95/100",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[1075,1075,1075,1075,1075],rangeBurn:"1075",image:{full:"FlashFrost.png",sprite:"spell1.png",group:"spell",x:96,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"Crystallize",name:"Crystallize",description:"Anivia condenses the moisture in the air into an impassable wall of ice to block all movement. The wall only lasts a short duration before it melts.",tooltip:"Anivia summons a wall of ice {{ e2 }} units wide. The wall lasts for {{ e1 }} seconds before it melts.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Width"],effect:["{{ e2 }} -> {{ e2NL }}"]},maxrank:5,cooldown:[17,17,17,17,17],cooldownBurn:"17",cost:[70,70,70,70,70],costBurn:"70",datavalues:{},effect:[null,[5,5,5,5,5],[400,500,600,700,800],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"5","400/500/600/700/800","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[1e3,1e3,1e3,1e3,1e3],rangeBurn:"1000",image:{full:"Crystallize.png",sprite:"spell1.png",group:"spell",x:144,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"Frostbite",name:"Frostbite",description:"With a flap of her wings, Anivia blasts a freezing gust of wind at her target, dealing damage. If the target was recently hit by Flash Frost or damaged by a fully formed Glacial Storm, the damage they take is doubled.",tooltip:"Anivia blasts an enemy with a freezing wind, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. Against <keywordMajor>Chilled</keywordMajor> enemies, Anivia deals <magicDamage>{{ empowereddamage }} magic damage</magicDamage> instead.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage"],effect:["{{ basedamage }} -> {{ basedamageNL }}"]},maxrank:5,cooldown:[4,4,4,4,4],cooldownBurn:"4",cost:[50,50,50,50,50],costBurn:"50",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[650,650,650,650,650],rangeBurn:"650",image:{full:"Frostbite.png",sprite:"spell1.png",group:"spell",x:192,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"GlacialStorm",name:"Glacial Storm",description:"Anivia summons a driving rain of ice and hail to damage her enemies and slow their advance.",tooltip:"<toggle>Toggle:</toggle> Anivia calls forth a driving rain of ice and hail that <status>Slows</status> enemies by {{ slowamount }}% and deals <magicDamage>{{ totaldamagepersecond }} magic damage per second</magicDamage>. The storm increases in size over {{ growthtime }} seconds.<br /><br />When the storm is fully formed, it <keywordMajor>Chills</keywordMajor>, <status>Slows</status> by {{ slowpercentempoweredtt }}%, and does <magicDamage>{{ empowereddamagepersecondtooltiponly }} magic damage per second</magicDamage> instead.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage Per Second","Slow","Chilled Slow Amount","Mana Cost Per Second","Cooldown"],effect:["{{ damagepersecond }} -> {{ damagepersecondNL }}","{{ slowamount }}% -> {{ slowamountNL }}%","{{ slowpercentempoweredtt }}% -> {{ slowpercentempoweredttNL }}%","{{ manacostpersecond }} -> {{ manacostpersecondNL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:3,cooldown:[4,3,2],cooldownBurn:"4/3/2",cost:[60,60,60],costBurn:"60",datavalues:{},effect:[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" + {{ manacostpersecond }} Mana per second",maxammo:"-1",range:[750,750,750],rangeBurn:"750",image:{full:"GlacialStorm.png",sprite:"spell1.png",group:"spell",x:240,y:0,w:48,h:48},resource:"{{ cost }} + {{ manacostpersecond }} Mana per second"}],passive:{name:"Rebirth",description:"Upon taking fatal damage, Anivia reverts to an egg and is reborn with full health.",image:{full:"Anivia_P.png",sprite:"passive0.png",group:"passive",x:288,y:0,w:48,h:48}},recommended:[]}},o={type:e,format:a,version:i,data:n};export{n as data,o as default,a as format,e as type,i as version};
