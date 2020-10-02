<template>
<div class="container-fluid">
   
      <div class="row">
        <div class="col-lg-3 col-xs-0"></div>
        <div class="col-lg-6">
          <input  class="input-style" type="text" v-model="filter" />
        </div>
        <div class="col-lg-3 col-xs-0"></div>
      </div>
   
 
    
    <div class="row">
    <div class="col-lg-3 col-xs-0"></div>
    <div class="col-lg-6">

            <div id="wrapper" style="padding: 25px 0">
            <table id="keywords" cellspacing="10" cellpadding="0">
                <thead>
                <tr>
                    <th><span>Nome</span></th>
                    <th><span>Email</span></th>
                    <th><span>CPF</span></th>
                    <th><span>Criado em</span></th>
                </tr>
                </thead>
                <tbody  v-if="this.$store.state.usuario.usu_array[0]"> 
                <tr v-for="(lista, index) in filteredRows" :key="`employee-${index}`">
                    <td  class="lalign" v-html="highlightMatches(lista.nome)"></td>
                    <td  v-html="highlightMatches(lista.email)"></td>
                    <td  v-html="highlightMatches(lista.cpf)"></td>
                    <td >{{lista.created_at}}</td>
                </tr>
                </tbody>
                <tbody v-else> 
                    <tr style="text-align: center">
                        <p>Nenhum registro encontrado.</p>
                    </tr> 
                </tbody>

            </table>
            </div>

    </div>
    <div class="col-lg-3 col-xs-0"></div>
    </div>


 </div>
</template>





<style scoped>

html { overflow-y: scroll; }
body { /* https://subtlepatterns.com/weave/ */
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 62.5%;
  line-height: 1;
  color: #585858;
  padding: 22px 10px;
  padding-bottom: 55px;
}

.input-style {
    border: 0px solid gray;
    background-color: #EFF4F9;
    border-radius: 3px;
    width: 100%;
    padding: 12px 12px;
    border-bottom: 2px solid gainsboro;
  }

::selection { background: #5f74a0; color: #fff; }
::-moz-selection { background: #5f74a0; color: #fff; }
::-webkit-selection { background: #5f74a0; color: #fff; }

br { display: block; line-height: 1.6em; } 

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; }
ol, ul { list-style: none; }

input, textarea { 
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline: none; 
}

blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; }
strong, b { font-weight: bold; } 

table { border-collapse: collapse; border-spacing: 0; }
img { border: 0; max-width: 100%; }

h1 { 
  font-family: 'Amarante', Tahoma, sans-serif;
  font-weight: bold;
  font-size: 3.6em;
  line-height: 1.7em;
  margin-bottom: 10px;
  text-align: center;
}


/** page structure **/
#keywords {
  margin: 0 auto;
  font-size: 1.0em;
  margin-bottom: 15px;
  width: 100%;
}


#keywords thead {
  cursor: pointer;
  background: #c9dff0;
}
#keywords thead tr th { 
  font-weight: bold;
  padding: 12px 30px 12px 10px;
  border: 1px solid #cecece;
  text-align: left
}
#keywords thead tr th span { 
  padding-right: 20px;
  background-repeat: no-repeat;
  background-position: 100% 100%;
}

#keywords thead tr th.headerSortUp, #keywords thead tr th.headerSortDown {
  background: #acc8dd;
}

#keywords thead tr th.headerSortUp span {
  background-image: url('https://i.imgur.com/SP99ZPJ.png');
}
#keywords thead tr th.headerSortDown span {
  background-image: url('https://i.imgur.com/RkA9MBo.png');
}


#keywords tbody tr { 
  color: #555;
}
#keywords tbody tr td {
  text-align: center;
  padding: 5px 10px;
  border: 1px solid #cecece
}
#keywords tbody tr td.lalign {
  text-align: left;
}

@media only screen and (max-width: 460px), (min-device-width: 468px) and (max-device-width: 524px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
    



}
</style>


<script>

export default {
    name: "DataTable",
    data() {
        return {
            filter: "",
        }
    },
    methods: {
        highlightMatches(text) {
            const matchExists = text.toLowerCase().includes(this.filter.toLowerCase());
            if (!matchExists) return text;
            const re = new RegExp(this.filter, "ig");
            return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
            }

    },
    computed: {
        filteredRows() {
            return this.$store.state.usuario.usu_array.filter(row => {
                const nome  = row.nome.toLowerCase();
                const email = row.email.toLowerCase();
                const cpf  = row.cpf.toLowerCase();
                const searchTerm = this.filter.toLowerCase();
                return (
                    nome.includes(searchTerm) || email.includes(searchTerm) || cpf.includes(searchTerm)
                );
            });
        }
    }
// created() {
//     $(function(){
//   $('#keywords').tablesorter(); 
// });
// }
    
}
</script>