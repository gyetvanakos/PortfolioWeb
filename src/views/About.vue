<template>
  <div>
    <div id="socials">
        <a href="https://www.facebook.com/akos.gyetvan" ><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/akosgyetvan/" ><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/akosgyetvan" ><i class="fab fa-linkedin-in"></i></a>
    </div>
    <section id=container>
      <div class="text" id='abouttext'>
        <h1>About me</h1>
      </div>
      <div id=texttwo>
        <p>Hello!
            My name is Akos Gyetvan, 24 years old, I’m from Budapest, Hungary.
            Currently I’m studying for Multimedia deisgn degree at the Business Academy Southwest in Esbjerg.
            where I learnt about HTML, CSS and Javascript.<br> I have got some experience in terms of logo creating, photo editing and also how to create an user friendly website. I always try to focus on to turn my interests into my job, which I may do in the future. Due to this passion, I have started to learn how to use different 3D graphics softwares, such as Blender and Zmodeler.
        </p>       
      </div>
      <div class="text"><h1>My skills</h1></div>
  </section>
  <section>
    
  </section>
  <section id=infobox>
    <div id=buttons>
      <i class="fas fa-video"></i>
      <i class="fas fa-envelope"></i>
      <i class="fas fa-sticky-note"></i>
    </div>
  </section>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.text{
    display: flex;
    align-items: center;
    justify-items: center;
    margin-left: 40%;
    font-size: 50px;
    font-family: Helvetica;
  }

  #abouttext{
    margin-top:100px;
  }


  #texttwo p{
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
    font-size: 20px;
    width:700px;
    margin: auto;
    font-weight: lighter;
    font-family: Helvetica;
    text-align: center;
  }

  #socials{
  display: block;
  height: 150px;
  width: 50px;
  font-size: 20px;
  margin: 630px 0px 0px 30px;
  position:fixed; 

  }

  #infobox{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #buttons{
    display: flex;
    width:500px;
    height:5px;
    justify-content: space-between;
    font-size: 15px;
  }

  #container{
    width:100%;
  }

  section{
    width:100%;
    height:150px;
  }

body {
    --def: #c6c6cc; 	
    --inv: #000;
}
  
a{
    margin:15px 5px 5px 5px;
    color: #c6c6cc;
    transition:1s
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

@media screen and (max-width:900px) {

#abouttext{
    margin-top:100px;
  }

.text{

    font-size: 30px;
    width: 300px;
  }

  #abouttext{
    font-size: 30px;
  }


  #texttwo p{
    font-size: 15px;
    width:250px
  }

}

</style>
