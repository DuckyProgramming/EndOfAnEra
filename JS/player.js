class player extends partisan{
    constructor(layer,x,y){
        super(layer,x,y,0,30,90)
        this.offset={position:{x:0,y:145}}

        this.anim={eye:0,sandal:{back:1,front:1},sleeve:{back:1,front:1},kimono:1,decoration:1,direction:36,
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

        this.kimono={
            outside:[],
        }

        this.spin={legs:[{top:-60,bottom:240},{top:60,bottom:120}],sandal:[10,-10],eye:[-18,18],flower:[-45],button:0}

        this.color={
            hair:{back:[243,154,163],front:[250,211,216]},
            skin:{head:[255,239,224],legs:[255,235,217]},
            eye:{back:[201,108,113],front:[48,4,7]},
            kimono:{outside:[255,252,254]},
        }

        this.parts={eyeLevel:-72,
            legs:[
                {top:{x:3,y:-32},middle:{x:0,y:0},bottom:{x:0,y:0},sandal:{back:{x:0,y:0},front:{x:0,y:0}}},
                {top:{x:3,y:-32},middle:{x:0,y:0},bottom:{x:0,y:0},sandal:{back:{x:0,y:0},front:{x:0,y:0}}}
            ]}

        this.graphics={
            legs:[
                {top:{x:3,y:-32},middle:{x:0,y:0},bottom:{x:0,y:0},sandal:{back:{x:0,y:0},front:{x:0,y:0}}},
                {top:{x:3,y:-32},middle:{x:0,y:0},bottom:{x:0,y:0},sandal:{back:{x:0,y:0},front:{x:0,y:0}}}
            ]}

        this.trigger.display={
            hair:{back:true,front:true},eye:true,sandal:{back:true,front:true},sleeve:{back:false,front:false},necklace:{back:true,front:true},
            skin:{legs:true,body:true,head:true},
            kimono:{outside:true}}

        this.movement={speed:0.4,jump:8}

        this.generateParts()

        this.size=4
        this.trigger.gravity=false
    }
    generateParts(){
        for(let g=0;g<12;g++){
            this.kimono.outside.push({spin:[-180+g*30,-150+g*30,-165+g*30],height:3})
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
    }
    display(){
        this.calculateParts()
        if(this.fade>0&&this.size>0){
            this.layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
            this.layer.scale(this.size)
            if(this.trigger.display.hair.back){
                this.layer.fill(this.color.hair.back[0],this.color.hair.back[1],this.color.hair.back[2],this.fade)
                this.layer.stroke(this.color.hair.back[0],this.color.hair.back[1],this.color.hair.back[2],this.fade)
                this.layer.strokeWeight(1)
                this.layer.strokeJoin(ROUND)
                for(let g=0,lg=this.hair.length;g<lg;g++){
                    if(cos(this.hair[g].spin[1]+this.anim.direction)<=0&&cos(this.hair[g].spin[0]+this.anim.direction)>0){
                        if(cos(this.hair[g].spin[2]+this.anim.direction)>0){
                            this.layer.triangle(sin(this.hair[g].spin[1]+this.anim.direction)*18,-75,18,-75,18,-75+this.hair[g].height*(1-(90-this.hair[g].spin[2]-this.anim.direction)/(this.hair[g].spin[1]-this.hair[g].spin[2])))
                        }else{
                            this.layer.quad(sin(this.hair[g].spin[1]+this.anim.direction)*18,-75,18,-75,18,-75+this.hair[g].height*(1-(90-this.hair[g].spin[2]-this.anim.direction)/(this.hair[g].spin[0]-this.hair[g].spin[2])),sin(this.hair[g].spin[2]+this.anim.direction)*18,-75+this.hair[g].height)
                        }
                    }else if(cos(this.hair[g].spin[0]+this.anim.direction)<=0&&cos(this.hair[g].spin[1]+this.anim.direction)>0){
                        if(cos(this.hair[g].spin[2]+this.anim.direction)>0){
                            this.layer.triangle(sin(this.hair[g].spin[0]+this.anim.direction)*18,-75,-18,-75,-18,-75+this.hair[g].height*(1-(-90-this.hair[g].spin[2]-this.anim.direction)/(this.hair[g].spin[0]-this.hair[g].spin[2])))
                        }else{
                            this.layer.quad(sin(this.hair[g].spin[0]+this.anim.direction)*18,-75,-18,-75,-18,-75+this.hair[g].height*(1-(-90-this.hair[g].spin[2]-this.anim.direction)/(this.hair[g].spin[1]-this.hair[g].spin[2])),sin(this.hair[g].spin[2]+this.anim.direction)*18,-75+this.hair[g].height)
                        }
                    }else if(cos(this.hair[g].spin[0]+this.anim.direction)<=0&&cos(this.hair[g].spin[1]+this.anim.direction)<=0&&cos(this.hair[g].spin[2]+this.anim.direction)<=0){
                        this.layer.triangle(sin(this.hair[g].spin[0]+this.anim.direction)*18,-75,sin(this.hair[g].spin[1]+this.anim.direction)*18,-75,sin(this.hair[g].spin[2]+this.anim.direction)*18,-75+this.hair[g].height)
                    }
                }
                this.layer.strokeJoin(MITER)
            }
            if(this.anim.sleeve.back>0&&this.trigger.display.sleeve.back){
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
            }
            /*if(this.trigger.display.necklace.back){
                this.layer.noFill()
                this.layer.stroke(207,90,101,this.fade*this.anim.decoration)
                this.layer.strokeWeight(0.5)
                this.layer.line(-3,-59,1,-54)
                this.layer.line(3,-59,1,-54)
                this.layer.arc(0,-59,6,3,-180,0)
            }*/
            if(this.trigger.display.skin.body){
                this.layer.noStroke()
                this.layer.fill(254,238,223,this.fade)
                this.layer.ellipse(0,-46,12,30)
                if(cos(this.spin.button+this.anim.direction)>0){
                    this.layer.fill(250,188,173,this.fade)
                    this.layer.ellipse(sin(this.spin.button+this.anim.direction)*6,-42,1*cos(this.spin.button+this.anim.direction),2)
                }
            }
            /*this.layer.fill(242,205,219,this.fade)
            this.layer.arc(0,-37.5,11,13,0,180)
            this.layer.stroke(255,235,217,this.fade)
            this.layer.strokeWeight(4)
            this.layer.line(-3,-54,-12,-24)
            this.layer.line(3,-54,12,-24)
            this.layer.strokeWeight(0.8)
            this.layer.stroke(202,51,60,this.fade*this.anim.kimono)
            this.layer.fill(209,80,84,this.fade*this.anim.kimono)
            this.layer.strokeJoin(ROUND)
            this.layer.triangle(0,-44,-10,-50,-10,-38)
            this.layer.triangle(0,-44,10,-50,10,-38)
            this.layer.strokeJoin(MITER)
            this.layer.strokeWeight(1)
            this.layer.stroke(216,168,182,this.fade*this.anim.decoration)
            this.layer.fill(249,218,226,this.fade*this.anim.decoration)
            this.layer.beginShape()
            this.layer.vertex(-5,-55)
            this.layer.vertex(5,-55)
            this.layer.vertex(9,-26)
            this.layer.vertex(8,-25)
            this.layer.vertex(-8,-25)
            this.layer.vertex(-9,-26)
            this.layer.endShape()
            this.layer.noStroke()
            this.layer.beginShape()
            this.layer.vertex(-5,-55)
            this.layer.vertex(5,-55)
            for(let g=0;g<11;g++){
                this.layer.vertex(10-g*2,-26+(g%2)*3)
            }
            this.layer.endShape()
            this.layer.beginShape()
            this.layer.vertex(-5,-55)
            this.layer.vertex(5,-55)
            for(let g=0;g<11;g++){
                this.layer.vertex(10-g*2,-24-(g%2)*3)
            }
            this.layer.endShape()
            this.layer.fill(114,40,119,this.fade*this.anim.decoration)
            for(let g=0;g<5;g++){
                this.layer.ellipse(8-g*4,-25,0.25,1)
                this.layer.ellipse(8.5-g*4,-25,0.125,0.5)
                this.layer.ellipse(7.5-g*4,-25,0.125,0.5)
            }
            for(let g=0;g<4;g++){
                this.layer.ellipse(6-g*4,-25.5,0.125,0.5)
            }
            this.layer.noStroke()
            this.layer.fill(242,205,219,this.fade)
            this.layer.quad(-5.25,-54,5.25,-54,6,-47,-6,-47)
            this.layer.stroke(231,195,205,this.fade)
            this.layer.strokeWeight(0.5)
            this.layer.fill(245,224,231,this.fade)
            for(let g=0;g<5;g++){
                this.layer.ellipse(-4+g*2,-53,1.5,2)
            }
            for(let g=0;g<6;g++){
                this.layer.ellipse(-5+g*2,-48,1.5,2)
            }*/
            if(this.anim.sleeve.front>0&&this.trigger.display.sleeve.front){
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
            }
            for(let g=0;g<2;g++){
                for(let h=0;h<2;h++){
                    if((g==0&&h==0||g==1&&h==1)&&cos(this.spin.legs[0].bottom+this.anim.direction)<=cos(this.spin.legs[1].bottom+this.anim.direction)||(g==0&&h==1||g==1&&h==0)&&cos(this.spin.legs[0].bottom+this.anim.direction)>cos(this.spin.legs[1].bottom+this.anim.direction)){
                        if(this.anim.sandal.back>0&&this.trigger.display.sandal.back){
                            this.layer.translate(this.graphics.legs[h].sandal.back.x,this.graphics.legs[h].sandal.back.y+1.5)
                            this.layer.scale(1.2,0.6)
                            this.layer.rotate(-this.anim.direction+this.spin.sandal[h])
                            this.layer.image(graphics.minor[0],-4*this.anim.sandal.back*this.fade,-4*this.anim.sandal.back*this.fade,8*this.anim.sandal.back*this.fade,8*this.anim.sandal.back*this.fade)
                            this.layer.rotate(this.anim.direction-this.spin.sandal[h])
                            this.layer.scale(5/6,5/3)
                            this.layer.translate(-this.graphics.legs[h].sandal.back.x,-this.graphics.legs[h].sandal.back.y-1.5)
                        }
                        if(this.anim.sandal.front>0&&this.trigger.display.sandal.front){
                            this.layer.translate(this.graphics.legs[h].sandal.front.x,this.graphics.legs[h].sandal.front.y+1.5)
                            this.layer.scale(1.2,0.6)
                            this.layer.rotate(-this.anim.direction+this.spin.sandal[h])
                            for(let i=0;i<16;i++){
                                if(cos(this.anim.direction+(65-floor(i/2)*5)*((i%2)*2-1)-this.spin.sandal[h])<=0.1){
                                    this.layer.image(graphics.minor[i+1],-4*this.anim.sandal.front*this.fade,-4*this.anim.sandal.front*this.fade,8*this.anim.sandal.front*this.fade,8*this.anim.sandal.front*this.fade)
                                }
                            }
                            this.layer.rotate(this.anim.direction-this.spin.sandal[h])
                            this.layer.scale(5/6,5/3)
                            this.layer.translate(-this.graphics.legs[h].sandal.front.x,-this.graphics.legs[h].sandal.front.y-1.5)
                        }
                        if(this.trigger.display.skin.legs){
                            this.layer.stroke(this.color.skin.legs[0],this.color.skin.legs[1],this.color.skin.legs[2],this.fade)
                            this.layer.strokeWeight(4)
                            this.layer.line(this.graphics.legs[h].top.x,this.graphics.legs[h].top.y,this.graphics.legs[h].middle.x,this.parts.legs[h].middle.y)
                            this.layer.line(this.graphics.legs[h].middle.x,this.graphics.legs[h].middle.y,this.graphics.legs[h].bottom.x,this.parts.legs[h].bottom.y)
                        }
                        if(this.anim.sandal.front>0&&this.trigger.display.sandal.front){
                            this.layer.translate(this.graphics.legs[h].sandal.front.x,this.graphics.legs[h].sandal.front.y+1.5)
                            this.layer.scale(1.2,0.6)
                            this.layer.rotate(-this.anim.direction+this.spin.sandal[h])
                            for(let i=0;i<16;i++){
                                if(cos(this.anim.direction+(65-floor(i/2)*5)*((i%2)*2-1)-this.spin.sandal[h])>0.1){
                                    this.layer.image(graphics.minor[i+1],-4*this.anim.sandal.front*this.fade,-4*this.anim.sandal.front*this.fade,8*this.anim.sandal.front*this.fade,8*this.anim.sandal.front*this.fade)
                                }
                            }
                            this.layer.rotate(this.anim.direction-this.spin.sandal[h])
                            this.layer.scale(5/6,5/3)
                            this.layer.translate(-this.graphics.legs[h].sandal.front.x,-this.graphics.legs[h].sandal.front.y-1.5)
                        }
                    }
                }
            }
            /*this.layer.stroke(231,195,205,this.fade)
            this.layer.strokeWeight(0.5)
            this.layer.fill(245,224,231,this.fade)
            for(let g=0;g<6;g++){
                this.layer.ellipse(-5+g*2,-36.5,1.5,2)
            }
            this.layer.noFill()
            this.layer.stroke(172,44,53,this.fade)
            this.layer.strokeWeight(0.5)
            this.layer.ellipse(-1,-53,4,2)
            this.layer.ellipse(3,-53,4,2)
            this.layer.line(1,-53,0,-50)
            this.layer.line(1,-53,2,-50)*/
            /*if(this.trigger.display.necklace.front){
                this.layer.stroke(207,90,101,this.fade*this.anim.decoration)
                this.layer.strokeWeight(0.5)
                this.layer.line(-3,-59,1,-54)
                this.layer.line(3,-59,1,-54)
            }*/
            /*this.layer.noStroke()
            this.layer.fill(250,230,235,this.fade*this.anim.decoration)
            this.layer.beginShape()
            this.layer.vertex(-5,-55)
            this.layer.vertex(5,-55)
            for(let g=0;g<11;g++){
                this.layer.vertex(10.4-g*2,-26-g+(g%2)*3)
            }
            this.layer.endShape()
            this.layer.beginShape()
            this.layer.vertex(-5,-55)
            this.layer.vertex(5,-55)
            for(let g=0;g<11;g++){
                this.layer.vertex(10.4-g*2,-24-g-(g%2)*3)
            }
            this.layer.endShape()
            this.layer.fill(114,40,119,this.fade*this.anim.decoration)
            for(let g=0;g<5;g++){
                this.layer.ellipse(8.4-g*4,-26-g*2,0.25,1)
                this.layer.ellipse(8.9-g*4,-25.8-g*2,0.125,0.5)
                this.layer.ellipse(7.9-g*4,-26.2-g*2,0.125,0.5)
            }
            for(let g=0;g<4;g++){
                this.layer.ellipse(6.35-g*4,-27.5-g*2,0.125,0.5)
            }
            this.layer.fill(251,242,245,this.fade*this.anim.decoration)
            this.layer.beginShape()
            this.layer.vertex(5,-55)
            this.layer.vertex(-5,-55)
            for(let g=0;g<11;g++){
                this.layer.vertex(-10.4+g*2,-26-g+(g%2)*3)
            }
            this.layer.endShape()
            this.layer.beginShape()
            this.layer.vertex(5,-55)
            this.layer.vertex(-5,-55)
            for(let g=0;g<11;g++){
                this.layer.vertex(-10.4+g*2,-24-g-(g%2)*3)
            }
            this.layer.endShape()
            this.layer.fill(114,40,119,this.fade*this.anim.decoration)
            for(let g=0;g<5;g++){
                this.layer.ellipse(-8.4+g*4,-26-g*2,0.25,1)
                this.layer.ellipse(-8.9+g*4,-25.8-g*2,0.125,0.5)
                this.layer.ellipse(-7.9+g*4,-26.2-g*2,0.125,0.5)
            }
            for(let g=0;g<4;g++){
                this.layer.ellipse(-6.35+g*4,-27.5-g*2,0.125,0.5)
            }*/
            if(this.trigger.display.kimono.outside){
                this.layer.noStroke()
                this.layer.fill(this.color.kimono.outside[0],this.color.kimono.outside[1],this.color.kimono.outside[2],this.fade*this.anim.decoration)
                this.layer.stroke(this.color.kimono.outside[0],this.color.kimono.outside[1],this.color.kimono.outside[2],this.fade*this.anim.decoration)
                this.layer.strokeWeight(0.5)
                this.layer.strokeJoin(ROUND)
                this.layer.quad(-5,-55,5,-55,9,-36,-9,-36)
                for(let g=0,lg=this.kimono.outside.length;g<lg;g++){
                    if(cos(this.kimono.outside[g].spin[1]+this.anim.direction)<=0&&cos(this.kimono.outside[g].spin[0]+this.anim.direction)>0){
                        if(cos(this.kimono.outside[g].spin[2]+this.anim.direction)<=0){
                            this.layer.triangle(sin(this.kimono.outside[g].spin[0]+this.anim.direction)*9,-36,9,-36,9,-36+this.kimono.outside[g].height*(1-(90-this.kimono.outside[g].spin[2]-this.anim.direction)/(this.kimono.outside[g].spin[0]-this.kimono.outside[g].spin[2])))
                        }else{
                            this.layer.quad(sin(this.kimono.outside[g].spin[0]+this.anim.direction)*9,-36,9,-36,9,-36+this.kimono.outside[g].height*(1-(90-this.kimono.outside[g].spin[2]-this.anim.direction)/(this.kimono.outside[g].spin[1]-this.kimono.outside[g].spin[2])),sin(this.kimono.outside[g].spin[2]+this.anim.direction)*9,-36+this.kimono.outside[g].height)
                        }
                    }else if(cos(this.kimono.outside[g].spin[0]+this.anim.direction)<=0&&cos(this.kimono.outside[g].spin[1]+this.anim.direction)>0){
                        if(cos(this.kimono.outside[g].spin[2]+this.anim.direction)<=0){
                            this.layer.triangle(sin(this.kimono.outside[g].spin[1]+this.anim.direction)*9,-36,-9,-36,-9,-36+this.kimono.outside[g].height*(1-(-90-this.kimono.outside[g].spin[2]-this.anim.direction)/(this.kimono.outside[g].spin[1]-this.kimono.outside[g].spin[2])))
                        }else{
                            this.layer.quad(sin(this.kimono.outside[g].spin[1]+this.anim.direction)*9,-36,-9,-36,-9,-36+this.kimono.outside[g].height*(1-(-90-this.kimono.outside[g].spin[2]-this.anim.direction)/(this.kimono.outside[g].spin[0]-this.kimono.outside[g].spin[2])),sin(this.kimono.outside[g].spin[2]+this.anim.direction)*9,-36+this.kimono.outside[g].height)
                        }
                    }else if(cos(this.kimono.outside[g].spin[0]+this.anim.direction)>0&&cos(this.kimono.outside[g].spin[1]+this.anim.direction)>0&&cos(this.kimono.outside[g].spin[2]+this.anim.direction)>0){
                        this.layer.triangle(sin(this.kimono.outside[g].spin[0]+this.anim.direction)*9,-36,sin(this.kimono.outside[g].spin[1]+this.anim.direction)*9,-36,sin(this.kimono.outside[g].spin[2]+this.anim.direction)*9,-36+this.kimono.outside[g].height)
                    }
                }
                this.layer.strokeJoin(MITER)
                /*this.layer.beginShape()
                this.layer.vertex(-5,-55)
                this.layer.vertex(5,-55)
                for(let g=0;g<11;g++){
                    this.layer.vertex(9-g*1.8,-36+(g%2)*3)
                }
                this.layer.endShape()
                this.layer.beginShape()
                this.layer.vertex(-5,-55)
                this.layer.vertex(5,-55)
                for(let g=0;g<11;g++){
                    this.layer.vertex(9-g*1.8,-34-(g%2)*3)
                }
                this.layer.endShape()*/
            }
            /*this.layer.noStroke()
            this.layer.fill(242,235,244,this.fade*this.anim.decoration)
            for(let g=0;g<10;g++){
                this.layer.triangle(9-g*1.8,-39,7.2-g*1.8,-39,8.1-g*1.8,-36)
            }*/
            /*this.layer.strokeJoin(ROUND)
            this.layer.strokeWeight(0.8)
            this.layer.stroke(202,51,60,this.fade*this.anim.kimono)
            this.layer.fill(209,80,84,this.fade*this.anim.kimono)
            this.layer.quad(1,-49,1,-45,5.5,-53,4.5,-56)
            this.layer.quad(1,-49,1,-45,-5.5,-53,-4.5,-56)
            this.layer.quad(-7.8,-46,7.8,-46,8.2,-44,-8.2,-44)
            this.layer.quad(-8.2,-44,8.2,-44,8.4,-42,-8.4,-42)
            this.layer.rect(5,-40.5,2,3)
            this.layer.noFill()
            this.layer.strokeJoin(MITER)
            this.layer.stroke(158,57,60,this.fade*this.anim.decoration)
            this.layer.strokeWeight(0.25)
            this.layer.ellipse(0,-53,2,1)
            this.layer.ellipse(2,-53,2,1)
            this.layer.line(1,-53,0.5,-51.5)
            this.layer.line(1,-53,1.5,-51.5)
            this.layer.noStroke()
            for(let g=1;g<6;g++){
                this.layer.fill(206+g*38/3,107+g*59/3,113+g*61/3,this.fade)
                this.layer.quad(13.5-(g%2)*2,-72+g*3,12-(g%2)*2,-66+g*3,10.5-(g%2)*2,-72+g*3,12-(g%2)*2,-78+g*3)
            }*/
            if(this.trigger.display.skin.head){
                this.layer.fill(this.color.skin.head[0],this.color.skin.head[1],this.color.skin.head[2],this.fade)
                this.layer.noStroke()
                this.layer.ellipse(0,-75,30,30)
            }
            if(this.trigger.display.eye){
                this.layer.stroke(this.color.eye.back[0],this.color.eye.back[1],this.color.eye.back[2],this.fade)
                this.layer.strokeWeight((4-this.anim.eye*3)*constrain(cos(this.spin.eye[0]+this.anim.direction)*5,0,1))
                this.layer.line(sin(this.spin.eye[0]+this.anim.direction)*15+cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel,sin(this.spin.eye[0]+this.anim.direction)*15-cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel-this.anim.eye*2)
                this.layer.line(sin(this.spin.eye[0]+this.anim.direction)*15+cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel,sin(this.spin.eye[0]+this.anim.direction)*15-cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel+this.anim.eye*2)
                this.layer.strokeWeight((4-this.anim.eye*3)*constrain(cos(this.spin.eye[1]+this.anim.direction)*5,0,1))
                this.layer.line(sin(this.spin.eye[1]+this.anim.direction)*15-cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel,sin(this.spin.eye[1]+this.anim.direction)*15+cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel-this.anim.eye*2)
                this.layer.line(sin(this.spin.eye[1]+this.anim.direction)*15-cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel,sin(this.spin.eye[1]+this.anim.direction)*15+cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel+this.anim.eye*2)
                this.layer.stroke(this.color.eye.front[0],this.color.eye.front[1],this.color.eye.front[2],this.fade)
                this.layer.strokeWeight((3-this.anim.eye*2)*constrain(cos(this.spin.eye[0]+this.anim.direction)*5,0,1))
                this.layer.line(sin(this.spin.eye[0]+this.anim.direction)*(15.5+this.anim.eye*0.5)+cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel+0.2-this.anim.eye*0.2,sin(this.spin.eye[0]+this.anim.direction)*(15.5+this.anim.eye*0.5)-cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel-this.anim.eye*2+0.2-this.anim.eye*0.2)
                this.layer.line(sin(this.spin.eye[0]+this.anim.direction)*(15.5+this.anim.eye*0.5)+cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel+0.2-this.anim.eye*0.2,sin(this.spin.eye[0]+this.anim.direction)*(15.5+this.anim.eye*0.5)-cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel+this.anim.eye*2+0.2-this.anim.eye*0.2)
                this.layer.strokeWeight((3-this.anim.eye*2)*constrain(cos(this.spin.eye[1]+this.anim.direction)*5,0,1))
                this.layer.line(sin(this.spin.eye[1]+this.anim.direction)*(15.5-this.anim.eye*0.5)-cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel+0.2-this.anim.eye*0.2,sin(this.spin.eye[1]+this.anim.direction)*(15.5-this.anim.eye*0.5)+cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel-this.anim.eye*2+0.2-this.anim.eye*0.2)
                this.layer.line(sin(this.spin.eye[1]+this.anim.direction)*(15.5-this.anim.eye*0.5)-cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel+0.2-this.anim.eye*0.2,sin(this.spin.eye[1]+this.anim.direction)*(15.5-this.anim.eye*0.5)+cos(this.spin.eye[0]+this.anim.direction)*this.anim.eye*2,this.parts.eyeLevel+this.anim.eye*2+0.2-this.anim.eye*0.2)
            }
            if(this.trigger.display.hair.front){
                this.layer.fill(this.color.hair.front[0],this.color.hair.front[1],this.color.hair.front[2],this.fade)
                this.layer.stroke(this.color.hair.front[0],this.color.hair.front[1],this.color.hair.front[2],this.fade)
                this.layer.strokeWeight(1)
                this.layer.strokeJoin(ROUND)
                this.layer.arc(0,-75,36,36,-180,0)
                this.layer.line(-18,-75,18,-75)
                for(let g=0,lg=this.hair.length;g<lg;g++){
                    if(cos(this.hair[g].spin[1]+this.anim.direction)<=0&&cos(this.hair[g].spin[0]+this.anim.direction)>0){
                        if(cos(this.hair[g].spin[2]+this.anim.direction)<=0){
                            this.layer.triangle(sin(this.hair[g].spin[0]+this.anim.direction)*18,-75,18,-75,18,-75+this.hair[g].height*(1-(90-this.hair[g].spin[2]-this.anim.direction)/(this.hair[g].spin[0]-this.hair[g].spin[2])))
                        }else{
                            this.layer.quad(sin(this.hair[g].spin[0]+this.anim.direction)*18,-75,18,-75,18,-75+this.hair[g].height*(1-(90-this.hair[g].spin[2]-this.anim.direction)/(this.hair[g].spin[1]-this.hair[g].spin[2])),sin(this.hair[g].spin[2]+this.anim.direction)*18,-75+this.hair[g].height)
                        }
                    }else if(cos(this.hair[g].spin[0]+this.anim.direction)<=0&&cos(this.hair[g].spin[1]+this.anim.direction)>0){
                        if(cos(this.hair[g].spin[2]+this.anim.direction)<=0){
                            this.layer.triangle(sin(this.hair[g].spin[1]+this.anim.direction)*18,-75,-18,-75,-18,-75+this.hair[g].height*(1-(-90-this.hair[g].spin[2]-this.anim.direction)/(this.hair[g].spin[1]-this.hair[g].spin[2])))
                        }else{
                            this.layer.quad(sin(this.hair[g].spin[1]+this.anim.direction)*18,-75,-18,-75,-18,-75+this.hair[g].height*(1-(-90-this.hair[g].spin[2]-this.anim.direction)/(this.hair[g].spin[0]-this.hair[g].spin[2])),sin(this.hair[g].spin[2]+this.anim.direction)*18,-75+this.hair[g].height)
                        }
                    }else if(cos(this.hair[g].spin[0]+this.anim.direction)>0&&cos(this.hair[g].spin[1]+this.anim.direction)>0&&cos(this.hair[g].spin[2]+this.anim.direction)>0){
                        this.layer.triangle(sin(this.hair[g].spin[0]+this.anim.direction)*18,-75,sin(this.hair[g].spin[1]+this.anim.direction)*18,-75,sin(this.hair[g].spin[2]+this.anim.direction)*18,-75+this.hair[g].height)
                    }
                }
                this.layer.strokeJoin(MITER)
            }
            /*this.layer.stroke(111,23,27,this.fade)
            this.layer.strokeWeight(0.5)
            this.layer.line(13,-58.5,9,-58.5)*/
            if(constrain((pow(cos(this.spin.flower[0]+this.anim.direction),1.5)*2-0.2),0,1)>0){
                this.layer.image(graphics.minor[17],sin(this.spin.flower[0]+this.anim.direction)*18.5-10*this.fade*constrain((pow(cos(this.spin.flower[0]+this.anim.direction),1.5)*2-0.2),0,1),-77.5-15*this.fade,20*this.fade*constrain((pow(cos(this.spin.flower[0]+this.anim.direction),1.5)*2-0.2),0,1),30*this.fade)
            }
            if(this.anim.kimono>0){
                //this.layer.image(graphics.minor[16],-3-15*this.anim.kimono*this.fade,-44-15*this.anim.kimono*this.fade,30*this.anim.kimono*this.fade,30*this.anim.kimono*this.fade)
            }
            this.layer.scale(1/this.size)
            this.layer.translate(-this.position.x-this.offset.position.x,-this.position.y-this.offset.position.y)
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
        for(let g=0,lg=this.hair.length;g<lg;g++){
            for(let h=0,lh=this.hair[g].spin.length;h<lh;h++){
                if(this.anim.direction+this.hair[g].spin[h]>180){
                    this.hair[g].spin[h]-=360
                }else if(this.anim.direction+this.hair[g].spin[h]<-180){
                    this.hair[g].spin[h]+=360
                }
            }
        }
        for(let g=0,lg=this.kimono.outside.length;g<lg;g++){
            for(let h=0,lh=this.kimono.outside[g].spin.length;h<lh;h++){
                if(this.anim.direction+this.kimono.outside[g].spin[h]>180){
                    this.kimono.outside[g].spin[h]-=360
                }else if(this.anim.direction+this.kimono.outside[g].spin[h]<-180){
                    this.kimono.outside[g].spin[h]+=360
                }
            }
        }
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