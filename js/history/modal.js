var modal = Vue.component("modal", {
    name: "modal",
    template:`
    <div class="modal is-active" v-if="isopen===true">
      <div class="modal-background" @click="close"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title" v-if="chapter === '黒人差別の歴史'">{{chapter}}</p>
          <p class="modal-card-title" v-else>第{{chapter}}章</p>
          <button class="delete" aria-label="close" @click="close"></button>
        </header>
        <section class="modal-card-body">
            <ul>
                <li v-for="d of data">
                    <div class="history-title">{{d.title}}</div>
                    <div class="history-text">{{d.text}}</div>
                </li>
            </ul>
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="close">Cancel</button>
        </footer>
      </div>
    </div>
`,
    props:["isopen", "data", "chapter"],
    methods:{
        close(){
            this.$emit("close")
        }
    }
})