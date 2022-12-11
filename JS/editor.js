class editor{
    constructor(layer){
        this.layer=layer
        this.groups={name:['Legs'],location:[0]}
        this.tabData={name:['Legs-Base']}
        this.tabs={list:[]}
    }
    display(){
        this.layer.noStroke()
        this.layer.fill(160,this.fade)
        this.layer.rect(155,107.5,100,205,5)
        this.layer.rect(50,107.5,90,205,5)
        this.layer.rect(105,407.5,200,375,5)
        this.layer.fill(120,this.fade)
        for(let g=0,lg=this.groups.name.length;g<lg;g++){
            this.layer.rect(50,20+g*25,80,20,5)
        }
        for(let g=0,lg=this.tabs.list.length;g<lg;g++){
            this.layer.rect(155,20+g*25,90,20,5)
        }
        this.layer.fill(0,this.fade)
        this.layer.textSize(12)
        for(let g=0,lg=this.groups.name.length;g<lg;g++){
            this.layer.text(this.groups.name[g],50,20+g*25)
        }
        for(let g=0,lg=this.tabs.list.length;g<lg;g++){
            this.layer.text(this.tabData.name[this.tabs.list[g]],150,20+g*25)
            this.layer.text('X',190,20+g*25)
        }
    }
    update(){
    }
    onClick(){
        for(let g=0,lg=this.groups.name.length;g<lg;g++){
            if(pointInsideBox({position:inputs.rel},{position:{x:50,y:20+g*25},width:80,height:20})&&this.tabs.list.length<8){
                this.tabs.list.push(this.groups.location[g])
            }
        }
    }
}