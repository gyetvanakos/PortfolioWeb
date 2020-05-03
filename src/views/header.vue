<template>
    <div id=head>
        <header>
        <div id=logo>
            <img src="@/assets/signature.svg" alt="logo" width="200,78px" height="46,67px">
        </div>
        <div id=menu>
            <router-link to="/home" class="btn">HOME</router-link>
            <router-link to="/about" class="btn">ABOUT</router-link>
            <router-link to="/portfolio" class="btn">PORTFOLIO</router-link>
        </div>
    </header>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
header{
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:10px;
  color:black;
}

#logo{
  flex-grow: 10;
  display: flex;
  margin: 20px;
  
}

#menu{
  flex-grow: 0.5;
  align-content: center;
  display: flex;
  color: #000000;
  margin: auto;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: bold;
}
  
a{
  margin:15px 5px 5px 5px;
  color: #c6c6cc;
  transition:1s
}
  
  a:hover{
    color:black;
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
    --inv: #000;

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

@media screen and (max-width:900px) {

#menu{
    display: block;
}    

}




</style>