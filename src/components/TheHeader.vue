<template> 
  <div>
    <header class="header" style="background-color: #2e2e2e">
      <div class="container">
        <nav class="header_menu menu-nav">
          <div class="row">
            <div class="col-lg-3 col-md-12 col-mdd-12" style="display: inline-block; cursor: pointer; float: left">
              <!-- <a href="#">
                            <img class="logo" src="img/logo.png" alt="logo">
                        </a> -->
            </div>
              <div class="col-lg-9 col-md-12 col-mdd-12" style="max-width: 100%">
              <ul>
                <li>
                    <router-link to="/">Cadastro</router-link>
                </li>
                <li>
                    <router-link to="lista">Lista</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>



export default {
  name: 'TheHeader',

}
</script>

<style scoped>
.p-title {
  padding: 20px 0 0 0; 
  color: rgba(255,255,255,.6);
  font-size: 25px;
  text-align: left;
  margin: 0;
  line-height: 22px;
  letter-spacing: -.65px
}

.p-title2 {
  padding: 0  0 0 0; 
  color: rgba(255,255,255,.6);
  font-size: 18px;
  text-align: left;
  margin: 0;
  line-height: 22px;
  letter-spacing: -.65px
}

.p-title-card-white {
  padding: 20px 0 0 0; 
  /*color: rgba(255,255,255,.6);*/
  font-size: 16px;
  text-align: left;
  margin: 0;
  line-height: 22px;
  letter-spacing: -.65px;
  color: #1DA584;
  font-weight: bolder;
}

.p-title-card-white2 {
  padding: 17px 0 0 0; 
  /*color: rgba(255,255,255,.6);*/
  font-size: 26px;
  text-align: left;
  margin: 0;
  line-height: 22px;
  letter-spacing: -.65px;
  color: #000;
  font-weight: bolder;
}

.size-number {
  font-size: 26px
}

.size-subtext {
  font-size: 14px;
  color: #6f7982;
  font-weight: lighter;
}

.line-left-color-green:after {
  top: 14px;
  left: -3px;
  position: absolute;
  content: "";
  display: block;
  height: 46px;
  width: 6px;
  border-radius: 4px;
  background: #1DA584;
  box-shadow: #1DA584;
}

.line-left-color-purple:after {
  top: 14px;
  left: -3px;
  position: absolute;
  content: "";
  display: block;
  height: 46px;
  width: 6px;
  border-radius: 4px;
  background: #9A36BB;
  box-shadow: #9A36BB;
}

.img-card {
  height: 100px;
  right: -12px;
  bottom: 16px;
  position: absolute;
}

.tp-sobre {
  width: auto;
  /*position: relative;*/
  position: initial;
  max-width: 100%;
  min-width: auto;
  /* background: url(../img/bg-card-sobre.png) right bottom/contain no-repeat #fff; */
}


    /*.ct-info {
      width: 70%;
    }*/
    .info-text {
      color: #242930;
        font-size: 16px;
        text-align: left;
        line-height: 22px;
        margin-bottom: 22px;
        letter-spacing: -.26px;
    }
    .ct-cards {
      width: 30%;
        min-width: 350px;
        max-width: 400px;
        margin: 10px 0 0 32px;
    }
    .card-info {
      -webkit-box-align: end;
        align-items: flex-end;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        padding: 16px 22px;
        margin-bottom: 32px;
        border-radius: 10px;
        box-shadow: 0 8px 10px 0 rgba(29,165,132,.16);
        /* background: url(../img/img-mask-card.png) top left/contain no-repeat #1da584; */
    }

    .display-flex {
        display: -webkit-box;
        /*display: flex;*/
        /*-webkit-box-align: center;*/
        align-items: center;
        -webkit-box-pack: center;
        /*justify-content: center;*/
    }

/*.header {
  position: absolute;
  top: 0;
  width: 100%;
    height: 74px;
  background: gray;
  padding: 8px 0;
  z-index: 10;
    
}*/



.header_menu {
  text-align: center;

}

.header_menu ul li {
  display: inline-block;
  margin-left: 4px;
    margin-right: 14px;
  padding-top: 20px;
 
}



#inscrever {
    color: red;
}

.header_menu ul li a {
    
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 17px;
  line-height: 20px;
  padding: 28px 0 13px 0;
  text-decoration: none;

    
}



.header_menu ul li a:hover {
  box-shadow: inset 0 4px 0 0 hsla(0, 0%,71%, .5);

}



.header_menu ul li a.menu-ativo {
  color: #fff;
}



.btn-hover {
    position: relative;
    background-color: red;
    border: none;
/*    padding: 20px;
    width: 200px;*/
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
}

.btn-hover:hover{
   background:#fff;
   box-shadow:0px 2px 10px 5px #d5991d;
   color:#000;
}

.btn-hover:after {
    content: "";
    background: #004060;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.btn-hover:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}




/* EFEITO REFLEXO BUTTON */

.btn-glass-hover {
  text-align: center;
  display: inline-block;
  /*padding: 10px 40px;*/
  cursor: pointer;
  letter-spacing: 1px;
  position:relative;
  overflow:hidden;
  margin: 0 20px;
}

.btn-glass-hover:before {
  content: "";
  position: absolute;
  height: 170px;
  width: 50px;
  background : #fff;
  left: -80px;
  top: -50px;
  transform: rotate(37deg);
  transition: all .99s;
  opacity: 0.5;
}

.btn-glass-hover:hover:before {
  left:100%;
}

.reflexo {
  position: absolute;
  height: 170px;
  width: 50px;
  background : #fff;
  left: -80px;
  top: -50px;
  transform: rotate(37deg);
  opacity: 0.3;
}






/* Datatatable css  */

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
    background-position:0 -60px; /* Muda a posi��o do background s� no checkbox */
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
