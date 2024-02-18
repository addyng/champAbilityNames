const e="champion",a="standAloneComplex",t="14.3.1",s={Twitch:{id:"Twitch",key:"29",name:"Twitch",title:"the Plague Rat",image:{full:"Twitch.png",sprite:"champion4.png",group:"champion",x:432,y:48,w:48,h:48},skins:[{id:"29000",num:0,name:"default",chromas:!1},{id:"29001",num:1,name:"Kingpin Twitch",chromas:!1},{id:"29002",num:2,name:"Whistler Village Twitch",chromas:!1},{id:"29003",num:3,name:"Medieval Twitch",chromas:!0},{id:"29004",num:4,name:"Crime City Twitch",chromas:!1},{id:"29005",num:5,name:"Vandal Twitch",chromas:!1},{id:"29006",num:6,name:"Pickpocket Twitch",chromas:!1},{id:"29007",num:7,name:"SSW Twitch",chromas:!1},{id:"29008",num:8,name:"Omega Squad Twitch",chromas:!0},{id:"29012",num:12,name:"Ice King Twitch",chromas:!0},{id:"29027",num:27,name:"Twitch Shadowfoot",chromas:!1},{id:"29036",num:36,name:"Dragonslayer Twitch",chromas:!1},{id:"29045",num:45,name:"High Noon Twitch",chromas:!1}],lore:"A Zaunite plague rat by birth, but a connoisseur of filth by passion, Twitch is not afraid to get his paws dirty. Aiming a chem-powered crossbow at the gilded heart of Piltover, he has vowed to show those in the city above just how filthy they really are. Always a sneaky sneak, when he's not rooting around in the Sump, he's digging deep into other people's garbage for discarded treasures… and perhaps a moldy sandwich.",blurb:"A Zaunite plague rat by birth, but a connoisseur of filth by passion, Twitch is not afraid to get his paws dirty. Aiming a chem-powered crossbow at the gilded heart of Piltover, he has vowed to show those in the city above just how filthy they really...",allytips:["Twitch's Attack Speed is among the highest in the game; try purchasing items with on-hit effects such as Black Cleaver or Wit's End.","Contaminate has a large range; apply as many stacks of Deadly Venom as possible before using it.","You can catch up to an enemy out of attack range with Venom Cask."],enemytips:["Twitch is fragile. Work with teammates to focus on him when you're able to catch him out of Camouflage.","Spell Shields won't block the damage from Deadly Venom, but they will block the effects Twitch can trigger with it.","If you suspect Twitch has left the lane, let your teammates know that Twitch is ''MIA.''"],tags:["Marksman","Assassin"],partype:"Mana",info:{attack:9,defense:2,magic:3,difficulty:6},stats:{hp:682,hpperlevel:100,mp:300,mpperlevel:40,movespeed:330,armor:27,armorperlevel:4.2,spellblock:30,spellblockperlevel:1.3,attackrange:550,hpregen:3.75,hpregenperlevel:.6,mpregen:7.25,mpregenperlevel:.7,crit:0,critperlevel:0,attackdamage:59,attackdamageperlevel:3.1,attackspeedperlevel:3.38,attackspeed:.679},spells:[{id:"TwitchHideInShadows",name:"Ambush",description:"Twitch becomes Camouflaged for a short duration and gains Move Speed. When leaving Camouflage, Twitch gains Attack Speed for a short duration.<br><br>When an enemy champion with Deadly Venom dies, Ambush's cooldown is reset.",tooltip:"Twitch <keywordStealth>Camouflages</keywordStealth> and gains <speed>{{ e3 }}% Move Speed</speed> for {{ e2 }} seconds. The Move Speed increases to {{ e3 }}% while near an enemy champion that can't see him. After exiting <keywordStealth>Camouflage</keywordStealth>, Twitch gains <attackSpeed>{{ e1 }}% Attack Speed</attackSpeed> for {{ e6 }} seconds.<br /><br />When an enemy champion dies while afflicted with <keywordMajor>Venom</keywordMajor>, this Ability's Cooldown is refreshed.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Camouflage Duration","Attack Speed"],effect:["{{ e2 }} -> {{ e2NL }}","{{ e1 }}% -> {{ e1NL }}%"]},maxrank:5,cooldown:[16,16,16,16,16],cooldownBurn:"16",cost:[40,40,40,40,40],costBurn:"40",datavalues:{},effect:[null,[40,45,50,55,60],[10,11,12,13,14],[30,30,30,30,30],[1,1,1,1,1],[1,1,1,1,1],[5,5,5,5,5],[3,3,3,3,3],[500,500,500,500,500],[1e3,1e3,1e3,1e3,1e3],[30,30,30,30,30]],effectBurn:[null,"40/45/50/55/60","10/11/12/13/14","30","1","1","5","3","500","1000","30"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[20,20,20,20,20],rangeBurn:"20",image:{full:"TwitchHideInShadows.png",sprite:"spell14.png",group:"spell",x:192,y:48,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"TwitchVenomCask",name:"Venom Cask",description:"Twitch hurls a cask of venom that explodes in an area, slowing targets and applying deadly venom to the target.",tooltip:"Twitch hurls a cask that adds a stack of <spellName>Deadly Venom</spellName> to all enemies struck and leaves behind a toxic cloud that persists for {{ duration }} seconds.<br /><br />Enemies that remain within the cloud are <status>Slowed</status> by {{ totalslowamount }}% and receive an additional stack of <spellName>Deadly Venom</spellName> each second.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Move Speed Slow","Cooldown"],effect:["{{ baseslowamount }}% -> {{ baseslowamountNL }}%","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:5,cooldown:[13,12,11,10,9],cooldownBurn:"13/12/11/10/9",cost:[70,70,70,70,70],costBurn:"70",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[950,950,950,950,950],rangeBurn:"950",image:{full:"TwitchVenomCask.png",sprite:"spell14.png",group:"spell",x:240,y:48,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"TwitchExpunge",name:"Contaminate",description:"Twitch wreaks further havoc on poisoned enemies with a blast of his vile diseases.",tooltip:"Deals <physicalDamage>{{ basedamage }} physical damage</physicalDamage> to all nearby enemies affected by <spellName>Deadly Venom</spellName>, plus an additional <physicalDamage>{{ physicaldamageperstack }} physical damage</physicalDamage> and <magicDamage>{{ magicdamageperstack }} magical damage</magicDamage> per stack of <spellName>Deadly Venom</spellName>.<br /><br />Max Damage: <physicalDamage>{{ maxphysicaldamage }} physical damage</physicalDamage> and <magicDamage>{{ maxmagicdamage }} magical damage</magicDamage>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Damage per Stack","@AbilityResourceName@ Cost"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ basephysicaldamageperstack }} -> {{ basephysicaldamageperstackNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[12,11,10,9,8],cooldownBurn:"12/11/10/9/8",cost:[50,60,70,80,90],costBurn:"50/60/70/80/90",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[1200,1200,1200,1200,1200],rangeBurn:"1200",image:{full:"TwitchExpunge.png",sprite:"spell14.png",group:"spell",x:288,y:48,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"TwitchFullAutomatic",name:"Spray and Pray",description:"Twitch unleashes the full power of his crossbow, shooting bolts over a great distance that pierce all enemies caught in their path.",tooltip:"Twitch unleashes his crossbow, gaining {{ bonusrange }} Attack Range and <scaleAD>{{ bonusad }} Attack Damage</scaleAD>, and causing his Attacks to become piercing bolts for {{ duration }} seconds. These bolts hit all enemies they pass through, but deal {{ falloffdamage*100 }}% less damage to subsequent targets, down to a minimum of {{ minimumfalloffdamage*100 }}% damage.<br />{{ spellmodifierdescriptionappend }}",leveltip:{label:["Attack Damage"],effect:["{{ bonusad }} -> {{ bonusadNL }}"]},maxrank:3,cooldown:[90,90,90],cooldownBurn:"90",cost:[100,100,100],costBurn:"100",datavalues:{},effect:[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[1200,1200,1200],rangeBurn:"1200",image:{full:"TwitchFullAutomatic.png",sprite:"spell14.png",group:"spell",x:336,y:48,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"}],passive:{name:"Deadly Venom",description:"Twitch's basic attacks infect the target, dealing true damage each second.",image:{full:"Twitch_Passive.png",sprite:"passive4.png",group:"passive",x:432,y:48,w:48,h:48}},recommended:[]}},o={type:e,format:a,version:t,data:s};export{s as data,o as default,a as format,e as type,t as version};
