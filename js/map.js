var app = new Vue({
    el: "#app",
    components: {modal: modal,},
    data(){
        return {
            isOpen: false,
            mapFileData: "",
            mapArticles: []
        }
    },
    methods: {
        openMap(location){
            this.mapFileData = mapData[location]["map"]
            this.mapArticles = mapData[location]["articles"]
            this.isOpen = true
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        },
        closeModal(){
            this.isOpen = false
            const top = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }
})