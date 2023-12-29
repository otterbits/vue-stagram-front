import { createStore } from 'vuex'
import postData from './assets/postdata.js'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      likes : 30,
      likeOrNot : false,
      postData: postData,
      moreCount : 0,
    }
  },
  mutations: {
    setMore(state, data){
      state.postData.push(data)
      state.moreCount ++
    },
    getLike(state, post) {
    const index = state.postData.findIndex(item => item.id === post.id);
    if (index !== -1) {
      if (!state.postData[index].liked) {
        state.postData[index].likes++;
        state.postData[index].liked = true;
      } else {
        state.postData[index].likes--;
        state.postData[index].liked = false;
      }
    }
  }
  },
  actions: {
    getData(context){
      axios.get(`https://codingapple1.github.io/vue/more0.json`)
      .then((a) => {
        console.log(a.data);
        this.commit('setMore', a.data);
      })
    }

  }
});

export default store