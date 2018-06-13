   // How to use waterMark("args") 和 new waterMark("args")
  html：
  <canvas id="myCanvas" style="z-index: -2;position: absolute;">
    </canvas>
    
    
   js:
  waterMark("#myCanvas",{
         imgSrc:'xx.jpg' 
        fontStyleSet: "rgba(200,200,200,0.8)",
        str: "hanzi",
        fontSet:'20px microsoft yahei',  
        open:function () {
            // console.log("start")
        },
        close:function () {
            // console.log("end")
        }
    });
