const e="champion",a="standAloneComplex",s="14.3.1",t={Fiddlesticks:{id:"Fiddlesticks",key:"9",name:"Fiddlesticks",title:"the Ancient Fear",image:{full:"Fiddlesticks.png",sprite:"champion1.png",group:"champion",x:48,y:0,w:48,h:48},skins:[{id:"9000",num:0,name:"default",chromas:!1},{id:"9001",num:1,name:"Spectral Fiddlesticks",chromas:!1},{id:"9002",num:2,name:"Union Jack Fiddlesticks",chromas:!1},{id:"9003",num:3,name:"Bandito Fiddlesticks",chromas:!0},{id:"9004",num:4,name:"Pumpkinhead Fiddlesticks",chromas:!1},{id:"9005",num:5,name:"Fiddle Me Timbers",chromas:!1},{id:"9006",num:6,name:"Surprise Party Fiddlesticks",chromas:!0},{id:"9007",num:7,name:"Dark Candy Fiddlesticks",chromas:!1},{id:"9008",num:8,name:"Risen Fiddlesticks",chromas:!1},{id:"9009",num:9,name:"Praetorian Fiddlesticks",chromas:!0},{id:"9027",num:27,name:"Star Nemesis Fiddlesticks",chromas:!0}],lore:"Something has awoken in Runeterra. Something ancient. Something terrible. The ageless horror known as Fiddlesticks stalks the edges of mortal society, drawn to areas thick with paranoia where it feeds upon terrorized victims. Wielding a jagged scythe, the haggard, makeshift creature reaps fear itself, shattering the minds of those unlucky enough to survive in its wake. Beware the sounding of the crow, or the whispering of the shape that appears <i>almost</i> human… Fiddlesticks has returned.",blurb:"Something has awoken in Runeterra. Something ancient. Something terrible. The ageless horror known as Fiddlesticks stalks the edges of mortal society, drawn to areas thick with paranoia where it feeds upon terrorized victims. Wielding a jagged scythe...",allytips:[],enemytips:[],tags:["Mage","Support"],partype:"Mana",info:{attack:2,defense:3,magic:9,difficulty:9},stats:{hp:650,hpperlevel:106,mp:500,mpperlevel:28,movespeed:335,armor:34,armorperlevel:4.7,spellblock:30,spellblockperlevel:1.3,attackrange:480,hpregen:5.5,hpregenperlevel:.6,mpregen:8,mpregenperlevel:.8,crit:0,critperlevel:0,attackdamage:55,attackdamageperlevel:2.65,attackspeedperlevel:2.11,attackspeed:.625},spells:[{id:"FiddleSticksQ",name:"Terrify",description:"Fiddlesticks damaging enemies with spells while unseen or targeting an enemy with Terrify's activation strikes a target unit with fear, causing it to flee in terror for a duration.",tooltip:"<spellPassive>Passive:</spellPassive> While unseen and out of combat or impersonating an <keywordMajor>Effigy</keywordMajor>, damaging an enemy with an ability <status>Fears</status> them for {{ fearduration }} second(s).<br /><br /><spellActive>Active:</spellActive> <status>Fear</status> an enemy for {{ fearduration }} second(s) and deal <magicDamage>{{ totalpercenthealthdamage }} current Health magic damage</magicDamage>. If the target has recently been <status>Feared</status> by Fiddlesticks, instead deal <magicDamage>{{ totalpercenthealthdamagefeared }} current Health magic damage</magicDamage>.<br />{{ spellmodifierdescriptionappend }}",leveltip:{label:["Duration","Cooldown","Current Health %"],effect:["{{ fearduration }} -> {{ feardurationNL }}","{{ cooldown }} -> {{ cooldownNL }}","{{ maxhealthdamage*100.000000 }}% -> {{ maxhealthdamagenl*100.000000 }}%"]},maxrank:5,cooldown:[15,14.5,14,13.5,13],cooldownBurn:"15/14.5/14/13.5/13",cost:[65,65,65,65,65],costBurn:"65",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[575,575,575,575,575],rangeBurn:"575",image:{full:"FiddleSticksQ.png",sprite:"spell3.png",group:"spell",x:96,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"FiddleSticksW",name:"Bountiful Harvest",description:"Fiddlesticks drains health from nearby enemies, dealing bonus execute damage at the end of the duration.",tooltip:"Fiddlesticks channels and drains the souls of nearby enemies, dealing <magicDamage>{{ draindamagecalc }} magic damage</magicDamage> per second for 2 seconds, plus <magicDamage>{{ percentfortooltip }}% missing Health magic damage</magicDamage> at the end. Fiddlesticks restores <healing>{{ vamppercentage }}% of damage as Health</healing>.<br /><br />If Fiddlesticks ends the channel without interruption, the remaining Cooldown is reduced by 60%.<br />{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage Per Second","Percent Healed","Cooldown"],effect:["{{ damagepersecond }} -> {{ damagepersecondNL }}","{{ vamppercentage }}% -> {{ vamppercentageNL }}%","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:5,cooldown:[10,9.5,9,8.5,8],cooldownBurn:"10/9.5/9/8.5/8",cost:[60,65,70,75,80],costBurn:"60/65/70/75/80",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[650,650,650,650,650],rangeBurn:"650",image:{full:"FiddleSticksW.png",sprite:"spell3.png",group:"spell",x:144,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"FiddleSticksE",name:"Reap",description:"Fiddlesticks slashes an area with its scythe, slowing all enemies hit and silencing enemies hit in the center of the slash.",tooltip:"Fiddlesticks unleashes dark magic, dealing <magicDamage>{{ damage }} magic damage</magicDamage> and <status>Slowing</status> by {{ slowamount*-100 }}% for {{ silenceduration }} seconds. Enemies in the center are also <status>Silenced</status> for the duration.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Slow","Cooldown","@AbilityResourceName@ Cost"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ slowamount*-100.000000 }}% -> {{ slowamountnl*-100.000000 }}%","{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[10,9,8,7,6],cooldownBurn:"10/9/8/7/6",cost:[40,45,50,55,60],costBurn:"40/45/50/55/60",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[850,850,850,850,850],rangeBurn:"850",image:{full:"FiddleSticksE.png",sprite:"spell3.png",group:"spell",x:192,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"FiddleSticksR",name:"Crowstorm",description:"A murder of crows flock wildly around Fiddlesticks, dealing damage per second to all enemy units in the area.",tooltip:"Fiddlesticks channels for {{ channeltime }} seconds, then teleports and unleashes a murder of crows, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> over {{ duration }} seconds.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage Per Second","Cooldown"],effect:["{{ damagepersecond }} -> {{ damagepersecondNL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:3,cooldown:[140,110,80],cooldownBurn:"140/110/80",cost:[100,100,100],costBurn:"100",datavalues:{},effect:[null,[125,225,325],[5,5,5],[1.5,1.5,1.5],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"125/225/325","5","1.5","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[800,800,800],rangeBurn:"800",image:{full:"FiddleSticksR.png",sprite:"spell3.png",group:"spell",x:240,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"}],passive:{name:"A Harmless Scarecrow",description:"Fiddlesticks' trinket is replaced by scarecrow effigies.",image:{full:"FiddlesticksP.png",sprite:"passive1.png",group:"passive",x:48,y:0,w:48,h:48}},recommended:[]}},i={type:e,format:a,version:s,data:t};export{t as data,i as default,a as format,e as type,s as version};
