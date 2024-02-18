const e="champion",a="standAloneComplex",o="14.3.1",s={Ryze:{id:"Ryze",key:"13",name:"Ryze",title:"the Rune Mage",image:{full:"Ryze.png",sprite:"champion3.png",group:"champion",x:0,y:96,w:48,h:48},skins:[{id:"13000",num:0,name:"default",chromas:!1},{id:"13001",num:1,name:"Young Ryze",chromas:!1},{id:"13002",num:2,name:"Tribal Ryze",chromas:!1},{id:"13003",num:3,name:"Uncle Ryze",chromas:!1},{id:"13004",num:4,name:"Triumphant Ryze",chromas:!1},{id:"13005",num:5,name:"Professor Ryze",chromas:!1},{id:"13006",num:6,name:"Zombie Ryze",chromas:!1},{id:"13007",num:7,name:"Dark Crystal Ryze",chromas:!1},{id:"13008",num:8,name:"Pirate Ryze",chromas:!1},{id:"13009",num:9,name:"Ryze Whitebeard",chromas:!1},{id:"13010",num:10,name:"SKT T1 Ryze",chromas:!1},{id:"13011",num:11,name:"Worlds 2019 Ryze",chromas:!0},{id:"13013",num:13,name:"Guardian of the Sands Ryze",chromas:!0},{id:"13020",num:20,name:"Arcana Ryze",chromas:!0}],lore:"Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with immense arcane power and a boundless constitution, he tirelessly hunts for World Runes—fragments of the raw magic that once shaped the world from nothingness. He must retrieve these artifacts before they fall into the wrong hands, for Ryze understands the horrors they could unleash on Runeterra.",blurb:"Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with immense arcane power and a boundless constitution, he tirelessly hunts for World Runes—fragments...",allytips:["Use Overload's passive to optimize for maximum damage or maximum speed.","Spell Flux's short cooldown allows it to be used to spread Flux to many enemies.","Ryze can move and cast other spells while Realm Warp is charging without cancelling the portal."],enemytips:["Ryze is especially dangerous to opponents that are marked with Flux.","Use Realm Warp's windup time to figure out how to deal with what may be coming out of the portal.","Crowd controlling Ryze during Realm Warp's windup will cancel the portal."],tags:["Mage","Fighter"],partype:"Mana",info:{attack:2,defense:2,magic:10,difficulty:7},stats:{hp:645,hpperlevel:124,mp:300,mpperlevel:70,movespeed:340,armor:22,armorperlevel:4.2,spellblock:32,spellblockperlevel:1.3,attackrange:550,hpregen:8,hpregenperlevel:.8,mpregen:8,mpregenperlevel:1,crit:0,critperlevel:0,attackdamage:58,attackdamageperlevel:3,attackspeedperlevel:2.11,attackspeed:.658},spells:[{id:"RyzeQWrapper",name:"Overload",description:"Passively, Ryze's other basic abilities reset the cooldown of Overload and charge a rune. When Ryze casts Overload with 2 runes charged, he gains a brief burst of Move Speed.<br><br>On cast, Ryze throws a charge of pure energy in a line, dealing damage to the first enemy struck. If the target has Flux on it, Overload deals extra damage and bounces to nearby enemies with Flux.",tooltip:"<spellPassive>Passive:</spellPassive> <spellName>Rune Prison</spellName> and <spellName>Spell Flux</spellName> refresh this Ability's Cooldown and charge a rune for {{ runeduration }} seconds (max {{ maximumrunes }} runes).<br /><br /><spellActive>Active:</spellActive> Ryze unleashes a blast, dealing <magicDamage>{{ qdamagecalc }} magic damage</magicDamage> to the first enemy hit. If the target has <keywordMajor>Flux</keywordMajor> on it, it is consumed, causing this Ability to deal {{ spell.ryzer:overloaddamagebonus }}% increased damage and bounces to nearby enemies with <keywordMajor>Flux</keywordMajor>.<br /><br />Ryze also discharges all runes, granting Ryze <speed>{{ movementspeedamount }}% Move Speed</speed> for {{ movementspeedduration }} seconds if {{ maximumrunes }} runes were charged.<br />{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Move Speed","Mana Cost"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ movementspeedamount }}% -> {{ movementspeedamountNL }}%","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[5,5,5,5,5],cooldownBurn:"5",cost:[40,38,36,34,32],costBurn:"40/38/36/34/32",datavalues:{},effect:[null,[70,110,150,190,230],[25,40,55,70,85],[50,75,100,125,150],[25,28,31,24,37],[2,2,2,2,2],[2,2,2,2,2],[3,3,3,3,3],[.015,.015,.015,.015,.015],[2,2,2,2,2],[0,0,0,0,0]],effectBurn:[null,"70/110/150/190/230","25/40/55/70/85","50/75/100/125/150","25/28/31/24/37","2","2","3","0.01","2","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[1e3,1e3,1e3,1e3,1e3],rangeBurn:"1000",image:{full:"RyzeQWrapper.png",sprite:"spell11.png",group:"spell",x:384,y:48,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"RyzeW",name:"Rune Prison",description:"Ryze traps a target in a cage of runes, damaging them and slowing their movement. If the target has Flux on it, they are instead rooted.",tooltip:"Ryze deals <magicDamage>{{ wdamagecalc }} magic damage</magicDamage> and <status>Slows</status> by {{ slowamount*100 }}% for {{ ccduration }} seconds. If the target has <keywordMajor>Flux</keywordMajor>, it is consumed and this Ability <status>Roots</status> instead of <status>Slowing</status>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Cooldown","Mana Cost"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[13,12,11,10,9],cooldownBurn:"13/12/11/10/9",cost:[40,55,70,85,100],costBurn:"40/55/70/85/100",datavalues:{},effect:[null,[1.5,1.5,1.5,1.5,1.5],[80,110,140,170,200],[.3,.3,.3,.3,.3],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"1.5","80/110/140/170/200","0.3","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[615,615,615,615,615],rangeBurn:"615",image:{full:"RyzeW.png",sprite:"spell11.png",group:"spell",x:432,y:48,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"RyzeE",name:"Spell Flux",description:"Ryze releases an orb of pure magical power that damages an enemy and debuffs all nearby enemies. Ryze's spells have additional effects against the debuffed enemy.",tooltip:"Ryze fires an orb, dealing <magicDamage>{{ edamagecalc }} magic damage</magicDamage> and applies <keywordMajor>Flux</keywordMajor> for {{ debuffduration }} seconds to the target and nearby enemies. Enemies already afflicted with <keywordMajor>Flux</keywordMajor> will cause it to spread further.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Cooldown","Mana Cost"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[3.5,3.25,3,2.75,2.5],cooldownBurn:"3.5/3.25/3/2.75/2.5",cost:[35,45,55,65,75],costBurn:"35/45/55/65/75",datavalues:{},effect:[null,[80,90,100,110,120],[40,50,60,70,80],[100,100,100,100,100],[.1,.1,.1,.1,.1],[1.5,1.5,1.5,1.5,1.5],[1.5,1.5,1.5,1.5,1.5],[4,4,4,4,4],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"80/90/100/110/120","40/50/60/70/80","100","0.1","1.5","1.5","4","1","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[615,615,615,615,615],rangeBurn:"615",image:{full:"RyzeE.png",sprite:"spell11.png",group:"spell",x:0,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"RyzeR",name:"Realm Warp",description:"Passively, Overload deals even more damage against targets with Flux.<br><br>On cast, Ryze creates a portal to a nearby location. After a few seconds, allies standing near the portal are teleported to the target location.",tooltip:"<spellPassive>Passive:</spellPassive> <spellName>Overload</spellName> damage bonus against targets with <keywordMajor>Flux</keywordMajor> increased to {{ overloaddamagebonus }}%.<br /><br /><spellActive>Active:</spellActive> Ryze opens a portal to another location. After {{ chargetimetooltip }} seconds, all allies near the portal are teleported to that location.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Cooldown","Overload Damage Increase"],effect:["{{ cooldown }} -> {{ cooldownNL }}","{{ overloaddamagebonus }}% -> {{ overloaddamagebonusNL }}%"]},maxrank:3,cooldown:[210,180,150],cooldownBurn:"210/180/150",cost:[100,100,100],costBurn:"100",datavalues:{},effect:[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[6,6,6],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"0","0","0","0","0","6","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[3e3,3e3,3e3],rangeBurn:"3000",image:{full:"RyzeR.png",sprite:"spell11.png",group:"spell",x:48,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"}],passive:{name:"Arcane Mastery",description:"<mainText>Ryze's spells deal extra damage based on his Bonus Mana, and he gains a percentage increase to his maximum Mana based on his Ability Power.</mainText>",image:{full:"Ryze_P.png",sprite:"passive3.png",group:"passive",x:0,y:96,w:48,h:48}},recommended:[]}},r={type:e,format:a,version:o,data:s};export{s as data,r as default,a as format,e as type,o as version};
