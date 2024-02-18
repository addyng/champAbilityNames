const e="champion",a="standAloneComplex",t="14.3.1",s={Sejuani:{id:"Sejuani",key:"113",name:"Sejuani",title:"Fury of the North",image:{full:"Sejuani.png",sprite:"champion3.png",group:"champion",x:96,y:96,w:48,h:48},skins:[{id:"113000",num:0,name:"default",chromas:!1},{id:"113001",num:1,name:"Sabretusk Sejuani",chromas:!1},{id:"113002",num:2,name:"Darkrider Sejuani",chromas:!1},{id:"113003",num:3,name:"Traditional Sejuani",chromas:!1},{id:"113004",num:4,name:"Bear Cavalry Sejuani",chromas:!1},{id:"113005",num:5,name:"Poro Rider Sejuani",chromas:!0},{id:"113006",num:6,name:"Beast Hunter Sejuani",chromas:!1},{id:"113007",num:7,name:"Sejuani Dawnchaser",chromas:!1},{id:"113008",num:8,name:"Firecracker Sejuani",chromas:!0},{id:"113015",num:15,name:"Hextech Sejuani",chromas:!1},{id:"113016",num:16,name:"PROJECT: Sejuani",chromas:!0},{id:"113026",num:26,name:"Solar Eclipse Sejuani",chromas:!0},{id:"113036",num:36,name:"Victorious Sejuani",chromas:!0}],lore:"Sejuani is the brutal, unforgiving Iceborn warmother of the Winter's Claw, one of the most feared tribes of the Freljord. Her people's survival is a constant, desperate battle against the elements, forcing them to raid Noxians, Demacians, and Avarosans alike to survive the harsh winters. Sejuani herself spearheads the most dangerous of these attacks from the saddle of her drüvask boar Bristle, using her True Ice flail to freeze and shatter her enemies.",blurb:"Sejuani is the brutal, unforgiving Iceborn warmother of the Winter's Claw, one of the most feared tribes of the Freljord. Her people's survival is a constant, desperate battle against the elements, forcing them to raid Noxians, Demacians, and Avarosans...",allytips:["Use Arctic Assault to escape bad situations, interupt channeled spells or chase runners.","Melee allies can stack Frost for your Permafrost, keep an eye on who they are attacking.","Save Glacial Prison for encounters where you have teammates present to take advantage of it."],enemytips:["Dodging Arctic Assault and Glacial Prison can give you a huge advantage.","Focus on avoiding the second swing of Winter's Wrath which carries the brunt of the damage.","Melee enemies can also stack Frost for Sejuani, be very careful around them."],tags:["Tank","Fighter"],partype:"Mana",info:{attack:5,defense:7,magic:6,difficulty:4},stats:{hp:630,hpperlevel:114,mp:400,mpperlevel:40,movespeed:340,armor:34,armorperlevel:5.45,spellblock:32,spellblockperlevel:2.05,attackrange:150,hpregen:8.5,hpregenperlevel:1,mpregen:7,mpregenperlevel:.7,crit:0,critperlevel:0,attackdamage:66,attackdamageperlevel:4,attackspeedperlevel:3.5,attackspeed:.688},spells:[{id:"SejuaniQ",name:"Arctic Assault",description:"Sejuani charges forward, knocking enemies into the air. The charge stops after hitting an enemy champion.",tooltip:"Sejuani charges, dealing <magicDamage>{{ totaldamagetooltip }} magic damage</magicDamage> to enemies and <status>Knocking</status> them <status>Up</status> for {{ e4 }} seconds. The charge ends after hitting an enemy champion.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Cooldown","@AbilityResourceName@ Cost"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[19,17.5,16,14.5,13],cooldownBurn:"19/17.5/16/14.5/13",cost:[70,75,80,85,90],costBurn:"70/75/80/85/90",datavalues:{},effect:[null,[90,140,190,240,290],[625,625,625,625,625],[1e3,1e3,1e3,1e3,1e3],[.5,.5,.5,.5,.5],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"90/140/190/240/290","625","1000","0.5","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[650,650,650,650,650],rangeBurn:"650",image:{full:"SejuaniQ.png",sprite:"spell11.png",group:"spell",x:288,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"SejuaniW",name:"Winter's Wrath",description:"Sejuani swings her mace twice, dealing damage, slowing enemies and applying Frost stacks.",tooltip:"Sejuani swings her flail, dealing <physicalDamage>{{ firsthitdamagetooltip }} physical damage</physicalDamage> and <status>Knocking Back</status> minions and jungle monsters. She then lashes out again, dealing <physicalDamage>{{ secondhitdamagetooltip }} physical damage</physicalDamage> and briefly <status>Slowing</status> targets.<br /><br />Both swings apply stacks of <spellName>Permafrost</spellName>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["First Hit Damage","Second Hit Damage","Cooldown"],effect:["{{ e1 }} -> {{ e1NL }}","{{ e3 }} -> {{ e3NL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:5,cooldown:[9,8,7,6,5],cooldownBurn:"9/8/7/6/5",cost:[65,65,65,65,65],costBurn:"65",datavalues:{},effect:[null,[10,15,20,25,30],[.75,.75,.75,.75,.75],[20,60,100,140,180],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[.2,.2,.2,.2,.2],[.6,.6,.6,.6,.6],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"10/15/20/25/30","0.75","20/60/100/140/180","0","0","0","0.2","0.6","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[600,600,600,600,600],rangeBurn:"600",image:{full:"SejuaniW.png",sprite:"spell11.png",group:"spell",x:336,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"SejuaniE",name:"Permafrost",description:"Sejuani freezes and stuns an enemy champion that has maximum Frost stacks.",tooltip:"<spellPassive>Passive:</spellPassive> Nearby melee allied champions' Attacks apply a stack to champions and jungle monsters.<br /><br /><spellPassive>Active:</spellPassive> Sejuani deals <magicDamage>{{ totaldamagetooltip }} magic damage</magicDamage> to target enemy with 4 stacks and <status>Stuns</status> them for {{ e1 }} second. {{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage"],effect:["{{ e3 }} -> {{ e3NL }}"]},maxrank:5,cooldown:[1.5,1.5,1.5,1.5,1.5],cooldownBurn:"1.5",cost:[20,20,20,20,20],costBurn:"20",datavalues:{},effect:[null,[1,1,1,1,1],[0,0,0,0,0],[55,105,155,205,255],[4,4,4,4,4],[5,5,5,5,5],[1100,1100,1100,1100,1100],[0,0,0,0,0],[0,0,0,0,0],[250,250,250,250,250],[0,0,0,0,0]],effectBurn:[null,"1","0","55/105/155/205/255","4","5","1100","0","0","250","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[560,560,560,560,560],rangeBurn:"560",image:{full:"SejuaniE.png",sprite:"spell11.png",group:"spell",x:384,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"SejuaniR",name:"Glacial Prison",description:"Sejuani throws her bola that freezes and stuns the first champion hit and creates an ice storm that slows other enemies.",tooltip:"Sejuani throws her True Ice bola, <status>Stunning</status> and revealing the first enemy champion hit for {{ e2 }} second and dealing <magicDamage>{{ minordamagetooltip }} magic damage</magicDamage>.<br /><br />If the bola travels at least 25% of its range, it <status>Stuns</status> and reveals for {{ e6 }} seconds instead. It then also creates an ice storm that <status>Slows</status> surrounding enemies by {{ e4 }}% for {{ e3 }} seconds. All affected enemies take <magicDamage>{{ totaldamagetooltip }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Minimum Damage","Maximum Damage","Cooldown"],effect:["{{ e1 }} -> {{ e1NL }}","{{ e7 }} -> {{ e7NL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:3,cooldown:[130,110,90],cooldownBurn:"130/110/90",cost:[100,100,100],costBurn:"100",datavalues:{},effect:[null,[125,150,175],[1,1,1],[2,2,2],[80,80,80],[1,1,1],[1.5,1.5,1.5],[200,300,400],[30,30,30],[0,0,0],[0,0,0]],effectBurn:[null,"125/150/175","1","2","80","1","1.5","200/300/400","30","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[1300,1300,1300],rangeBurn:"1300",image:{full:"SejuaniR.png",sprite:"spell11.png",group:"spell",x:432,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"}],passive:{name:"Fury of the North",description:"After being out of combat, Sejuani gains Frost Armor which grants Armor and Magic Resist and immunity to slows. Frost Armor persists for a short time after Sejuani takes damage.  Sejuani can damage a stunned enemy to shatter it, dealing massive magic damage.",image:{full:"Sejuani_passive.png",sprite:"passive3.png",group:"passive",x:96,y:96,w:48,h:48}},recommended:[]}},n={type:e,format:a,version:t,data:s};export{s as data,n as default,a as format,e as type,t as version};
