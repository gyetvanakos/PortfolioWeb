<template>
  <div>
    <div id="socials">
      <a href="https://www.facebook.com/akos.gyetvan"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a href="https://www.linkedin.com/in/akosgyetvan"
        ><i class="fab fa-github"></i>
        </a>
      <a href="https://www.linkedin.com/in/akosgyetvan"
        ><i class="fab fa-linkedin-in"></i
      ></a>
    </div>
    <section id="container">
      <div id="texttwo">
        <p>
          Hi! My name is Akos Gyetvan, 24 years old, I’m from Budapest,
          Hungary. Currently, I’m studying for PBA Web developer at the
          Business Academy Southwest in Esbjerg.
          <br />
          <br />
          I always focus on to turn my interests into my job, which I may do in the
          future. I believe that my diligence and responsibility will enable me
          to perform well at your company. I have good interpersonal skills,
          value teamwork and I am aware that hard work is the key to succeed.
          <br />
          <br />
          
        </p>
      </div>
      <div>
        <div class="content" id="first"></div>
      </div>
    </section>
    <h1>contact me</h1>
<form ref="form" @submit.prevent="sendEmail">
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" name="user_name" required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" name="user_email" required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea name="message" required></textarea>
					<label>Message</label>
				</div>
			</div>
				<button id=sendbutton class="btn" type="submit" value="Send"> SEND </button>
	</div>
   </form>
  </div>

  
  
</template>


<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail(e) {
      try {
        emailjs
          .sendForm(
            "service_j3td01i",
            "template_rnjdl06",
            e.target,
            "wCCDlX82rMgCIlBF1",
            {
              user_name: this.user_name,
              user_email: this.user_email,
              message: this.message,
            }
          )
          .then((result) =>
            console.log("SUCCESS!", result.status, result.text)
          );
      } catch (error) {
        console.log(error);
      }
      this.user_name = "";
      this.user_email = "";
      this.message = "";
    },
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 800px;
  height: 800px;
  margin-top: 20px;
  margin-left: 20px;
}

#first {
  background-image: url("../assets/IMG_5735.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.text {
  text-align: left;
  margin-left: 40%;
  font-size: 50px;
  font-family: Helvetica;
}

#abouttext {
  margin-top: 100px;
}

#texttwo p {
  font-size: 20px;
  width: 700px;
  margin: auto;
  font-family: Helvetica;
  font-weight: normal;
}

#socials {
  display: block;
  height: 150px;
  width: 50px;
  font-size: 20px;
  margin: 630px 0px 0px 30px;
  position: fixed;
}

#infobox {
  display: flex;
  align-items: center;
  justify-content: center;
}

#buttons {
  display: flex;
  width: 500px;
  height: 5px;
  justify-content: space-between;
  font-size: 15px;
}

#container {
  width: 100%;
  margin-top: 150px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

section {
  width: 100%;
  height: 150px;
}

body {
  --def: #c6c6cc;
  --inv: #2d2d2d;
}

a {
  margin: 15px 5px 5px 5px;
  color: #c6c6cc;
  transition: 1s;
}

a:hover {
  color: #2d2d2d;
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

a:visited {
  color: #c6c6cc;
}

#barchart {
  height: 400px;
  width: 100%;
  align-content: center;
  justify-content: center;
  display: flex;
}

@media screen and (max-width: 900px) {
  #abouttext {
    margin-top: 100px;
  }

  .text {
    font-size: 30px;
    width: 300px;
  }

  #abouttext {
    font-size: 30px;
  }

  #texttwo p {
    font-size: 15px;
    width: 250px;
  }
}
body {
    background-color: #444442;
    padding-top: 85px;
}

.btn:before, .btn:after {
    content: '';
    position: absolute;	
    transition: inherit;
    z-index: -1;
    
}
  
.btn:hover {
    color: var(--def);
    transition-delay: .5s;
}
  
.btn:hover:before {
    transition-delay: 0s;
}
  
.btn:hover:after {
    background: var(--inv);
    transition-delay: .35s;
}
.btn:focus{
    outline: 0;
}
  
.btn:before, 
.btn:after {
    left: 0;
    height: 0;
    width: 100%;
}
  
.btn:before {
    bottom: 0;	
    border: 1px solid var(--inv);
    border-top: 0;
    border-bottom: 0;
}
  
.btn:after {
    top: 0;
    height: 0;
}
  
.btn:hover:before,
.btn:hover:after {
    height: 100%;
}
  
*, *:before, *:after {
    box-sizing: border-box;
}

/* ///// inputs /////*/

input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
    font-size: 0.75em;
    color: #2d2d2d;
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
    font-weight: bold;
    font-family: Helvetica;
}

.styled-input {
    float: left;
    width: 293px;
    margin: 1rem 0;
    position: relative;
    border-radius: 4px;
}

@media only screen and (max-width: 768px){
    .styled-input {
        width:100%;
    }
}

.styled-input label {
    color: #999;
    padding: 1.3rem 30px 1rem 30px;
    position: absolute;
    top: 10px;
    left: 0;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
    font-weight: bold;
    font-family: Helvetica;
}

.styled-input.wide { 
    width: 650px;
    max-width: 100%;
}

input,
textarea {
    padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #2d2d2d;
    color: white;
    border-radius: 4px;
    
}

input:focus,
textarea:focus { outline: 0; }

input:focus ~ span,
textarea:focus ~ span {
    width: 100%;
    -webkit-transition: all 0.075s ease;
    transition: all 0.075s ease;
}

textarea {
    width: 100%;
    min-height: 15em;
}

.input-container {
    width: 650px;
    max-width: 100%;
    margin: 20px auto 25px auto;
}

@media (max-width: 768px) {
    .submit-btn {
        width:100%;
        float: none;
        text-align:center;
    }
}

input[type=checkbox] + label {
  color: #ccc;
  font-weight: bold;
  font-family: Helvetica;
} 

input[type=checkbox]:checked + label {
  color: #f00;
  font-style: normal;
  font-weight: bold;
  font-family: Helvetica;
}

.btn {		
    letter-spacing: 3px;
    font-weight: bold;
    font-family: Helvetica; 		
    position: relative;	
    padding: 10px 10px 10px 10px;
    font-size: 12px;
    color: var(--inv);
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);	
    cursor: pointer;
    user-select: none;
    --def: #fff; 	
    --inv: #2d2d2d;

}

#sendbutton{
  background-color: transparent;
  border: none;
  margin-left: 300px;
}

form{
  padding-bottom: 100px;
}

h1 {
    font-family: 'Poppins', sans-serif, 'arial';
    font-weight: 600;
    font-size: 72px;
    color: #2d2d2d;
    text-align: center;
}
  

</style>
