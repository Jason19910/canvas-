(function () {
        'use strict';
        var waterMark = function (targetDom,options) {
           var self = this;
            //waterMark("options") 或者 new waterMark("options")
            if(!(this instanceof waterMark)){return new waterMark(targetDom,options)};
            // 判断传进来的是DOM还是字符串
            if((typeof targetDom)==="string"){
                this.targetDom = document.querySelector(targetDom);
               console.log("1"+this.targetDom);
            }else{
               console.log("n");
                 this.targetDom = targetDom;
            }
            // 参数合并 extend方法体在下面
            this.options = this.extend({
                imgSrc: 'data:image/BMP;base64,Qk1yAAAAAAAAADYAAAAoAAAABAAAAAUAAAABABgAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////////////////////////',
                // 默认白底图片
                fontStyleSet: "rgba(200,200,200,0.8)",
                str: "XXX",
                fontSet:'20px microsoft yahei'
            }, options);
            this.init();
            //初始化
        };
        waterMark.prototype = {
            init: function () {
                this.event();
            },
            // 参数合并方法体
            extend: function (obj, obj2) {
                for (var key in obj2) {
                    obj[key] = obj2[key];
                //    确保参数唯一
                }
                return obj
            },
            event:function () {

                var _this = this;
                //方法调用前的回调
                _this.options.open&&_this.options.open();
                // console.log("1"+this.targetDom);
                      var img = new Image();
                      var imgPath =  _this.options.imgSrc;
                      img.src = imgPath; //设置背景图
                      img.onload = function () {

                          var canvas = _this.targetDom;
                          // console.log(canvas)
                          //设置canvas宽高
                          // canvas.style.width = window.innerWidth + "px";
                          // canvas.style.height = window.innerHeight + "px";
                          canvas.width = window.innerWidth;
                          console.log( canvas.width )
                          canvas.height = window.screen.height;
                          var ctx = canvas.getContext("2d");
                          var hanzi = canvas.getContext("2d");
                          var cvsLen = canvas.width * 2; //为了能全屏显示，增加text的canva宽高
                          var cvsHeight = canvas.height * 2;
                          ctx.drawImage(img, 0, 0);
                          var rotateAngle = 30;
                          // ctx.rotate(30 * Math.PI / 180); //rotate角度跟translate有微妙的联系 30度
                          ctx.translate(0, -500);
                          // var fontSet = this.options.fontSet;
                          hanzi.font = _this.options.fontSet;
                          // var fontStyleSet = "rgba(200,200,200,1)";
                          hanzi.fillStyle = _this.options.fontStyleSet; //字体颜色+透明度
                          var str = _this.options.str;
                           
                          for (var x = 5; x < cvsLen; x += 100) {
                              for (var y = 5; y < cvsHeight; y += 100) {
                                  hanzi.fillText(str, x, y);
                                 // hanzi.save();
                                  // hanzi.rotate(2 * Math.PI / 180);    
                              }
                          }
                      };

                // 方法结束的回调
                _this.options.close&&_this.options.close();
            }
        }
        //暴露对象
        window.waterMark = waterMark;
    }());
