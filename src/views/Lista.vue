<template> 
  <div id="app">
    <section class="container-fluid" style="padding: 25px 0; background-color: #eff4f9">
      <div class="col-12">
        <div class="row" style="">
          <div class="col-lg-3 col-xs-0"></div>
          <div class="col-lg-6 col-xs-12">
            <h1 style="font-size: 3.8rem; color: #2e2e2e">Lista</h1>
          </div>
          <div class="col-lg-3 col-xs-12"></div>
        </div>
      </div>
    </section>

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-xs-0"></div>
        <div class="col-lg-6">
          <br/>
          <span style="color: #1188ee; font-weight: bolder">Lista de Clientes</span><br />
          <hr>
        </div>
        <div class="col-lg-3 col-xs-0"></div>
      </div>
    </div>

  


    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-xs-0"></div>
        <div class="col-lg-6">
          <br/>
          <span style="font-weight: bolder">Nome do Cliente</span><br />
        </div>
        <div class="col-lg-3 col-xs-0"></div>
      </div>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
     -->
     <!-- <h1>Ola Lista</h1> -->
      <!-- <lista-buscar></lista-buscar> -->
     <DataTable></DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
// import ListaBuscar from '@/components/ListaBuscar.vue'

export default {
  name: 'Lista',
    components: {
    DataTable,
    // ListaBuscar
  },
  data() {
      return{
        nome2: this.$store.state.usuario, 
        picked: "",
        telefone: "",
        cpf: "",
        cep: "",
        estado: "",
        cidade: "",
        datas: []
      }
    },
    
}
</script>

<style>

</style>
