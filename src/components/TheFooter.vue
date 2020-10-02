<template> 
  <div>
    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-content"></div>
      <div class="footer-about">
        <p>@2020 | Braulio Mateus</p>
      </div>
    </footer>
  </div>
</template>

<script>



export default {
  name: 'TheFooter',

}
</script>

<style scoped>


/** Footer **/

.footer {
    padding: 10px 200px;
    border-top: 1px solid #dbdbdb;
    background-color: #1188EE;
    /* position: relative */
    /*bg color*/
}

.footer li {
    font-size: 1em;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 10px 10px;
    border-bottom: 1px solid #dbdbdb;
}

.options {
    width: 250px;
    margin-bottom: 0px;
}

.select-item,
.options select {
    width: inherit;
}

.select-item {
    position: relative;
}

.select-icon {
    position: absolute;
    top: 50%;
    right: 15px;
    display: inline-block;
    width: 15px;
    height: 15px;
    transform: translateY(-70%);
}

.options select {
    display: inline-block;
    padding: 10px 20px;
    margin-bottom: 8px;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    font-size: 1.1em;
    font-weight: 300;
}

.footer-list {
    margin: 0 10px 10px;
    text-decoration: none;
}

.footer-list h3 {
    margin-bottom: 10px;
    font-size: 1em;
    font-weight: 500;
    color: #666;
}

.footer-list li {
    margin: 5px 0;
    text-decoration: none;
}

.footer-about {
    /*display: flex;*/
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 10px;
    text-align: left;
    color: #fff;
}

.copyright {
    display: flex;
    align-items: center;
    font-size: 0.9em;
}

.bnb-icon {
    margin-right: 10px;
}

.bnb-icon:hover {
    color: white;
}

.social-icon:hover {
    color: white
}

.about-list {
    display: flex;
    align-items: center;
}

.copyright,
.about-list {
    margin: 5px 0;
}

.about-list li {
    margin: 0 5px;
    /*space between social icons*/
}




/** Viewport <= 800px **/

@media (max-width: 800px) {
    .footer {
        padding: 0 30px;
        padding-bottom: 30px;
    }
    .footer-content {
        padding-top: 50px;
    }
}

</style>
