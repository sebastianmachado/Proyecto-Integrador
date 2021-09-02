document.getElementById("btn__iniciar-sesion").addEventListener("click",iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click",register);
window.addEventListener("resize",anchoPagina);


//declaracion de variables

var contenedor_login_register = document.querySelector(".contenedor__login-register") 
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_tracera_login = document.querySelector(".caja__tracera-login");
var caja_tracera_register = document.querySelector(".caja__tracera-register");

function anchoPagina(){
     if(window.innerWidth>850){ 
          caja_tracera_login.style.display="block";
          caja_tracera_register.style.display="block";   
     }else{
          caja_tracera_register.style.display="block";
          caja_tracera_register.style.opacity="1";
          caja_tracera_login.style.display="none";
          formulario_login.style.display="block";
          formulario_register.style.anchopagina="none";
          contenedor_login_register.style.left="opx";
          }
     }
anchoPagina();


function iniciarSesion(){
if(window.innerWidth>850){
     formulario_register.style.display="none";
     contenedor_login_register.style.left="244px";
     formulario_login.style.display="block";
     caja_tracera_register.style.opacity="1";
     caja_tracera_login.style.opacity="0";
}else{
     formulario_register.style.display="block";
     contenedor_login_register.style.left="0px";
     formulario_login.style.display="block";
     caja_tracera_register.style.opacity="block";
     caja_tracera_login.style.opacity="none";

}
}


function register(){ 
if(window.innerWidth>850){ 
     formulario_register.style.display="block";
     contenedor_login_register.style.left="630px";
     formulario_login.style.display="none";
     caja_tracera_register.style.opacity="0";
     caja_tracera_login.style.opacity="1";    

}else{
     formulario_register.style.display="block";
     contenedor_login_register.style.left="0px";
     formulario_login.style.display="none";
     caja_tracera_register.style.opacity="none";
     caja_tracera_login.style.opacity="block";
     caja_tracera_login.style.opacity="1"
} 
}


     const form = document.getElementById('form');
     const username=document.getElementById('username');
     const password=document.getElementById('password');

     form.addEventListener('submit',function(event) {
          event.preventDefault();
          let users = Array( 
               {
                    usuario: username.Value,
                    contraseña: password.Value
          }
        );
        localStorage.setItem('users',JSON.stringify(users));
        location.href='Fast-Route.html';
     });