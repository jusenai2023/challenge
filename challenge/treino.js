//Passo 2//
const nome = "Julia" 
//Passo 3//
function getEventoAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 3);
  
    if (numeroAleatorio === 0) {
      return "Maratona";
    } else if (numeroAleatorio === 1) {
      return "Triathlon";
    } else {
      return "Pentathlon";
    }
  }
  const eventoEscolhido = getEventoAleatorio();
  console.log("Evento escolhido:", eventoEscolhido);
  function getDiasTreino(evento){
    if (evento==="Maratona"){
        return "50 dias";
    }
    if (evento==="Triathlon"){
        return "100 dias";
    }
    if (evento==="Pentathlon"){
        return "200 dias";
    }
  }
  function logEvento(nome, evento) {
    console.log(`${nome} vai participar do evento ${evento}.`);
  }
  
  function logTempo(nome, dias) {
    console.log(`${nome} vai treinar por ${dias} dias.`);
  }
  logEvento(nome, eventoEscolhido)
  logEvento(nome, dias)