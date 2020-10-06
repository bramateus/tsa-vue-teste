<template>
    <div>
        <div class="mb-1" style="display:none">
            <b-button id="b-modal" @click="showMsgBoxTwo"></b-button>
        </div>
  </div>
</template>

<script>


export default {
    data() {
      return {
        boxTwo: '',
      }
    },
    methods: {
      showMsgBoxTwo() {
        this.boxTwo = ''
        this.$bvModal.msgBoxOk('Esse é um teste encontrado no repositório da TSA Aviação, todo o projeto foi desenvolvido utilizando o framework Vue.js, o código completo pode ser visto no meu Github -> https://github.com/bramateus/tsa-vue-teste', {
          title: 'Olá...',
          size: 'md',
          buttonSize: 'md',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          okTitle: 'Não me lembre mais.',
          centered: true
        })
        .then(value => {
            this.boxTwo = value;
        }) 
        .catch(err => {
            console.log(err);
          })
      },
      
    }
  }
</script>

<style>

</style>