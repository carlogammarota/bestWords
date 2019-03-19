import Vuex from "vuex";
import Vue from 'vue'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        bestWords: []
    },
    getters: {
        // bestWordsCall(state){
        //     //console.log("bestWordsCall", state.bestWords)
        //     //bestWordsCall
        //     //bestW = state.bestWords;
        //     return state.bestWords;
        // },

        bestWordsCall: state => state.bestWords

    },
    mutations: {
        agreeEstado(state, estado){
            //console.log(estado);
            //estado.id =
            state.bestWords.push(estado);
        },
        like(state, id){
            //console.log("count", id);
            //console.log("array", state.bestWords)
            //console.log("like", state.bestWords.filter(idLike => state.bestWords.id >= count ));
            //console.log("TEST", state.bestWords)

            // var filterUse = state.bestWords.filter(function(){
            //     state.bestWords.likes < 10
            // });

            var filterUse =  state.bestWords.filter(item => {
                if(item.id == id){
                    //true.likes + 1 ;
                    console.log(item.id);
                    return true;
                }
                else
                    return false;

            })

            //console.log("filter", filterUse)
            filterUse[0].likes++;
            //state.bestWordsCall
            //console.log("filter", state.bestWords.filter(id) )


        }
    },
    actions: {
        agreeState(state, estado){
            state.commit("agreeEstado", estado);
        },

        likedFunction(state, id){
            state.commit("like", id);
        }
    }
});