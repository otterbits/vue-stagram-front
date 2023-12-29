import { createStore } from 'vuex'
import postData from './assets/postdata.js'

const store = createStore({
  state(){
    return {
      likes : 30,
      likeOrNot : false,
      postData: postData
    }
  },
  mutations: {
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
}
});

export default store