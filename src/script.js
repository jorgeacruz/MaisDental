
//menu principal
var button = document.querySelector('#toggle-menu-button');
var menu = document.querySelector('#toggle-menu');
var open = document.querySelector('#open');
var close = document.querySelector('#close');

button.addEventListener('click', (e)=>{
  menu.classList.toggle('hidden');
  open.classList.toggle('hidden');
  close.classList.toggle('hidden');
});


//contagem de numeros
const tempo_intervalo = 10; //ms -> define a velocidade da animação
const tempo = 1000; //ms -> define o tempo total da animaçao

$('.counter-up').each(function() {  
  let count_to = parseInt($(this).data('countTo'));
  let intervalos = tempo / tempo_intervalo; //quantos passos de animação tem
  let incremento = count_to / intervalos; //quanto cada contador deve aumentar
  let valor = 0;
  let el = $(this);
  
  let timer = setInterval(function() {
    if (valor >= count_to){ //se já contou tudo tem de parar o timer
      valor = count_to;
      clearInterval(timer);
    }
    
    let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    el.text(texto);
    valor += incremento;      
  }, tempo_intervalo);
});