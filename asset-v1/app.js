var app=new function(){this.name="Starfield",this.version="1",this.date="2024",this.folder="asset-v1/",this.looptime=8e3,this.bpm=120,this.totalframe=384,this.nbpolo=7,this.nbloopbonus=5,this.bonusloopA=!1,this.bonusendloopA=!1,this.recmaxloop=34,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop, this.spritepolo="polo-sprite.png", this.spritepicto="game-picto.png",this.colBck="#000000",this.col0="#ffffff",this.col1="#ff00ff",this.col2="#8c008c",this.col3="#8c008c",this.col4="#ffffff",this.animearray=[{name:"1_josh",color:"ff00ff",uniqsnd:!0},{name:"2_clerk",color:"ff00ff",uniqsnd:!0},{name:"3_james",color:"ff00ff",uniqsnd:!0},{name:"4_tyrone",color:"ff00ff",uniqsnd:!0},{name:"5_jamal",color:"ff00ff",uniqsnd:!0},{name:"6_joe",color:"ff00ff",uniqsnd:!0},{name:"7_slater",color:"ff00ff",uniqsnd:!0}],this.bonusarray=[],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};