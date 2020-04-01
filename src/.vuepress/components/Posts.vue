<template>
  <div class="content">
    <div v-for="post in posts" class="col-3">
      <a :href="post.path">
        <img :src="img(post)">
        {{post.title}}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      posts() {
        let arr = []
        Object.keys(this.$categories._metaMap).forEach((val, key) => {
          let category  = this.$categories._metaMap[val].posts
          category.forEach((val) => {
            arr.push(val)
          })
        })
        return arr
      }
    },
    methods: {
      img(post) {
        return post.frontmatter.img
      }
    }
  }
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px; /* カラム間の隙間 */
}
.col-3 {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: calc(100% / 3);
  padding: 10px;
  margin-left: 10px; /* カラム間の隙間 */
}
</style>
