var app = new Vue({
  el: "#app",
  components: {lineBar: lineBar, },
  data() {
    return{
      selectTabIndex: 0,
    }
  },
  methods:{
    onTabClick(index){
      this.selectTabIndex = index;
    }
  }
})