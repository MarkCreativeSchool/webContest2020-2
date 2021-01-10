var modal = Vue.component("modal", {
    name: "modal",
    template: `
    <div class="modal is-active" v-if="isOpen === true">
  <div class="modal-background" @click="close"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <!-- <button class="delete" aria-label="close"></button> -->
    </header>
    <section class="modal-card-body">
        {{ mapFileData }}
        <!--
        <img :src="'./img/' + mapFileData" />
        -->
        <ul>
            <li v-for="article in mapArticles">
              <div class="article-title-wrapper">
                <div class="article_title">●{{ article.title }}</div>
                <div class="article_subtitle">({{ article.year }})</div>
              </div>
              <p>{{ article.text }}</p>
              <h6><small>{{ article.source }}</h6></p>
            </li>
        </ul>
    </section>
    <footer class="modal-card-foot">
      <button class="button" @click="close">Close</button>
    </footer>
  </div>
</div>
    `,
    props: ["isOpen", "mapFileData", "mapArticles"],
    methods: {
        close(){
            this.$emit("close")
        }
    }
})