const e="champion",a="standAloneComplex",n="14.3.1",o={Kayn:{id:"Kayn",key:"141",name:"Kayn",title:"the Shadow Reaper",image:{full:"Kayn.png",sprite:"champion2.png",group:"champion",x:0,y:0,w:48,h:48},skins:[{id:"141000",num:0,name:"default",chromas:!1},{id:"141001",num:1,name:"Soulhunter Kayn",chromas:!1},{id:"141002",num:2,name:"Odyssey Kayn",chromas:!0},{id:"141008",num:8,name:"Nightbringer Kayn",chromas:!0},{id:"141009",num:9,name:"Prestige Nightbringer Kayn",chromas:!1},{id:"141015",num:15,name:"Snow Moon Kayn",chromas:!0},{id:"141020",num:20,name:"HEARTSTEEL Kayn",chromas:!0}],lore:"A peerless practitioner of lethal shadow magic, Shieda Kayn battles to achieve his true destiny—to one day lead the Order of Shadow into a new era of Ionian supremacy. He wields the sentient darkin weapon Rhaast, undeterred by its creeping corruption of his body and mind. There are only two possible outcomes: either Kayn bends the weapon to his will... or the malevolent blade consumes him completely, paving the way for the destruction of all Runeterra.",blurb:"A peerless practitioner of lethal shadow magic, Shieda Kayn battles to achieve his true destiny—to one day lead the Order of Shadow into a new era of Ionian supremacy. He wields the sentient darkin weapon Rhaast, undeterred by its creeping corruption of...",allytips:["Look at the line-up of both your team and the enemy's team when picking your form.","Remember that nearby enemies can see which wall you're in."],enemytips:["Umbral Trespass requires Kayn to damage a target first. Try to dodge Blade's Reach to deny him a long range cast of Umbral Trespass.","When Kayn is in terrain near you, you will get a visual warning on the edge of the terrain he's in.","Damage Kayn while he's in Shadow Step to shorten its duration, or apply hard crowd control (stun, charm, knockup, etc) to end Shadow Step immediately."],tags:["Fighter","Assassin"],partype:"Mana",info:{attack:10,defense:6,magic:1,difficulty:8},stats:{hp:655,hpperlevel:109,mp:410,mpperlevel:50,movespeed:340,armor:38,armorperlevel:4.5,spellblock:32,spellblockperlevel:2.05,attackrange:175,hpregen:8,hpregenperlevel:.75,mpregen:11.5,mpregenperlevel:.95,crit:0,critperlevel:0,attackdamage:68,attackdamageperlevel:3.3,attackspeedperlevel:2.7,attackspeed:.669},spells:[{id:"KaynQ",name:"Reaping Slash",description:"Kayn dashes, then slashes. Both deal damage.",tooltip:"Kayn dashes then spins his scythe, dealing <physicalDamage>{{ totaldamage }} physical damage</physicalDamage> to enemies he passes through, then deals the damage again to nearby enemies.<br /><br /><keywordMajor>Darkin Slayer:</keywordMajor> Instead deal <physicalDamage>{{ darkinflatdamage }} plus {{ darkinpercentdamage }} max Health physical damage</physicalDamage>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Cooldown","Base Damage"],effect:["{{ cooldown }} -> {{ cooldownNL }}","{{ e1 }} -> {{ e1NL }}"]},maxrank:5,cooldown:[7,6.5,6,5.5,5],cooldownBurn:"7/6.5/6/5.5/5",cost:[50,50,50,50,50],costBurn:"50",datavalues:{},effect:[null,[75,95,115,135,155],[.65,.65,.65,.65,.65],[5,5,5,5,5],[3.5,3.5,3.5,3.5,3.5],[200,250,300,350,400],[40,40,40,40,40],[300,300,300,300,300],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"75/95/115/135/155","0.65","5","3.5","200/250/300/350/400","40","300","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[350,350,350,350,350],rangeBurn:"350",image:{full:"KaynQ.png",sprite:"spell6.png",group:"spell",x:384,y:48,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"KaynW",name:"Blade's Reach",description:"Kayn damages and slows targets in a line.",tooltip:"Kayn swipes his scythe upward, dealing <physicalDamage>{{ totaldamage }} physical damage</physicalDamage> and <status>Slowing</status> enemies hit by {{ e3 }}%, decaying over {{ e5 }} seconds.<br /><br /><keywordMajor>Shadow Assassin:</keywordMajor> Kayn can move while using this Ability and increases its range.<br /><br /><keywordMajor>Darkin Slayer:</keywordMajor> Additionally <status>Knocks Up</status> enemies hit for {{ e2 }} second.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Cooldown","@AbilityResourceName@ Cost"],effect:["{{ e1 }} -> {{ e1NL }}","{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[13,12,11,10,9],cooldownBurn:"13/12/11/10/9",cost:[60,65,70,75,80],costBurn:"60/65/70/75/80",datavalues:{},effect:[null,[85,130,175,220,265],[1,1,1,1,1],[90,90,90,90,90],[160,160,160,160,160],[1.5,1.5,1.5,1.5,1.5],[900,900,900,900,900],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"85/130/175/220/265","1","90","160","1.5","900","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[700,700,700,700,700],rangeBurn:"700",image:{full:"KaynW.png",sprite:"spell6.png",group:"spell",x:432,y:48,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"KaynE",name:"Shadow Step",description:"Kayn can walk through terrain.",tooltip:"Kayn gains <speed>{{ e1 }}% Move Speed</speed>, becomes Ghosted, and can move through Terrain for {{ e2 }} seconds. When he first enters terrain, he restores <healing>{{ totalhealing }} Health</healing>.<br /><br />Being <status>Immobilized</status> and spending more than {{ e3 }} consecutive seconds outside of Terrain ends this Ability early.<br /><br /><keywordMajor>Shadow Assassin:</keywordMajor> Gain <speed>{{ e5 }}% Move Speed</speed>, <status>Slow</status> immunity, and reduce the Cooldown to {{ assassincdreduction }} seconds.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Cooldown","Duration","Healing"],effect:["{{ f15 }} -> {{ f16 }}","{{ e2 }} -> {{ e2NL }}","{{ e7 }} -> {{ e7NL }}"]},maxrank:5,cooldown:[21,19,17,15,13],cooldownBurn:"21/19/17/15/13",cost:[90,90,90,90,90],costBurn:"90",datavalues:{},effect:[null,[40,40,40,40,40],[7,7.5,8,8.5,9],[1.5,1.5,1.5,1.5,1.5],[1250,1250,1250,1250,1250],[70,70,70,70,70],[1.5,1.5,1.5,1.5,1.5],[90,100,110,120,130],[.45,.45,.45,.45,.45],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"40","7/7.5/8/8.5/9","1.5","1250","70","1.5","90/100/110/120/130","0.45","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[400,400,400,400,400],rangeBurn:"400",image:{full:"KaynE.png",sprite:"spell6.png",group:"spell",x:0,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"KaynR",name:"Umbral Trespass",description:"Kayn hides in an enemy's body, dealing massive damage when he bursts out.",tooltip:"<spellPassive>Passive:</spellPassive> Champions damaged by Kayn are marked for 3.15 seconds.<br /><br />Kayn infests a marked enemy, becoming Untargetable. After {{ infestduration }} seconds or after <recast>Recasting</recast>, Kayn bursts out, dealing <physicalDamage>{{ damage }} physical damage</physicalDamage> to the enemy.<br /><br /><keywordMajor>Shadow Assassin:</keywordMajor> Increases this Ability's range, the distance Kayn exits, and refreshes <spellName>The Darkin Scythe's</spellName> Cooldown on exit.<br /><br /><keywordMajor>Darkin Slayer:</keywordMajor> Instead deals <physicalDamage>{{ slayerdamage }} max Health physical damage</physicalDamage> and restores <healing>{{ healvalue }} Health</healing> ({{ slayerhealpercent*100 }}% damage amount).{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","Cooldown"],effect:["{{ e1 }} -> {{ e1NL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:3,cooldown:[120,100,80],cooldownBurn:"120/100/80",cost:[100,100,100],costBurn:"100",datavalues:{},effect:[null,[150,250,350],[.5,.5,.5],[0,0,0],[2.5,2.5,2.5],[300,300,300],[15,15,15],[13,13,13],[70,70,70],[750,750,750],[550,550,550]],effectBurn:[null,"150/250/350","0.5","0","2.5","300","15","13","70","750","550"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[550,550,550],rangeBurn:"550",image:{full:"KaynR.png",sprite:"spell6.png",group:"spell",x:48,y:96,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"}],passive:{name:"The Darkin Scythe",description:"Kayn wields an ancient weapon and fights Rhaast, the darkin within it, for control. Either the <font color='#fe5c50'>Darkin</font> will triumph, or Kayn will master Rhaast and become the <font color='#8484fb'>Shadow Assassin</font>.<br><br><font color='#fe5c50'>Darkin:</font> Heal for a percentage of spell damage dealt to champions.<br><br><font color='#8484fb'>Shadow Assassin:</font> For the first few seconds in combat with enemy champions, deal bonus damage.",image:{full:"Kayn_Passive_Primary.png",sprite:"passive2.png",group:"passive",x:0,y:0,w:48,h:48}},recommended:[]}},s={type:e,format:a,version:n,data:o};export{o as data,s as default,a as format,e as type,n as version};
