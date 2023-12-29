<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="🔎" />
  <div v-for="(v, i) in follower" :key="i" class="post-header">
    <div class="profile" :style="`background-image: url(${follower[i].image})`"></div>
    <span class="profile-name">{{ follower[i].name }}</span>
  </div>
</div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    name: 'MyPage',
    setup(){
        let follower = ref([]);
        
        axios.get('/follower.json').then((a)=>{
            follower.value = a.data
        })

        return { follower }
    }

}
</script>

<style>

</style>