const e="champion",a="standAloneComplex",n="14.3.1",o={Gnar:{id:"Gnar",key:"150",name:"Gnar",title:"the Missing Link",image:{full:"Gnar.png",sprite:"champion1.png",group:"champion",x:336,y:0,w:48,h:48},skins:[{id:"150000",num:0,name:"default",chromas:!1},{id:"150001",num:1,name:"Dino Gnar",chromas:!0},{id:"150002",num:2,name:"Gentleman Gnar",chromas:!1},{id:"150003",num:3,name:"Snow Day Gnar",chromas:!1},{id:"150004",num:4,name:"El León Gnar",chromas:!1},{id:"150013",num:13,name:"Super Galaxy Gnar",chromas:!1},{id:"150014",num:14,name:"SSG Gnar",chromas:!1},{id:"150015",num:15,name:"Astronaut Gnar",chromas:!0},{id:"150022",num:22,name:"Elderwood Gnar",chromas:!0},{id:"150031",num:31,name:"La Ilusión Gnar",chromas:!0}],lore:"Gnar is a primeval yordle whose playful antics can erupt into a toddler's outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed world he sees as exotic and wondrous. Delighted by danger, Gnar flings whatever he can at his enemies, be it his bonetooth boomerang, or a nearby building.",blurb:"Gnar is a primeval yordle whose playful antics can erupt into a toddler's outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed...",allytips:["Managing your Rage is very important. Try to time out your transformations so you can get maximum benefit from both forms.","Position yourself next to walls to bait your enemies into getting stunned by your ultimate.","Know your strengths! Mini Gnar is fast, squishy, and has high sustained damage. Mega Gnar is slow, tough, and has high burst."],enemytips:["Gnar can't gain Rage for 15 seconds after he turns from big to little. Use this chance to engage on his team.","Gnar's animations and resource bar change as he gets closer to transforming.  ","Gnar's ultimate stuns if he hits you into a wall. Be careful when fighting him near one."],tags:["Fighter","Tank"],partype:"Rage",info:{attack:6,defense:5,magic:5,difficulty:8},stats:{hp:540,hpperlevel:79,mp:100,mpperlevel:0,movespeed:335,armor:32,armorperlevel:3.7,spellblock:30,spellblockperlevel:1.3,attackrange:175,hpregen:4.5,hpregenperlevel:1.25,mpregen:0,mpregenperlevel:0,crit:0,critperlevel:0,attackdamage:57,attackdamageperlevel:3,attackspeedperlevel:6,attackspeed:.625},spells:[{id:"GnarQ",name:"Boomerang Throw / Boulder Toss",description:"Gnar throws a boomerang that damages and slows enemies it hits before returning to him. If he catches the boomerang its cooldown is reduced.<br><br>Mega Gnar instead throws a boulder that stops on the first unit hit, damaging and slowing everything nearby. It can then be picked up to reduce the cooldown.",tooltip:"<keywordMajor>Mini Gnar:</keywordMajor> Gnar throws a boomerang that deals <physicalDamage>{{ spell.gnarq:minitotaldamage }} physical damage</physicalDamage> and <status>Slows</status> by {{ spell.gnarq:slowamount*100 }}% for {{ spell.gnarq:slowduration }} seconds. The boomerang returns after hitting an enemy, dealing reduced damage to subsequent targets. Each enemy can only be hit once. Catching the boomerang reduces its Cooldown by {{ spell.gnarq:minicdrefund*100 }}%.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Boomerang Damage","Boulder Damage","Slow","Boulder Slow Amount","Cooldown"],effect:["{{ minibasedamage }} -> {{ minibasedamageNL }}","{{ megabasedamage }} -> {{ megabasedamageNL }}","{{ slowamount*100.000000 }}% -> {{ slowamountnl*100.000000 }}%","{{ megaslowamount*100.000000 }}% -> {{ megaslowamountnl*100.000000 }}%","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:5,cooldown:[20,17.5,15,12.5,10],cooldownBurn:"20/17.5/15/12.5/10",cost:[0,0,0,0,0],costBurn:"0",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:"No Cost",maxammo:"-1",range:[1100,1100,1100,1100,1100],rangeBurn:"1100",image:{full:"GnarQ.png",sprite:"spell4.png",group:"spell",x:288,y:0,w:48,h:48},resource:"No Cost"},{id:"GnarW",name:"Hyper / Wallop",description:"Gnar's attacks and spells hype him up, dealing bonus damage and granting him Move Speed.<br><br>Mega Gnar is too enraged to be hyper and instead can rear up on his hind legs and smash down on the area in front of him, stunning enemies in an area.",tooltip:"<keywordMajor>Mini Gnar Passive:</keywordMajor> Every third Attack or Ability on the same enemy deals an additional <magicDamage>{{ spell.gnarw:minitotaldamage }} plus {{ spell.gnarw:minipercenthpdamage*100 }}% max Health magic damage</magicDamage> and grants <speed>{{ spell.gnarr:rhypermovementspeedpercent }}% Move Speed</speed> decaying over 3 seconds.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Hyper Damage","Hyper % Health Damage","Wallop Damage"],effect:["{{ minibasedamage }} -> {{ minibasedamageNL }}","{{ minipercenthpdamage*100.000000 }}% -> {{ minipercenthpdamagenl*100.000000 }}%","{{ megabasedamage }} -> {{ megabasedamageNL }}"]},maxrank:5,cooldown:[7,7,7,7,7],cooldownBurn:"7",cost:[0,0,0,0,0],costBurn:"0",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:"No Cost",maxammo:"-1",range:[0,0,0,0,0],rangeBurn:"0",image:{full:"GnarW.png",sprite:"spell4.png",group:"spell",x:336,y:0,w:48,h:48},resource:"No Cost"},{id:"GnarE",name:"Hop / Crunch",description:"Gnar leaps to a location and bounces off the head of any unit he lands on, traveling further.<br><br>Mega Gnar is too large to bounce and instead lands with earth-shattering force, dealing damage in an area around him.",tooltip:"<keywordMajor>Mini Gnar:</keywordMajor> Gnar leaps, gaining <attackSpeed>{{ spell.gnare:minibas*100 }}% Attack Speed</attackSpeed> for {{ spell.gnare:miniasduration }} seconds. If Gnar lands on a unit he will bounce off it, traveling further. Bouncing off an enemy deals <physicalDamage>{{ spell.gnare:minitotaldamage }} physical damage</physicalDamage> and briefly <status>Slows</status> by {{ spell.gnare:movespeedmod*-100 }}%.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Hop Damage","Crunch Damage","Bonus Attack Speed","Cooldown"],effect:["{{ minidamage }} -> {{ minidamageNL }}","{{ megadamage }} -> {{ megadamageNL }}","{{ minibas*100.000000 }}% -> {{ minibasnl*100.000000 }}%","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:5,cooldown:[22,19.5,17,14.5,12],cooldownBurn:"22/19.5/17/14.5/12",cost:[0,0,0,0,0],costBurn:"0",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:"No Cost",maxammo:"-1",range:[475,475,475,475,475],rangeBurn:"475",image:{full:"GnarE.png",sprite:"spell4.png",group:"spell",x:384,y:0,w:48,h:48},resource:"No Cost"},{id:"GnarR",name:"GNAR!",description:"Mega Gnar throws everything around him in a chosen direction, dealing damage and slowing them.  Any enemy that hits a wall is stunned and takes bonus damage.",tooltip:"<keywordMajor>Mini Gnar Passive:</keywordMajor> Increase <spellName>Hyper's</spellName> <speed>Move Speed</speed>.<br /><br /><keywordMajor>Mega Gnar:</keywordMajor> Gnar tosses nearby enemies, dealing <physicalDamage>{{ damage }} physical damage</physicalDamage>, <status>Knocking Back</status>, and <status>Slowing</status> them by {{ rslowpercent }}% for {{ rccduration }} seconds. Enemies that hit a wall instead take <physicalDamage>{{ walldamage }} physical damage</physicalDamage> and are <status>Stunned</status>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Slow/Stun Duration","Hyper Move Speed","Cooldown"],effect:["{{ rbasedamage }} -> {{ rbasedamageNL }}","{{ rccduration }} -> {{ rccdurationNL }}","{{ rhypermovementspeedpercent }}% -> {{ rhypermovementspeedpercentNL }}%","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:3,cooldown:[90,60,30],cooldownBurn:"90/60/30",cost:[0,0,0],costBurn:"0",datavalues:{},effect:[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:"No Cost",maxammo:"-1",range:[590,590,590],rangeBurn:"590",image:{full:"GnarR.png",sprite:"spell4.png",group:"spell",x:432,y:0,w:48,h:48},resource:"No Cost"}],passive:{name:"Rage Gene",description:"While in combat Gnar generates Rage. At maximum Rage his next ability will transform him into Mega Gnar, granting increased survivability and access to new spells.",image:{full:"Gnar_Passive.png",sprite:"passive1.png",group:"passive",x:336,y:0,w:48,h:48}},recommended:[]}},r={type:e,format:a,version:n,data:o};export{o as data,r as default,a as format,e as type,n as version};
