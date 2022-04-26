  function calcular() {

    var nome = nomeE.value
    

    var qtdFuncionario = Number(qntdFuncionario.value)
    var jornada = Number(horas.value)
    var diasTrab = Number(diasTrabalhados.value)
    
    var falta = Number(faltas.value)
    var atraso = Number(atrasos.value)
    var salario = Number(mSalario.value)

    if (nome != "" && qtdFuncionario >= 0 && jornada >= 0 && diasTrab >= 0 && falta >= 0 && atraso >= 0  && salario >= 0 ){
    
      mensagem_erro.innerHTML = "";
    
    } else { 
      
      cardErro.style.display = "block"
            mensagem_erro.innerHTML = "Preencha todos os campos corretamente para prosseguir!";
            return false;
    }
    
    var horasMes = qtdFuncionario * jornada * diasTrab
    var horasPerdidas = falta * jornada + atraso

    var indice = horasPerdidas / horasMes * 100

    var indice_depois = indice * 0.49

    var salarioHora = salario / diasTrab / jornada

    var perca_antes = salarioHora * horasPerdidas
    var perca_depois = salarioHora * (horasPerdidas  * 0.49)

    h2_bemvindo.innerHTML = `Bem vindo !`
    h2_NomeEmpresa.innerHTML = `${nome}`
    p_horas.innerHTML = `${horasMes} H`
    p_abstencao.innerHTML = `${horasPerdidas} H`
    p_valor.innerHTML= `R$ ${salarioHora.toFixed(2)}`
    div_perca_antes.innerHTML = `Perca em dinheiro: R$ ${perca_antes.toFixed(2)}`
    div_perca_depois.innerHTML = `Perca em dinheiro: R$ ${perca_depois.toFixed(2)}`
    div_abs_antes.innerHTML = `Taxa de absenteísmo: ${indice.toFixed(2)} %`
    div_abs_depois.innerHTML = `Taxa de absenteísmo: ${indice_depois.toFixed(2)} %`
    div_info_texto.innerHTML = `<br> Nossos serviços podem diminuir<br>em até 51% do absenteísmo.`

    document.getElementById("informacoes_Princ").style.visibility = 'visible';


    // inicio grafico

    const labels = [
      'Antes',
      'Depois'
    ];
  
    const data = {
    labels: labels,
    datasets: [{
      axis: 'y',
      label: 'Absenteísmo',
      data: [indice, indice_depois],
      backgroundColor: [
        'rgba(255, 51, 51, 0.4)',
        'rgba(0, 150 ,255, 0.4)'
      ],
      borderColor: [
        'rgb(0, 150 ,255,)',
        'rgb(0, 150 ,255,)'
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data,
    options: {
    indexAxis: 'y',
  }
  };

  const myChart = new Chart(
    document.getElementById('chart1'),
    config
  );
  
  // fim grafico


  // inicio grafico

  const labels2 = [
    'Antes',
    'Depois'
  ];

  const data2 = {
    labels: labels2,
    datasets: [{
      axis: 'y',
      label: 'Perca',
      data: [perca_antes, perca_depois],
      backgroundColor: [
        'rgba(255, 51, 51, 0.4)',
        'rgba(0, 150 ,255, 0.4)'
      ],
      borderColor: [
        'rgb(0, 150 ,255,)',
        'rgb(0, 150 ,255,)'
      ],
      borderWidth: 1
    }]
  };

const config2 = {
  type: 'bar',
  data: data2,
  options: {
  indexAxis: 'y',
}
};

const myChart2 = new Chart(
  document.getElementById('chart2'),
  config2
);

// fim grafico

  
}
