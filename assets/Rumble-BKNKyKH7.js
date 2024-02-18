const e="champion",a="standAloneComplex",s="14.3.1",t={Rumble:{id:"Rumble",key:"68",name:"Rumble",title:"the Mechanized Menace",image:{full:"Rumble.png",sprite:"champion3.png",group:"champion",x:432,y:48,w:48,h:48},skins:[{id:"68000",num:0,name:"default",chromas:!1},{id:"68001",num:1,name:"Rumble in the Jungle",chromas:!1},{id:"68002",num:2,name:"Bilgerat Rumble",chromas:!1},{id:"68003",num:3,name:"Super Galaxy Rumble",chromas:!1},{id:"68004",num:4,name:"Badlands Baron Rumble",chromas:!0},{id:"68013",num:13,name:"Space Groove Rumble",chromas:!0},{id:"68023",num:23,name:"Cafe Cuties Rumble",chromas:!0}],lore:"Rumble is a young inventor with a temper. Using nothing more than his own two hands and a heap of scrap, the feisty yordle constructed a colossal mech suit outfitted with an arsenal of electrified harpoons and incendiary rockets. Though others may scoff and sneer at his junkyard creations, Rumble doesn't mind—after all, he's the one with the flamespitter.",blurb:"Rumble is a young inventor with a temper. Using nothing more than his own two hands and a heap of scrap, the feisty yordle constructed a colossal mech suit outfitted with an arsenal of electrified harpoons and incendiary rockets. Though others may scoff...",allytips:["Try and pace yourself to stay in the Danger Zone to maximize your effectiveness. It is easy to overheat if you rapidly use your abilities.","Try and keep targets in the range of your Flamespitter. It can deal a lot of damage overtime.","If you are winning a fight you can use your ultimate to wall off an escape path."],enemytips:["Watch Rumble's Heat bar carefully. If you see him Overheat, go in for the kill while his skills are disabled.","Rumble's ultimate can deal a lot of damage if you stay inside the area of effect. When you see the missiles falling, move out of the way as quickly as possible.","Rumble deals almost entirely magic damage. Build some Magic Resistance to reduce his damage."],tags:["Fighter","Mage"],partype:"Heat",info:{attack:3,defense:6,magic:8,difficulty:10},stats:{hp:625,hpperlevel:105,mp:150,mpperlevel:0,movespeed:345,armor:36,armorperlevel:4.7,spellblock:28,spellblockperlevel:1.55,attackrange:125,hpregen:7,hpregenperlevel:.6,mpregen:0,mpregenperlevel:0,crit:0,critperlevel:0,attackdamage:64,attackdamageperlevel:3.2,attackspeedperlevel:1.85,attackspeed:.644},spells:[{id:"RumbleFlameThrower",name:"Flamespitter",description:"Rumble torches opponents in front of him, dealing magic damage in a cone for 3 seconds. While in Danger Zone this damage is increased.",tooltip:"Rumble ignites his flamethrower, dealing <magicDamage>{{ flatdamage }} plus {{ healthdamage*100 }}% max Health magic damage</magicDamage> over {{ flamespitterduration }} seconds, reduced to <attention>{{ minionmod*100 }}%</attention> against minions.<br /><br /><keywordMajor>Danger Zone:</keywordMajor> Damage is increased to <magicDamage>{{ empowereddamage }} plus {{ empoweredhealth }} max Health</magicDamage>.<br /><br /><rules>Percent damage is limited to {{ monstercap }} damage on Monsters. </rules>{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","% Max Health","Damage to minions","Cooldown"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ healthdamage*100.000000 }}% -> {{ healthdamagenl*100.000000 }}%","{{ minionmod*100.000000 }}% -> {{ minionmodnl*100.000000 }}%","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:5,cooldown:[10,9,8,7,6],cooldownBurn:"10/9/8/7/6",cost:[0,0,0,0,0],costBurn:"0",datavalues:{},effect:[null,[180,220,260,300,340],[20,20,20,20,20],[0,0,0,0,0],[.6,.65,.7,.75,.8],[1.5,1.5,1.5,1.5,1.5],[12,12,12,12,12],[.25,.25,.25,.25,.25],[3,3,3,3,3],[3,3,3,3,3],[0,0,0,0,0]],effectBurn:[null,"180/220/260/300/340","20","0","0.6/0.65/0.7/0.75/0.8","1.5","12","0.25","3","3","0"],vars:[],costType:" Heat",maxammo:"-1",range:[600,600,600,600,600],rangeBurn:"600",image:{full:"RumbleFlameThrower.png",sprite:"spell11.png",group:"spell",x:192,y:48,w:48,h:48},resource:"{{ e2 }} Heat"},{id:"RumbleShield",name:"Scrap Shield",description:"Rumble pulls up a shield, protecting him from damage and granting him a quick burst of speed. While in Danger Zone, the shield strength and speed bonus is increased.",tooltip:"Rumble tosses up a barrier, gaining <shield>{{ totalshield }} Shield</shield> for {{ shieldduration.1 }} seconds and <speed>{{ movespeed*100 }}% Move Speed</speed> for {{ movespeedduration }} second.<br /><br /><keywordMajor>Danger Zone:</keywordMajor> The barrier grants <shield>{{ empoweredshield }} Shield</shield> and <speed>{{ empoweredms }} Move Speed</speed> instead.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Shield Amount","Move Speed"],effect:["{{ baseshield }} -> {{ baseshieldNL }}","{{ movespeed*100.000000 }}% -> {{ movespeednl*100.000000 }}%"]},maxrank:5,cooldown:[6,6,6,6,6],cooldownBurn:"6",cost:[0,0,0,0,0],costBurn:"0",datavalues:{},effect:[null,[60,90,120,150,180],[10,15,20,25,30],[20,20,20,20,20],[0,0,0,0,0],[1.5,1.5,1.5,1.5,1.5],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"60/90/120/150/180","10/15/20/25/30","20","0","1.5","1","0","0","0","0"],vars:[],costType:" Heat",maxammo:"-1",range:[20,20,20,20,20],rangeBurn:"20",image:{full:"RumbleShield.png",sprite:"spell11.png",group:"spell",x:240,y:48,w:48,h:48},resource:"{{ heatcost }} Heat"},{id:"RumbleGrenade",name:"Electro Harpoon",description:"Rumble launches a harpoon, electrocuting his target with magic damage, slowing their Move Speed, and reducing their Magic Resist. Rumble can carry 2 harpoons at a time. While in Danger Zone the damage and slow percentage is increased.",tooltip:"Rumble launches an electrified harpoon, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>, <status>Slowing</status> by {{ baseslowamount }}% for {{ slowduration }} seconds, and reducing the enemy's <scaleMR>Magic Resist</scaleMR> by {{ percmagicpen*100 }}% for {{ shredduration }} seconds.<br /><br />Hitting an enemy who's already <status>Slowed</status> by this Ability increases the <status>Slow</status> to {{ empoweredslowamount }}% and reduces the enemy's <scaleMR>Magic Resist</scaleMR> by {{ enhancedmagicpen*100 }}%<br /><br /><keywordMajor>Danger Zone:</keywordMajor> The harpoon deals <magicDamage>{{ empdamage }} magic damage</magicDamage> instead and the <status>Slow</status> and reduced <scaleMR>Magic Resist</scaleMR> are increased by 50%.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Slow","Magic Resist Shred"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ baseslowamount }}% -> {{ baseslowamountNL }}%","{{ percmagicpen*100.000000 }}% -> {{ percmagicpennl*100.000000 }}%"]},maxrank:5,cooldown:[.5,.5,.5,.5,.5],cooldownBurn:"0.5",cost:[0,0,0,0,0],costBurn:"0",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" Heat",maxammo:"2",range:[850,850,850,850,850],rangeBurn:"850",image:{full:"RumbleGrenade.png",sprite:"spell11.png",group:"spell",x:288,y:48,w:48,h:48},resource:"{{ firstcastheatcost }} Heat"},{id:"RumbleCarpetBomb",name:"The Equalizer",description:"Rumble fires off a group of rockets, creating a wall of flames that damages and slows enemies.",tooltip:"Rumble launches a line of rockets, creating a burning trail that <status>Slows</status> by {{ slowamount }}% and deals <magicDamage>{{ totaldamage }} magic damage</magicDamage> over {{ trailduration }} seconds.<br /><br />Rumble can control the direction of the trail by clicking and dragging while casting this Ability.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage Per Second","Cooldown"],effect:["{{ basedamagepersecond }} -> {{ basedamagepersecondNL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:3,cooldown:[130,105,80],cooldownBurn:"130/105/80",cost:[0,0,0],costBurn:"0",datavalues:{},effect:[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[6,6,6],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"0","0","0","0","0","6","0","0","0","0"],vars:[],costType:"No Cost",maxammo:"-1",range:[1750,1750,1750],rangeBurn:"1750",image:{full:"RumbleCarpetBomb.png",sprite:"spell11.png",group:"spell",x:336,y:48,w:48,h:48},resource:"No Cost"}],passive:{name:"Junkyard Titan",description:"Every spell Rumble casts gives him Heat. When he reaches 50% Heat he reaches Danger Zone, granting all his basic abilities bonus effects. When he reaches 100% Heat, he starts Overheating, gaining bonus Attack Speed and granting his basic attacks bonus damage, but making him unable to cast spells for a few seconds.",image:{full:"Rumble_JunkyardTitan1.png",sprite:"passive3.png",group:"passive",x:432,y:48,w:48,h:48}},recommended:[]}},n={type:e,format:a,version:s,data:t};export{t as data,n as default,a as format,e as type,s as version};
