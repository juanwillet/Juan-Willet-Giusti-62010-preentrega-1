/*let edades = parseFloat (prompt('cual es tu edad?'))
if (edades >= 94){
    alert ('has vivido todos los mundiales!')
}
else if (edades >= 91){
    alert ('has vivido 23 mundiales')
}
else if (edades >= 87){
    alert ('has vivido 22 mundiales')
}
else if (edades >= 83){
    alert ('has vivido 21 mundiales')
}
else if (edades >= 79){
    alert ('has vivido 20 mundiales')
}
else if (edades >= 75){
    alert ('has vivido 19 mundiales')
}
else if (edades >= 71){
    alert ('has vivido 18 mundiales')
}
else if (edades >= 67){
    alert ('has vivido 17 mundiales')
}
else if (edades >= 63){
    alert ('has vivido 16 mundiales')
}
else if (edades >= 59){
    alert ('has vivido 15 mundiales')
}
else if (edades >= 55){
    alert ('has vivido 14 mundiales')
}
else if (edades >= 51){
    alert ('has vivido 13 mundiales')
}
else if (edades >= 47){
    alert ('has vivido 12 mundiales')
}
else if (edades >= 43){
    alert ('has vivido 11 mundiales')
}
else if (edades >= 39){
    alert ('has vivido 10 mundiales')
}
else if (edades >= 35){
    alert ('has vivido 9 mundiales')
}
else if (edades >= 31){
    alert ('has vivido 8 mundiales')
}
else if (edades >= 27){
    alert ('has vivido 7 mundiales')
}
else if (edades >= 23){
    alert ('has vivido 6 mundiales')
}
else if (edades >= 19){
    alert ('has vivido 5 mundiales')
}
else if (edades >= 15){
    alert ('has vivido 4 mundiales')
}
else if (edades >= 11){
    alert ('has vivido 3 mundiales')
}
else if (edades >= 7){
    alert ('has vivido 2 mundiales')
}
else if (edades >= 3){
    alert ('has vivido 1 solo mundial')
}*/

/*let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index ++) {
console.log(texto);
}*/

/*let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
if (index > 3) {
    break
}
alert("lado " + index);
}*/

/*let numero = prompt('INGRESA UN NUMERO')

if (numero == 0){
    alert('tu numero es par')
}
else if (numero = 2){
    alert('tu numero es par')
}
else if (numero = 4){
    alert('tu numero es par')
}
else if (numero = 6){
    alert('tu numero es par')
}
else if (numero = 8){
    alert('tu numero es par')
}
else if (numero = 1){
    alert('tu numero es par')
}
else if (numero = 3){
    alert('tu numero es par')
}
else if (numero = 5){
    alert('tu numero es par')
}
else if (numero = 7){
    alert('tu numero es par')
}
else if (numero = 9){
    alert('tu numero es par')
}*/

/*function sumar () {
    let numero1 = 5
    let resultado = numero1 + 5
    return resultado
}
console.log (sumar())*/

/*let pregunta= confirm('te gusta el beisbol?')
if (pregunta==true){
alert ('te gusta el beisbol')
}
else if (pregunta==false) {
    alert ('no te gusta el beisbol')
}*/

/*let nombre= prompt('cual es tu nombre')
if (nombre==='juan'){
    alert("Bienvenido")
}
else  {
    alert ('impostor')
}*/

/*let numero=parseInt(prompt('ingresa un numero'))
let numero2=parseInt(prompt('ingresa otro numero'))
let suma= numero + numero2
alert ('el resul tado de tu suma es '+ suma)*/

/*let usuario =prompt ('ingrese nombre de usuario')
let password = prompt('ingrese contrasena')

if (usuario=='admin' & password=='adminpass') {
    alert('bienvenido')
}
else {
    alert ('datos incorrectos')
}*/

/*let numero = parseInt (prompt('ingresa un numero'))
while(numero>0|numero<=9) {if (numero=='2'){
alert('multiplo de 2, 4, 6 y 8')}
else if (numero=='4'){
    alert('multiplo de 2, 4')
}
else if (numero=='6'){
    alert('multiplo de 2, 3, 6')
}
else if (numero=='8'){
    alert('multiplo de 2, 4, 8')
}
else if (numero=='3'){
    alert('multiplo de 3, 6, 9')
}
else if (numero=='9'){
    alert('multiplo de 3, 9')
} } */

/*const numeroMagico = parseInt(Math.random() * 10)
let num= parseInt(prompt('ingresa un numero del 1 al 10'))
if (num===numeroMagico){
    alert ('ganaste') 
}
else if (num!==numeroMagico) {
    let num2=  parseInt(prompt('numero incorrecto,ingresa otro.Te quedan 2 intentos'))
    if (num2===numeroMagico){
        alert ('ganaste')
        }
    else if (num2!==numeroMagico){
        let num3= parseInt(prompt('numero incorrecto,ingresa otro.Te queda 1 intento'))
        if (num3===numeroMagico){
            alert ('ganaste')
              }
             else if (num3!==numeroMagico){
                alert ('fallaste')
                }
    }
}*/

/*const numeroMagico = parseInt(Math.random() * 10)
let num= parseInt(prompt('ingresa un numero del 1 al 10'))
while (num!==numeroMagico){
num= parseInt(prompt('incorrecto, ingresa otro'))
}*/

/*const numeroMagico = parseInt(Math.random() * 10)
let num= parseInt(prompt('ingresa un numero del 1 al 10'))
while (num!==numeroMagico){
    if (num<numeroMagico){
    num= parseInt(prompt('incorrecto, el que ingresaste es menor, ingresa otro')) 
    }
    else if (num>numeroMagico){
    num= parseInt(prompt('incorrecto, el que ingresaste es mayor, ingresa otro')) 
    }
}*/

/*let usuario = prompt ('ingresa tu nombre de usuario')
let contrasena = prompt ('ingresa tu contrasena')
let usuario2
let contrasena2
let usuario3
let contrasena3
while (usuario!=='admin' && contrasena!=='adminpass'||usuario=='admin' && contrasena!=='adminpass'||usuario!=='admin' && contrasena=='adminpass'){
    alert ('te quedan 2 intentos')
     usuario2 = prompt ('ingresa tu nombre de usuario')
 contrasena2 = prompt ('ingresa tu contrasena')
 if (usuario2!=='admin' && contrasena2!=='adminpass'||usuario2=='admin' && contrasena2!=='adminpass'||usuario2!=='admin' && contrasena2=='adminpass'){
    alert ('te queda 1 intento. cuidado, tu cuenta podria ser bloqueada')
    usuario3 = prompt ('ingresa tu nombre de usuario')
 contrasena3 = prompt ('ingresa tu contrasena')
 if (usuario3!=='admin' && contrasena3!=='adminpass'||usuario3=='admin' && contrasena3!=='adminpass'||usuario3!=='admin' && contrasena3=='adminpass'){
    alert ('te quedaste sin intentos. cuenta bloqueda')
    usuario==admin && contrasena==adminpass
 }
 else if (usuario3=='admin' && contrasena3=='adminpass'){
    alert ('bienvenido') 
    usuario==admin && contrasena==adminpass
 }
 else {
    alert ('te quedaste sin intentos. cuenta bloqueda')
    usuario==admin && contrasena==adminpass
 }
 }
 else if (usuario2=='admin' && contrasena2=='adminpass'){
    alert ('bienvenido') 
    usuario==admin && contrasena==adminpass
 }
}*/

/*let numero1=Number
let numero2=Number
let resultado=Number
let operacion =prompt ('por favor ingresar un tipo de operacion. puede ser +, -, * o /')
while(operacion==='+'||operacion==='-'||operacion==='*'||operacion==='/'){
    if (operacion==='+'){
        numero1= Number(prompt('ingresa un numero'))
        numero2= Number(prompt('ingresa otro numero'))
        resultado= numero1+numero2 
        alert('el resultado es: ' + resultado)
    }
    else if(operacion==='-'){
        numero1= (prompt('ingresa un numero'))
        numero2= (prompt('ingresa otro numero'))
        resultado= numero1-numero2 
        alert('el resultado es: ' + resultado) 
        console.log (operacion!=='-')
    }
    else if(operacion=='*'){
        numero1= (prompt('ingresa un numero'))
        numero2= (prompt('ingresa otro numero'))
        resultado= numero1*numero2 
        alert('el resultado es: ' + resultado) 
    }
    else {
        numero1= (prompt('ingresa un numero'))
        numero2= (prompt('ingresa otro numero'))
        resultado= numero1/numero2 
        alert('el resultado es: ' + resultado)  
    }
}
while(operacion!=='+'||operacion!=='-'||operacion!=='*'||operacion!=='/'){
    operacion =prompt ('por favor ingresar un tipo de operacion que se valido. puede ser +, -, * o /')
    if (operacion==='+'||operacion==='-'||operacion==='*'||operacion==='/'){
        if (operacion==='+'){
            numero1= Number(prompt('ingresa un numero'))
            numero2= Number(prompt('ingresa otro numero'))
            resultado= numero1+numero2 
            alert('el resultado es: ' + resultado)
        }
        else if(operacion==='-'){
            numero1= (prompt('ingresa un numero'))
            numero2= (prompt('ingresa otro numero'))
            resultado= numero1-numero2 
            alert('el resultado es: ' + resultado)  
        }
        else if(operacion=='*'){
            numero1= (prompt('ingresa un numero'))
            numero2= (prompt('ingresa otro numero'))
            resultado= numero1*numero2 
            alert('el resultado es: ' + resultado) 
        }
        else {
            numero1= (prompt('ingresa un numero'))
            numero2= (prompt('ingresa otro numero'))
            resultado= numero1/numero2 
            alert('el resultado es: ' + resultado)   
        } 
    }
    else{
        operacion =prompt ('por favor ingresar un tipo de operacion que se valido. puede ser +, -, * o /')
    }
}*/
//palindromos
/*const palindromo = (frase) =>{
    let cadena = frase. split("");
    let reversa = cadena.reverse() 
if (reversa.join("")==frase){
    return "si es palindromo"
}
else {
    return "no es palindromo"
}
}


let pregunta =prompt('cual es la frase')
alert (pregunta+" "+palindromo(pregunta))*/

/*let base =Number(prompt('cual es la base del campo'))
let tope =Number(prompt('cual es el tope del campo'))
let altura =Number(prompt('cual es la altura del campo'))

const formula = (bass, top, height) =>{
    let multiplicacion=bass+top;
    let division= multiplicacion/2
    return division*height
}

alert ('el area del campo es: '+ formula(base, tope, altura))*/


//anos bisiestos
/*const bisiestanator =(num)=>{
    if (num%4==0&&num%100!==0){
        alert ('es bisiesto')
    }
    else if (num%400==0&&num%100==0){
        alert ('es bisiesto')
    }
    else{
        alert('no es')
    }
}
let anho =Number(prompt('ingresa un numero'))
bisiestanator(anho)*/

//numeros primos
/*const primoNumerador =(num)=>{
    if (num%num==0 && num%1==0 && num%2!==0 && num%5!==0 && num%3!==0 && num%10!==0){
        alert ('es primo')
    }
    else{
        alert('no es')
    }
}
let numero =Number(prompt('ingresa un numero'))
primoNumerador(numero)*/
const quejaParticular=[]
const menu=['Gusta burguer', 'Fetuccini alfredo', 'Pizza de peperoni', 'Raviolis en salsa de tomate', 'Mushroom burguer']
const ordenes=[]
const cantidades=[]

const retrasosDeEntrega = (tiempo) =>{
    while(tiempo>=30){
        if(tiempo>=40&&tiempo<59){
            alert ('Nos disculpamos por las molestias ocasionadas. Te obsequiamos un cupon de descuento para tu proxima compra')
            tiempo=1
        }
        else if(tiempo>=60&&tiempo<90){
            alert ('Nos disculpamos por las molestias ocasionadas. Tu proxima compra te sale a mitad de precio')
            tiempo=1
        }
        else if(tiempo<=39){
            alert ('Nos disculpamos por las molestias ocasionadas. El repartidor ya va en camino con tu pedido!')
            tiempo=1
        }
        else {
            alert ('Nos disculpamos por las molestias ocasionadas. Tu proximo pedido te sale totalmente gratis!')
            tiempo=1
        }
    } 
    alert ('El repartidor ya va en camino con tu pedido!')
}

const quejasSugerencias= () =>{
    let queja= prompt('Porfavor, cuentanos por aqui en que podemos ayudarte y tu caso sera redirigido con uno nuestros operadoradores')
    quejaParticular.push(queja)
    alert('Gracias por tu paciencia. En breve seras atendido!')
    console.log(quejaParticular) 
}

const pedidoDeficiente =(entrada)=>{
    if (entrada=='si'||entrada=='Si'){
        let incompleto= prompt('Tu pedido esta incompleto?')
        if (incompleto=='si'||incompleto=='Si'){
            let articuloFaltante = prompt('Dejanos por escrito el articulo faltante en tu pedido')
            alert('Nos disculpamos por las molestias ocasionadas. Te obsequiamos un cupon por '+ articuloFaltante+ ' con tu proximo pedido')
        }
        else if (incompleto=='no'||incompleto=='No'){
        let queja= prompt('Cuentanos por aqui en que podemos ayudarte y tu caso sera redirigido con uno nuestros operadoradores')
        quejasSugerencias= (queja)
        }
        else{
            let respuestaIncorrecta =prompt('Por favor ingresa una respuesta de si o no.')
            pedidoDeficiente(respuestaIncorrecta)
        }
    }
}

const filtroDeConsultas= (respuesta)=>{
    if (respuesta=='si'||respuesta=='Si'){
        let tipoDeProblema = prompt('El incoveniente tiene que ver con el tiempo de entrega?')
        if (tipoDeProblema=='si'||tipoDeProblema=='Si'){
            let tiempoDeEntrega= Number(prompt('Cuantos minutos de retraso tiene tu orden?'))
          retrasosDeEntrega(tiempoDeEntrega)
        }
        else if (tipoDeProblema=='no'||tipoDeProblema=='No'){
            let contenido = prompt('El inconveniente tiene que ver con el contenido del pedido?')
            if (contenido=='si'||contenido=='Si'){
             pedidoDeficiente(contenido)
            }
            else{
                quejasSugerencias()
            }
        }
    }
    else if (respuesta=='no'||respuesta=='No'){
        quejasSugerencias()
    }
    else {
        let respuestaIncorrecta =prompt('Por favor ingresa una respuesta de si o no.')
        filtroDeConsultas(respuestaIncorrecta)  
    }
    }

    const atencionAlConsumidor=()=>{
        alert ('Bienvenido al centro de atencion al consumidor de Gusta Bistro')
        let consulta = prompt('Tienes problemas con tu orden?')
        
        filtroDeConsultas(consulta)
    }

    const pedido= (opcion)=>{
        if (opcion=='si'||opcion=='Si'){
            alert('En nuestro menu de hoy tenemos disponibles los siguientes platos:')
            for(let platos of menu)
            alert (platos)
            let orden= prompt ('Que desea comer hoy? Por favor indiquenos el nombre del plato')
            ordenes.push(orden)
            let cantidad=(prompt ('Cuantos porciones de este plato desea ordenar?'))
            cantidades.push (cantidad)
            let cierre= prompt ('Desea ordenar algo mas?')
            if(cierre=='si'||cierre=='Si'){
               pedido(cierre)
            }
            else {
                alert ('Su orden es: ' + ordenes)
                console.table(ordenes)
                console.table(cantidades)
                let despedida= prompt ('Podemos ayudarte en algo mas?')
                if(despedida=='si'||despedida=='Si'){
                    atencionAlConsumidor() 
                }
                else{
                    alert ('Gracias por comer en Gusta Bistro!') 
                }
            }
         }  
         else{
            atencionAlConsumidor()
         }      
    }

alert ('Bienvenido a Gusta Bistro.')
let bienvenida = prompt('Deseas ordenar?')
pedido(bienvenida)
