import line1 from "~/lines/html/line1.html"

export default {
  name: "history.js",
  components: {line1, },

  data(){
    return{
      locationName:null
    }
  },

  methods:{
    onClick(locationName){
      // alert(locationName);
      alert("line1");
      // this.locationName=locationName
    }
  }
}