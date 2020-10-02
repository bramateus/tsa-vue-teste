<template>
    <div>
    <section class="container-fluid" style="padding: 25px 0; background-color: #eff4f9">
      <div class="col-12">
        <div class="row" style="">
          <div class="col-lg-3 col-xs-0"></div>
          <div class="col-lg-6 col-xs-12">
            <h1 style="font-size: 3.8rem; color: #2e2e2e; font-family: 'Nunito', sans-serif;">Cadastro</h1>
          </div>
          <div class="col-lg-3 col-xs-12"></div>
        </div>
      </div>
    </section>

    <section class="container-fluid" style="background-color: #fff">
      <div class="col-12">
        <form>
          <div class="row" style="padding: 30px 0 10px 0">
            <div class="col-lg-3 col-xs-0"></div>
            <div class="col-lg-6 col-xs-12">
              <span>Nome*</span><br />
              <input type="text" name="nome" v-model="nome" required="true" class="input-style" />
            </div>
            <div class="col-lg-3 col-xs-0"></div>
          </div>

          <div class="row" style="padding: 10px 0">
            <div class="col-lg-3 col-xs-0"></div>
            <div class="col-lg-6 col-xs-12">
              <span>Email*</span><br />
              <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="email" v-model="email" class="input-style"
              />
            </div>
            <div class="col-lg-3 col-xs-0"></div>
          </div>

          <div class="row" style="padding: 10px 0">
            <div class="col-lg-3 col-xs-0"></div>
            <div class="col-lg-6 col-xs-12">
              <span>CPF*</span><br />



              <!-- <ul>
                <li v-for="user in users" :key="user.id">
                  {{ user.name }}
                </li>
              </ul> -->
              <!-- <the-mask :mask="['###.###.###-##', '##.###.###/####-##']" /> -->
              <!-- <input type="text" v-mask-tel="telefone" v-model="telefone" /> {{telefone}} -->

              <input type="text" name="CPF" v-mask="'###.###.###-##'" placeholder="111.111.111-01" v-model="cpf" class="input-style"
              />
            </div>
            <div class="col-lg-3 col-xs-0"></div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-xs-0"></div>
            <div class="col-lg-3">
              <br />
              <span>Endereço</span><br />
              <input type="text" name="endereco" v-model="endereco" placeholder="Rua, Número e Bairro" class="input-style"/>
            </div>


            <div class="col-lg-3">
              <br />
              <span>Estado</span><br />
              <!-- <input type="text" v-model="estado" class="input-style" /> -->
              <select name="select-estado" id="select-estado" class="input-style" v-model="estado">
                <option value=""></option>
              </select>
            </div>
            <div class="col-lg-3 col-xs-0"></div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-xs-0"></div>
            <div class="col-lg-3">
              <br />
              <span>CEP</span><br />
              <input
                name="cep" v-model="cep" class="input-style" @keyup="fetchApi" maxlength="10" v-mask="'##.###-###'" />
            </div>
            <div class="col-lg-3">
              <br />
              <span>Cidade</span><br />
              <input
                type="text"
                name="estado"
                v-model="cidade"
                class="input-style"
              />
            </div>
            <div class="col-lg-3 col-xs-0"></div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-xs-0"></div>
            <div class="col-lg-6">
              <br />
              <span style="color: royalblue; font-weight: bolder"
                >Forma de Pagamento</span
              ><br />
              <hr />
            </div>
            <div class="col-lg-3 col-xs-0"></div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-xs-0"></div>
            <div class="col-lg-2">
              <input
                type="radio"
                id="one"
                value="Cartão de Crédito"
                v-model="picked"
              />
              <label for="one" style="cursor: pointer">Cartão de Crédito</label>
              <br />
            </div>
            <div class="col-lg-2">
              <input
                type="radio"
                id="two"
                value="Boleto Bancário"
                v-model="picked"
              />
              <label for="two" style="cursor: pointer">Boleto Bancário</label>
              <br />
            </div>
            <div class="col-lg-3 col-xs-0"></div>
          </div>

          <div class="row" style="padding: 30px 0 10px 0">
            <div class="col-lg-3 col-xs-0"></div>
            <div class="col-lg-3 col-xs-12">
              <span>Nome no cartão</span><br />
              <input
                type="text"
                name="nome-cartao"
                v-model="nome_cartao"
                placeholder="Nome impresso no cartão"
                class="input-style"
              />
            </div>

            <div class="col-lg-2 col-xs-12">
              <span>Data de Expiração</span><br />
              <input v-mask="'##'"
                type="number"
                name="nome"
                placeholder="Mês"
                class="input-style"
                min="01"
                max="12"
              />
            </div>
            <div class="col-lg-1 col-xs-12">
              <br />
              <input
                type="text"
                name="nome"
                placeholder="Ano"
                class="input-style"
                v-mask="'####'"
              />
            </div>
            <div class="col-lg-3 col-xs-0"></div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-xs-0"></div>
            <div class="col-lg-3">
              <br />
              <span>Número do Cartão</span><br />
              <input
                type="text"
                name="cep"
                placeholder="5555 5555 5555 5555"
                class="input-style"
                v-mask="'#### #### #### ####'"
              />
            </div>
            <div class="col-lg-3">
              <br />
              <span>Código de Segurança</span><br />
              <input
                type="text"
                name="estado"
                placeholder="XXX"
                class="input-style"
                v-mask="'###'"
              />
            </div>
            <div class="col-lg-3 col-xs-0"></div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-xs-0"></div>
            <div class="col-lg-6">
              <hr />
              <div style="padding: 15px 0 0 0">
                <span>Seu cartão será debitádo em R$ 49,90</span>
              </div>
              <br />
              <button type="submit" class="btn-form" @click.prevent="send">Realizar Matrícula</button>
              <p style="padding: 15px 0">
                Informações seguras e criptografadas
              </p>
            </div>
            <div class="col-lg-3 col-xs-0"></div>
          </div>
        </form>
      </div>
      <!-- END COL 12 -->
    </section>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .form-inline {
    display: inherit;
  }

  ul li a {
    color: #fff;
    font-weight: bolder;
  }

  .input-style {
    border: 0px solid gray;
    background-color: #EFF4F9;
    border-radius: 3px;
    width: 100%;
    padding: 12px 12px;
    border-bottom: 2px solid gainsboro;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color:gray;
    opacity: 0.5; /* Firefox */
    font-weight: 700;
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:gray;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: gray;
  }


  input[type=radio], .exemplo1 input[type=checkbox]{
    display:none; /* Esconde os inputs */
    color: red;
  }
 
  input[type=radio] + label, .exemplo1 input[type=checkbox] + label{
    display:inline-block;
    height:20px;
    padding:0 0 0 25px;
    margin:0 10px 0 0;
    background-image:url(http://www.webcis.com.br/images/imagens-noticias/checkbox/ico-master.webp);
    background-repeat:no-repeat;
    background-position:0 0;
  }
 
  input[type=checkbox] + label{
    background-position:0 -60px; /* Muda a posição do background só no checkbox */
  }
 
  input[type=radio]:checked + label{
    background-position:0 -30px;
  }
 
  input[type=checkbox]:checked + label {
    background-position:0 -90px;
  }

  .btn-form{
    color: #fff; 
    background-color: #1188EE; 
    border: 0px; 
    border-radius: 5px; 
    padding: 10px 50px; 
    font-size: 24px; 
    cursor: pointer;
  }

  .btn-form:hover {
    transition: 0.4s; 
    background-color: #fff; 
    color: #1188EE; 
    /* font-weight: 600; */
    border: 0px; 
    border-radius: 5px; 
    padding: 10px 50px; 
    font-size: 24px; 
    cursor: pointer;
    border: 1px solid #1188EE;
  }
</style>


<script>


export default {
    name: "Home", 
    data() {
      return{
        nome: "",
        email: "",
        endereco: "",
        picked: "",
        telefone: "",
        cpf: "",
        cep: "",
        estado: "",
        cidade: "",
        nome_cartao: "",
        datas: []
      }
    },
    filters: { 
        numeroFormatado: (t) => t.toLocaleString("pt-BR", { style: "decimal", currency: "BRL" }) 
    },
    computed: {},
    // mounted() {
    //     var self = this
    //     $.getJSON("../estados-cidades.json", function(json_data) {
    //         self.datas = json_data.data
    //     })
    //   },
    methods: {


        send() {

          if(this.nome != '' && this.email != '' && this.cpf !== '') {

            this.$store.commit("UPDATE_LISTA", {
            "nome"       : this.nome, 
            "email"      : this.email,
            "cpf"        : this.cpf,
            "created_at" : this.getTime()
            });

            this.nome = ""
            this.email = ""
            this.cpf = ""
            this.endereco = ""
            this.estado = ""
            this.cep = ""
            this.cidade = ""

            this.$swal("Sucesso!","Novo Registro Adicionado Na Lista.","success");
          
          } else {
            this.$swal("Ops!", "Verifique os campos obrigatórios.","warning");
          }

        },

        getTime() {
          var today = new Date();
          var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
          var time = today.getHours() + ":" + today.getMinutes() + ":" + 
          today.getSeconds();
          var dateTime = date+' '+time;
          return dateTime;
        },
        
        fetchApi() {
            const cep = this.cep.replace(/\D/g, "") ; 
            if(cep.length === 8) {
                fetch("https://viacep.com.br/ws/"+cep+"/json/")
                .then((t) => t.json())
                .then((t) => {
                    if (t.uf != null || t.localidade != null) {
                        this.estado = t.uf;
                        this.cidade = t.localidade
                    }
                });
            }
        },
        dropdown() {
            // $("html,body").animate({ scrollTop: document.body.scrollHeight }, "2000");
        },
        addTable() {},
        formatData() {
            var t = this.periodo.split("T"),
                a = t[0].substr(8) + "/" + t[0].substr(5, 2) + "/" + t[0].substr(0, 4);
            this.dataAtual = a;
        },
    },
    watch: {},
    created() {
        fetch("https://gist.githubusercontent.com/henriquejensen/1032c47a44d2cddaa2ef47fc531025db/raw/c58fdc848baf2a1fb53e617a0ad4e9754ec68e35/json-estados-brasileiros")
                .then((t) => t.json())
                .then((t) => {
                   t.UF.forEach(element => {
                      document.getElementById('select-estado').innerHTML  += '<option value='+element.sigla+'>'+element.sigla+' - '+element.nome+'</option>' 
                   });
                });
    },


}
</script>
