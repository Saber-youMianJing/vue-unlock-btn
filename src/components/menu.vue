<template>
<div class="appmenu">

    <div id="iphone">
      <div id="lock" :style="'width:'+widthl+'px'"><span  v-on:touchstart="start($event)" v-on:touchmove="show($event)"  v-on:touchend="end($event)":style="'width:'+widthb+'px;left:'+l+'px'"></span></div>
    </div>
</div>
</template>
<script>
  export default {
    name:'menu',
    data(){
      return{
        disX:0,
        widthl:248,
        widthb:92,
        l:0,
        oBtn:''
      }
    },
    computed: {
      maxL(){
        return this.widthl - this.widthb
      }
    },
    methods:{
      start(e){
        this.disX = e.changedTouches[0].clientX-event.target.offsetLeft;

      },
      show(e){
        this.l = e.changedTouches[0].clientX - this.disX;
        this.l < 0 && (this.l = 0);
        this.l > this.maxL && (this.l = this.maxL);
      },
      end(e){
        this.oBtn = event.target;
        event.target.releaseCapture && event.target.releaseCapture();
        event.target.offsetLeft > this.maxL / 2 ?
         this.startMove(this.maxL, function ()
         {
         }) :
         this.startMove(0)
       },
      startMove (iTarget, onEnd) {
         clearInterval(this.oBtn.timer);
         this.oBtn.timer = setInterval(() =>
         {
          this.doMove(iTarget, onEnd)
         }, 30)
      },
      doMove (iTarget, onEnd) {
       var iSpeed = (iTarget - this.oBtn.offsetLeft) / 5;
       iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
       iTarget == this.oBtn.offsetLeft ? (clearInterval(this.oBtn.timer), onEnd && onEnd()) : this.l = iSpeed + this.oBtn.offsetLeft
      }
    },
    mounted:{}
  }
</script>

<style lang="scss" scoped>
#iphone{position:relative;width:730px;height:730px;margin:10px auto;background:url('../assets/img/1.jpg') no-repeat;background-size: contain;}
#lock{position:absolute;left:60%;bottom:159px;height:62px;margin-left:-179px;background-color: white}
#lock span{position:absolute;height:62px;cursor:pointer;background:url('../assets/img/2.jpg') no-repeat;background-size:contain;}
</style>
