const e="champion",a="standAloneComplex",s="14.3.1",o={Sylas:{id:"Sylas",key:"517",name:"Sylas",title:"the Unshackled",image:{full:"Sylas.png",sprite:"champion4.png",group:"champion",x:336,y:0,w:48,h:48},skins:[{id:"517000",num:0,name:"default",chromas:!1},{id:"517001",num:1,name:"Lunar Wraith Sylas",chromas:!0},{id:"517008",num:8,name:"Freljord Sylas",chromas:!0},{id:"517013",num:13,name:"PROJECT: Sylas",chromas:!0},{id:"517014",num:14,name:"Prestige PROJECT: Sylas",chromas:!1},{id:"517024",num:24,name:"Battle Wolf Sylas",chromas:!0},{id:"517034",num:34,name:"Ashen Slayer Sylas",chromas:!0},{id:"517036",num:36,name:"Winterblessed Sylas",chromas:!0}],lore:"Raised in one of Demacia's lesser quarters, Sylas of Dregbourne has come to symbolize the darker side of the Great City. As a boy, his ability to root out hidden sorcery caught the attention of the notorious mageseekers, who eventually imprisoned him for turning those same powers against them. Having now broken free, Sylas lives as a hardened revolutionary, using the magic of those around him to destroy the kingdom he once served… and his band of outcast mage followers seems to grow by the day.",blurb:"Raised in one of Demacia's lesser quarters, Sylas of Dregbourne has come to symbolize the darker side of the Great City. As a boy, his ability to root out hidden sorcery caught the attention of the notorious mageseekers, who eventually imprisoned him...",allytips:["Wait for you or your enemy to reach low health before using Kingslayer for maximum effect.","Space out your ability usage to get maximum effect from Petricite Burst.","Clever use of enemy ultimates can open up new possibilities to approach teamfights."],enemytips:["Sylas's healthbar can be deceptive, watch out for his Kingslayer!","Try to fight Sylas when he isn't able to take your ultimate."],tags:["Mage","Assassin"],partype:"Mana",info:{attack:3,defense:4,magic:8,difficulty:5},stats:{hp:575,hpperlevel:129,mp:400,mpperlevel:70,movespeed:340,armor:27,armorperlevel:5.2,spellblock:32,spellblockperlevel:2.55,attackrange:175,hpregen:9,hpregenperlevel:.9,mpregen:8,mpregenperlevel:.8,crit:0,critperlevel:0,attackdamage:61,attackdamageperlevel:3,attackspeedperlevel:3.5,attackspeed:.645},spells:[{id:"SylasQ",name:"Chain Lash",description:"Sylas lashes his chains out, intersecting at his targeted location dealing damage to and slowing enemies. <br><br>After a delay, magical energy explodes from the intersection point dealing damage.",tooltip:"Sylas lashes his chains out, dealing <magicDamage>{{ damage }} magic damage</magicDamage> and <status>Slowing</status> by {{ slowamountcalc }} for {{ slowduration }} seconds. The place where the chains intersect explodes, dealing a further <magicDamage>{{ explosiondamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Cooldown","Damage","Slow","Explosion Damage"],effect:["{{ cooldown }} -> {{ cooldownNL }}","{{ basedamage }} -> {{ basedamageNL }}","{{ slowamount*100.000000 }}% -> {{ slowamountnl*100.000000 }}%","{{ explosionbasedamage }} -> {{ explosionbasedamageNL }}"]},maxrank:5,cooldown:[11,10,9,8,7],cooldownBurn:"11/10/9/8/7",cost:[55,55,55,55,55],costBurn:"55",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[775,775,775,775,775],rangeBurn:"775",image:{full:"SylasQ.png",sprite:"spell13.png",group:"spell",x:288,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"SylasW",name:"Kingslayer",description:"Sylas lunges at an enemy with magical force dealing damage and healing himself against enemy champions.",tooltip:"Sylas lunges at an enemy with magical force dealing <magicDamage>{{ mindamage }} magic damage</magicDamage>. Against champions, Sylas restores between <healing>{{ minhealing }}</healing> and <healing>{{ maxhealing }} Health</healing> based on his missing Health (max healing at or below {{ maxexecutethreshold*100 }}% Health).{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Healing","Cooldown","@AbilityResourceName@ Cost"],effect:["{{ damage }} -> {{ damageNL }}","{{ healing }} -> {{ healingNL }}","{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[12,10.5,9,7.5,6],cooldownBurn:"12/10.5/9/7.5/6",cost:[50,60,70,80,90],costBurn:"50/60/70/80/90",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[400,400,400,400,400],rangeBurn:"400",image:{full:"SylasW.png",sprite:"spell13.png",group:"spell",x:336,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"SylasE",name:"Abscond / Abduct",description:"Sylas dashes to a location. Sylas can recast the ability to throw his chains out, pulling himself to an enemy he hits.",tooltip:"Sylas quickly dashes, and prepares a <recast>Recast</recast> for 3.5 seconds.<br /><br /><recast>Recast:</recast> Sylas throws his chains, pulling himself to the first enemy hit, dealing <magicDamage>{{ damage }} magic damage</magicDamage>, and <status>Knocking Up</status> for {{ knockupduration }} seconds.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Cooldown"],effect:["{{ pulldamage }} -> {{ pulldamageNL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:5,cooldown:[13,12,11,10,9],cooldownBurn:"13/12/11/10/9",cost:[65,65,65,65,65],costBurn:"65",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[400,400,400,400,400],rangeBurn:"400",image:{full:"SylasE.png",sprite:"spell13.png",group:"spell",x:384,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"SylasR",name:"Hijack",description:"Sylas steals the enemy's ultimate ability and can cast it freely.",tooltip:"Sylas hijacks an enemy champion, allowing him to cast a copy of their ultimate Ability, based on his Ultimate level and using his stats.<br /><br />Hijacking an enemy places a Cooldown on them for {{ pertargetcooldown }}% (modified by Sylas' Ability Haste) of the enemy's ultimate's Cooldown, with a minimum of {{ minimumenemycooldown }} seconds, during which time Sylas cannot hijack them again.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Cooldown"],effect:["{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:3,cooldown:[80,55,30],cooldownBurn:"80/55/30",cost:[75,75,75],costBurn:"75",datavalues:{},effect:[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[950,950,950],rangeBurn:"950",image:{full:"SylasR.png",sprite:"spell13.png",group:"spell",x:432,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"}],passive:{name:"Petricite Burst",description:"After casting a spell, Sylas stores a charge of Petricite Burst. Sylas's basic attacks will expend a charge and whirl his energized chains around him dealing bonus magic damage to enemies hit. While Sylas has a charge of Petricite Burst, he gains attack speed. ",image:{full:"SylasP.png",sprite:"passive4.png",group:"passive",x:336,y:0,w:48,h:48}},recommended:[]}},t={type:e,format:a,version:s,data:o};export{o as data,t as default,a as format,e as type,s as version};
