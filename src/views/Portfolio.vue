<template>
    <div>
    <div id="app">
    <section id="container">
        <div id="portfolio">
            <div class="content" id="first"></div>
            <div class="content" id="second"></div>
            <div class="content" id="third"></div>
            <div class="content" id="fourth"></div>
            <div class="content" id="fifth"></div>
            <div class="content" id="sixth"></div>
        </div>
    </section>
    </div>
    <div id="socials">
        <a href="https://www.facebook.com/akos.gyetvan" ><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/akosgyetvan/" ><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/akosgyetvan" ><i class="fab fa-linkedin-in"></i></a>
    </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
#app{
    display:flex;
    align-items: center;
    justify-content: center;
}

#container{
    display: block;
    align-items: center;
    justify-content: center;
}

#portfolio{
    width: 100%;
    height: auto;
    display: block;
    align-items: center;
    justify-content: center;
}

.content{
    width: 800px;
    height: 800px;
    background: #c6c6cc;
    margin-top: 20px;
    border-radius: 25px;
    margin-bottom: 20px;
    border: solid #c6c6cc 1px;
}

#socials{
  display: block;
  height: 150px;
  width: 50px;
  font-size: 20px;
  margin: 630px 0px 0px 30px;
  position:fixed; 
}

a{
    margin:15px 5px 5px 5px;
    color: #c6c6cc;
    transition:1s;
    display: block;
}
  
a:hover{
    color:black;
}

a:link {
    text-decoration: none;
}
  
a:hover {
    text-decoration: none;
}
  
a:active {
    text-decoration: none;
}

a:visited{
    color:#c6c6cc;
}

#first{
    background-image: url("../assets/clonesoldier.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
}

#second{
    background-image: url("../assets/minime.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
}

#third{
    background-image: url("../assets/pizza.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
}

#fourth{
    background-image: url("../assets/spacesuits.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
}

#fifth{
    background-image: url("../assets/logoek.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
}

#sixth{
    background-image: url("../assets/site.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
}

@media screen and (max-width:900px) {

.content{
    width: 300px;
    height: 300px;
    background: #c6c6cc;
    margin-top: 20px;
    border-radius: 12px;
    margin-bottom: 50px;
}    

}

@media screen and (max-width:600px) {

.content{
    width: 250px;
    height: 250px;
    background: #c6c6cc;
    margin-top: 20px;
    border-radius: 12px;
    margin-bottom: 50px;
}

#container{
    margin-top: 100px;
}

}

</style>