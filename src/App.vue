<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <!--{{this.$store.state.bestWords}}-->
    <!-- {{bestWordsCall}} -->
    <!-- {{db}} -->
    <!-- people: {{people}} -->

   

      <h1 v-for="data in people">{{data.text}}</h1>

      

    <br/>
    
    <button @click="agregarElemento()" class="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded">BOTON</button>
    <h1 v-for="(words, index) in bestWordsCall"> {{words.likes}}</h1>

    <div class="flex mb-4">
      <div class="w-full h-12">
        <form class="w-full max-w-sm" style="margin:auto">
          <div class="flex items-center border-b border-b-2 border-teal py-2">
            <input v-model="bestWord.text" class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="asdafadf" aria-label="Full name">
            <button @click="Update()" class="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded" type="button">
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>


    <div class="flex flex-wrap" >
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4  h-12" style="font-size: 20px"
           v-for="(words, index) in people" :key="index">
        <!-- Wide center column -->
        <div class="flex">
          <div class="w-1/5 h-12">{{index}}</div>
          <div class="w-3/5 h-12">
            #<h5>{{words.text}}</h5>
          </div>
          <div class="w-1/5 h-12">
            <p>+{{words.likes}}</p>
            <p><button @click="like(words.id)" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">
              like
            </button></p>
          </div>
        </div>
      </div>


      <!--<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4  bg-grey h-12"></div>-->
      <!--<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey-light h-12"></div>-->
      <!--<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey h-12"></div>-->
      <!--<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey-light h-12"></div>-->
      <!--<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey h-12"></div>-->
    </div>



  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { mapState } from 'vuex'
import { mapActions } from 'vuex';

import { db }  from "./main"

//let people = db.ref("personas");

export default {
  name: 'app',
  components: {


  },
  data(){
    return {
      bestWord: {},
      people: []
    }
     
  },
  methods: {
      ...mapActions(['agreeState','likedFunction']),
      getElementos(){
      },
      init(){
        console.log("init");
        
        db.collection("bestWords").onSnapshot(snapshot => {
        let array = [] 
        snapshot.forEach(snapProduct => {
          array.push(snapProduct.data());
          });
          this.people = array;
          array = []
          console.log(this.people)
        });
    },

    agregarElemento(){
      //console.log(this.bestWord);
      this.bestWord.id = this.$uuid.v1();

      db.collection("bestWords").add(this.bestWord)
      .then(function() {
          console.log("Document successfully written!");
          
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });

      this.bestWord = {}
    },
    setearElemento(){
      //con .set podemos setear un nuevo documento con el nombre que le pongamos en .doc("nombreDelDocumento")
      db.collection("personas").doc("documentoNuevo2").set({
          name: "Los Angeles2",
          state: "CA",
          country: "USA"
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    },
    Update() {
       //db.collection("personas").add(this.bestWord)
      // this.bestWord.id = this.$uuid.v1();
      // console.log(this.bestWord)

      
        

      //this.bestWord = {}
      // this.bestWord.likes = 0;
      // this.init();
      // this.agreeState(this.bestWord);
      // this.agregarElemento();
     

      //this.getElementos();

      //this.bestWordsCall
    },
    like(id){
      //console.log(id)

      this.likedFunction(id);
      //console.log("getters", this.bestWordsCall);
      //this.$store.commit("like", id);

      //this.bestWord = this.bestWordsCall;

      //this.$store.getters.bestWordsCall;
      //return this.$store.getters.doneTodosCount
    },
    
  },
  mounted() {
      this.init()
    },

  computed: { 
    ...mapGetters(['bestWordsCall']),
 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
