var app = new Vue({
    el: "#app",
    components: {modal: modal,},
    data(){
        return {
            isOpen: false
        }
    },
    methods: {
        openMap(){
            this.isOpen = true
        },
        closeModal(){
            this.isOpen = false
        }
    }
})