<template> 
  <div id="app">
    <TheHeader></TheHeader>
     <main id="main"> 
       <modal></modal>
       <transition mode="out-in">
          <router-view></router-view>
       </transition>
     </main>
     <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    modal
    // datatable
    
  },
  mounted: function () {
    
      this.checkData();
      this.set_data();
  },
  methods: {
    set_data() {
      localStorage.setItem( 'modalFAQ', 'true' );
    },
    checkData() {
        if(localStorage.getItem('modalFAQ')) {   
          return;
        } else {
          document.getElementById('b-modal').click();
          localStorage.setItem( 'modalFAQ', 'true' );
        }
    }
  },
}
</script>

<style>


@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');

body, ul, li, h1 ,h2, p, span {
  padding: 0px;
  margin: 0px;
  font-family: 'Nunito', sans-serif;
} 
ul {
  list-style: none;
  margin-bottom: 15px;
}
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: all 0.3s;
} 

.router-link-exact-active {
  border-bottom: 4px solid gray;
  
}
</style>
