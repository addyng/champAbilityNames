const e="champion",a="standAloneComplex",t="14.3.1",o={Alistar:{id:"Alistar",key:"12",name:"Alistar",title:"the Minotaur",image:{full:"Alistar.png",sprite:"champion0.png",group:"champion",x:192,y:0,w:48,h:48},skins:[{id:"12000",num:0,name:"default",chromas:!1},{id:"12001",num:1,name:"Black Alistar",chromas:!1},{id:"12002",num:2,name:"Golden Alistar",chromas:!1},{id:"12003",num:3,name:"Matador Alistar",chromas:!1},{id:"12004",num:4,name:"Longhorn Alistar",chromas:!1},{id:"12005",num:5,name:"Unchained Alistar",chromas:!1},{id:"12006",num:6,name:"Infernal Alistar",chromas:!1},{id:"12007",num:7,name:"Sweeper Alistar",chromas:!1},{id:"12008",num:8,name:"Marauder Alistar",chromas:!1},{id:"12009",num:9,name:"SKT T1 Alistar",chromas:!1},{id:"12010",num:10,name:"Moo Cow Alistar",chromas:!0},{id:"12019",num:19,name:"Hextech Alistar",chromas:!1},{id:"12020",num:20,name:"Conqueror Alistar",chromas:!0},{id:"12022",num:22,name:"Blackfrost Alistar",chromas:!0},{id:"12029",num:29,name:"Lunar Beast Alistar",chromas:!0}],lore:"Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.",blurb:"Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly...",allytips:["Using Pulverize can allow you to establish better positioning for Headbutt.","Move Speed is very important on Alistar. Consider which boots to buy carefully.","Using Flash can allow you catch your target off guard to knock them back into your allies with Pulverize and Headbutt."],enemytips:["Alistar is very disruptive but very tough - try to target more fragile damage dealers.","Watch out for the Pulverize-Headbutt combo when around turrets.","When Alistar uses his ultimate, it's often better to move back and wait until the effect wears off before attacking him."],tags:["Tank","Support"],partype:"Mana",info:{attack:6,defense:9,magic:5,difficulty:7},stats:{hp:685,hpperlevel:120,mp:350,mpperlevel:40,movespeed:330,armor:47,armorperlevel:4.7,spellblock:32,spellblockperlevel:2.05,attackrange:125,hpregen:8.5,hpregenperlevel:.85,mpregen:8.5,mpregenperlevel:.8,crit:0,critperlevel:0,attackdamage:62,attackdamageperlevel:3.75,attackspeedperlevel:2.125,attackspeed:.625},spells:[{id:"Pulverize",name:"Pulverize",description:"Alistar smashes the ground, dealing damage to nearby enemies and tossing them into the air.",tooltip:"Alistar smashes the ground, <status>Knocking Up</status> enemies for {{ knockupduration }} second and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Cooldown","@AbilityResourceName@ Cost","Damage"],effect:["{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}","{{ basedamage }} -> {{ basedamageNL }}"]},maxrank:5,cooldown:[14,13,12,11,10],cooldownBurn:"14/13/12/11/10",cost:[50,55,60,65,70],costBurn:"50/55/60/65/70",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[365,365,365,365,365],rangeBurn:"365",image:{full:"Pulverize.png",sprite:"spell0.png",group:"spell",x:192,y:144,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"Headbutt",name:"Headbutt",description:"Alistar rams a target with his head, dealing damage and knocking the target back.",tooltip:"Alistar rams into an enemy, <status>Knocking</status> them <status>Back</status> and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Cooldown","@AbilityResourceName@ Cost","Damage"],effect:["{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}","{{ damage }} -> {{ damageNL }}"]},maxrank:5,cooldown:[14,13,12,11,10],cooldownBurn:"14/13/12/11/10",cost:[50,55,60,65,70],costBurn:"50/55/60/65/70",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[700,700,700,700,700],[.75,.75,.75,.75,.75],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","700","0.75","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[650,650,650,650,650],rangeBurn:"650",image:{full:"Headbutt.png",sprite:"spell0.png",group:"spell",x:240,y:144,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"AlistarE",name:"Trample",description:"Alistar tramples nearby enemy units, ignoring unit collision and gaining stacks if he damages an enemy champion. At full stacks Alistar's next basic attack against an enemy champion deals additional magic damage and stuns them.",tooltip:"Alistar begins trampling the ground, becoming Ghosted and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> over {{ e3 }} seconds to nearby enemies. Each pulse that damages a champion grants a stack.<br /><br />At {{ e5 }} stacks, Alistar's next Attack against champions <status>Stuns</status> for {{ e6 }} second and deals an additional <magicDamage>{{ attackbonusdamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Cooldown","@AbilityResourceName@ Cost","Damage"],effect:["{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}","{{ e1 }} -> {{ e1NL }}"]},maxrank:5,cooldown:[12,11.5,11,10.5,10],cooldownBurn:"12/11.5/11/10.5/10",cost:[50,55,60,65,70],costBurn:"50/55/60/65/70",datavalues:{},effect:[null,[80,110,140,170,200],[50,50,50,50,50],[5,5,5,5,5],[350,350,350,350,350],[5,5,5,5,5],[1,1,1,1,1],[5,5,5,5,5],[20,20,20,20,20],[15,15,15,15,15],[0,0,0,0,0]],effectBurn:[null,"80/110/140/170/200","50","5","350","5","1","5","20","15","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[350,350,350,350,350],rangeBurn:"350",image:{full:"AlistarE.png",sprite:"spell0.png",group:"spell",x:288,y:144,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"FerociousHowl",name:"Unbreakable Will",description:"Alistar lets out a wild roar, removing all crowd control effects on himself, and reducing incoming physical and magical damage for the duration.",tooltip:"Alistar immediately cleanses all <status>Disabling</status> effects and takes {{ rdamagereduction }}% reduced damage for {{ rduration }} seconds.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Cooldown","Damage Reduction"],effect:["{{ cooldown }} -> {{ cooldownNL }}","{{ rdamagereduction }}% -> {{ rdamagereductionNL }}%"]},maxrank:3,cooldown:[120,100,80],cooldownBurn:"120/100/80",cost:[100,100,100],costBurn:"100",datavalues:{},effect:[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[1,1,1],rangeBurn:"1",image:{full:"FerociousHowl.png",sprite:"spell0.png",group:"spell",x:336,y:144,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"}],passive:{name:"Triumphant Roar",description:"Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself all nearby allied champions.",image:{full:"Alistar_E.png",sprite:"passive0.png",group:"passive",x:192,y:0,w:48,h:48}},recommended:[]}},s={type:e,format:a,version:t,data:o};export{o as data,s as default,a as format,e as type,t as version};
