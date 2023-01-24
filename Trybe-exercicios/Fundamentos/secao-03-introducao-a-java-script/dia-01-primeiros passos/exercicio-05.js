const A = 30;
const B = 100;
const C = 50;

let soma = A + B + C;
let angPos = A > 0 && B > 0 && C > 0;

if(angPos){
  if (soma === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}