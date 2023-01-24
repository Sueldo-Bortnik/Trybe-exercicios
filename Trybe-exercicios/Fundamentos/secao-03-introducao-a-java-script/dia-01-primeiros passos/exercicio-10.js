const custo = 100;
const venda = 600;

if (custo >= 0 && venda >= 0) {
    const custoTotal = custo * 1.2;
    const vendaTotal = (venda - custoTotal) * 1000;
    console.log(vendaTotal);
  } else {
    console.log("Error, os valores não podem ser negativos");
  };