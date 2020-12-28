var app = new Vue({
  el: "#app",
  components: {lineBar: lineBar, modal: modal, },
  data() {
    return{
      selectTabIndex: 0,
    }
  },
  methods:{
    onTabClick(index){
      this.selectTabIndex = index;
    },
    clicked(){
      console.log("waaaaaaa")
      alert("555")
    },
  }
})