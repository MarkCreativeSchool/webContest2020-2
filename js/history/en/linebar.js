var lineBar = Vue.component("lineBar", {
    name: "lineBar",
    template: `
<!--<p class="lineBar" :style="{ width: width + 'px', left: left + 'px'}" @click="onClick()">-->
<!--    <slot></slot>-->
<!--</p>-->

<div class="eventLine" :style="{width:width + 'px', left: left + 'px'}" @click="onClick()">
    <div class="linePoint"></div>
    <div class="lineBalloon"><slot></slot></div>
</div>

`,


    props:["width", "left", "number"],

    methods:{
        onClick(){
            this.$emit("clicked", this.number)
        }
    }

})