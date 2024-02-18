const e="champion",a="standAloneComplex",t="14.3.1",s={KSante:{id:"KSante",key:"897",name:"K'Sante",title:"the Pride of Nazumah",image:{full:"KSante.png",sprite:"champion2.png",group:"champion",x:288,y:0,w:48,h:48},skins:[{id:"897000",num:0,name:"default",chromas:!1},{id:"897001",num:1,name:"Empyrean K'Sante",chromas:!0},{id:"897002",num:2,name:"Prestige Empyrean K'Sante",chromas:!1},{id:"897008",num:8,name:"HEARTSTEEL K'Sante",chromas:!0}],lore:"Defiant and courageous, K'Sante battles colossal beasts and ruthless Ascended to protect his home of Nazumah, a coveted oasis amid the sands of Shurima. But after a falling-out with his former partner, K'Sante realizes that in order to become a warrior worthy of leading his city, he must temper his single-minded drive for success. Only then can he avoid falling prey to his own pride and find the wisdom he needs to defeat the vicious monsters threatening his people.",blurb:"Defiant and courageous, K'Sante battles colossal beasts and ruthless Ascended to protect his home of Nazumah, a coveted oasis amid the sands of Shurima. But after a falling-out with his former partner, K'Sante realizes that in order to become a warrior...",allytips:["Use Sonic Wave before Dragon's Rage so you can chase the target with Resonating Strike.","Take advantage of Flurry by weaving in basic attacks between spell casts - this maximizes damage output and minimizes Energy loss.","Self-casting Safeguard and using Iron Will are powerful tools for killing neutral monsters (in the jungle)."],enemytips:["Stay spread out to minimize the impact of Lee Sin's ultimate, Dragon's Rage.","Lee Sin has powerful tools to combat physical damage in Iron Will and Cripple but he is still vulnerable to magic damage.","Lee Sin relies heavily on following up with his abilities. Use disables to prevent him from chaining together his abilities and attacks."],tags:["Tank","Fighter"],partype:"Mana",info:{attack:8,defense:8,magic:7,difficulty:9},stats:{hp:570,hpperlevel:115,mp:290,mpperlevel:60,movespeed:330,armor:33,armorperlevel:5.2,spellblock:30,spellblockperlevel:2.1,attackrange:175,hpregen:9.5,hpregenperlevel:.85,mpregen:7,mpregenperlevel:1,crit:0,critperlevel:0,attackdamage:64,attackdamageperlevel:3.5,attackspeedperlevel:2.5,attackspeed:.625},spells:[{id:"KSanteQ",name:"Ntofo Strikes",description:"Strike a weapon forward, damaging and slowing all enemies in a short line.<br><br>On hit, grants a stack for a few seconds. At 2 stacks, this skill fires a shockwave that pulls enemies in.",tooltip:"K'Sante slams his weapon down, dealing <physicalDamage>{{ basedamage }} physical damage</physicalDamage> and briefly <status>Slowing</status> the enemies struck by {{ slowpercent*100 }}%.<br /><br />When an enemy is hit, K'Sante gains a stack of Ntofo Strikes for {{ recastwindow }} seconds. At 2 stacks, K'Sante instead fires a shockwave that <status>Stuns</status> and <status>Pulls</status> enemies for {{ stunduration }} second.<br /><br /><rules>Cooldown reduced by Bonus <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>: {{ bonusresiststooltip }} / {{ defensecapforcooldown }}.<br />Cast time reduced by Bonus <healing>Health</healing>: {{ bonushealthtooltip }} / {{ healthcapforcasttime }}.</rules><br /><br /><keywordMajor>All Out</keywordMajor>: This Ability's Cooldown and cast time are further reduced.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Damage","@AbilityResourceName@ Cost"],effect:["{{ flatdamage }} -> {{ flatdamageNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[4,4,4,4,4],cooldownBurn:"4",cost:[28,26,24,22,20],costBurn:"28/26/24/22/20",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[450,450,450,450,450],rangeBurn:"450",image:{full:"KSanteQ.png",sprite:"spell7.png",group:"spell",x:96,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"KSanteW",name:"Path Maker",description:"K'Sante charges up before dashing. K'Sante is unstoppable and takes less damage while charging. Any targets hit by the dash are knocked to the end of the dash and stunned.<br><br>",tooltip:"K'Sante raises his weapons defensively for {{ mindurationtooltip }} - {{ maxduration }}s, becoming Unstoppable and reducing incoming damage by {{ damagereductioncharlevel }}%.<br /><br />After charging, he rams forward, dealing <physicalDamage>{{ basedamagecalc }} + {{ maxhealthdamage*100 }}% max Health physical damage</physicalDamage>. K'Sante <status>Knocks Back</status> and <status>Stuns</status> enemies he rams into for {{ maxknockbackduration }} seconds.<br /><br /><keywordMajor>All Out:</keywordMajor> This Ability's Cooldown is refreshed. Damage reduction increases to {{ damagereductioncalcao }}%, it only requires {{ aomindurationtooltip }}s of charge, its dash speed increases, and its cooldown decreases. This Ability will no longer <status>Knock Back</status> or <status>Stun</status>.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Base Damage","Max Health %","Cooldown","@AbilityResourceName@ Cost"],effect:["{{ basedamage }} -> {{ basedamageNL }}","{{ maxhealthdamage*100.000000 }}% -> {{ maxhealthdamagenl*100.000000 }}%","{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}"]},maxrank:5,cooldown:[24,22,20,18,16],cooldownBurn:"24/22/20/18/16",cost:[40,45,50,55,60],costBurn:"40/45/50/55/60",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[600,600,600,600,600],rangeBurn:"600",image:{full:"KSanteW.png",sprite:"spell7.png",group:"spell",x:144,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"KSanteE",name:"Footwork",description:"K'Sante will dash to an ally and both will gain a shield. If there is no ally, K'Sante will still dash to the location at a reduced range and gain a shield.<br>",tooltip:"K'Sante dashes, gaining <shield>{{ totalshield }} Shield</shield> for {{ shieldduration }} seconds. If dashing to an ally, the distance of the dash is significantly increased and the ally is also <shield>Shielded</shield>.<br /><br /><keywordMajor>All Out</keywordMajor>: This Ability's dash speed is increased. Dashing without an ally has increased range and can go over walls.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Shield","@AbilityResourceName@ Cost","Cooldown"],effect:["{{ shieldbaseamountfast }} -> {{ shieldbaseamountfastNL }}","{{ cost }} -> {{ costNL }}","{{ cooldown }} -> {{ cooldownNL }}"]},maxrank:5,cooldown:[10.5,10,9.5,9,8.5],cooldownBurn:"10.5/10/9.5/9/8.5",cost:[45,50,55,60,65],costBurn:"45/50/55/60/65",datavalues:{},effect:[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[525,525,525,525,525],rangeBurn:"525",image:{full:"KSanteE.png",sprite:"spell7.png",group:"spell",x:192,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"},{id:"KSanteR",name:"All Out",description:"K'Sante smashes an enemy away. If the enemy hits a wall they will go through the wall taking more damage. K'Sante will appear behind the target and goes All Out by shredding his defenses but greatly increasing his damage.<br><br>",tooltip:"K'Sante shatters his ntofos, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> and <status>Knocking Back</status> an enemy champion. Enemies that hit a wall take an additional <magicDamage>{{ totaldamageslamdown }} magic damage</magicDamage>, are <status>Knocked Back</status> over the wall, and are briefly <status>Stunned</status>. K'Sante then dashes after the enemy and goes <keywordMajor>All Out</keywordMajor> for 20 seconds.<br /><br /><keywordMajor>All Out</keywordMajor> K'Sante loses <healing>{{ healthlost*100 }}% max Health</healing>, <scaleArmor>{{ defenseslost*100 }}% Bonus Armor</scaleArmor>, and <scaleMR>{{ defenseslost*100 }}% Bonus Magic Resistance</scaleMR> but gains <scaleAD>{{ alloutattackdamage }} Attack Damage</scaleAD>, <attackSpeed>{{ attackspeedincrease*100 }}% Attack Speed</attackSpeed>, heals for <healing>{{ alloutomnivamp }}%</healing> of the damage he deals to Champions, and transforms his Abilities.{{ spellmodifierdescriptionappend }}",leveltip:{label:["Cooldown","Damage","Wall Damage","Attack Damage","Attack Speed","Healing"],effect:["{{ cooldown }} -> {{ cooldownNL }}","{{ basedamage }} -> {{ basedamageNL }}","{{ slamdownstrikedamage }} -> {{ slamdownstrikedamageNL }}","{{ alloutbaseattackdamage }} -> {{ alloutbaseattackdamageNL }}","{{ attackspeedincrease*100.000000 }}% -> {{ attackspeedincreasenl*100.000000 }}%","{{ alloutbaseomnivamp }}% -> {{ alloutbaseomnivampNL }}%"]},maxrank:3,cooldown:[120,100,80],cooldownBurn:"120/100/80",cost:[100,100,100],costBurn:"100",datavalues:{},effect:[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],effectBurn:[null,"0","0","0","0","0","0","0","0","0","0"],vars:[],costType:" {{ abilityresourcename }}",maxammo:"-1",range:[250,250,250],rangeBurn:"250",image:{full:"KSanteR.png",sprite:"spell7.png",group:"spell",x:240,y:0,w:48,h:48},resource:"{{ cost }} {{ abilityresourcename }}"}],passive:{name:"Dauntless Instinct",description:"K'Sante's Abilities mark targets to take more damage on his next Attack.",image:{full:"Icons_KSante_P.png",sprite:"passive2.png",group:"passive",x:288,y:0,w:48,h:48}},recommended:[]}},n={type:e,format:a,version:t,data:s};export{s as data,n as default,a as format,e as type,t as version};
