var app = new Vue({
  el: "#app",
  components: {lineBar: lineBar, modal: modal, },
  data() {
    return{
      selectTabIndex: 0,
      isOpen: false,
      coreData: [],
      scrollTop: 0,
      chapter: 0,
    }
  },
  methods:{
    onTabClick(index){
      this.selectTabIndex = index;
    },
    clicked(number){
      var data = historyData[this.selectTabIndex][number]
      var section = chapterData[this.selectTabIndex].chapter
      this.chapter = section
      this.coreData = data
      this.isOpen = true;
      console.log(window.scrollY)
      this.scrollTop=window.scrollY
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = 'fixed';

    },
    close(){
      this.isOpen = false;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(this.scrollTop || '0'));
    }
  }
})