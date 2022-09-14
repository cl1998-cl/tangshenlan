<template>
<div class="wrap">
  <prism-editor
      class="my-editor height-300"
      v-model="code"
      :highlight="highlighter"
      :line-numbers="true"
  ></prism-editor>

</div>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default {
  name: "index",
  props: {
   text: {
     type: String,
     default: ''
   }
  },
  computed: {
    code: function () {
      return this.text;
    }
  },
  components:{
    PrismEditor
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    }
  }
}
</script>

<style scoped>
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  border-radius: 5px;
}

/* optional */
.prism-editor__textarea:focus {
  outline: none;
}

/* not required: */
.height-300 {
  max-height: 300px;
}
</style>