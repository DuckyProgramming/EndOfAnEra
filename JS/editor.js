class editor{
    constructor(layer){
        this.layer=layer
        this.groups={name:['Body','Legs'],location:[1,5]}
        this.tabData=[
            {name:'',fold:[],toggle:{type:[],name:[]},slide:{type:[],limit:[],name:[]}},
            {
                name:'Body/',fold:[2,3,4],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Body/Main',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Body/Head',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Body/Attach',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Legs/',fold:[6,7,8],
                toggle:{type:[1],name:['Display']},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Legs/Length/',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Legs/Anim/',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },{
                name:'Legs/Sandal/',fold:[],
                toggle:{type:[],name:[]},
                slide:{type:[],limit:[],name:[]}
            },
        ]
        this.tabs={list:[],select:0}
        this.calc={int:0}
    }
    findToggle(type){
        switch(type){
            case 1: return entities.players[0].trigger.display.skin.legs
        }
    }
    toggle(type){
        switch(type){
            case 1: entities.players[0].trigger.display.skin.legs=toggle(entities.players[0].trigger.display.skin.legs); break
        }
    }
    display(){
        this.layer.noStroke()
        this.layer.fill(160,this.fade)
        this.layer.rect(145,107.5,120,205,5)
        this.layer.rect(40,107.5,70,205,5)
        this.layer.rect(105,407.5,200,375,5)
        this.layer.fill(120,this.fade)
        for(let g=0,lg=this.groups.name.length;g<lg;g++){
            this.layer.rect(40,20+g*25,60,20,5)
        }
        for(let g=0,lg=this.tabs.list.length;g<lg;g++){
            this.layer.rect(145,20+g*25,110,20,5)
        }
        if(this.tabs.select<this.tabs.list.length){
            this.calc.int=0
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].fold.length;g<lg;g++){
                this.layer.rect(65,235+this.calc.int,110,20,5)
                this.calc.int+=25
            }
            this.calc.int+=25
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].toggle.type.length;g<lg;g++){
                this.layer.rect(65,235+this.calc.int,110,20,5)
                this.calc.int+=25
            }
        }
        this.layer.fill(0,this.fade)
        this.layer.textSize(12)
        for(let g=0,lg=this.groups.name.length;g<lg;g++){
            this.layer.text(this.groups.name[g],40,20+g*25)
        }
        for(let g=0,lg=this.tabs.list.length;g<lg;g++){
            this.layer.text(this.tabData[this.tabs.list[g]].name,140,20+g*25)
            this.layer.text('X',190,20+g*25)
        }
        if(this.tabs.select<this.tabs.list.length){
            this.calc.int=0
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].fold.length;g<lg;g++){
                this.layer.text(this.tabData[this.tabData[this.tabs.list[this.tabs.select]].fold[g]].name,65,235+this.calc.int)
                this.calc.int+=25
            }
            this.calc.int+=25
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].toggle.type.length;g<lg;g++){
                this.layer.text(this.tabData[this.tabs.list[this.tabs.select]].toggle.name[g],55,235+this.calc.int)
                if(this.findToggle(this.tabData[this.tabs.list[this.tabs.select]].toggle.type[g])){
                    this.layer.text('On',100,235+this.calc.int)
                }else{
                    this.layer.text('Off',100,235+this.calc.int)
                }
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
            if(pointInsideBox({position:inputs.rel},{position:{x:190,y:20+g*25},width:20,height:20})){
                this.tabs.list.splice(g,1)
                g--
                lg--
                while(this.tabs.select>=this.tabs.list.length&&this.tabData.select>0){
                    this.tabs.select--
                }
            }
        }
        if(this.tabs.select<this.tabs.list.length){
            this.calc.int=0
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].fold.length;g<lg;g++){
                if(pointInsideBox({position:inputs.rel},{position:{x:55,y:235+this.calc.int},width:90,height:20})){
                    this.tabs.list[this.tabs.select]=this.tabData[this.tabs.list[this.tabs.select]].fold[g]
                }
                this.calc.int+=25
            }
            this.calc.int+=25
            for(let g=0,lg=this.tabData[this.tabs.list[this.tabs.select]].toggle.type.length;g<lg;g++){
                if(pointInsideBox({position:inputs.rel},{position:{x:55,y:235+this.calc.int},width:90,height:20})){
                    this.toggle(this.tabData[this.tabs.list[this.tabs.select]].toggle.type[g])
                }
                this.calc.int+=25
            }
        }
    }
}