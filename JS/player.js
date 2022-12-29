class player extends partisan{
    constructor(layer,x,y){
        super(layer,x,y,0,30,90)
        this.offset={position:{x:0,y:145}}

        this.anim={eye:[0,0],direction:36,
        under:{top:{x:1,y:1},bottom:{x:1,y:1},bow:{position:{x:1,y:1},size:{x:1,y:1}}},
        kimono:{bow:{position:{x:1,y:1},size:{x:1,y:1}}},
        legs:[
            {top:24,bottom:0,length:{top:16,bottom:16,sandal:{back:15.5,front:14.5}}},
            {top:24,bottom:0,length:{top:16,bottom:16,sandal:{back:15.5,front:14.5}}}
        ]}

        this.hair=[
            {spin:[5,60,20],height:2},{spin:[-80,-10,-25],height:4},{spin:[-120,-40,-80],height:9},{spin:[-110,-25,-45],height:7},
            {spin:[0,90,60],height:3},{spin:[25,105,55],height:6},{spin:[-180,-60,-140],height:19},{spin:[-180,-60,-115],height:13},
            {spin:[-15,5,-5],height:1},{spin:[150,-120,-180],height:21},{spin:[120,-120,-180],height:23},{spin:[160,-120,-160],height:18},
            {spin:[120,-160,155],height:21},{spin:[60,130,90],height:4},{spin:[75,180,110],height:11},{spin:[105,-140,130],height:16}
        ]

        this.kimono={main:[],outside:[],fringe:[],decoration:{large:[],small:[]}}

        this.spin={
            legs:[{top:-60,bottom:-120},{top:60,bottom:120}],
            bow:{center:0,end:[-5,5],loop:[-20,20]},
            under:{top:[],bottom:[],under:{top:[-40,40],button:[-39,39],bottom:[0,-10,10]}},
            underBow:{center:0,end:[-8,8],loop:[-32,32]},
            sandal:[10,-10],eye:[-18,18],flower:[-45,-30],necklace:[-45,45,0],button:0}

        this.color={
            hair:{back:[243,154,163],front:[250,211,216]},
            skin:{head:[255,239,224],body:[254,238,223],legs:[255,235,217],button:[250,188,173]},
            eye:{back:[201,108,113],front:[48,4,7]},
            under:{outside:[242,205,219],fringe:[255,234,241],bow:[172,44,53],under:{top:[251,223,202],button:[234,166,156]}},
            kimono:{outside:[255,252,254],outsideBack:[244,220,232],fringe:[242,235,244],fringeBack:[244,199,213],bow:[158,57,60],decoration:[114,40,119],
            main:{start:[232,164,199],end:[255,246,249]},mainBack:{start:[176,108,132],end:[255,228,236]}},
            necklace:[207,90,101],
        }

        this.parts={eyeLevel:-72,flowerLevel:-77.5,
            under:{top:-50.5,bottom:-31,bow:-1.5},
            kimono:{main:-60,outside:-60,fringe:-38,bow:-53,flowerLevel:-44},
            legs:[
                {top:{x:3,y:-32},middle:{x:0,y:0},bottom:{x:0,y:0},sandal:{back:{x:0,y:0},front:{x:0,y:0}}},
                {top:{x:3,y:-32},middle:{x:0,y:0},bottom:{x:0,y:0},sandal:{back:{x:0,y:0},front:{x:0,y:0}}}
            ]}

        this.graphics={
            legs:[
                {top:{x:0,y:0},middle:{x:0,y:0},bottom:{x:0,y:0},sandal:{back:{x:0,y:0},front:{x:0,y:0}}},
                {top:{x:0,y:0},middle:{x:0,y:0},bottom:{x:0,y:0},sandal:{back:{x:0,y:0},front:{x:0,y:0}}}
            ]}

        this.fades={flower:1,eye:[1,1],
            sandal:{back:[1,1],front:[1,1]},necklace:{back:1,front:1},
            skin:{legs:1,body:1,head:1,button:1},
            kimono:{decoration:{position:{large:{x:1,y:1},small:{x:1,y:1}},size:{large:{x:1,y:1},small:{x:1,y:1}}},
            main:{back:{x:1,y:1},front:{x:1,y:1}},outside:{back:{x:1,y:1},front:{x:1,y:1}},fringe:{back:{x:1,y:1},front:{x:1,y:1}},bow:1,flower:1},
            under:{top:1,bottom:1,bow:1,under:{top:1,button:1}},
        }

        this.trigger.display={flower:true,
            hair:{back:true,front:true},eye:[true,true],sandal:{back:[false,false],front:[false,false]},sleeve:{back:false,front:false},necklace:{back:false,front:false},
            skin:{legs:true,body:true,head:true,button:true},
            kimono:{main:{back:false,front:false},outside:{back:false,front:false},fringe:{back:false,front:false},decoration:{large:false,small:false},bow:false,flower:false},
            under:{top:false,bottom:false,bow:false,under:{top:true,button:true,bottom:true}},
        }

        this.sprites={detail:3,spin:0,spinDetail:0,hair:{back:[],front:[]},kimono:{main:{back:[],front:[]},outside:{back:[],front:[]},fringe:{back:[],front:[]}}}

        this.generated={parts:[false,false,false,false,false,false],sprites:[false,false,false,false]}

        if(this.trigger.display.kimono.main.back||this.trigger.display.kimono.main.front){this.generateParts(0)}
        if(this.trigger.display.kimono.outside.back||this.trigger.display.kimono.outside.front){this.generateParts(1)}
        if(this.trigger.display.kimono.fringe.back||this.trigger.display.kimono.fringe.front){this.generateParts(2)}
        if(this.trigger.display.kimono.decoration.large){this.generateParts(3)}
        if(this.trigger.display.kimono.decoration.small){this.generateParts(4)}
        if(this.trigger.display.under.top||this.trigger.display.under.bottom){this.generateParts(5)}

        if(this.trigger.display.hair.back||this.trigger.display.hair.front){this.generateSprites(0)}
        if(this.trigger.display.kimono.main.back||this.trigger.display.kimono.main.front){this.generateSprites(1)}
        if(this.trigger.display.kimono.outside.back||this.trigger.display.kimono.outside.front){this.generateSprites(2)}
        if(this.trigger.display.kimono.fringe.back||this.trigger.display.kimono.fringe.front){this.generateSprites(3)}

        this.movement={speed:0.4,jump:8}

        this.fade=1

        this.size=3

        this.trigger.gravity=false
    }
    generateParts(type){
        this.generated.parts[type]=true
        switch(type){
            case 0:
                for(let g=0;g<5;g++){
                    this.kimono.main.push({spin:[-120+g*48,-96+g*48,-108+g*48],y:[0,0,16+g*5]})
                    this.kimono.main.push({spin:[-108+g*48,-92+g*48,-87+g*48],y:[16+g*5,0,15.5+g*5]})
                    this.kimono.main.push({spin:[-92+g*48,-84+g*48,-87+g*48],y:[0,17.5+g*5,15.5+g*5]})
                    this.kimono.main.push({spin:[-92+g*48,-68+g*48,-84+g*48],y:[0,0,17.5+g*5]})
                    this.kimono.main.push({spin:[-84+g*48,-75+g*48,-72+g*48],y:[17.5+g*5,0,17+g*5]})
                    this.kimono.main.push({spin:[-75+g*48,-60+g*48,-72+g*48],y:[0,21+g*5,17+g*5]})
                }
                this.kimono.main.push({spin:[117,132,132],y:[0,0,41]})
                for(let g=0;g<2;g++){
                    this.kimono.main.push({spin:[132+g*48,146+g*48,132+g*48],y:[0,39,41+g]})
                    this.kimono.main.push({spin:[132+g*48,156+g*48,146+g*48],y:[0,0,39]})
                    this.kimono.main.push({spin:[146+g*48,156+g*48,156+g*48],y:[39,0,40]})
                    this.kimono.main.push({spin:[156+g*48,166+g*48,156+g*48],y:[0,39,40]})
                    this.kimono.main.push({spin:[180+g*48,156+g*48,166+g*48],y:[0,0,39]})
                    this.kimono.main.push({spin:[166+g*48,180+g*48,180+g*48],y:[39,0,42-g]})
                }
                this.kimono.main.push({spin:[228,243,228],y:[0,0,41]})
                for(let g=4;g>=-3;g--){
                    this.kimono.main.push({spin:[75-g*48,60-g*48,72-g*48],y:[0,21+g*5,17+g*5]})
                    this.kimono.main.push({spin:[84-g*48,75-g*48,72-g*48],y:[17.5+g*5,0,17+g*5]})
                    this.kimono.main.push({spin:[92-g*48,68-g*48,84-g*48],y:[0,0,17.5+g*5]})
                    this.kimono.main.push({spin:[92-g*48,84-g*48,87-g*48],y:[0,17.5+g*5,15.5+g*5]})
                    this.kimono.main.push({spin:[108-g*48,92-g*48,87-g*48],y:[16+g*5,0,15.5+g*5]})
                    this.kimono.main.push({spin:[120-g*48,96-g*48,108-g*48],y:[0,0,16+g*5]})
                }
            break
            case 1:
                for(let g=0;g<15;g++){
                   this.kimono.outside.push({spin:[-177+g*24,-159+g*24,-168+g*24],height:3})
                    this.kimono.outside.push({spin:[-187+g*24,-173+g*24,-180+g*24],height:1.5})
                }
            break
            case 2:
                for(let g=0;g<30;g++){
                    this.kimono.fringe.push({spin:[-186+g*12,-174+g*12,-180+g*12],height:-2})
                    this.kimono.fringe.push({spin:[-186+g*12,-174+g*12,-180+g*12],height:2})
                }
            break
            case 3:
                for(let g=0;g<2;g++){
                    this.kimono.decoration.large.push({spin:90-g*47.5,rotate:24,y:50-g*5,width:0.75,height:1.5})
                }
                this.kimono.decoration.large.push({spin:134,rotate:12,y:54,width:0.75,height:1.5})
                this.kimono.decoration.large.push({spin:180,rotate:0,y:55,width:0.75,height:1.5})
                this.kimono.decoration.large.push({spin:226,rotate:-12,y:54,width:0.75,height:1.5})
                for(let g=0;g<7;g++){
                    this.kimono.decoration.large.push({spin:270+g*47.5,rotate:-24,y:50-g*5,width:0.75,height:1.5})
                }
            break
            case 4:
                for(let g=0;g<2;g++){
                    this.kimono.decoration.small.push({spin:66-g*47.5,rotate:24,y:47-g*5,width:0.5,height:1})
                }
                this.kimono.decoration.small.push({spin:112,rotate:21,y:52,width:0.5,height:1})
                this.kimono.decoration.small.push({spin:156,rotate:6,y:54.5,width:0.5,height:1})
                this.kimono.decoration.small.push({spin:204,rotate:-6,y:54.5,width:0.5,height:1})
                this.kimono.decoration.small.push({spin:248,rotate:-21,y:52,width:0.5,height:1})
                for(let g=0;g<7;g++){
                    this.kimono.decoration.small.push({spin:294+g*47.5,rotate:-24,y:47-g*5,width:0.5,height:1})
                }
            break
            case 5:
                for(let g=0;g<12;g++){
                    this.spin.under.top.push(g*30)
                    this.spin.under.bottom.push(g*30+15)
                }
            break
        }
    }
    generateSprites(type){
        this.generated.sprites[type]=true
        switch(type){
            case 0:
                this.sprites.hair={front:[],back:[]}
                for(let g=0;g<360/this.sprites.detail;g++){
                    this.sprites.hair.front.push(createGraphics(200,300))
                    setupLayer(this.sprites.hair.front[g])
                    this.sprites.hair.front[g].translate(100,100)
                    this.sprites.hair.front[g].scale(5)
                    this.generateSprite(this.sprites.hair.front[g],0,g*this.sprites.detail)
                    print('Generated HF-'+(g+1))
                    this.sprites.hair.back.push(createGraphics(200,300))
                    setupLayer(this.sprites.hair.back[g])
                    this.sprites.hair.back[g].translate(100,100)
                    this.sprites.hair.back[g].scale(5)
                    this.generateSprite(this.sprites.hair.back[g],1,g*this.sprites.detail)
                    print('Generated HB-'+(g+1))
                }
            break
            case 1:
                this.sprites.kimono.main={front:[],back:[]}
                for(let g=0;g<360/this.sprites.detail;g++){
                    this.sprites.kimono.main.front.push(createGraphics(150,330))
                    setupLayer(this.sprites.kimono.main.front[g])
                    this.sprites.kimono.main.front[g].translate(75,0)
                    this.sprites.kimono.main.front[g].scale(5)
                    this.generateSprite(this.sprites.kimono.main.front[g],2,g*this.sprites.detail)
                    print('Generated KMF-'+(g+1))
                    this.sprites.kimono.main.back.push(createGraphics(150,330))
                    setupLayer(this.sprites.kimono.main.back[g])
                    this.sprites.kimono.main.back[g].translate(75,0)
                    this.sprites.kimono.main.back[g].scale(5)
                    this.generateSprite(this.sprites.kimono.main.back[g],3,g*this.sprites.detail)
                    print('Generated KMB-'+(g+1))
                }
            break
            case 2:
                this.sprites.kimono.outside={front:[],back:[]}
                for(let g=0;g<24;g++){
                    this.sprites.kimono.outside.front.push(createGraphics(150,200))
                    setupLayer(this.sprites.kimono.outside.front[g])
                    this.sprites.kimono.outside.front[g].translate(75,0)
                    this.sprites.kimono.outside.front[g].scale(5)
                    this.generateSprite(this.sprites.kimono.outside.front[g],4,g)
                    print('Generated KOF-'+(g+1))
                    this.sprites.kimono.outside.back.push(createGraphics(150,200))
                    setupLayer(this.sprites.kimono.outside.back[g])
                    this.sprites.kimono.outside.back[g].translate(75,0)
                    this.sprites.kimono.outside.back[g].scale(5)
                    this.generateSprite(this.sprites.kimono.outside.back[g],5,g)
                    print('Generated KOB-'+(g+1))
                }
            break
            case 3:
                this.sprites.kimono.fringe={front:[],back:[]}
                for(let g=0;g<12;g++){
                    this.sprites.kimono.fringe.front.push(createGraphics(150,50))
                    setupLayer(this.sprites.kimono.fringe.front[g])
                    this.sprites.kimono.fringe.front[g].translate(75,25)
                    this.sprites.kimono.fringe.front[g].scale(5)
                    this.generateSprite(this.sprites.kimono.fringe.front[g],6,g)
                    print('Generated KFF-'+(g+1))
                    this.sprites.kimono.fringe.back.push(createGraphics(150,50))
                    setupLayer(this.sprites.kimono.fringe.back[g])
                    this.sprites.kimono.fringe.back[g].translate(75,25)
                    this.sprites.kimono.fringe.back[g].scale(5)
                    this.generateSprite(this.sprites.kimono.fringe.back[g],7,g)
                    print('Generated KFB-'+(g+1))
                }
            break
        }
    }
    generateSprite(layer,type,direction){
        switch(type){
            case 0:
                this.controlSpin(this.hair,direction,0)
                this.displayTrianglesFront(layer,this.hair,direction,0,36,1,0.1,this.color.hair.front,1)
                layer.arc(0,0,36,36,-180,0)
                layer.line(-18,0,18,0)
            break
            case 1:
                this.displayTrianglesBack(layer,this.hair,direction,0,36,1,0.1,this.color.hair.back,1)
            break
            case 2:
                this.controlSpin(this.kimono.main,direction,1)
                this.displayTrianglesFrontMerge(layer,this.kimono.main,direction,20,10,0.5,0.16,this.color.kimono.main.start,this.color.kimono.main.end,1)
            break
            case 3:
                this.displayTrianglesBackMerge(layer,this.kimono.main,direction,20,10,0.5,0.16,this.color.kimono.mainBack.start,this.color.kimono.mainBack.end,1)
            break
            case 4:
                this.controlSpin(this.kimono.outside,direction,0)
                this.displayTrianglesFront(layer,this.kimono.outside,direction,24,18,0.5,0.2,this.color.kimono.outside,1)
                layer.quad(-5,5,5,5,9,24,-9,24)
            break
            case 5:
                this.displayTrianglesBack(layer,this.kimono.outside,direction,24,18,0.5,0.2,this.color.kimono.outsideBack,1)
            break
            case 6:
                this.controlSpin(this.kimono.fringe,direction,0)
                this.displayTrianglesFront(layer,this.kimono.fringe,direction,0,18,0.5,0.2,this.color.kimono.fringe,1)
            break
            case 7:
                this.displayTrianglesBack(layer,this.kimono.fringe,direction,0,18,0.5,0.2,this.color.kimono.fringeBack,1)
            break
        }
    }
    calculateParts(){
        for(let g=0;g<2;g++){
            this.parts.legs[g].middle.x=this.parts.legs[g].top.x+sin(this.anim.legs[g].top)*this.anim.legs[g].length.top
            this.parts.legs[g].middle.y=this.parts.legs[g].top.y+cos(this.anim.legs[g].top)*this.anim.legs[g].length.top
            this.parts.legs[g].bottom.x=this.parts.legs[g].middle.x+sin(this.anim.legs[g].bottom)*this.anim.legs[g].length.bottom
            this.parts.legs[g].bottom.y=this.parts.legs[g].middle.y+cos(this.anim.legs[g].bottom)*this.anim.legs[g].length.bottom
            this.parts.legs[g].sandal.front.x=this.parts.legs[g].middle.x+sin(this.anim.legs[g].bottom)*this.anim.legs[g].length.sandal.front
            this.parts.legs[g].sandal.front.y=this.parts.legs[g].middle.y+cos(this.anim.legs[g].bottom)*this.anim.legs[g].length.sandal.front
            this.parts.legs[g].sandal.back.x=this.parts.legs[g].middle.x+sin(this.anim.legs[g].bottom)*this.anim.legs[g].length.sandal.back
            this.parts.legs[g].sandal.back.y=this.parts.legs[g].middle.y+cos(this.anim.legs[g].bottom)*this.anim.legs[g].length.sandal.back

            this.graphics.legs[g].top.x=this.parts.legs[g].top.x*sin(this.spin.legs[g].top+this.anim.direction),
            this.graphics.legs[g].top.y=this.parts.legs[g].top.y
            this.graphics.legs[g].middle.x=this.parts.legs[g].middle.x*sin(this.spin.legs[g].top+this.anim.direction),
            this.graphics.legs[g].middle.y=this.parts.legs[g].middle.y
            this.graphics.legs[g].bottom.x=this.parts.legs[g].bottom.x*sin(this.spin.legs[g].bottom+this.anim.direction),
            this.graphics.legs[g].bottom.y=this.parts.legs[g].bottom.y
            this.graphics.legs[g].sandal.front.x=this.parts.legs[g].sandal.front.x*sin(this.spin.legs[g].bottom+this.anim.direction),
            this.graphics.legs[g].sandal.front.y=this.parts.legs[g].sandal.front.y
            this.graphics.legs[g].sandal.back.x=this.parts.legs[g].sandal.back.x*sin(this.spin.legs[g].bottom+this.anim.direction),
            this.graphics.legs[g].sandal.back.y=this.parts.legs[g].sandal.back.y
        }
        this.sprites.spin=(((this.anim.direction%360)+360)%360)
        this.sprites.spinDetail=floor((((this.anim.direction%360)+360)%360)/this.sprites.detail)
    }
    displayTrianglesBack(layer,parts,direction,base,width,weight,slant,color,fade){
        layer.fill(color[0],color[1],color[2],fade)
        layer.stroke(color[0],color[1],color[2],fade)
        layer.strokeWeight(weight)
        layer.strokeJoin(ROUND)
        for(let part of parts){
            if(cos(part.spin[1]+direction)<=0&&cos(part.spin[0]+direction)>0){
                if(cos(part.spin[2]+direction)>0){
                    layer.triangle(sin(part.spin[1]+direction)*width/2,base,width/2,base,width/2+part.height*(1-(90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))*slant,base+part.height*(1-(90-part.spin[2]-direction)/(part.spin[1]-part.spin[2])))
                }else{
                    layer.quad(sin(part.spin[1]+direction)*width/2,base,width/2,base,width/2+part.height*(1-(90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))*slant,base+part.height*(1-(90-part.spin[2]-direction)/(part.spin[0]-part.spin[2])),sin(part.spin[2]+direction)*(width/2+part.height*slant),base+part.height)
                }
            }else if(cos(part.spin[0]+direction)<=0&&cos(part.spin[1]+direction)>0){
                if(cos(part.spin[2]+direction)>0){
                    layer.triangle(sin(part.spin[0]+direction)*width/2,base,-width/2,base,-width/2-part.height*(1-(-90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))*slant,base+part.height*(1-(-90-part.spin[2]-direction)/(part.spin[0]-part.spin[2])))
                }else{
                    layer.quad(sin(part.spin[0]+direction)*width/2,base,-width/2,base,-width/2-part.height*(1-(-90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))*slant,base+part.height*(1-(-90-part.spin[2]-direction)/(part.spin[1]-part.spin[2])),sin(part.spin[2]+direction)*(width/2+part.height*slant),base+part.height)
                }
            }else if(cos(part.spin[0]+direction)<=0&&cos(part.spin[1]+direction)<=0&&cos(part.spin[2]+direction)<=0){
                layer.triangle(sin(part.spin[0]+direction)*width/2,base,sin(part.spin[1]+direction)*width/2,base,sin(part.spin[2]+direction)*(width/2+part.height*slant),base+part.height)
            }
        }
    }
    displayTrianglesFront(layer,parts,direction,base,width,weight,slant,color,fade){
        layer.fill(color[0],color[1],color[2],fade)
        layer.stroke(color[0],color[1],color[2],fade)
        layer.strokeWeight(weight)
        layer.strokeJoin(ROUND)
        for(let part of parts){
            if(cos(part.spin[1]+direction)<=0&&cos(part.spin[0]+direction)>0){
                if(cos(part.spin[2]+direction)<=0){
                    layer.triangle(sin(part.spin[0]+direction)*width/2,base,width/2,base,width/2+part.height*(1-(90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))*slant,base+part.height*(1-(90-part.spin[2]-direction)/(part.spin[0]-part.spin[2])))
                }else{
                    layer.quad(sin(part.spin[0]+direction)*width/2,base,width/2,base,width/2+part.height*(1-(90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))*slant,base+part.height*(1-(90-part.spin[2]-direction)/(part.spin[1]-part.spin[2])),sin(part.spin[2]+direction)*(width/2+part.height*slant),base+part.height)
                }
            }else if(cos(part.spin[0]+direction)<=0&&cos(part.spin[1]+direction)>0){
                if(cos(part.spin[2]+direction)<=0){
                    layer.triangle(sin(part.spin[1]+direction)*width/2,base,-width/2,base,-width/2-part.height*(1-(-90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))*slant,base+part.height*(1-(-90-part.spin[2]-direction)/(part.spin[1]-part.spin[2])))
                }else{
                    layer.quad(sin(part.spin[1]+direction)*width/2,base,-width/2,base,-width/2-part.height*(1-(-90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))*slant,base+part.height*(1-(-90-part.spin[2]-direction)/(part.spin[0]-part.spin[2])),sin(part.spin[2]+direction)*(width/2+part.height*slant),base+part.height)
                }
            }else if(cos(part.spin[0]+direction)>0&&cos(part.spin[1]+direction)>0&&cos(part.spin[2]+direction)>0){
                layer.triangle(sin(part.spin[0]+direction)*width/2,base,sin(part.spin[1]+direction)*width/2,base,sin(part.spin[2]+direction)*(width/2+part.height*slant),base+part.height)
            }
        }
    }
    displayTrianglesBackMerge(layer,parts,direction,base,width,weight,slant,color1,color2,fade){
        layer.strokeWeight(weight)
        layer.strokeJoin(ROUND)
        let g=0
        let lg=parts.length
        for(let part of parts){
            g++
            layer.fill(color1[0]*g/lg+color2[0]*(1-g/lg),color1[1]*g/lg+color2[1]*(1-g/lg),color1[2]*g/lg+color2[2]*(1-g/lg),fade)
            layer.stroke(color1[0]*g/lg+color2[0]*(1-g/lg),color1[1]*g/lg+color2[1]*(1-g/lg),color1[2]*g/lg+color2[2]*(1-g/lg),fade)
            if(cos(part.spin[1]+direction)<=0&&cos(part.spin[0]+direction)>0){
                if(cos(part.spin[2]+direction)>0){
                    layer.triangle(sin(part.spin[1]+direction)*(width/2+part.y[1]*slant),base+part.y[1],
                    width/2+(part.y[1]*(1-abs(90-part.spin[1]-direction)/abs(part.spin[0]-part.spin[1]))+part.y[0]*abs(90-part.spin[1]-direction)/abs(part.spin[0]-part.spin[1]))*slant,
                    base+part.y[1]*(1-abs(90-part.spin[1]-direction)/abs(part.spin[0]-part.spin[1]))+part.y[0]*abs(90-part.spin[1]-direction)/abs(part.spin[0]-part.spin[1]),
                    width/2+(part.y[2]*abs(1-(90-part.spin[2]-direction)/abs(part.spin[1]-part.spin[2]))+part.y[1]*abs(90-part.spin[2]-direction)/abs(part.spin[1]-part.spin[2]))*slant,
                    base+part.y[2]*abs(1-(90-part.spin[2]-direction)/abs(part.spin[1]-part.spin[2]))+part.y[1]*abs(90-part.spin[2]-direction)/abs(part.spin[1]-part.spin[2]))
                }else{
                    layer.quad(sin(part.spin[2]+direction)*(width/2+part.y[2]*slant),base+part.y[2],
                    sin(part.spin[1]+direction)*(width/2+part.y[1]*slant),base+part.y[1],
                    width/2+(part.y[1]*(1-abs(90-part.spin[1]-direction)/abs(part.spin[0]-part.spin[1]))+part.y[0]*abs(90-part.spin[1]-direction)/abs(part.spin[0]-part.spin[1]))*slant,
                    base+part.y[1]*(1-abs(90-part.spin[1]-direction)/abs(part.spin[0]-part.spin[1]))+part.y[0]*abs(90-part.spin[1]-direction)/abs(part.spin[0]-part.spin[1]),
                    width/2+(part.y[2]*(1-(90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))+part.y[0]*(90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))*slant,
                    base+part.y[2]*(1-(90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))+part.y[0]*(90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))
                }
            }else if(cos(part.spin[0]+direction)<=0&&cos(part.spin[1]+direction)>0){
                if(cos(part.spin[2]+direction)>0){
                    layer.triangle(sin(part.spin[0]+direction)*(width/2+part.y[0]*slant),base+part.y[0],
                    -width/2-(part.y[0]*(1-abs(-90-part.spin[0]-direction)/abs(part.spin[1]-part.spin[0]))+part.y[1]*abs(-90-part.spin[0]-direction)/abs(part.spin[1]-part.spin[0]))*slant,
                    base+part.y[0]*(1-abs(-90-part.spin[0]-direction)/abs(part.spin[1]-part.spin[0]))+part.y[1]*abs(-90-part.spin[0]-direction)/abs(part.spin[1]-part.spin[0]),
                    -width/2-(part.y[2]*(1-(-90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))+part.y[0]*(-90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))*slant,
                    base+part.y[2]*(1-(-90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))+part.y[0]*(-90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))
                }else{
                    layer.quad(sin(part.spin[2]+direction)*(width/2+part.y[2]*slant),base+part.y[2],
                    sin(part.spin[0]+direction)*(width/2+part.y[0]*slant),base+part.y[0],
                    -width/2-(part.y[0]*(1-abs(-90-part.spin[0]-direction)/abs(part.spin[1]-part.spin[0]))+part.y[1]*abs(-90-part.spin[0]-direction)/abs(part.spin[1]-part.spin[0]))*slant,
                    base+part.y[0]*(1-abs(-90-part.spin[0]-direction)/abs(part.spin[1]-part.spin[0]))+part.y[1]*abs(-90-part.spin[0]-direction)/abs(part.spin[1]-part.spin[0]),
                    -width/2-(part.y[2]*(1-(-90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))+part.y[1]*(-90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))*slant,
                    base+part.y[2]*(1-(-90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))+part.y[1]*(-90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))
                }
            }else if(cos(part.spin[0]+direction)<=0&&cos(part.spin[1]+direction)<=0&&cos(part.spin[2]+direction)<=0){
                layer.triangle(sin(part.spin[0]+direction)*(width/2+part.y[0]*slant),base+part.y[0],sin(part.spin[1]+direction)*(width/2+part.y[1]*slant),base+part.y[1],sin(part.spin[2]+direction)*(width/2+part.y[2]*slant),base+part.y[2])
            }
        }
    }
    displayTrianglesFrontMerge(layer,parts,direction,base,width,weight,slant,color1,color2,fade){
        layer.strokeWeight(weight)
        layer.strokeJoin(ROUND)
        let g=0
        let lg=parts.length
        for(let part of parts){
            g++
            layer.fill(color1[0]*g/lg+color2[0]*(1-g/lg),color1[1]*g/lg+color2[1]*(1-g/lg),color1[2]*g/lg+color2[2]*(1-g/lg),fade)
            layer.stroke(color1[0]*g/lg+color2[0]*(1-g/lg),color1[1]*g/lg+color2[1]*(1-g/lg),color1[2]*g/lg+color2[2]*(1-g/lg),fade)
            if(cos(part.spin[1]+direction)<=0&&cos(part.spin[0]+direction)>0){
                if(cos(part.spin[2]+direction)<=0){
                    layer.triangle(sin(part.spin[0]+direction)*(width/2+part.y[0]*slant),base+part.y[0],
                    width/2+(part.y[0]*(1-abs(90-part.spin[0]-direction)/abs(part.spin[1]-part.spin[0]))+part.y[1]*abs(90-part.spin[0]-direction)/abs(part.spin[1]-part.spin[0]))*slant,
                    base+part.y[0]*(1-abs(90-part.spin[0]-direction)/abs(part.spin[1]-part.spin[0]))+part.y[1]*abs(90-part.spin[0]-direction)/abs(part.spin[1]-part.spin[0]),
                    width/2+(part.y[2]*(1-(90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))+part.y[0]*(90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))*slant,
                    base+part.y[2]*(1-(90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))+part.y[0]*(90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))
                }else{
                    layer.quad(sin(part.spin[2]+direction)*(width/2+part.y[2]*slant),base+part.y[2],
                    sin(part.spin[0]+direction)*(width/2+part.y[0]*slant),base+part.y[0],
                    width/2+(part.y[0]*(1-(90-part.spin[0]-direction)/(part.spin[1]-part.spin[0]))+part.y[1]*(90-part.spin[0]-direction)/(part.spin[1]-part.spin[0]))*slant,
                    base+part.y[0]*(1-(90-part.spin[0]-direction)/(part.spin[1]-part.spin[0]))+part.y[1]*(90-part.spin[0]-direction)/(part.spin[1]-part.spin[0]),
                    width/2+(part.y[2]*(1-(90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))+part.y[1]*(90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))*slant,
                    base+part.y[2]*(1-(90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))+part.y[1]*(90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))
                }
            }else if(cos(part.spin[0]+direction)<=0&&cos(part.spin[1]+direction)>0){
                if(cos(part.spin[2]+direction)<=0){
                    layer.triangle(sin(part.spin[1]+direction)*(width/2+part.y[1]*slant),base+part.y[1],
                    -width/2-(part.y[1]*(1-abs(-90-part.spin[1]-direction)/abs(part.spin[0]-part.spin[1]))+part.y[0]*abs(-90-part.spin[1]-direction)/abs(part.spin[0]-part.spin[1]))*slant,
                    base+part.y[1]*(1-abs(-90-part.spin[1]-direction)/abs(part.spin[0]-part.spin[1]))+part.y[0]*abs(-90-part.spin[1]-direction)/abs(part.spin[0]-part.spin[1]),
                    -width/2-(part.y[2]*(1-(-90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))+part.y[1]*(-90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))*slant,
                    base+part.y[2]*(1-(-90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))+part.y[1]*(-90-part.spin[2]-direction)/(part.spin[1]-part.spin[2]))
                }else{
                    layer.quad(sin(part.spin[2]+direction)*(width/2+part.y[2]*slant),base+part.y[2],
                    sin(part.spin[1]+direction)*(width/2+part.y[1]*slant),base+part.y[1],
                    -width/2-(part.y[1]*(1-(-90-part.spin[1]-direction)/(part.spin[0]-part.spin[1]))+part.y[0]*(-90-part.spin[1]-direction)/(part.spin[0]-part.spin[1]))*slant,
                    base+part.y[1]*(1-(-90-part.spin[1]-direction)/(part.spin[0]-part.spin[1]))+part.y[0]*(-90-part.spin[1]-direction)/(part.spin[0]-part.spin[1]),
                    -width/2-(part.y[2]*(1-(-90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))+part.y[0]*(-90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))*slant,
                    base+part.y[2]*(1-(-90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))+part.y[0]*(-90-part.spin[2]-direction)/(part.spin[0]-part.spin[2]))
                }
            }else if(cos(part.spin[0]+direction)>0&&cos(part.spin[1]+direction)>0&&cos(part.spin[2]+direction)>0){
                layer.triangle(sin(part.spin[0]+direction)*(width/2+part.y[0]*slant),base+part.y[0],sin(part.spin[1]+direction)*(width/2+part.y[1]*slant),base+part.y[1],sin(part.spin[2]+direction)*(width/2+part.y[2]*slant),base+part.y[2])
            }
        }
    }
    display(){
        this.calculateParts()
        this.layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
        this.layer.scale(this.size)
        if(this.fade>0&&this.size>0){
            if(this.trigger.display.hair.back){
                this.layer.image(this.sprites.hair.back[this.sprites.spinDetail],-20*this.fade,-75-20*this.fade,40*this.fade,60*this.fade)
            }
            /*if(this.anim.sleeve.back>0&&this.trigger.display.sleeve.back){
                this.layer.noStroke()
                this.layer.fill(230,186,197,this.fade*this.anim.sleeve.back)
                this.layer.translate(-3,-51)
                this.layer.rotate(-atan2(-12,27))
                this.layer.quad(3,0,-3,0,-3,24,12,30)
                this.layer.rotate(atan2(-12,27))
                this.layer.translate(6,0)
                this.layer.rotate(-atan2(12,27))
                this.layer.quad(3,0,-3,0,-12,30,3,24)
                this.layer.rotate(atan2(12,27))
                this.layer.translate(-6,0)
                this.layer.fill(235,209,216,this.fade*this.anim.sleeve.back)
                this.layer.rotate(-atan2(-12,27))
                this.layer.quad(1,0,-1,0,-1,25,4,27)
                this.layer.rotate(atan2(-12,27))
                this.layer.translate(6,0)
                this.layer.rotate(-atan2(12,27))
                this.layer.quad(1,0,-1,0,-4,27,1,25)
                this.layer.rotate(atan2(12,27))
                this.layer.translate(-3,51)
            }*/
            if(this.trigger.display.necklace.back){
                this.layer.noFill()
                this.layer.stroke(this.color.necklace[0],this.color.necklace[1],this.color.necklace[2],this.fade*this.fades.necklace.back)
                this.layer.strokeWeight(0.5)
                if(cos(this.spin.necklace[0]+this.anim.direction)<=0){
                    this.layer.arc(0,-59,6,3,atan2(sin(90-this.spin.necklace[0]-this.anim.direction),cos(90-this.spin.necklace[0]-this.anim.direction)*2),0)
                }
                if(cos(this.spin.necklace[1]+this.anim.direction)<=0){
                    this.layer.arc(0,-59,6,3,-180,atan2(sin(90-this.spin.necklace[1]-this.anim.direction),cos(90-this.spin.necklace[1]-this.anim.direction)*2))
                }
                if(cos(this.spin.necklace[0]+this.anim.direction)>0&&cos(this.spin.necklace[1]+this.anim.direction)>0){
                    this.layer.arc(0,-59,6,3,-180,0)
                }
                if(!(this.spin.necklace[0]+this.anim.direction>-130&&this.spin.necklace[0]+this.anim.direction<65)){
                    if(sin(this.spin.necklace[2]+this.anim.direction)*5.25<sin(this.spin.necklace[0]+this.anim.direction)*3){
                        this.layer.arc(sin(this.spin.necklace[0]+this.anim.direction)*3,-54,sin(this.spin.necklace[2]+this.anim.direction)*10.5-sin(this.spin.necklace[0]+this.anim.direction)*6,10-cos(this.spin.necklace[0]+this.anim.direction)*3,-180,-90)
                    }else{
                        this.layer.arc(sin(this.spin.necklace[0]+this.anim.direction)*3,-54,sin(this.spin.necklace[2]+this.anim.direction)*10.5-sin(this.spin.necklace[0]+this.anim.direction)*6,10-cos(this.spin.necklace[0]+this.anim.direction)*3,-90,0)
                    }
                }
                if(!(this.spin.necklace[1]+this.anim.direction<130&&this.spin.necklace[1]+this.anim.direction>-65)){
                    if(sin(this.spin.necklace[2]+this.anim.direction)*5.25>sin(this.spin.necklace[1]+this.anim.direction)*3){
                        this.layer.arc(sin(this.spin.necklace[1]+this.anim.direction)*3,-54,sin(this.spin.necklace[2]+this.anim.direction)*10.5-sin(this.spin.necklace[1]+this.anim.direction)*6,10-cos(this.spin.necklace[1]+this.anim.direction)*3,-90,0)
                    }else{
                        this.layer.arc(sin(this.spin.necklace[1]+this.anim.direction)*3,-54,sin(this.spin.necklace[2]+this.anim.direction)*10.5-sin(this.spin.necklace[1]+this.anim.direction)*6,10-cos(this.spin.necklace[1]+this.anim.direction)*3,-180,-90)
                    }
                }
            }
            /*this.layer.stroke(255,235,217,this.fade)
            this.layer.strokeWeight(4)
            this.layer.line(-3,-54,-12,-24)
            this.layer.line(3,-54,12,-24)
            this.layer.strokeWeight(0.8)
            this.layer.stroke(202,51,60,this.fade*this.anim.kimono)
            this.layer.fill(209,80,84,this.fade*this.anim.kimono)
            this.layer.strokeJoin(ROUND)
            this.layer.triangle(0,-44,-10,-50,-10,-38)
            this.layer.triangle(0,-44,10,-50,10,-38)*/
            if(this.trigger.display.kimono.fringe.back){
                this.layer.image(this.sprites.kimono.fringe.back[this.sprites.spin%12],-15*this.fade*this.fades.kimono.fringe.back.x,this.parts.kimono.fringe-5*this.fade*this.fades.kimono.fringe.back.y,30*this.fade*this.fades.kimono.fringe.back.x,10*this.fade*this.fades.kimono.fringe.back.y)
            }
            if(this.trigger.display.kimono.outside.back){
                this.layer.image(this.sprites.kimono.outside.back[this.sprites.spin%24],-15*this.fade*this.fades.kimono.outside.back.x,this.parts.kimono.outside,30*this.fade*this.fades.kimono.outside.back.x,40*this.fade*this.fades.kimono.outside.back.y)
            }
            if(this.trigger.display.kimono.main.back){
                this.layer.image(this.sprites.kimono.main.back[this.sprites.spinDetail],-15*this.fade*this.fades.kimono.main.back.x,this.parts.kimono.main-15*this.fades.kimono.main.back.y,30*this.fade*this.fades.kimono.main.back.x,66*this.fade*this.fades.kimono.main.back.y)
            }
            if(this.trigger.display.under.under.button&&cos(this.spin.under.under.button[0]+this.anim.direction)<=0){
                this.layer.fill(mergeColor(this.color.skin.body,this.color.under.under.button,-cos(this.spin.under.under.button[0]+this.anim.direction)/4+0.75),this.fade*this.fades.under.under.button)
                this.layer.ellipse(sin(this.spin.under.under.button[0]+this.anim.direction)*5.75,-49.5,cos(this.spin.under.under.button[0]+this.anim.direction)*0.25+1,1.25)
            }
            if(this.trigger.display.under.under.button&&cos(this.spin.under.under.button[1]+this.anim.direction)<=0){
                this.layer.fill(mergeColor(this.color.skin.body,this.color.under.under.button,-cos(this.spin.under.under.button[1]+this.anim.direction)/4+0.75),this.fade*this.fades.under.under.button)
                this.layer.ellipse(sin(this.spin.under.under.button[1]+this.anim.direction)*5.75,-49.5,cos(this.spin.under.under.button[1]+this.anim.direction)*0.25+1,1.25)
            }
            if(this.trigger.display.under.under.top&&cos(this.spin.under.under.top[0]+this.anim.direction)<=0){
                this.layer.noStroke()
                this.layer.fill(mergeColor(this.color.skin.body,this.color.under.under.top,-cos(this.spin.under.under.top[0]+this.anim.direction)),this.fade*this.fades.under.under.top)
                this.layer.ellipse(sin(this.spin.under.under.top[0]+this.anim.direction)*4.2,-50,cos(this.spin.under.under.top[0]+this.anim.direction)*2.5+3.5,6)
            }
            if(this.trigger.display.under.under.top&&cos(this.spin.under.under.top[1]+this.anim.direction)<=0){
                this.layer.noStroke()
                this.layer.fill(mergeColor(this.color.skin.body,this.color.under.under.top,-cos(this.spin.under.under.top[1]+this.anim.direction)),this.fade*this.fades.under.under.top)
                this.layer.ellipse(sin(this.spin.under.under.top[1]+this.anim.direction)*4.2,-50,cos(this.spin.under.under.top[1]+this.anim.direction)*2.5+3.5,6)
            }
            if(this.trigger.display.skin.body){
                this.layer.noStroke()
                this.layer.fill(this.color.skin.body[0],this.color.skin.body[1],this.color.skin.body[2],this.fade*this.fades.skin.body)
                this.layer.ellipse(0,-46,10,30)
            }
            if(this.trigger.display.under.under.top&&cos(this.spin.under.under.top[0]+this.anim.direction)>0){
                this.layer.noStroke()
                this.layer.fill(mergeColor(this.color.skin.body,this.color.under.under.top,cos(this.spin.under.under.top[0]+this.anim.direction)),this.fade*this.fades.under.under.top)
                this.layer.ellipse(sin(this.spin.under.under.top[0]+this.anim.direction)*4.2,-50,cos(this.spin.under.under.top[0]+this.anim.direction)*2.5+3.5,6)
            }
            if(this.trigger.display.under.under.top&&cos(this.spin.under.under.top[1]+this.anim.direction)>0){
                this.layer.noStroke()
                this.layer.fill(mergeColor(this.color.skin.body,this.color.under.under.top,cos(this.spin.under.under.top[1]+this.anim.direction)),this.fade*this.fades.under.under.top)
                this.layer.ellipse(sin(this.spin.under.under.top[1]+this.anim.direction)*4.2,-50,cos(this.spin.under.under.top[1]+this.anim.direction)*2.5+3.5,6)
            }
            if(this.trigger.display.under.under.button&&cos(this.spin.under.under.button[0]+this.anim.direction)>0){
                this.layer.fill(mergeColor(this.color.skin.body,this.color.under.under.button,cos(this.spin.under.under.button[0]+this.anim.direction)/4+0.75),this.fade*this.fades.under.under.button)
                this.layer.ellipse(sin(this.spin.under.under.button[0]+this.anim.direction)*5.75,-49.5,cos(this.spin.under.under.button[0]+this.anim.direction)*0.25+1,1.25)
            }
            if(this.trigger.display.under.under.button&&cos(this.spin.under.under.button[1]+this.anim.direction)>0){
                this.layer.fill(mergeColor(this.color.skin.body,this.color.under.under.button,cos(this.spin.under.under.button[1]+this.anim.direction)/4+0.75),this.fade*this.fades.under.under.button)
                this.layer.ellipse(sin(this.spin.under.under.button[1]+this.anim.direction)*5.75,-49.5,cos(this.spin.under.under.button[1]+this.anim.direction)*0.25+1,1.25)
            }
            if(this.trigger.display.skin.button){
                if(cos(this.spin.button+this.anim.direction)>0){
                    this.layer.fill(this.color.skin.button[0],this.color.skin.button[1],this.color.skin.button[2],this.fade*this.fades.skin.button)
                    this.layer.ellipse(sin(this.spin.button+this.anim.direction)*5.3,-42,1*cos(this.spin.button+this.anim.direction),2)
                }
            }
            /*if(this.anim.sleeve.front>0&&this.trigger.display.sleeve.front){
                this.layer.noStroke()
                this.layer.fill(249,218,225,this.fade*this.anim.sleeve.front)
                this.layer.translate(-3,-51)
                this.layer.rotate(-atan2(-12,27))
                this.layer.quad(3,0,-3,0,-4,12,4,12)
                this.layer.rotate(atan2(-12,27))
                this.layer.translate(6,0)
                this.layer.rotate(-atan2(12,27))
                this.layer.quad(3,0,-3,0,-4,12,4,12)
                this.layer.rotate(atan2(12,27))
                this.layer.translate(-6,0)
                this.layer.fill(228,184,195,this.fade*this.anim.sleeve.front)
                this.layer.rotate(-atan2(-12,27))
                this.layer.quad(1,0,-1,0,-4/3,12,4/3,12)
                this.layer.rotate(atan2(-12,27))
                this.layer.translate(6,0)
                this.layer.rotate(-atan2(12,27))
                this.layer.quad(1,0,-1,0,-4/3,12,4/3,12)
                this.layer.rotate(atan2(12,27))
                this.layer.translate(-3,51)
            }*/
            for(let g=0;g<2;g++){
                for(let h=0;h<2;h++){
                    if((g==0&&h==0||g==1&&h==1)&&cos(this.spin.legs[0].bottom+this.anim.direction)<=cos(this.spin.legs[1].bottom+this.anim.direction)||(g==0&&h==1||g==1&&h==0)&&cos(this.spin.legs[0].bottom+this.anim.direction)>cos(this.spin.legs[1].bottom+this.anim.direction)){
                        if(this.fades.sandal.back[h]>0&&this.trigger.display.sandal.back[h]){
                            this.layer.translate(this.graphics.legs[h].sandal.back.x,this.graphics.legs[h].sandal.back.y+1.5)
                            this.layer.scale(1.2,0.6)
                            this.layer.rotate(-this.anim.direction+this.spin.sandal[h])
                            this.layer.image(graphics.minor[0],-4*this.fades.sandal.back[h]*this.fade,-4*this.fades.sandal.back[h]*this.fade,8*this.fades.sandal.back[h]*this.fade,8*this.fades.sandal.back[h]*this.fade)
                            this.layer.rotate(this.anim.direction-this.spin.sandal[h])
                            this.layer.scale(5/6,5/3)
                            this.layer.translate(-this.graphics.legs[h].sandal.back.x,-this.graphics.legs[h].sandal.back.y-1.5)
                        }
                        if(this.fades.sandal.front[h]>0&&this.trigger.display.sandal.front[h]){
                            this.layer.translate(this.graphics.legs[h].sandal.front.x,this.graphics.legs[h].sandal.front.y+1.5)
                            this.layer.scale(1.2,0.6)
                            this.layer.rotate(-this.anim.direction+this.spin.sandal[h])
                            for(let i=0;i<16;i++){
                                if(cos(this.anim.direction+(65-floor(i/2)*5)*((i%2)*2-1)-this.spin.sandal[h])<=0.1){
                                    this.layer.image(graphics.minor[i+1],-4*this.fades.sandal.front[h]*this.fade,-4*this.fades.sandal.front[h]*this.fade,8*this.fades.sandal.front[h]*this.fade,8*this.fades.sandal.front[h]*this.fade)
                                }
                            }
                            for(let i=0;i<16;i++){
                                if(cos(this.anim.direction+(65-floor(i/2)*5)*((i%2)*2-1)-this.spin.sandal[h])<=0.1){
                                    this.layer.image(graphics.minor[i+17],-4*this.fades.sandal.front[h]*this.fade,-4*this.fades.sandal.front[h]*this.fade,8*this.fades.sandal.front[h]*this.fade,8*this.fades.sandal.front[h]*this.fade)
                                }
                            }
                            this.layer.rotate(this.anim.direction-this.spin.sandal[h])
                            this.layer.scale(5/6,5/3)
                            this.layer.translate(-this.graphics.legs[h].sandal.front.x,-this.graphics.legs[h].sandal.front.y-1.5)
                        }
                        if(this.trigger.display.skin.legs){
                            this.layer.stroke(this.color.skin.legs[0],this.color.skin.legs[1],this.color.skin.legs[2],this.fade*this.fades.skin.legs)
                            this.layer.strokeWeight(4)
                            this.layer.line(this.graphics.legs[h].top.x,this.graphics.legs[h].top.y,this.graphics.legs[h].middle.x,this.parts.legs[h].middle.y)
                            this.layer.line(this.graphics.legs[h].middle.x,this.graphics.legs[h].middle.y,this.graphics.legs[h].bottom.x,this.parts.legs[h].bottom.y)
                        }
                        if(this.fades.sandal.front[h]>0&&this.trigger.display.sandal.front[h]){
                            this.layer.translate(this.graphics.legs[h].sandal.front.x,this.graphics.legs[h].sandal.front.y+1.5)
                            this.layer.scale(1.2,0.6)
                            this.layer.rotate(-this.anim.direction+this.spin.sandal[h])
                            for(let i=0;i<16;i++){
                                if(cos(this.anim.direction+(65-floor(i/2)*5)*((i%2)*2-1)-this.spin.sandal[h])>0.1){
                                    this.layer.image(graphics.minor[i+1],-4*this.fades.sandal.front[h]*this.fade,-4*this.fades.sandal.front[h]*this.fade,8*this.fades.sandal.front[h]*this.fade,8*this.fades.sandal.front[h]*this.fade)
                                }
                            }
                            for(let i=0;i<16;i++){
                                if(cos(this.anim.direction+(65-floor(i/2)*5)*((i%2)*2-1)-this.spin.sandal[h])>0.1){
                                    this.layer.image(graphics.minor[i+17],-4*this.fades.sandal.front[h]*this.fade,-4*this.fades.sandal.front[h]*this.fade,8*this.fades.sandal.front[h]*this.fade,8*this.fades.sandal.front[h]*this.fade)
                                }
                            }
                            this.layer.rotate(this.anim.direction-this.spin.sandal[h])
                            this.layer.scale(5/6,5/3)
                            this.layer.translate(-this.graphics.legs[h].sandal.front.x,-this.graphics.legs[h].sandal.front.y-1.5)
                        }
                    }
                }
            }
            if(this.trigger.display.under.bottom){
                this.layer.noStroke()
                this.layer.fill(this.color.under.outside[0],this.color.under.outside[1],this.color.under.outside[2],this.fade*this.fades.under.bottom)
                this.layer.beginShape()
                this.layer.vertex(-5.25*this.anim.under.bottom.x,this.parts.under.bottom-7*this.anim.under.bottom.y)
                this.layer.bezierVertex(-5*this.anim.under.bottom.x,this.parts.under.bottom-5*this.anim.under.bottom.y,-3*this.anim.under.bottom.x,this.parts.under.bottom-1*this.anim.under.bottom.y,0,this.parts.under.bottom)
                this.layer.bezierVertex(3*this.anim.under.bottom.x,this.parts.under.bottom-1*this.anim.under.bottom.y,5*this.anim.under.bottom.x,this.parts.under.bottom-5*this.anim.under.bottom.y,5.25*this.anim.under.bottom.x,this.parts.under.bottom-7*this.anim.under.bottom.y)
                this.layer.endShape()
                this.layer.fill(this.color.under.fringe[0],this.color.under.fringe[1],this.color.under.fringe[2],this.fade)
                for(let g=0,lg=this.spin.under.top.length;g<lg;g++){
                    if(cos(this.spin.under.top[g]+this.anim.direction)>0){
                        this.layer.ellipse(5*sin(this.spin.under.top[g]+this.anim.direction)*this.anim.under.bottom.x,this.parts.under.bottom-6.5*this.anim.under.bottom.y,cos(this.spin.under.top[g]+this.anim.direction)*this.anim.under.bottom.x,2.5*this.anim.under.bottom.y)
                    }
                }
                for(let g=0,lg=this.spin.under.bottom.length;g<lg;g++){
                    if(cos(this.spin.under.bottom[g]+this.anim.direction)>0){
                        this.layer.ellipse(5*sin(this.spin.under.bottom[g]+this.anim.direction)*this.anim.under.bottom.x,this.parts.under.bottom-5.5*this.anim.under.bottom.y,cos(this.spin.under.bottom[g]+this.anim.direction)*this.anim.under.bottom.x,2.5*this.anim.under.bottom.y)
                    }
                }
            }
            if(this.trigger.display.under.top){
                this.layer.noStroke()
                this.layer.fill(this.color.under.outside[0],this.color.under.outside[1],this.color.under.outside[2],this.fade*this.fades.under.top)
                this.layer.quad(-5.5*this.anim.under.top.x,this.parts.under.top-3.5*this.anim.under.top.y,5.5*this.anim.under.top.x,this.parts.under.top-3.5*this.anim.under.top.y,6.25*this.anim.under.top.x,this.parts.under.top+3.5*this.anim.under.top.y,-6.25*this.anim.under.top.x,this.parts.under.top+3.5*this.anim.under.top.y)
                this.layer.fill(this.color.under.fringe[0],this.color.under.fringe[1],this.color.under.fringe[2],this.fade)
                for(let g=0,lg=this.spin.under.top.length;g<lg;g++){
                    if(cos(this.spin.under.top[g]+this.anim.direction)>0){
                        this.layer.ellipse(5.5*sin(this.spin.under.top[g]+this.anim.direction)*this.anim.under.top.x,this.parts.under.top-3*this.anim.under.top.y,cos(this.spin.under.top[g]+this.anim.direction)*this.anim.under.top.x,2.5*this.anim.under.top.y)
                        this.layer.ellipse(6.15*sin(this.spin.under.top[g]+this.anim.direction)*this.anim.under.top.x,this.parts.under.top+2*this.anim.under.top.y,cos(this.spin.under.top[g]+this.anim.direction)*this.anim.under.top.x,2.5*this.anim.under.top.y)
                    }
                }
                for(let g=0,lg=this.spin.under.bottom.length;g<lg;g++){
                    if(cos(this.spin.under.bottom[g]+this.anim.direction)>0){
                        this.layer.ellipse(5.5*sin(this.spin.under.bottom[g]+this.anim.direction)*this.anim.under.top.x,this.parts.under.top-2*this.anim.under.top.y,cos(this.spin.under.bottom[g]+this.anim.direction)*this.anim.under.top.x,2.5*this.anim.under.top.y)
                        this.layer.ellipse(6.15*sin(this.spin.under.bottom[g]+this.anim.direction)*this.anim.under.top.x,this.parts.under.top+3*this.anim.under.top.y,cos(this.spin.under.bottom[g]+this.anim.direction)*this.anim.under.top.x,2.5*this.anim.under.top.y)
                    }
                }
            }
            if(this.trigger.display.under.bow){
                this.layer.noFill()
                this.layer.stroke(this.color.under.bow[0],this.color.under.bow[1],this.color.under.bow[2],this.fade*this.fades.under.bow)
                this.layer.strokeWeight(0.4)
                if(cos(this.spin.underBow.center/2+this.spin.underBow.loop[0]/2+this.anim.direction)>0){
                    this.layer.ellipse(sin(this.spin.underBow.center+this.anim.direction)*2.875*this.anim.under.bow.position.x+sin(this.spin.underBow.loop[0]*this.anim.under.bow.size.x/this.anim.under.bow.position.x+this.anim.direction)*2.875*this.anim.under.bow.position.x,this.parts.under.top+this.parts.under.bow*this.anim.under.bow.position.y,(sin(this.spin.underBow.center+this.anim.direction)*5.5*this.anim.under.bow.position.x-sin(this.spin.underBow.loop[0]*this.anim.under.bow.size.x/this.anim.under.bow.position.x+this.anim.direction)*5.5*this.anim.under.bow.position.x),1.6*this.anim.under.bow.size.y)
                }
                if(cos(this.spin.underBow.center/2+this.spin.underBow.loop[1]/2+this.anim.direction)>0){
                    this.layer.ellipse(sin(this.spin.underBow.center+this.anim.direction)*2.875*this.anim.under.bow.position.x+sin(this.spin.underBow.loop[1]*this.anim.under.bow.size.x/this.anim.under.bow.position.x+this.anim.direction)*2.875*this.anim.under.bow.position.x,this.parts.under.top+this.parts.under.bow*this.anim.under.bow.position.y,(sin(this.spin.underBow.center+this.anim.direction)*5.5*this.anim.under.bow.position.x-sin(this.spin.underBow.loop[1]*this.anim.under.bow.size.x/this.anim.under.bow.position.x+this.anim.direction)*5.5*this.anim.under.bow.position.x),1.6*this.anim.under.bow.size.y)
                }
                if(cos(this.spin.underBow.center/2+this.spin.underBow.end[0]/2+this.anim.direction)>0){
                    this.layer.line(sin(this.spin.underBow.center+this.anim.direction)*5.75*this.anim.under.bow.position.x,this.parts.under.top+this.parts.under.bow*this.anim.under.bow.position.y,sin(this.spin.underBow.end[0]*this.anim.under.bow.size.x/this.anim.under.bow.position.x+this.anim.direction)*(5.75*this.anim.under.bow.position.x+0.25*this.anim.under.bow.size.x),this.parts.under.top+(this.parts.under.bow+2.4)*this.anim.under.bow.size.y)
                }
                if(cos(this.spin.underBow.center/2+this.spin.underBow.end[1]/2+this.anim.direction)>0){
                    this.layer.line(sin(this.spin.underBow.center+this.anim.direction)*5.75*this.anim.under.bow.position.x,this.parts.under.top+this.parts.under.bow*this.anim.under.bow.position.y,sin(this.spin.underBow.end[1]*this.anim.under.bow.size.x/this.anim.under.bow.position.x+this.anim.direction)*(5.75*this.anim.under.bow.position.x+0.25*this.anim.under.bow.size.x),this.parts.under.top+(this.parts.under.bow+2.4)*this.anim.under.bow.size.y)
                }
            }
            if(this.trigger.display.necklace.front){
                this.layer.noFill()
                this.layer.stroke(this.color.necklace[0],this.color.necklace[1],this.color.necklace[2],this.fade*this.fades.necklace.front)
                this.layer.strokeWeight(0.5)
                if(cos(this.spin.necklace[0]+this.anim.direction)>0){
                    this.layer.arc(0,-59,6,3,atan2(sin(90-this.spin.necklace[0]-this.anim.direction),cos(90-this.spin.necklace[0]-this.anim.direction)*2),180)
                }
                if(cos(this.spin.necklace[1]+this.anim.direction)>0){
                    this.layer.arc(0,-59,6,3,0,atan2(sin(90-this.spin.necklace[1]-this.anim.direction),cos(90-this.spin.necklace[1]-this.anim.direction)*2))
                }
                if(cos(this.spin.necklace[0]+this.anim.direction)<=0&&cos(this.spin.necklace[1]+this.anim.direction)<=0){
                    this.layer.arc(0,-59,6,3,0,180)
                }
                if(this.spin.necklace[0]+this.anim.direction>-130&&this.spin.necklace[0]+this.anim.direction<65){
                    if(sin(this.spin.necklace[2]+this.anim.direction)*5.25<sin(this.spin.necklace[0]+this.anim.direction)*3){
                        this.layer.arc(sin(this.spin.necklace[0]+this.anim.direction)*3,-54,sin(this.spin.necklace[2]+this.anim.direction)*10.5-sin(this.spin.necklace[0]+this.anim.direction)*6,10-cos(this.spin.necklace[0]+this.anim.direction)*3,-180,-90)
                    }else{
                        this.layer.arc(sin(this.spin.necklace[0]+this.anim.direction)*3,-54,sin(this.spin.necklace[2]+this.anim.direction)*10.5-sin(this.spin.necklace[0]+this.anim.direction)*6,10-cos(this.spin.necklace[0]+this.anim.direction)*3,-90,0)
                    }
                }
                if(this.spin.necklace[1]+this.anim.direction<130&&this.spin.necklace[1]+this.anim.direction>-65){
                    if(sin(this.spin.necklace[2]+this.anim.direction)*5.25>sin(this.spin.necklace[1]+this.anim.direction)*3){
                        this.layer.arc(sin(this.spin.necklace[1]+this.anim.direction)*3,-54,sin(this.spin.necklace[2]+this.anim.direction)*10.5-sin(this.spin.necklace[1]+this.anim.direction)*6,10-cos(this.spin.necklace[1]+this.anim.direction)*3,-90,0)
                    }else{
                        this.layer.arc(sin(this.spin.necklace[1]+this.anim.direction)*3,-54,sin(this.spin.necklace[2]+this.anim.direction)*10.5-sin(this.spin.necklace[1]+this.anim.direction)*6,10-cos(this.spin.necklace[1]+this.anim.direction)*3,-180,-90)
                    }
                }
            }
            if(this.trigger.display.kimono.main.front){
                this.layer.image(this.sprites.kimono.main.front[this.sprites.spinDetail],-15*this.fade*this.fades.kimono.main.front.x,this.parts.kimono.main-15*this.fades.kimono.main.front.y,30*this.fade*this.fades.kimono.main.front.x,66*this.fade*this.fades.kimono.main.front.y)
            }
            if(this.trigger.display.kimono.decoration.small){
                this.layer.noStroke()
                this.layer.fill(this.color.kimono.decoration[0],this.color.kimono.decoration[1],this.color.kimono.decoration[2],this.fade)
                for(let g=0,lg=this.kimono.decoration.small.length;g<lg;g++){
                    if(cos(this.kimono.decoration.small[g].spin+this.anim.direction)>0){
                        this.layer.translate((2.64+this.kimono.decoration.small[g].y*0.16)*sin(this.kimono.decoration.small[g].spin+this.anim.direction)*this.fades.kimono.decoration.position.small.x,-60-11*this.fades.kimono.decoration.position.small.y+this.kimono.decoration.small[g].y*this.fades.kimono.decoration.position.small.y)
                        this.layer.rotate(this.kimono.decoration.small[g].rotate)
                        this.layer.ellipse(0,0,this.kimono.decoration.small[g].width*cos(this.kimono.decoration.small[g].spin+this.anim.direction)*this.fades.kimono.decoration.size.small.x,this.kimono.decoration.small[g].height*this.fades.kimono.decoration.size.small.y)
                        this.layer.rotate(-this.kimono.decoration.small[g].rotate)
                        this.layer.translate(-(2.64+this.kimono.decoration.small[g].y*0.16)*sin(this.kimono.decoration.small[g].spin+this.anim.direction)*this.fades.kimono.decoration.position.small.x,60+11*this.fades.kimono.decoration.position.small.y-this.kimono.decoration.small[g].y*this.fades.kimono.decoration.position.small.y)
                    }
                }
            }
            if(this.trigger.display.kimono.decoration.large){
                this.layer.noStroke()
                this.layer.fill(this.color.kimono.decoration[0],this.color.kimono.decoration[1],this.color.kimono.decoration[2],this.fade)
                for(let g=0,lg=this.kimono.decoration.large.length;g<lg;g++){
                    if(cos(this.kimono.decoration.large[g].spin+this.anim.direction)>0){
                        this.layer.translate((2.64+this.kimono.decoration.large[g].y*0.16)*sin(this.kimono.decoration.large[g].spin+this.anim.direction)*this.fades.kimono.decoration.position.large.x,this.parts.kimono.main-11*this.fades.kimono.decoration.position.large.y+this.kimono.decoration.large[g].y*this.fades.kimono.decoration.position.large.y)
                        this.layer.rotate(this.kimono.decoration.large[g].rotate)
                        this.layer.ellipse(0,0,this.kimono.decoration.large[g].width*cos(this.kimono.decoration.large[g].spin+this.anim.direction)*this.fades.kimono.decoration.size.large.x,this.kimono.decoration.large[g].height*this.fades.kimono.decoration.size.large.y)
                        this.layer.ellipse(-this.kimono.decoration.large[g].width*4/3*cos(this.kimono.decoration.large[g].spin+this.anim.direction)*this.fades.kimono.decoration.size.large.x,0,this.kimono.decoration.large[g].width*2/3*cos(this.kimono.decoration.large[g].spin+this.anim.direction)*this.fades.kimono.decoration.size.large.x,this.kimono.decoration.large[g].height*2/3*this.fades.kimono.decoration.size.large.y)
                        this.layer.ellipse(this.kimono.decoration.large[g].width*4/3*cos(this.kimono.decoration.large[g].spin+this.anim.direction)*this.fades.kimono.decoration.size.large.x,0,this.kimono.decoration.large[g].width*2/3*cos(this.kimono.decoration.large[g].spin+this.anim.direction)*this.fades.kimono.decoration.size.large.x,this.kimono.decoration.large[g].height*2/3*this.fades.kimono.decoration.size.large.y)
                        this.layer.rotate(-this.kimono.decoration.large[g].rotate)
                        this.layer.translate(-(2.64+this.kimono.decoration.large[g].y*0.16)*sin(this.kimono.decoration.large[g].spin+this.anim.direction)*this.fades.kimono.decoration.position.large.x,-this.parts.kimono.main+11*this.fades.kimono.decoration.position.large.y-this.kimono.decoration.large[g].y*this.fades.kimono.decoration.position.large.y)
                    }
                }
            }
            if(this.trigger.display.kimono.outside.front){
                this.layer.image(this.sprites.kimono.outside.front[this.sprites.spin%24],-15*this.fade*this.fades.kimono.outside.front.x,this.parts.kimono.outside,30*this.fade*this.fades.kimono.outside.front.x,40*this.fade*this.fades.kimono.outside.front.y)
            }
            if(this.trigger.display.kimono.fringe.front){
                this.layer.image(this.sprites.kimono.fringe.front[this.sprites.spin%12],-15*this.fade*this.fades.kimono.fringe.front.x,this.parts.kimono.fringe-5*this.fade*this.fades.kimono.fringe.front.y,30*this.fade*this.fades.kimono.fringe.front.x,10*this.fade*this.fades.kimono.fringe.front.y)
            }
            /*this.layer.strokeJoin(ROUND)
            this.layer.strokeWeight(0.8)
            this.layer.stroke(202,51,60,this.fade*this.anim.kimono)
            this.layer.fill(209,80,84,this.fade*this.anim.kimono)
            this.layer.quad(1,-49,1,-45,5.5,-53,4.5,-56)
            this.layer.quad(1,-49,1,-45,-5.5,-53,-4.5,-56)
            this.layer.quad(-7.8,-46,7.8,-46,8.2,-44,-8.2,-44)
            this.layer.quad(-8.2,-44,8.2,-44,8.4,-42,-8.4,-42)
            this.layer.rect(5,-40.5,2,3)
            this.layer.strokeJoin(MITER)*///Rework needed
            if(this.trigger.display.kimono.bow){
                this.layer.noFill()
                this.layer.stroke(this.color.kimono.bow[0],this.color.kimono.bow[1],this.color.kimono.bow[2],this.fade*this.fades.kimono.bow)
                this.layer.strokeWeight(0.25)
                if(cos(this.spin.bow.center/2+this.spin.bow.loop[0]/2+this.anim.direction)>0){
                    this.layer.ellipse(sin(this.spin.bow.center+this.anim.direction)*2.875*this.anim.kimono.bow.position.x+sin(this.spin.bow.loop[0]*this.anim.kimono.bow.size.x/this.anim.kimono.bow.position.x+this.anim.direction)*2.875*this.anim.kimono.bow.position.x,this.parts.kimono.bow,(sin(this.spin.bow.center+this.anim.direction)*5.5*this.anim.kimono.bow.position.x-sin(this.spin.bow.loop[0]*this.anim.kimono.bow.size.x/this.anim.kimono.bow.position.x+this.anim.direction)*5.5*this.anim.kimono.bow.position.x),1*this.anim.kimono.bow.size.y)
                }
                if(cos(this.spin.bow.center/2+this.spin.bow.loop[1]/2+this.anim.direction)>0){
                    this.layer.ellipse(sin(this.spin.bow.center+this.anim.direction)*2.875*this.anim.kimono.bow.position.x+sin(this.spin.bow.loop[1]*this.anim.kimono.bow.size.x/this.anim.kimono.bow.position.x+this.anim.direction)*2.875*this.anim.kimono.bow.position.x,this.parts.kimono.bow,(sin(this.spin.bow.center+this.anim.direction)*5.5*this.anim.kimono.bow.position.x-sin(this.spin.bow.loop[1]*this.anim.kimono.bow.size.x/this.anim.kimono.bow.position.x+this.anim.direction)*5.5*this.anim.kimono.bow.position.x),1*this.anim.kimono.bow.size.y)
                }
                if(cos(this.spin.bow.center/2+this.spin.bow.end[0]/2+this.anim.direction)>0){
                    this.layer.line(sin(this.spin.bow.center+this.anim.direction)*5.75*this.anim.kimono.bow.position.x,this.parts.kimono.bow,sin(this.spin.bow.end[0]*this.anim.kimono.bow.size.x/this.anim.kimono.bow.position.x+this.anim.direction)*(5.75*this.anim.kimono.bow.position.x+0.25*this.anim.kimono.bow.size.x),this.parts.kimono.bow+1.5*this.anim.kimono.bow.size.y)
                }
                if(cos(this.spin.bow.center/2+this.spin.bow.end[1]/2+this.anim.direction)>0){
                    this.layer.line(sin(this.spin.bow.center+this.anim.direction)*5.75*this.anim.kimono.bow.position.x,this.parts.kimono.bow,sin(this.spin.bow.end[1]*this.anim.kimono.bow.size.x/this.anim.kimono.bow.position.x+this.anim.direction)*(5.75*this.anim.kimono.bow.position.x+0.25*this.anim.kimono.bow.size.x),this.parts.kimono.bow+1.5*this.anim.kimono.bow.size.y)
                }
            }
            /*this.layer.noStroke()
            for(let g=1;g<6;g++){
                this.layer.fill(206+g*38/3,107+g*59/3,113+g*61/3,this.fade)
                this.layer.quad(13.5-(g%2)*2,-72+g*3,12-(g%2)*2,-66+g*3,10.5-(g%2)*2,-72+g*3,12-(g%2)*2,-78+g*3)
            }*/
            if(this.trigger.display.skin.head){
                this.layer.fill(this.color.skin.head[0],this.color.skin.head[1],this.color.skin.head[2],this.fade*this.fades.skin.head)
                this.layer.noStroke()
                this.layer.ellipse(0,-75,30,30)
            }
            for(let g=0;g<2;g++){
                if(this.trigger.display.eye[g]){
                    this.layer.stroke(this.color.eye.back[0],this.color.eye.back[1],this.color.eye.back[2],this.fade*this.fades.eye[g])
                    this.layer.strokeWeight((4-this.anim.eye[g]*3)*constrain(cos(this.spin.eye[g]+this.anim.direction)*5,0,1))
                    this.layer.line(sin(this.spin.eye[g]+this.anim.direction)*15-(g*2-1)*cos(this.spin.eye[g]+this.anim.direction)*this.anim.eye[g]*2,this.parts.eyeLevel,sin(this.spin.eye[g]+this.anim.direction)*15+(g*2-1)*cos(this.spin.eye[g]+this.anim.direction)*this.anim.eye[g]*2,this.parts.eyeLevel-this.anim.eye[g]*2)
                    this.layer.line(sin(this.spin.eye[g]+this.anim.direction)*15-(g*2-1)*cos(this.spin.eye[g]+this.anim.direction)*this.anim.eye[g]*2,this.parts.eyeLevel,sin(this.spin.eye[g]+this.anim.direction)*15+(g*2-1)*cos(this.spin.eye[g]+this.anim.direction)*this.anim.eye[g]*2,this.parts.eyeLevel+this.anim.eye[g]*2)
                    this.layer.stroke(this.color.eye.front[0],this.color.eye.front[1],this.color.eye.front[2],this.fade*this.fades.eye[g])
                    this.layer.strokeWeight((3-this.anim.eye[g]*2)*constrain(cos(this.spin.eye[g]+this.anim.direction)*5,0,1))
                    this.layer.line(sin(this.spin.eye[g]+this.anim.direction)*(15.5+this.anim.eye[g]*0.5)-(g*2-1)*cos(this.spin.eye[g]+this.anim.direction)*this.anim.eye[g]*2,this.parts.eyeLevel+0.2-this.anim.eye[g]*0.2,sin(this.spin.eye[g]+this.anim.direction)*(15.5+this.anim.eye[g]*0.5)+(g*2-1)*cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye[g]*2,this.parts.eyeLevel-this.anim.eye[g]*2+0.2-this.anim.eye[g]*0.2)
                    this.layer.line(sin(this.spin.eye[g]+this.anim.direction)*(15.5+this.anim.eye[g]*0.5)-(g*2-1)*cos(this.spin.eye[g]+this.anim.direction)*this.anim.eye[g]*2,this.parts.eyeLevel+0.2-this.anim.eye[g]*0.2,sin(this.spin.eye[g]+this.anim.direction)*(15.5+this.anim.eye[g]*0.5)+(g*2-1)*cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye[g]*2,this.parts.eyeLevel+this.anim.eye[g]*2+0.2-this.anim.eye[g]*0.2)
                }
            }
            if(this.trigger.display.hair.front){
                this.layer.image(this.sprites.hair.front[this.sprites.spinDetail],-20*this.fade,-75-20*this.fade,40*this.fade,60*this.fade)
            }
            /*this.layer.stroke(111,23,27,this.fade)
            this.layer.strokeWeight(0.5)
            this.layer.line(13,-58.5,9,-58.5)*/
            if(this.trigger.display.flower&&this.fades.flower>0){
                if(constrain((pow(cos(this.spin.flower[0]+this.anim.direction),1.5)*2-0.2),0,1)>0){
                    this.layer.image(graphics.minor[33],sin(this.spin.flower[0]+this.anim.direction)*18.5-10*this.fade*this.fades.flower*constrain((pow(cos(this.spin.flower[0]+this.anim.direction),1.5)*2-0.2),0,1),this.parts.flowerLevel-15*this.fade*this.fades.flower,20*this.fade*this.fades.flower*constrain((pow(cos(this.spin.flower[0]+this.anim.direction),1.5)*2-0.2),0,1),30*this.fade*this.fades.flower)
                }
            }
            if(this.trigger.display.kimono.flower&&this.fades.kimono.flower>0){
                if(constrain((pow(cos(this.spin.flower[1]+this.anim.direction),1.5)*2-0.2),0,1)>0){
                    this.layer.image(graphics.minor[34],sin(this.spin.flower[1]+this.anim.direction)*8-15*this.fade*this.fades.kimono.flower*constrain((pow(cos(this.spin.flower[1]+this.anim.direction),1.5)*2-0.2),0,1),this.parts.kimono.flowerLevel-15*this.fade*this.fades.kimono.flower,30*this.fade*this.fades.kimono.flower*constrain((pow(cos(this.spin.flower[1]+this.anim.direction),1.5)*2-0.2),0,1),30*this.fade*this.fades.kimono.flower)
                }
            }
        }
        this.layer.scale(1/this.size)
        this.layer.translate(-this.position.x-this.offset.position.x,-this.position.y-this.offset.position.y)
    }
    controlSpin(set,direction,spec){
        for(let g=0,lg=set.length;g<lg;g++){
            if(set[g].spin[0]>set[g].spin[1]&&spec==1){
                set[g].spin[1]=set[g].spin[0]+set[g].spin[1]
                set[g].spin[0]=set[g].spin[1]-set[g].spin[0]
                set[g].spin[1]=set[g].spin[1]-set[g].spin[0]
                set[g].y[1]=set[g].y[0]+set[g].y[1]
                set[g].y[0]=set[g].y[1]-set[g].y[0]
                set[g].y[1]=set[g].y[1]-set[g].y[0]
            }
            for(let h=0,lh=set[g].spin.length;h<lh;h++){
                if(direction+set[g].spin[h]>180){
                    set[g].spin[h]-=360
                }else if(direction+set[g].spin[h]<-180){
                    set[g].spin[h]+=360
                }
            }
        }
    }
    update(){
        super.update()
        if(inputs.keys[0][0]||inputs.keys[1][0]){
            //this.velocity.x-=this.movement.speed
            this.anim.direction-=3
        }
        if(inputs.keys[0][1]||inputs.keys[1][1]){
            //this.velocity.x+=this.movement.speed
            this.anim.direction+=3
        }
        //this.anim.direction+=6
        if(this.anim.direction>180){
            this.anim.direction-=360
        }else if(this.anim.direction<-180){
            this.anim.direction+=360
        }
        /*for(let g=0,lg=this.spinSet.length;g<lg;g++){
            if(g==1){
                this.controlSpin(this.spinSet[g],this.anim.direction,1)
            }else{
                this.controlSpin(this.spinSet[g],this.anim.direction,0)
            }
        }*/
        //this.anim.directionPosition=constrain(this.anim.directionPosition+this.velocity.x/30,-1,1)
        //this.anim.eye=sin(this.time*10)*0.5+0.5
        if((inputs.keys[0][2]||inputs.keys[1][2])&&this.timers[0]>0){
            this.timers[0]=0
            this.velocity.y=-this.movement.jump
            this.timers[1]=1
        }
        stage.focus.x=this.position.x
        stage.focus.y=this.position.y
    }
}