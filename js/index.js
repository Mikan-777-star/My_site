
function main(){        
    document.getElementById("kesu").innerText = "";
    var kurikaesi = 0;
    var yarukoto = 0;
    var r = 0xff;
    var g = 0x00;
    var b = 0x00;
    var icon = document.getElementById("icon");
    var top = document.getElementById("top");
    var main = document.getElementById("main");
    setInterval(()=>{
        top.style.transform = "rotate("+(360 - (Date.now() % 360))+"deg)"
        icon.style.transform = "rotate("+ (Date.now() % 360)+"deg)"
        icon.style.width = (500 * Math.sin(Date.now())) + "px"
        icon.style.height = (500 * Math.cos(Date.now())) + "px"
        kurikaesi++;
        switch(yarukoto){
            case 0:b+=50;
            break;
            case 1:r-=50;
            break;
            case 2:g+=50;
            break;
            case 3:b-=50;
            break;
            case 4:r+=50;
            break;
            case 5:g-=50;
            break;
            default:;
        }
        console.log( '#' + r.toString(16) + g.toString(16) + b.toString(16))
        top.style.backgroundColor = "rgba("+ r + "," + g + "," + b + ","+(255-kurikaesi)+")";
        main.style.color= "rgb("+ g + "," + b+ "," + r+")"
        main.style.backgroundColor = "rgb("+ b + "," + r + "," + g +")";
        if(kurikaesi === 5){
            yarukoto++
            kurikaesi = 0;
        }
        if(yarukoto === 6){
            yarukoto = 0;
            
        }
    }, 5)
}