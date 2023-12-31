<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input @input="filter($event.target.value)" placeholder="🔎" />
  <div v-for="(v, i) in follower" :key="i" class="post-header">
    <div class="profile" :style="`background-image: url(${follower[i].image})`"></div>
    <span class="profile-name">{{ follower[i].name }}</span>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
    name: 'MyPage',
    props: {
    },
    setup(){
        let follower = ref([]);
        let originFollower = ref([]);

        function filter(userInput){
          let filteredFollower = originFollower.value.filter((a)=>{
            return a.name.indexOf(userInput) != -1
        });
        follower.value = [...filteredFollower]
      }
        
        onMounted(()=>{
        axios.get('/follower.json').then((a)=>{
            follower.value = a.data;
            originFollower.value = a.data;
        })
    })
    return { follower, filter }
}
}
</script>

<style>

</style>