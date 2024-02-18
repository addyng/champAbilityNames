const a="champion",e="standAloneComplex",o="14.3.1",s={Maokai:{id:"Maokai",key:"57",name:"Maokai",title:"the Twisted Treant",image:{full:"Maokai.png",sprite:"champion2.png",group:"champion",x:336,y:48,w:48,h:48},skins:[{id:"57000",num:0,name:"default",chromas:!1},{id:"57001",num:1,name:"Charred Maokai",chromas:!1},{id:"57002",num:2,name:"Totemic Maokai",chromas:!1},{id:"57003",num:3,name:"Festive Maokai",chromas:!1},{id:"57004",num:4,name:"Haunted Maokai",chromas:!1},{id:"57005",num:5,name:"Goalkeeper Maokai",chromas:!1},{id:"57006",num:6,name:"Meowkai",chromas:!0},{id:"57007",num:7,name:"Victorious Maokai",chromas:!1},{id:"57016",num:16,name:"Worldbreaker Maokai",chromas:!0},{id:"57024",num:24,name:"Astronaut Maokai",chromas:!0},{id:"57033",num:33,name:"DRX Maokai",chromas:!0}],lore:"Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical cataclysm destroyed his home, surviving undeath only through the Waters of Life infused within his heartwood. Once a peaceful nature spirit, Maokai now furiously battles to banish the scourge of unlife from the Shadow Isles and restore his home to its former beauty.",blurb:"Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical cataclysm destroyed his home, surviving undeath only through the Waters of Life infused within his...",allytips:["Saplings can be tossed into brush for empowered effect - but don't stack well.","Try looking for flanks or other situations where Nature's Grasp is unavoidable or takes enemies by surprise.","Maokai's passive makes him extremely durable against focus fire from spells - so long as he can still basic attack something."],enemytips:["Saplings will chase the first enemy that gets too close, but detonate after a few seconds or if they collide with other enemies. Be especially careful around brush sapling, as they are much more dangerous.","The cooldown on Maokai's self healing is heavily gated on how many time you hit him with spells. Careful about wasting abilities on him.","Maokai will avoid taking damage while he's using Twisted Advance, so don't waste your spells."],tags:["Tank","Mage"],partype:"Mana",info:{attack:3,defense:8,magic:6,difficulty:3},stats:{hp:635,hpperlevel:109,mp:375,mpperlevel:43,movespeed:335,armor:39,armorperlevel:5.2,spellblock:32,spellblockperlevel:2.05,attackrange:125,hpregen:5,hpregenperlevel:.75,mpregen:6,mpregenperlevel:.6,crit:0,critperlevel:0,attackdamage:64,attackdamageperlevel:3.3,attackspeedperlevel:2.125,attackspeed:.8},spells:[{id:"MaokaiQ",name:"Bramble Smash",description:"Maokai knocks back nearby enemies with a shockwave, dealing magic damage and slowing them.",tooltip:"Maokai smashes his fist into the ground, dealing <magicDamage>{{ totaldamage }} plus {{ basepercenthealth*100 }}% max Health magic damage</magicDamage> and briefly <status>Slowing</status>. Nearby enemies are also <status>Knocked Back</status>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Max Health %","Monster Damage","Cooldown"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ basepercenthealth*100.000000 }}% -> {{ basepercenthealthnl*100.000000 }}%","{{ bonusmonsterdamage }} -> {{ bonusmonsterdamageNL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:5,cooldown:[7,6.5,6,5.5,5],cooldownBurn:"7/6.5/6/5.5/5",cost:[40,40,40,40,40],costBurn:"40",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[600,600,600,600,600],rangeBurn:"600",image:{full:"MaokaiQ.png",sprite:"spell8.png",group:"spell",x:288,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"MaokaiW",name:"Twisted Advance",description:"Maokai contorts into a mass of moving roots, becoming untargetable and dashing to the target. Upon arrival, he roots the target.",tooltip:"Maokai transforms into a moving mass of roots, becoming Untargetable and dashing to an enemy. Upon arrival, he <status>Roots</status> the enemy for {{ e2 }} second(s) and deals <magicDamage>{{ totaldamage }} magic damage</magicDamage>. {{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Root Duration","Cooldown"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ e2 }} -> {{ e2NL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:5,cooldown:[13,12,11,10,9],cooldownBurn:"13/12/11/10/9",cost:[60,60,60,60,60],costBurn:"60",datavalues:{},effect:[null,[60,85,110,135,160],[1,1.1,1.2,1.3,1.4],[0,0,0,0,0],[0,0,0,0,0],[1300,1300,1300,1300,1300],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"60/85/110/135/160","1/1.1/1.2/1.3/1.4","0","0","1300","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[525,525,525,525,525],rangeBurn:"525",image:{full:"MaokaiW.png",sprite:"spell8.png",group:"spell",x:336,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"MaokaiE",name:"Sapling Toss",description:"Maokai flings a sapling to the target area to stand guard. More effective in brush.",tooltip:"Maokai flings a sapling, which stands watch for {{ saplingduration }} seconds. Saplings chase nearby enemies, detonating on arrival to deal <magicDamage>{{ totaldamage }} magic damage</magicDamage> and <status>Slow</status> surrounding enemies by {{ slowamount*100 }}% for {{ slowduration }} seconds. <keywordMajor>Sap Magic's</keywordMajor> Cooldown is reduced by an additional 4 seconds if the sapling hits an enemy champion or epic monster.<br /><br />If placed in brush, Saplings instead last for {{ empoweredsaplingduration }} seconds and cause a larger explosion, dealing <magicDamage>{{ totalempowereddamage }} magic damage</magicDamage> over {{ empowereddotduration }} seconds and <status>Slowing</status> enemies by {{ empoweredslowamount }}.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Empowered Damage","Cooldown","@AbilityResourceName@ Cost"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ empoweredbasedamage }} -> {{ empoweredbasedamageNL }}","{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[16,15,14,13,12],cooldownBurn:"16/15/14/13/12",cost:[60,65,70,75,80],costBurn:"60/65/70/75/80",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[1100,1100,1100,1100,1100],rangeBurn:"1100",image:{full:"MaokaiE.png",sprite:"spell8.png",group:"spell",x:384,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"MaokaiR",name:"Nature's Grasp",description:"Maokai summons a colossal wall of brambles and thorns that slowly advances forwards, damaging and rooting any enemies in the path.",tooltip:"Maokai summons a colossal wave of brambles and thorns, <status>Rooting</status> enemies for {{ minrootduration }} to {{ maxrootduration }} seconds, increasing with distance travelled, and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. Hitting a champion gives Maokai <speed>{{ movehaste*100 }}% Move Speed</speed>, decaying over {{ hasteduration }} seconds. {{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Move Speed","Cooldown"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ movehaste*100.000000 }}% -> {{ movehastenl*100.000000 }}%","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:3,cooldown:[130,110,90],cooldownBurn:"130/110/90",cost:[100,100,100],costBurn:"100",datavalues:{},effect:[null,[0,0,0],[.6,.6,.6],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"0","0.6","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[3e3,3e3,3e3],rangeBurn:"3000",image:{full:"MaokaiR.png",sprite:"spell8.png",group:"spell",x:432,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"}],passive:{name:"Sap Magic",description:"Maokai's basic attack also heals him and deals additional damage on a moderate cooldown. Each time Maokai casts a spell or is struck by an enemy's spell, this cooldown is reduced.",image:{full:"Maokai_Passive.png",sprite:"passive2.png",group:"passive",x:336,y:48,w:48,h:48}},recommended:[]}},t={type:a,format:e,version:o,data:s};export{s as data,t as default,e as format,a as type,o as version};
