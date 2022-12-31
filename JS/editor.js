class editor{
    constructor(layer){
        this.layer=layer
        this.groups={name:['Head','Body','Legs','Arms','Under','Kimono'],location:[12,1,5,30,17,22]}
        this.tabData=[
            {
                name:'',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Body',fold:[2,3,4],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Body/Main',fold:[],
                toggle:{type:[2],name:['Display']},
                slide:{type:[1,4,5,6],limit:[[0,1],[0,255],[0,255],[0,255]],name:['Fade','Color/Red','Color/Green','Color/Blue']}
            },{
                name:'Body/Necklace',fold:[],
                toggle:{type:[3,4],name:['Front/Display','Back/Display']},
                slide:{type:[2,3,7,8,9],limit:[[0,1],[0,1],[0,255],[0,255],[0,255]],name:['Front/Fade','Back/Fade','Color/Red','Color/Green','Color/Blue']}
            },{
                name:'Body/Attach',fold:[],
                toggle:{type:[5],name:['Button/Display']},
                slide:{type:[10,11,12,13],limit:[[0,1],[0,255],[0,255],[0,255]],name:['Button/Fade','Button/Color/Red','Button/Color/Green','Button/Color/Blue']}
            },{
                name:'Legs',fold:[6,9],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Legs/Main',fold:[7,8],
                toggle:{type:[1],name:['Display']},
                slide:{type:[36,37,38,39],limit:[[0,1],[0,255],[0,255],[0,255]],name:['Fade','Color/Red','Color/Green','Color/Blue']}
            },{
                name:'Legs/Main/Length',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[14,15,16,17],limit:[[0,30],[0,30],[0,30],[0,30]],name:['Left/Top','Left/Bottom','Right/Top','Right/Bottom']}
            },{
                name:'Legs/Main/Anim',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[22,23,24,25,26,27,28,29],limit:[[0,90],[0,90],[0,90],[0,90],[-180,180],[-180,180],[-180,180],[-180,180]],name:['Right/Angle/Top','Right/Angle/Bottom','Left/Angle/Top','Left/Angle/Bottom','Right/Spin/Top','Right/Spin/Bottom','Left/Spin/Top','Left/Spin/Bottom']}
            },{
                name:'Legs/Sandal',fold:[10,11],
                toggle:{type:[6,7,8,9],name:['Right/Top/Display','Right/Bottom/Display','Left/Top/Display','Left/Bottom/Display']},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Legs/Sandal/Length',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[18,19,20,21],limit:[[0,30],[0,30],[0,30],[0,30]],name:['Right/Top','Right/Bottom','Left/Top','Left/Bottom']}
            },{
                name:'Legs/Sandal/Anim',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[30,31,32,33,34,35],limit:[[0,1],[0,1],[0,1],[0,1],[-180,180],[-180,180]],name:['Right/Top/Fade','Right/Bottom/Fade','Left/Top/Fade','Left/Bottom/Fade','Right/Spin','Left/Spin']}
            },{
                name:'Head',fold:[13,14,15,16],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Head/Main',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[40,41,42,43],limit:[[0,1],[0,255],[0,255],[0,255]],name:['Fade','Color/Red','Color/Green','Color/Blue']}
            },{
                name:'Head/Hair',fold:[],
                toggle:{type:[10,11],name:['Front/Display','Back/Display']},
                slide:{type:[44,45,46,47,48,49],limit:[[0,255],[0,255],[0,255],[0,255],[0,255],[0,255]],name:['Front/Color/Red','Front/Color/Green','Front/Color/Blue','Back/Color/Red','Back/Color/Green','Back/Color/Blue']}
            },{
                name:'Head/Eyes',fold:[],
                toggle:{type:[12,13],name:['Right/Display','Left/Display']},
                slide:{type:[50,52,53,54,55],limit:[[-100,0],[0,1],[0,1],[0,1],[0,1]],name:['Level','Right/Anim','Left/Anim','Right/Fade','Left/Fade']}
            },{
                name:'Head/Attach',fold:[],
                toggle:{type:[14],name:['Flower/Display']},
                slide:{type:[51,56],limit:[[-100,0],[0,1]],name:['Flower/Level','Flower/Size']}
            },{
                name:'Under',fold:[18,19,20,21],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Under/Color',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[57,58,59,60,61,62,63,64,65],limit:[[0,255],[0,255],[0,255],[0,255],[0,255],[0,255],[0,255],[0,255],[0,255]],name:['Main/Color/Red','Main/Color/Green','Main/Color/Blue','Fringe/Color/Red','Fringe/Color/Green','Fringe/Color/Blue','Bow/Color/Red','Bow/Color/Green','Bow/Color/Blue']}
            },{
                name:'Under/Top',fold:[],
                toggle:{type:[15],name:['Display']},
                slide:{type:[66,69,70],limit:[[-100,0],[0,2],[0,2]],name:['Level','Width','Height']}
            },{
                name:'Under/Bottom',fold:[],
                toggle:{type:[16],name:['Display']},
                slide:{type:[67,71,72],limit:[[-100,0],[0,2],[0,2]],name:['Level','Width','Height']}
            },{
                name:'Under/Bow',fold:[],
                toggle:{type:[17],name:['Display']},
                slide:{type:[68,73,74,133,134],limit:[[-10,10],[0,2],[0,2],[0,2],[0,2]],name:['Level','Position/Width','Position/Height','Size/Width','Size/Height']}
            },{
                name:'Kimono',fold:[23,24,25,26,27,28],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Kimono/Main',fold:[29],
                toggle:{type:[18,19],name:['Front/Display','Back/Display']},
                slide:{type:[75,76,77,78,79],limit:[[-100,0],[0,2],[0,2],[0,2],[0,2]],name:['Level','Front/Width','Front/Height','Back/Width','Back/Height']}
            },{
                name:'Kimono/Outside',fold:[],
                toggle:{type:[20,21],name:['Front/Display','Back/Display']},
                slide:{type:[80,81,82,83,84,110,111,112,113,114,115],limit:[[-100,0],[0,2],[0,2],[0,2],[0,2],[0,255],[0,255],[0,255],[0,255],[0,255],[0,255]],name:['Level','Front/Width','Front/Height','Back/Width','Back/Height','Front/Color/Red','Front/Color/Green','Front/Color/Blue','Back/Color/Red','Back/Color/Green','Back/Color/Blue']}
            },{
                name:'Kimono/Fringe',fold:[],
                toggle:{type:[22,23],name:['Front/Display','Back/Display']},
                slide:{type:[85,86,87,88,89,116,117,118,119,120,121],limit:[[-100,0],[0,2],[0,2],[0,2],[0,2],[0,255],[0,255],[0,255],[0,255],[0,255],[0,255]],name:['Level','Front/Width','Front/Height','Back/Width','Back/Height','Front/Color/Red','Front/Color/Green','Front/Color/Blue','Back/Color/Red','Back/Color/Green','Back/Color/Blue']}
            },{
                name:'Kimono/Decoration',fold:[],
                toggle:{type:[24,25],name:['Large/Display','Small/Display']},
                slide:{type:[90,91,92,93,94,95,96,97,122,123,124],limit:[[0,2],[0,2],[0,2],[0,2],[0,2],[0,2],[0,2],[0,2],[0,255],[0,255],[0,255]],name:['Position/Large/Width','Position/Large/Height','Position/Small/Width','Position/Small/Height','Size/Large/Width','Size/Large/Height','Size/Small/Width','Size/Small/Height','Color/Red','Color/Green','Color/Blue']}
            },{
                name:'Kimono/Bow',fold:[],
                toggle:{type:[26],name:['Display']},
                slide:{type:[125,126,127,128,129,130,131,132],limit:[[-100,0],[0,2],[0,2],[0,2],[0,2],[0,255],[0,255],[0,255]],name:['Level','Position/Width','Position/Height','Size/Width','Size/Height','Color/Red','Color/Green','Color/Blue']}
            },{
                name:'Kimono/Attach',fold:[],
                toggle:{type:[27],name:['Flower/Display']},
                slide:{type:[135,136],limit:[[-100,0],[0,1]],name:['Flower/Level','Flower/Size']}
            },{
                name:'Kimono/Main/Color',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[98,99,100,101,102,103,104,105,106,107,108,109],limit:[[0,255],[0,255],[0,255],[0,255],[0,255],[0,255],[0,255],[0,255],[0,255],[0,255],[0,255],[0,255]],name:['Front/Start/Red','Front/Start/Green','Front/Start/Blue','Front/End/Red','Front/End/Green','Front/End/Blue','Back/Start/Red','Back/Start/Green','Back/Start/Blue','Back/End/Red','Back/End/Green','Back/End/Blue']}
            },{
                name:'Arms',fold:[31,32],
                toggle:{type:[28],name:['Display']},
                slide:{type:[137,138,139,140],limit:[[0,1],[0,255],[0,255],[0,255]],name:['Fade','Color/Red','Color/Green','Color/Blue']}
            },{
                name:'Arms/Length',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[141,142,143,144],limit:[[0,30],[0,30],[0,30],[0,30]],name:['Left/Top','Left/Bottom','Right/Top','Right/Bottom']}
            },{
                name:'Arms/Anim',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[145,146,147,148,149,150,151,152],limit:[[0,90],[0,90],[0,90],[0,90],[-180,180],[-180,180],[-180,180],[-180,180]],name:['Right/Angle/Top','Right/Angle/Bottom','Left/Angle/Top','Left/Angle/Bottom','Right/Spin/Top','Right/Spin/Bottom','Left/Spin/Top','Left/Spin/Bottom']}
            },
        ]
        this.tabs={list:[],select:0}
        this.calc={int:0}
    }
    findSlide(type){
        switch(type){
            case 1: return entities.players[0].fades.skin.body
            case 2: return entities.players[0].fades.necklace.front
            case 3: return entities.players[0].fades.necklace.back
            case 4: return entities.players[0].color.skin.body[0]
            case 5: return entities.players[0].color.skin.body[1]
            case 6: return entities.players[0].color.skin.body[2]
            case 7: return entities.players[0].color.necklace[0]
            case 8: return entities.players[0].color.necklace[1]
            case 9: return entities.players[0].color.necklace[2]
            case 10: return entities.players[0].fades.skin.button
            case 11: return entities.players[0].color.skin.button[0]
            case 12: return entities.players[0].color.skin.button[1]
            case 13: return entities.players[0].color.skin.button[2]
            case 14: return entities.players[0].anim.legs[0].length.top
            case 15: return entities.players[0].anim.legs[0].length.bottom
            case 16: return entities.players[0].anim.legs[1].length.top
            case 17: return entities.players[0].anim.legs[1].length.bottom
            case 18: return entities.players[0].anim.legs[0].length.sandal.front
            case 19: return entities.players[0].anim.legs[0].length.sandal.back
            case 20: return entities.players[0].anim.legs[1].length.sandal.front
            case 21: return entities.players[0].anim.legs[1].length.sandal.back
            case 22: return entities.players[0].anim.legs[0].top
            case 23: return entities.players[0].anim.legs[0].bottom
            case 24: return entities.players[0].anim.legs[1].top
            case 25: return entities.players[0].anim.legs[1].bottom
            case 26: return entities.players[0].spin.legs[0].top
            case 27: return entities.players[0].spin.legs[0].bottom
            case 28: return entities.players[0].spin.legs[1].top
            case 29: return entities.players[0].spin.legs[1].bottom
            case 30: return entities.players[0].fades.sandal.front[0]
            case 31: return entities.players[0].fades.sandal.back[0]
            case 32: return entities.players[0].fades.sandal.front[1]
            case 33: return entities.players[0].fades.sandal.back[1]
            case 34: return entities.players[0].spin.sandal[0]
            case 35: return entities.players[0].spin.sandal[1]
            case 36: return entities.players[0].fades.skin.legs
            case 37: return entities.players[0].color.skin.legs[0]
            case 38: return entities.players[0].color.skin.legs[1]
            case 39: return entities.players[0].color.skin.legs[2]
            case 40: return entities.players[0].fades.skin.head
            case 41: return entities.players[0].color.skin.head[0]
            case 42: return entities.players[0].color.skin.head[1]
            case 43: return entities.players[0].color.skin.head[2]
            case 44: return entities.players[0].color.hair.front[0]
            case 45: return entities.players[0].color.hair.front[1]
            case 46: return entities.players[0].color.hair.front[2]
            case 47: return entities.players[0].color.hair.back[0]
            case 48: return entities.players[0].color.hair.back[1]
            case 49: return entities.players[0].color.hair.back[2]
            case 50: return entities.players[0].parts.eyeLevel
            case 51: return entities.players[0].parts.flowerLevel
            case 52: return entities.players[0].anim.eye[0]
            case 53: return entities.players[0].anim.eye[1]
            case 54: return entities.players[0].fades.eye[0]
            case 55: return entities.players[0].fades.eye[1]
            case 56: return entities.players[0].fades.flower
            case 57: return entities.players[0].color.under.outside[0]
            case 58: return entities.players[0].color.under.outside[1]
            case 59: return entities.players[0].color.under.outside[2]
            case 60: return entities.players[0].color.under.fringe[0]
            case 61: return entities.players[0].color.under.fringe[1]
            case 62: return entities.players[0].color.under.fringe[2]
            case 63: return entities.players[0].color.under.bow[0]
            case 64: return entities.players[0].color.under.bow[1]
            case 65: return entities.players[0].color.under.bow[2]
            case 66: return entities.players[0].parts.under.top
            case 67: return entities.players[0].parts.under.bottom
            case 68: return entities.players[0].parts.under.bow
            case 69: return entities.players[0].anim.under.top.x
            case 70: return entities.players[0].anim.under.top.y
            case 71: return entities.players[0].anim.under.bottom.x
            case 72: return entities.players[0].anim.under.bottom.y
            case 73: return entities.players[0].anim.under.bow.position.x
            case 74: return entities.players[0].anim.under.bow.position.y
            case 75: return entities.players[0].parts.kimono.main
            case 76: return entities.players[0].fades.kimono.main.front.x
            case 77: return entities.players[0].fades.kimono.main.front.y
            case 78: return entities.players[0].fades.kimono.main.back.x
            case 79: return entities.players[0].fades.kimono.main.back.y
            case 80: return entities.players[0].parts.kimono.outside
            case 81: return entities.players[0].fades.kimono.outside.front.x
            case 82: return entities.players[0].fades.kimono.outside.front.y
            case 83: return entities.players[0].fades.kimono.outside.back.x
            case 84: return entities.players[0].fades.kimono.outside.back.y
            case 85: return entities.players[0].parts.kimono.fringe
            case 86: return entities.players[0].fades.kimono.fringe.front.x
            case 87: return entities.players[0].fades.kimono.fringe.front.y
            case 88: return entities.players[0].fades.kimono.fringe.back.x
            case 89: return entities.players[0].fades.kimono.fringe.back.y
            case 90: return entities.players[0].fades.kimono.decoration.position.large.x
            case 91: return entities.players[0].fades.kimono.decoration.position.large.y
            case 92: return entities.players[0].fades.kimono.decoration.position.small.x
            case 93: return entities.players[0].fades.kimono.decoration.position.small.y
            case 94: return entities.players[0].fades.kimono.decoration.size.large.x
            case 95: return entities.players[0].fades.kimono.decoration.size.large.y
            case 96: return entities.players[0].fades.kimono.decoration.size.small.x
            case 97: return entities.players[0].fades.kimono.decoration.size.small.y
            case 98: return entities.players[0].color.kimono.main.start[0]
            case 99: return entities.players[0].color.kimono.main.start[1]
            case 100: return entities.players[0].color.kimono.main.start[2]
            case 101: return entities.players[0].color.kimono.main.end[0]
            case 102: return entities.players[0].color.kimono.main.end[1]
            case 103: return entities.players[0].color.kimono.main.end[2]
            case 104: return entities.players[0].color.kimono.mainBack.start[0]
            case 105: return entities.players[0].color.kimono.mainBack.start[1]
            case 106: return entities.players[0].color.kimono.mainBack.start[2]
            case 107: return entities.players[0].color.kimono.mainBack.end[0]
            case 108: return entities.players[0].color.kimono.mainBack.end[1]
            case 109: return entities.players[0].color.kimono.mainBack.end[2]
            case 110: return entities.players[0].color.kimono.outside[0]
            case 111: return entities.players[0].color.kimono.outside[1]
            case 112: return entities.players[0].color.kimono.outside[2]
            case 113: return entities.players[0].color.kimono.outsideBack[0]
            case 114: return entities.players[0].color.kimono.outsideBack[1]
            case 115: return entities.players[0].color.kimono.outsideBack[2]
            case 116: return entities.players[0].color.kimono.fringe[0]
            case 117: return entities.players[0].color.kimono.fringe[1]
            case 118: return entities.players[0].color.kimono.fringe[2]
            case 119: return entities.players[0].color.kimono.fringeBack[0]
            case 120: return entities.players[0].color.kimono.fringeBack[1]
            case 121: return entities.players[0].color.kimono.fringeBack[2]
            case 122: return entities.players[0].color.kimono.decoration[0]
            case 123: return entities.players[0].color.kimono.decoration[1]
            case 124: return entities.players[0].color.kimono.decoration[2]
            case 125: return entities.players[0].parts.kimono.bow
            case 126: return entities.players[0].anim.kimono.bow.position.x
            case 127: return entities.players[0].anim.kimono.bow.position.y
            case 128: return entities.players[0].anim.kimono.bow.size.x
            case 129: return entities.players[0].anim.kimono.bow.size.y
            case 130: return entities.players[0].color.kimono.bow[0]
            case 131: return entities.players[0].color.kimono.bow[1]
            case 132: return entities.players[0].color.kimono.bow[2]
            case 133: return entities.players[0].anim.under.bow.size.x
            case 134: return entities.players[0].anim.under.bow.size.y
            case 135: return entities.players[0].parts.kimono.flowerLevel
            case 136: return entities.players[0].fades.kimono.flower
            case 137: return entities.players[0].fades.skin.arms
            case 138: return entities.players[0].color.skin.arms[0]
            case 139: return entities.players[0].color.skin.arms[1]
            case 140: return entities.players[0].color.skin.arms[2]
            case 141: return entities.players[0].anim.arms[0].length.top
            case 142: return entities.players[0].anim.arms[0].length.bottom
            case 143: return entities.players[0].anim.arms[1].length.top
            case 144: return entities.players[0].anim.arms[1].length.bottom
            case 145: return entities.players[0].anim.arms[0].top
            case 146: return entities.players[0].anim.arms[0].bottom
            case 147: return entities.players[0].anim.arms[1].top
            case 148: return entities.players[0].anim.arms[1].bottom
            case 149: return entities.players[0].spin.arms[0].top
            case 150: return entities.players[0].spin.arms[0].bottom
            case 151: return entities.players[0].spin.arms[1].top
            case 152: return entities.players[0].spin.arms[1].bottom
        }
    }
    slide(type,value){
        switch(type){
            case 1: entities.players[0].fades.skin.body=value; break
            case 2: entities.players[0].fades.necklace.front=value; break
            case 3: entities.players[0].fades.necklace.back=value; break
            case 4: entities.players[0].color.skin.body[0]=value; break
            case 5: entities.players[0].color.skin.body[1]=value; break
            case 6: entities.players[0].color.skin.body[2]=value; break
            case 7: entities.players[0].color.necklace[0]=value; break
            case 8: entities.players[0].color.necklace[1]=value; break
            case 9: entities.players[0].color.necklace[2]=value; break
            case 10: entities.players[0].fades.skin.button=value; break
            case 11: entities.players[0].color.skin.button[0]=value; break
            case 12: entities.players[0].color.skin.button[1]=value; break
            case 13: entities.players[0].color.skin.button[2]=value; break
            case 14: entities.players[0].anim.legs[0].length.top=value; break
            case 15: entities.players[0].anim.legs[0].length.bottom=value; break
            case 16: entities.players[0].anim.legs[1].length.top=value; break
            case 17: entities.players[0].anim.legs[1].length.bottom=value; break
            case 18: entities.players[0].anim.legs[0].length.sandal.front=value; break
            case 19: entities.players[0].anim.legs[0].length.sandal.back=value; break
            case 20: entities.players[0].anim.legs[1].length.sandal.front=value; break
            case 21: entities.players[0].anim.legs[1].length.sandal.back=value; break
            case 22: entities.players[0].anim.legs[0].top=value; break
            case 23: entities.players[0].anim.legs[0].bottom=value; break
            case 24: entities.players[0].anim.legs[1].top=value; break
            case 25: entities.players[0].anim.legs[1].bottom=value; break
            case 26: entities.players[0].spin.legs[0].top=value; break
            case 27: entities.players[0].spin.legs[0].bottom=value; break
            case 28: entities.players[0].spin.legs[1].top=value; break
            case 29: entities.players[0].spin.legs[1].bottom=value; break
            case 30: entities.players[0].fades.sandal.front[0]=value; break
            case 31: entities.players[0].fades.sandal.back[0]=value; break
            case 32: entities.players[0].fades.sandal.front[1]=value; break
            case 33: entities.players[0].fades.sandal.back[1]=value; break
            case 34: entities.players[0].spin.sandal[0]=value; break
            case 35: entities.players[0].spin.sandal[1]=value; break
            case 36: entities.players[0].fades.skin.legs=value; break
            case 37: entities.players[0].color.skin.legs[0]=value; break
            case 38: entities.players[0].color.skin.legs[1]=value; break
            case 39: entities.players[0].color.skin.legs[2]=value; break
            case 40: entities.players[0].fades.skin.head=value; break
            case 41: entities.players[0].color.skin.head[0]=value; break
            case 42: entities.players[0].color.skin.head[1]=value; break
            case 43: entities.players[0].color.skin.head[2]=value; break
            case 44: entities.players[0].color.hair.front[0]=value; entities.players[0].generateSprites(0); break
            case 45: entities.players[0].color.hair.front[1]=value; entities.players[0].generateSprites(0); break
            case 46: entities.players[0].color.hair.front[2]=value; entities.players[0].generateSprites(0); break
            case 47: entities.players[0].color.hair.back[0]=value; entities.players[0].generateSprites(0); break
            case 48: entities.players[0].color.hair.back[1]=value; entities.players[0].generateSprites(0); break
            case 49: entities.players[0].color.hair.back[2]=value; entities.players[0].generateSprites(0); break
            case 50: entities.players[0].parts.eyeLevel=value; break
            case 51: entities.players[0].parts.flowerLevel=value; break
            case 52: entities.players[0].anim.eye[0]=value; break
            case 53: entities.players[0].anim.eye[1]=value; break
            case 54: entities.players[0].fades.eye[0]=value; break
            case 55: entities.players[0].fades.eye[1]=value; break
            case 56: entities.players[0].fades.flower=value; break
            case 57: entities.players[0].color.under.outside[0]=value; break
            case 58: entities.players[0].color.under.outside[1]=value; break
            case 59: entities.players[0].color.under.outside[2]=value; break
            case 60: entities.players[0].color.under.fringe[0]=value; break
            case 61: entities.players[0].color.under.fringe[1]=value; break
            case 62: entities.players[0].color.under.fringe[2]=value; break
            case 63: entities.players[0].color.under.bow[0]=value; break
            case 64: entities.players[0].color.under.bow[1]=value; break
            case 65: entities.players[0].color.under.bow[2]=value; break
            case 66: entities.players[0].parts.under.top=value; break
            case 67: entities.players[0].parts.under.bottom=value; break
            case 68: entities.players[0].parts.under.bow=value; break
            case 69: entities.players[0].anim.under.top.x=value; break
            case 70: entities.players[0].anim.under.top.y=value; break
            case 71: entities.players[0].anim.under.bottom.x=value; break
            case 72: entities.players[0].anim.under.bottom.y=value; break
            case 73: entities.players[0].anim.under.bow.position.x=value; break
            case 74: entities.players[0].anim.under.bow.position.y=value; break
            case 75: entities.players[0].parts.kimono.main=value; break
            case 76: entities.players[0].fades.kimono.main.front.x=value; break
            case 77: entities.players[0].fades.kimono.main.front.y=value; break
            case 78: entities.players[0].fades.kimono.main.back.x=value; break
            case 79: entities.players[0].fades.kimono.main.back.y=value; break
            case 80: entities.players[0].parts.kimono.outside=value; break
            case 81: entities.players[0].fades.kimono.outside.front.x=value; break
            case 82: entities.players[0].fades.kimono.outside.front.y=value; break
            case 83: entities.players[0].fades.kimono.outside.back.x=value; break
            case 84: entities.players[0].fades.kimono.outside.back.y=value; break
            case 85: entities.players[0].parts.kimono.fringe=value; break
            case 86: entities.players[0].fades.kimono.fringe.front.x=value; break
            case 87: entities.players[0].fades.kimono.fringe.front.y=value; break
            case 88: entities.players[0].fades.kimono.fringe.back.x=value; break
            case 89: entities.players[0].fades.kimono.fringe.back.y=value; break
            case 90: entities.players[0].fades.kimono.decoration.position.large.x=value; break
            case 91: entities.players[0].fades.kimono.decoration.position.large.y=value; break
            case 92: entities.players[0].fades.kimono.decoration.position.small.x=value; break
            case 93: entities.players[0].fades.kimono.decoration.position.small.y=value; break
            case 94: entities.players[0].fades.kimono.decoration.size.large.x=value; break
            case 95: entities.players[0].fades.kimono.decoration.size.large.y=value; break
            case 96: entities.players[0].fades.kimono.decoration.size.small.x=value; break
            case 97: entities.players[0].fades.kimono.decoration.size.small.y=value; break
            case 98: entities.players[0].color.kimono.main.start[0]=value; entities.players[0].generateSprites(1); break
            case 99: entities.players[0].color.kimono.main.start[1]=value; entities.players[0].generateSprites(1); break
            case 100: entities.players[0].color.kimono.main.start[2]=value; entities.players[0].generateSprites(1); break
            case 101: entities.players[0].color.kimono.main.end[0]=value; entities.players[0].generateSprites(1); break
            case 102: entities.players[0].color.kimono.main.end[1]=value; entities.players[0].generateSprites(1); break
            case 103: entities.players[0].color.kimono.main.end[2]=value; entities.players[0].generateSprites(1); break
            case 104: entities.players[0].color.kimono.mainBack.start[0]=value; entities.players[0].generateSprites(1); break
            case 105: entities.players[0].color.kimono.mainBack.start[1]=value; entities.players[0].generateSprites(1); break
            case 106: entities.players[0].color.kimono.mainBack.start[2]=value; entities.players[0].generateSprites(1); break
            case 107: entities.players[0].color.kimono.mainBack.end[0]=value; entities.players[0].generateSprites(1); break
            case 108: entities.players[0].color.kimono.mainBack.end[1]=value; entities.players[0].generateSprites(1); break
            case 109: entities.players[0].color.kimono.mainBack.end[2]=value; entities.players[0].generateSprites(1); break
            case 110: entities.players[0].color.kimono.outside[0]=value; entities.players[0].generateSprites(2); break
            case 111: entities.players[0].color.kimono.outside[1]=value; entities.players[0].generateSprites(2); break
            case 112: entities.players[0].color.kimono.outside[2]=value; entities.players[0].generateSprites(2); break
            case 113: entities.players[0].color.kimono.outsideBack[0]=value; entities.players[0].generateSprites(2); break
            case 114: entities.players[0].color.kimono.outsideBack[1]=value; entities.players[0].generateSprites(2); break
            case 115: entities.players[0].color.kimono.outsideBack[2]=value; entities.players[0].generateSprites(2); break
            case 116: entities.players[0].color.kimono.fringe[0]=value; entities.players[0].generateSprites(3); break
            case 117: entities.players[0].color.kimono.fringe[1]=value; entities.players[0].generateSprites(3); break
            case 118: entities.players[0].color.kimono.fringe[2]=value; entities.players[0].generateSprites(3); break
            case 119: entities.players[0].color.kimono.fringeBack[0]=value; entities.players[0].generateSprites(3); break
            case 120: entities.players[0].color.kimono.fringeBack[1]=value; entities.players[0].generateSprites(3); break
            case 121: entities.players[0].color.kimono.fringeBack[2]=value; entities.players[0].generateSprites(3); break
            case 122: entities.players[0].color.kimono.decoration[0]=value; break
            case 123: entities.players[0].color.kimono.decoration[1]=value; break
            case 124: entities.players[0].color.kimono.decoration[2]=value; break
            case 125: entities.players[0].parts.kimono.bow=value; break
            case 126: entities.players[0].anim.kimono.bow.position.x=value; break
            case 127: entities.players[0].anim.kimono.bow.position.y=value; break
            case 128: entities.players[0].anim.kimono.bow.size.x=value; break
            case 129: entities.players[0].anim.kimono.bow.size.y=value; break
            case 130: entities.players[0].color.kimono.bow[0]=value; break
            case 131: entities.players[0].color.kimono.bow[1]=value; break
            case 132: entities.players[0].color.kimono.bow[2]=value; break
            case 133: entities.players[0].anim.under.bow.size.x=value; break
            case 134: entities.players[0].anim.under.bow.size.y=value; break
            case 135: entities.players[0].parts.kimono.flowerLevel=value; break
            case 136: entities.players[0].fades.kimono.flower=value; break
            case 137: entities.players[0].fades.skin.arms=value; break
            case 138: entities.players[0].color.skin.arms[0]=value; break
            case 139: entities.players[0].color.skin.arms[1]=value; break
            case 140: entities.players[0].color.skin.arms[2]=value; break
            case 141: entities.players[0].anim.arms[0].length.top=value; break
            case 142: entities.players[0].anim.arms[0].length.bottom=value; break
            case 143: entities.players[0].anim.arms[1].length.top=value; break
            case 144: entities.players[0].anim.arms[1].length.bottom=value; break
            case 145: entities.players[0].anim.arms[0].top=value; break
            case 146: entities.players[0].anim.arms[0].bottom=value; break
            case 147: entities.players[0].anim.arms[1].top=value; break
            case 148: entities.players[0].anim.arms[1].bottom=value; break
            case 149: entities.players[0].spin.arms[0].top=value; break
            case 150: entities.players[0].spin.arms[0].bottom=value; break
            case 151: entities.players[0].spin.arms[1].top=value; break
            case 152: entities.players[0].spin.arms[1].bottom=value; break
        }
    }
    findToggle(type){
        switch(type){
            case 1: return entities.players[0].trigger.display.skin.legs
            case 2: return entities.players[0].trigger.display.skin.body
            case 3: return entities.players[0].trigger.display.necklace.front
            case 4: return entities.players[0].trigger.display.necklace.back
            case 5: return entities.players[0].trigger.display.skin.button
            case 6: return entities.players[0].trigger.display.sandal.front[0]
            case 7: return entities.players[0].trigger.display.sandal.back[0]
            case 8: return entities.players[0].trigger.display.sandal.front[1]
            case 9: return entities.players[0].trigger.display.sandal.back[1]
            case 10: return entities.players[0].trigger.display.hair.front
            case 11: return entities.players[0].trigger.display.hair.back
            case 12: return entities.players[0].trigger.display.eye[0]
            case 13: return entities.players[0].trigger.display.eye[1]
            case 14: return entities.players[0].trigger.display.flower
            case 15: return entities.players[0].trigger.display.under.top
            case 16: return entities.players[0].trigger.display.under.bottom
            case 17: return entities.players[0].trigger.display.under.bow
            case 18: return entities.players[0].trigger.display.kimono.main.front
            case 19: return entities.players[0].trigger.display.kimono.main.back
            case 20: return entities.players[0].trigger.display.kimono.outside.front
            case 21: return entities.players[0].trigger.display.kimono.outside.back
            case 22: return entities.players[0].trigger.display.kimono.fringe.front
            case 23: return entities.players[0].trigger.display.kimono.fringe.back
            case 24: return entities.players[0].trigger.display.kimono.decoration.large
            case 25: return entities.players[0].trigger.display.kimono.decoration.small
            case 26: return entities.players[0].trigger.display.kimono.bow
            case 27: return entities.players[0].trigger.display.kimono.flower
            case 28: return entities.players[0].trigger.display.skin.arms
        }
    }
    toggle(type){
        switch(type){
            case 1: entities.players[0].trigger.display.skin.legs=toggle(entities.players[0].trigger.display.skin.legs); break
            case 2: entities.players[0].trigger.display.skin.body=toggle(entities.players[0].trigger.display.skin.body); break
            case 3: entities.players[0].trigger.display.necklace.front=toggle(entities.players[0].trigger.display.necklace.front); break
            case 4: entities.players[0].trigger.display.necklace.back=toggle(entities.players[0].trigger.display.necklace.back); break
            case 5: entities.players[0].trigger.display.skin.button=toggle(entities.players[0].trigger.display.skin.button); break
            case 6: entities.players[0].trigger.display.sandal.front[0]=toggle(entities.players[0].trigger.display.sandal.front[0]); break
            case 7: entities.players[0].trigger.display.sandal.back[0]=toggle(entities.players[0].trigger.display.sandal.back[0]); break
            case 8: entities.players[0].trigger.display.sandal.front[1]=toggle(entities.players[0].trigger.display.sandal.front[1]); break
            case 9: entities.players[0].trigger.display.sandal.back[1]=toggle(entities.players[0].trigger.display.sandal.back[1]); break
            case 10: entities.players[0].trigger.display.hair.front=toggle(entities.players[0].trigger.display.hair.front); if(!entities.players[0].generated.sprites[0]){entities.players[0].generateSprites(0)} break
            case 11: entities.players[0].trigger.display.hair.back=toggle(entities.players[0].trigger.display.hair.back); if(!entities.players[0].generated.sprites[0]){entities.players[0].generateSprites(0)} break
            case 12: entities.players[0].trigger.display.eye[0]=toggle(entities.players[0].trigger.display.eye[0]); break
            case 13: entities.players[0].trigger.display.eye[1]=toggle(entities.players[0].trigger.display.eye[1]); break
            case 14: entities.players[0].trigger.display.flower=toggle(entities.players[0].trigger.display.flower); break
            case 15: entities.players[0].trigger.display.under.top=toggle(entities.players[0].trigger.display.under.top); if(!entities.players[0].generated.parts[5]){entities.players[0].generateParts(5)} break
            case 16: entities.players[0].trigger.display.under.bottom=toggle(entities.players[0].trigger.display.under.bottom); if(!entities.players[0].generated.parts[5]){entities.players[0].generateParts(5)} break
            case 17: entities.players[0].trigger.display.under.bow=toggle(entities.players[0].trigger.display.under.bow); break
            case 18: entities.players[0].trigger.display.kimono.main.front=toggle(entities.players[0].trigger.display.kimono.main.front); if(!entities.players[0].generated.parts[0]){entities.players[0].generateParts(0)} if(!entities.players[0].generated.sprites[1]){entities.players[0].generateSprites(1)} break
            case 19: entities.players[0].trigger.display.kimono.main.back=toggle(entities.players[0].trigger.display.kimono.main.back); if(!entities.players[0].generated.parts[0]){entities.players[0].generateParts(0)} if(!entities.players[0].generated.sprites[1]){entities.players[0].generateSprites(1)} break
            case 20: entities.players[0].trigger.display.kimono.outside.front=toggle(entities.players[0].trigger.display.kimono.outside.front); if(!entities.players[0].generated.parts[1]){entities.players[0].generateParts(1)} if(!entities.players[0].generated.sprites[2]){entities.players[0].generateSprites(2)} break
            case 21: entities.players[0].trigger.display.kimono.outside.back=toggle(entities.players[0].trigger.display.kimono.outside.back); if(!entities.players[0].generated.parts[1]){entities.players[0].generateParts(1)} if(!entities.players[0].generated.sprites[2]){entities.players[0].generateSprites(2)} break
            case 22: entities.players[0].trigger.display.kimono.fringe.front=toggle(entities.players[0].trigger.display.kimono.fringe.front); if(!entities.players[0].generated.parts[2]){entities.players[0].generateParts(2)} if(!entities.players[0].generated.sprites[3]){entities.players[0].generateSprites(3)} break
            case 23: entities.players[0].trigger.display.kimono.fringe.back=toggle(entities.players[0].trigger.display.kimono.fringe.back); if(!entities.players[0].generated.parts[2]){entities.players[0].generateParts(2)} if(!entities.players[0].generated.sprites[3]){entities.players[0].generateSprites(3)} break
            case 24: entities.players[0].trigger.display.kimono.decoration.large=toggle(entities.players[0].trigger.display.kimono.decoration.large); if(!entities.players[0].generated.parts[3]){entities.players[0].generateParts(3)}; break
            case 25: entities.players[0].trigger.display.kimono.decoration.small=toggle(entities.players[0].trigger.display.kimono.decoration.small); if(!entities.players[0].generated.parts[4]){entities.players[0].generateParts(4)}; break
            case 26: entities.players[0].trigger.display.kimono.bow=toggle(entities.players[0].trigger.display.kimono.bow); break
            case 27: entities.players[0].trigger.display.kimono.flower=toggle(entities.players[0].trigger.display.kimono.flower); break
            case 28: entities.players[0].trigger.display.skin.arms=toggle(entities.players[0].trigger.display.skin.arms); break
        }
    }
    display(){
        this.layer.noStroke()
        this.layer.fill(160,this.fade)
        this.layer.rect(155,107.5,140,205,5)
        this.layer.rect(40,107.5,70,205,5)
        this.layer.rect(115,407.5,220,375,5)
        this.layer.fill(120,this.fade)
        for(let g=0,lg=this.groups.name.length;g<lg;g++){
            this.layer.rect(40,20+g*25,60,20,5)
        }
        for(let g=0,lg=this.tabs.list.length;g<lg;g++){
            this.layer.rect(155,20+g*25,130,20,5)
        }
        if(this.tabs.select<this.tabs.list.length){
            this.calc.int=0
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].fold.length;g<lg;g++){
                this.layer.rect(80,235+this.calc.int,140,20,5)
                this.calc.int+=25
            }
            if(this.tabData[this.tabs.list[this.tabs.select]].fold.length>0){
                this.calc.int+=25
            }
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].toggle.type.length;g<lg;g++){
                this.layer.rect(80,235+this.calc.int,140,20,5)
                this.calc.int+=25
            }
            if(this.tabData[this.tabs.list[this.tabs.select]].toggle.type.length>0){
                this.calc.int+=25
            }
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].slide.type.length;g<lg;g++){
                this.layer.ellipse(15,240+this.calc.int,10,10)
                this.layer.ellipse(175,240+this.calc.int,10,10)
                this.layer.rect(95,240+this.calc.int,160,5,5)
                this.calc.int+=25
            }
        }
        this.layer.fill(0,this.fade)
        this.layer.textSize(12)
        for(let g=0,lg=this.groups.name.length;g<lg;g++){
            this.layer.text(this.groups.name[g],40,20+g*25)
        }
        for(let g=0,lg=this.tabs.list.length;g<lg;g++){
            this.layer.text(this.tabData[this.tabs.list[g]].name,150,20+g*25)
            this.layer.text('X',210,20+g*25)
        }
        if(this.tabs.select<this.tabs.list.length){
            this.calc.int=0
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].fold.length;g<lg;g++){
                this.layer.text(this.tabData[this.tabData[this.tabs.list[this.tabs.select]].fold[g]].name,80,235+this.calc.int)
                this.calc.int+=25
            }
            if(this.tabData[this.tabs.list[this.tabs.select]].fold.length){
                this.calc.int+=25
            }
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].toggle.type.length;g<lg;g++){
                this.layer.text(this.tabData[this.tabs.list[this.tabs.select]].toggle.name[g],70,235+this.calc.int)
                if(this.findToggle(this.tabData[this.tabs.list[this.tabs.select]].toggle.type[g])){
                    this.layer.text('On',135,235+this.calc.int)
                }else{
                    this.layer.text('Off',135,235+this.calc.int)
                }
                this.calc.int+=25
            }
            if(this.tabData[this.tabs.list[this.tabs.select]].toggle.type.length>0){
                this.calc.int+=25
            }
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].slide.type.length;g<lg;g++){
                this.layer.text(this.tabData[this.tabs.list[this.tabs.select]].slide.name[g]+' '+round(this.findSlide(this.tabData[this.tabs.list[this.tabs.select]].slide.type[g])*100)/100,95,230+this.calc.int)
                this.layer.text(this.tabData[this.tabs.list[this.tabs.select]].slide.limit[g][0],15,230+this.calc.int)
                this.layer.text(this.tabData[this.tabs.list[this.tabs.select]].slide.limit[g][1],175,230+this.calc.int)
                this.layer.ellipse(15+((this.findSlide(this.tabData[this.tabs.list[this.tabs.select]].slide.type[g])-this.tabData[this.tabs.list[this.tabs.select]].slide.limit[g][0])/(this.tabData[this.tabs.list[this.tabs.select]].slide.limit[g][1]-this.tabData[this.tabs.list[this.tabs.select]].slide.limit[g][0]))*160,240+this.calc.int,8,8)
                this.calc.int+=25
            }
        }
    }
    update(){
    }
    onClick(){
        for(let g=0,lg=this.groups.name.length;g<lg;g++){
            if(pointInsideBox({position:inputs.rel},{position:{x:40,y:20+g*25},width:60,height:20})&&this.tabs.list.length<8){
                this.tabs.list.push(this.groups.location[g])
                this.tabs.select=this.tabs.list.length-1
            }
        }
        for(let g=0,lg=this.tabs.list.length;g<lg;g++){
            if(pointInsideBox({position:inputs.rel},{position:{x:145,y:20+g*25},width:110,height:20})){
                this.tabs.select=g
            }
            if(pointInsideBox({position:inputs.rel},{position:{x:210,y:20+g*25},width:20,height:20})){
                this.tabs.list.splice(g,1)
                while(this.tabs.select>=this.tabs.list.length&&this.tabData.select>0){
                    this.tabs.select--
                }
                break
            }
        }
        if(this.tabs.select<this.tabs.list.length){
            this.calc.int=0
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].fold.length;g<lg;g++){
                if(pointInsideBox({position:inputs.rel},{position:{x:80,y:235+this.calc.int},width:140,height:20})){
                    this.tabs.list[this.tabs.select]=this.tabData[this.tabs.list[this.tabs.select]].fold[g]
                }
                this.calc.int+=25
            }
            if(this.tabData[this.tabs.list[this.tabs.select]].fold.length>0){
                this.calc.int+=25
            }
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].toggle.type.length;g<lg;g++){
                if(pointInsideBox({position:inputs.rel},{position:{x:80,y:235+this.calc.int},width:140,height:20})){
                    this.toggle(this.tabData[this.tabs.list[this.tabs.select]].toggle.type[g])
                }
                this.calc.int+=25
            }
            if(this.tabData[this.tabs.list[this.tabs.select]].toggle.type.length>0){
                this.calc.int+=25
            }
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].slide.type.length;g<lg;g++){
                if(pointInsideBox({position:inputs.rel},{position:{x:10,y:240+this.calc.int},width:10,height:10})){
                    this.slide(this.tabData[this.tabs.list[this.tabs.select]].slide.type[g],this.tabData[this.tabs.list[this.tabs.select]].slide.limit[g][0])
                }else if(pointInsideBox({position:inputs.rel},{position:{x:180,y:240+this.calc.int},width:10,height:10})){
                    this.slide(this.tabData[this.tabs.list[this.tabs.select]].slide.type[g],this.tabData[this.tabs.list[this.tabs.select]].slide.limit[g][1])
                }else if(pointInsideBox({position:inputs.rel},{position:{x:95,y:240+this.calc.int},width:160,height:10})){
                    this.slide(this.tabData[this.tabs.list[this.tabs.select]].slide.type[g],(inputs.rel.x-15)/160*(this.tabData[this.tabs.list[this.tabs.select]].slide.limit[g][1]-this.tabData[this.tabs.list[this.tabs.select]].slide.limit[g][0])+this.tabData[this.tabs.list[this.tabs.select]].slide.limit[g][0])
                }
                this.calc.int+=25
            }
        }
    }
}