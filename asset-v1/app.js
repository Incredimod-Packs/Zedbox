/** Generated by sealldevelopers app.js generator **/
var app=new function(){this.name="Monochrome",
this.version="1",
this.date="2023",
this.folder="asset-v1/",
this.looptime=5710,
this.bpm=168,
this.totalframe=274,
this.nbpolo=7,
this.nbloopbonus=6,
this.bonusloopA=!0,
this.bonusendloopA=!0,
this.recmaxloop=68,
this.recminloop=4,
this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,
this.spritepolo="polo-sprite.png",
this.spritepicto="game-picto.png",
this.colBck="#000000",this.col0="#ffffff",
this.col1="#000000",this.col2="#808080",
this.col3="#808080",this.col4="#808080",
this.animearray=
[{name:"1_terra",color:"808080",uniqsnd:!1},
{name:"2_dismemberment",color:"808080",uniqsnd:!1},
{name:"3_double",color:"808080",uniqsnd:!1},
{name:"4_pinhead",color:"808080",uniqsnd:!1},
{name:"5_another channel",color:"808080",uniqsnd:!1},
{name:"6_fireman",color:"808080",uniqsnd:!1},
{name:"7_observer",color:"808080",uniqsnd:!1},
{name:"8_camera",color:"808080",uniqsnd:!1},
{name:"9_alarmbot",color:"808080",uniqsnd:!0},
{name:"10_pale",color:"808080",uniqsnd:!1},
{name:"unknown",color:"808080",uniqsnd:!0},
{name:"11_radioman",color:"808080",uniqsnd:!1},
{name:"12_jeff",color:"808080",uniqsnd:!1},
{name:"13_polyline",color:"808080",uniqsnd:!1},
{name:"14_experiment 001",color:"808080",uniqsnd:!1},
{name:"15_archbishop",color:"808080",uniqsnd:!1},
{name:"16_the inhabitant",color:"808080",uniqsnd:!1},
{name:"17_operator",color:"808080",uniqsnd:!1},
{name:"18_stranger",color:"808080",uniqsnd:!0},
{name:"19_aaron",color:"808080",uniqsnd:!0},
{name:"20_genius",color:"808080",uniqsnd:!1},
{name:"21_guest",color:"808080",uniqsnd:!1}],
this.bonusarray=[],
this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};
