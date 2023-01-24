let Peca = 'bispo'

switch (Peca.toLowerCase()){
case 'rainha':
    console.log('Anda para qualquer direcao')
break;

case 'rei':
    console.log('anda uma casa para qualquer direcao')
break;
case 'cavalo':
    console.log('anda em "L" ')
break;

case 'bispo':
    console.log('anda na diagonal apenas')
break;

case 'torre':
    console.log('anda na horizontal e na vertical')
break;

case 'peao':
    console.log('anda apenas uma casa para frente (primeiro movimento pode andar 2 casas')
break;
default:

console.log('Erro!')

}
