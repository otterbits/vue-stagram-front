<template>
  <div @click="applyFilter" :class="`${filter} filter-item`" :style="`background-image:url(${image})`">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'filterBox',
    methods: {
      applyFilter(){
        this.emitter.emit('selectBox', this.filter)
      }
    },

    props: {
      image: String,
      filter: String,

}
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>