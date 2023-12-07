let hero = "Mark Grayson";
let xp = 0;

// Simulando o ganho progressivo de experiência
for (let i = 1; i <= 13000; i += 500) {
  xp += i;

  // Verifica o nível com um switch usando operadores lógicos
  switch (true) {
    case xp >=500 && xp <=1000:
      console.log("O herói " + hero + " ainda é nível Ferro");
      break;
    case xp > 1001 && xp <= 2000:
      console.log("O herói " + hero + " ainda é nível Bronze");
      break;
    case xp > 2001 && xp <= 3000:
      console.log("O herói " + hero + " ainda é nível Prata");
      break;
    case xp > 3001 && xp <= 4000:
      console.log("O herói " + hero + " ainda é nível Ouro");
      break;
    case xp > 4001 && xp <= 6000:
      console.log("O herói " + hero + " ainda é nível Platina");
      break;
    case xp > 6001 && xp <= 8000:
      console.log("O herói " + hero + " ainda é nível Esmeralda");
      break;
    case xp > 8001 && xp <= 10000:
      console.log("O herói " + hero + " ainda é nível Mestre");
      break;
    case xp > 10001 && xp <= 12000:
      console.log("O herói " + hero + " ainda é nível Grão-mestre");
      break;
      case xp >= 12001:
        console.log("O herói " + hero + " ainda é nível Desafiante");
        break; 
    default:
      console.log("O herói " + hero + " é iniciante e ainda não possui seus xp registrados");
      break;
  }

  // Se a experiência atingir ou ultrapassar 13.000, pare o loop
  if (xp >= 13000) {
    break;
  }
}