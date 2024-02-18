const e="champion",a="standAloneComplex",s="14.3.1",o={Yasuo:{id:"Yasuo",key:"157",name:"Yasuo",title:"the Unforgiven",image:{full:"Yasuo.png",sprite:"champion5.png",group:"champion",x:288,y:0,w:48,h:48},skins:[{id:"157000",num:0,name:"default",chromas:!1},{id:"157001",num:1,name:"High Noon Yasuo",chromas:!0},{id:"157002",num:2,name:"PROJECT: Yasuo",chromas:!1},{id:"157003",num:3,name:"Blood Moon Yasuo",chromas:!1},{id:"157009",num:9,name:"Nightbringer Yasuo",chromas:!0},{id:"157010",num:10,name:"Odyssey Yasuo",chromas:!0},{id:"157017",num:17,name:"Battle Boss Yasuo",chromas:!0},{id:"157018",num:18,name:"True Damage Yasuo",chromas:!0},{id:"157035",num:35,name:"Prestige True Damage Yasuo",chromas:!1},{id:"157036",num:36,name:"Spirit Blossom Yasuo",chromas:!0},{id:"157045",num:45,name:"Sea Dog Yasuo",chromas:!0},{id:"157054",num:54,name:"Truth Dragon Yasuo",chromas:!1},{id:"157055",num:55,name:"Dream Dragon Yasuo",chromas:!1},{id:"157056",num:56,name:"Inkshadow Yasuo",chromas:!0},{id:"157057",num:57,name:"Prestige Inkshadow Yasuo",chromas:!1},{id:"157068",num:68,name:"Foreseen Yasuo",chromas:!0}],lore:"An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self defense. Even after his master's true killer was revealed, Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",blurb:"An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self...",allytips:["Dash through a minion to have Sweeping Blade available to chase your opponent should they flee; Dash directly to your opponent to preserve a minion as your escape route.","At level 18, Yasuo's Steel Tempest reaches its Attack Speed cap with 55% Attack Speed from items.","Last Breath can be cast on any target that is knocked Airborne, even by one of your allies."],enemytips:["Steel Tempest is very narrow. Dodge laterally if possible. ","When Yasuo lands two Steel Tempests in a row, his next will fire a tornado. Watch and listen for the associated sound to prepare to dodge.","Yasuo is at his weakest just after he has launched a whirlwind. Engage at that point.","Yasuo's shield from Resolve lasts only 2 seconds. Dealing damage to him will trigger it. Wait it out, then engage."],tags:["Fighter","Assassin"],partype:"Flow",info:{attack:8,defense:4,magic:4,difficulty:10},stats:{hp:590,hpperlevel:110,mp:100,mpperlevel:0,movespeed:345,armor:30,armorperlevel:4.6,spellblock:32,spellblockperlevel:2.05,attackrange:175,hpregen:6.5,hpregenperlevel:.9,mpregen:0,mpregenperlevel:0,crit:0,critperlevel:0,attackdamage:60,attackdamageperlevel:3,attackspeedperlevel:3.5,attackspeed:.697},spells:[{id:"YasuoQ1Wrapper",name:"Steel Tempest",description:"Thrusts forward, damaging all enemies in a line.<br><br>On hit, grants a stack of Gathering Storm for a few seconds. At 2 stacks, Steel Tempest fires a whirlwind that knocks <font color='#6655CC'>Airborne</font>.<br><br>Steel Tempest is treated as a basic attack and scales with all the same things.",tooltip:"Yasuo thrusts, dealing <physicalDamage>{{ totaldamage }} physical damage</physicalDamage>. If he hits, he gains a stack for {{ gatheringstormduration }} seconds. While he has 2 stacks, his next use of this Ability fires a whirlwind from range, dealing the same damage and <status>Knocking Up</status> for {{ knockupdurationtooltiponly }} second.<br /><br />If used while dashing, this Ability strikes in a circle rather than a stab.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage"],effect:["{{ basedamage }} -> {{ basedamageNL }}"]},maxrank:5,cooldown:[4,4,4,4,4],cooldownBurn:"4",cost:[0,0,0,0,0],costBurn:"0",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:"No Cost",maxammo:"-1",range:[475,475,475,475,475],rangeBurn:"475",image:{full:"YasuoQ1Wrapper.png",sprite:"spell16.png",group:"spell",x:96,y:0,w:48,h:48},resource:"No Cost"},{id:"YasuoW",name:"Wind Wall",description:"Creates a moving wall that blocks all enemy projectiles for 4 seconds.",tooltip:"Yasuo creates a drifting wall of wind that blocks all enemy projectiles for 4 seconds.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Width","Cooldown"],effect:["{{ e5 }} -> {{ e5NL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:5,cooldown:[25,23,21,19,17],cooldownBurn:"25/23/21/19/17",cost:[0,0,0,0,0],costBurn:"0",datavalues:{},effect:[null,[15,20,25,30,35],[60,90,120,150,180],[3,6,9,12,15],[300,350,400,450,500],[320,390,460,530,600],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"15/20/25/30/35","60/90/120/150/180","3/6/9/12/15","300/350/400/450/500","320/390/460/530/600","0","0","0","0","0"],vars:[],costType:"No Cost",maxammo:"-1",range:[400,400,400,400,400],rangeBurn:"400",image:{full:"YasuoW.png",sprite:"spell16.png",group:"spell",x:144,y:0,w:48,h:48},resource:"No Cost"},{id:"YasuoE",name:"Sweeping Blade",description:"Dashes through target enemy, dealing magic damage. Each cast increases subsequent dash's damage, up to a max amount.<br><br>Cannot be re-cast on the same enemy for a few seconds.<br><br><font color='#99FF99'>If Steel Tempest is cast while dashing, it will strike as a circle.</font>",tooltip:"Yasuo dashes through a target, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. Each use of this Ability grants <magicDamage>{{ bonusdamageperstack }}</magicDamage>(%i:scaleLevel%) bonus damage to subsequent uses for {{ stackduration }} seconds, stacking up to {{ maxstacks }} times.<br /><br />This Ability has a {{ e2 }} second per-target Cooldown.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Per Unit Cooldown","Cooldown"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ e2 }} -> {{ e2NL }}","{{ e3 }} -> {{ e3NL }}"]},maxrank:5,cooldown:[.5,.4,.3,.2,.1],cooldownBurn:"0.5/0.4/0.3/0.2/0.1",cost:[0,0,0,0,0],costBurn:"0",datavalues:{},effect:[null,[0,0,0,0,0],[10,9,8,7,6],[.5,.4,.3,.2,.1],[0,0,0,0,0],[0,0,0,0,0],[750,750,750,750,750],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","10/9/8/7/6","0.5/0.4/0.3/0.2/0.1","0","0","750","0","0","0","0"],vars:[],costType:"No Cost",maxammo:"-1",range:[475,475,475,475,475],rangeBurn:"475",image:{full:"YasuoE.png",sprite:"spell16.png",group:"spell",x:192,y:0,w:48,h:48},resource:"No Cost"},{id:"YasuoR",name:"Last Breath",description:"Blinks to an <factionIonia1>Airborne</factionIonia1> enemy champion, dealing physical damage and holding all <factionIonia1>Airborne</factionIonia1> enemies in the area in the air. Grants maximum Flow but resets all stacks of Gathering Storm.<br><br>For a moderate time afterwards, Yasuo's critical strikes gain significant Bonus Armor Penetration.",tooltip:"Yasuo teleports to an <status>Airborne</status> enemy champion, dealing <physicalDamage>{{ damage }} physical damage</physicalDamage> and holding all nearby <status>Airborne</status> enemies up for an additional {{ rknockupduration }} second. Yasuo also gains maximum <keywordMajor>Flow</keywordMajor>, but loses all <spellName>Steel Tempest</spellName> stacks.<br /><br />Afterwards, Yasuo's critical strikes ignore <scaleArmor>{{ rpercentarmorpen }}% bonus Armor</scaleArmor> for {{ rbuffduration }} seconds.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Cooldown"],effect:["{{ rbasedamage }} -> {{ rbasedamageNL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:3,cooldown:[70,50,30],cooldownBurn:"70/50/30",cost:[0,0,0],costBurn:"0",datavalues:{},effect:[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:"No Cost",maxammo:"-1",range:[1400,1400,1400],rangeBurn:"1400",image:{full:"YasuoR.png",sprite:"spell16.png",group:"spell",x:240,y:0,w:48,h:48},resource:"No Cost"}],passive:{name:"Way of the Wanderer",description:"Yasuo's Critical Strike Chance is increased. Additionally, Yasuo builds toward a shield whenever he is moving. The shield triggers when he takes damage from a champion or monster.",image:{full:"Yasuo_Passive.png",sprite:"passive5.png",group:"passive",x:288,y:0,w:48,h:48}},recommended:[]}},t={type:e,format:a,version:s,data:o};export{o as data,t as default,a as format,e as type,s as version};
