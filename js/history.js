var app = new Vue({
  el: "#app",
  components: {lineBar: lineBar, modal: modal, },
  data() {
    return{
      selectTabIndex: 0,
      isOpen: false,
      coreData: [],
      chapter: 0,
    }
  },
  methods:{
    onTabClick(index){
      this.selectTabIndex = index;
    },
    clicked(number){
      console.log(number)
      var data = historyData[this.selectTabIndex][number]
      var section = chapterData[this.selectTabIndex].chapter
      this.chapter = section
      this.coreData = data
      this.isOpen = true;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    },
    close(){
      this.isOpen = false;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }
})