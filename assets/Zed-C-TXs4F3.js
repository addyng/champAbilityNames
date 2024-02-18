const e="champion",a="standAloneComplex",o="14.3.1",s={Zed:{id:"Zed",key:"238",name:"Zed",title:"the Master of Shadows",image:{full:"Zed.png",sprite:"champion5.png",group:"champion",x:48,y:48,w:48,h:48},skins:[{id:"238000",num:0,name:"default",chromas:!1},{id:"238001",num:1,name:"Shockblade Zed",chromas:!0},{id:"238002",num:2,name:"SKT T1 Zed",chromas:!1},{id:"238003",num:3,name:"PROJECT: Zed",chromas:!0},{id:"238010",num:10,name:"Worlds 2016 Zed",chromas:!0},{id:"238011",num:11,name:"Death Sworn Zed",chromas:!1},{id:"238013",num:13,name:"Galaxy Slayer Zed",chromas:!0},{id:"238015",num:15,name:"PsyOps Zed",chromas:!0},{id:"238030",num:30,name:"Prestige PROJECT: Zed",chromas:!1},{id:"238031",num:31,name:"Debonair Zed",chromas:!0},{id:"238038",num:38,name:"Empyrean Zed",chromas:!0},{id:"238049",num:49,name:"Immortal Journey Zed",chromas:!0}],lore:"Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock the secret shadow form—a malevolent spirit magic as dangerous and corrupting as it is powerful. Zed has mastered all of these forbidden techniques to destroy anything he sees as a threat to his nation, or his new order.",blurb:"Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock...",allytips:["Saving energy and spell cooldowns until you use your ultimate will maximize Death Mark's damage.","Quickly double tapping Living Shadow will teleport Zed to his shadow immediately for rapid escapes.","Placing a Living Shadow before using Death Mark can give Zed a safe escape from combat."],enemytips:["Zed receives bonus effect from Attack Damage items he purchases, so Armor is super effective against him.","After Zed uses his Living Shadow, he is at his most vulnerable as his damage, slow, and mobility are both dependent upon it.","Zed's Shadow Slash can only slow you if his shadow hits you with it. "],tags:["Assassin"],partype:"Energy",info:{attack:9,defense:2,magic:1,difficulty:7},stats:{hp:654,hpperlevel:99,mp:200,mpperlevel:0,movespeed:345,armor:32,armorperlevel:4.7,spellblock:29,spellblockperlevel:2.05,attackrange:125,hpregen:7,hpregenperlevel:.65,mpregen:50,mpregenperlevel:0,crit:0,critperlevel:0,attackdamage:63,attackdamageperlevel:3.4,attackspeedperlevel:3.3,attackspeed:.651},spells:[{id:"ZedQ",name:"Razor Shuriken",description:"Zed and his shadows throw their shurikens.<br><br>Each shuriken deals damage to every enemy hit.",tooltip:"Zed and his <keywordMajor>Shadows</keywordMajor> throw their shurikens, each dealing <physicalDamage>{{ totaldamage }} physical damage</physicalDamage> to the first enemy they pass through, and <physicalDamage>{{ passthroughdamage }} physical damage</physicalDamage> to each additional enemy.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","@AbilityResourceName@ Cost"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[6,6,6,6,6],cooldownBurn:"6",cost:[75,70,65,60,55],costBurn:"75/70/65/60/55",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[900,900,900,900,900],rangeBurn:"900",image:{full:"ZedQ.png",sprite:"spell16.png",group:"spell",x:96,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"ZedW",name:"Living Shadow",description:"<font color='#FF9900'>Passive:</font> Zed gains energy whenever he and his shadows strike an enemy with the same ability. Energy can only be gained once per cast ability.<br><br><font color='#FF9900'>Active:</font> Zed's shadow dashes forward, remaining in place for a few seconds. Reactivating Living Shadow will cause Zed to switch positions with this shadow.",tooltip:"<spellPassive>Passive:</spellPassive> Zed gains <keywordMajor>{{ e3 }} Energy</keywordMajor> whenever he and his <keywordMajor>Shadows</keywordMajor> strike an enemy with the same Ability.<br /><br /><spellActive>Active:</spellActive> Zed's <keywordMajor>Shadow</keywordMajor> dashes forward, remaining in place for {{ e5 }} seconds. <recast>Recasting</recast> this Ability will cause Zed to switch positions with this <keywordMajor>Shadow</keywordMajor>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Energy Return","@AbilityResourceName@ Cost","Cooldown"],effect:["{{ e3 }} -> {{ e3NL }}","{{ cost }} -> {{ costNL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:5,cooldown:[20,19,18,17,16],cooldownBurn:"20/19/18/17/16",cost:[40,35,30,25,20],costBurn:"40/35/30/25/20",datavalues:{},effect:[null,[5.25,5.25,5.25,5.25,5.25],[.2,.2,.2,.2,.2],[30,35,40,45,50],[5.25,5.25,5.25,5.25,5.25],[5,5,5,5,5],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"5.25","0.2","30/35/40/45/50","5.25","5","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[650,650,650,650,650],rangeBurn:"650",image:{full:"ZedW.png",sprite:"spell16.png",group:"spell",x:144,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"ZedE",name:"Shadow Slash",description:"Zed and his Shadows slash, dealing damage to nearby enemies. Enemies hit by a Shadow's slash are slowed.",tooltip:"Zed and his <keywordMajor>Shadows</keywordMajor> slash, dealing <physicalDamage>{{ totaldamage }} physical damage</physicalDamage> to nearby enemies.<br /><br />Each enemy champion hit by Zed's slash reduces <spellName>Living Shadow</spellName>'s Cooldown by {{ shadowhitcdr }} seconds.<br /><br />Enemies hit by a <keywordMajor>Shadow</keywordMajor>'s slash are <status>Slowed</status> by {{ movespeedmod*-100 }}% for {{ slowduration }} seconds. Enemies hit by multiple slashes take no additional damage but are <status>Slowed</status> by {{ movespeedmodbonus*-100 }}% instead.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Cooldown","Slow"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ cooldown }} -> {{ cooldownNL }}","{{ movespeedmod*-100.000000 }}% -> {{ movespeedmodnl*-100.000000 }}%"]},maxrank:5,cooldown:[5,4.5,4,3.5,3],cooldownBurn:"5/4.5/4/3.5/3",cost:[40,40,40,40,40],costBurn:"40",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[290,290,290,290,290],rangeBurn:"290",image:{full:"ZedE.png",sprite:"spell16.png",group:"spell",x:192,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"ZedR",name:"Death Mark",description:"Zed becomes untargetable and dashes to an enemy champion, marking them. After 3 seconds the mark triggers, repeating a portion of all the damage Zed dealt to the target while they were marked.",tooltip:"Zed becomes Untargetable and dashes to an enemy champion, marking them. After {{ rdeathmarkduration }} seconds, the mark triggers, dealing <physicalDamage>{{ rcalculateddamage }} physical damage</physicalDamage> and repeating {{ rdamageamp*100 }}% of all damage dealt to the target by Zed while the mark was active.<br /><br />The dash leaves a <keywordMajor>Shadow</keywordMajor> behind for {{ rshadowdurationdisplayed }} seconds. Zed can <recast>Recast</recast> this Ability to switch positions with this <keywordMajor>Shadow</keywordMajor>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Mark Detonation Damage","Cooldown"],effect:["{{ rdamageamp*100.000000 }}% -> {{ rdamageampnl*100.000000 }}%","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:3,cooldown:[120,100,80],cooldownBurn:"120/100/80",cost:[0,0,0],costBurn:"0",datavalues:{},effect:[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:"No Cost",maxammo:"-1",range:[625,625,625],rangeBurn:"625",image:{full:"ZedR.png",sprite:"spell16.png",group:"spell",x:240,y:96,w:48,h:48},resource:"No Cost"}],passive:{name:"Contempt for the Weak",description:"Zed's basic attacks against low health targets deals bonus Magic Damage. This effect can only occur once every few seconds against the same enemy champion.",image:{full:"ZedP.png",sprite:"passive5.png",group:"passive",x:48,y:48,w:48,h:48}},recommended:[]}},t={type:e,format:a,version:o,data:s};export{s as data,t as default,a as format,e as type,o as version};
