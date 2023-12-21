<template>
  <div v-for="(v, i) in postdata" :key="i">
    <Post :게시물="postdata[i]" />
  </div>
</template>

<script>
import Post from "./Post.vue"

export default {
    name: 'Container',
    components: {
        Post: Post,
    },
    props: {
      postdata: Array,
    }

}
</script>

<style>

</style>