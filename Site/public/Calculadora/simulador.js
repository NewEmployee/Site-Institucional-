
  function calcular() {

    var nome = nomeE.value
    var qtdFuncionario = Number(qntdFuncionario.value)
    var jornada = Number(horas.value)
    var diasTrab = Number(diasTrabalhados.value)
    var tarefa = Number(input_tarefas.value)
    var tarefa_lucro = Number(input_tarefas_lucro.value)


    var produtividade_antes = tarefa
    var produtividade_depois = tarefa * 1.35

    var lucro_antes = tarefa_lucro * tarefa
    var lucro_depois = tarefa_lucro * (tarefa * 1.35)


    if (nome != "" && qtdFuncionario > 0 && jornada > 0 && jornada <= 24 && diasTrab > 0 && diasTrab <= 31 && tarefa > 0 && tarefa_lucro > 0 ){
    
      mensagem_erro.innerHTML = "";
      document.getElementById("h3_nome").style.color = "black";
      document.getElementById("h3_jornada").style.color = "black";
      document.getElementById("h3_funcionarios").style.color = "black";
      document.getElementById("h3_dias").style.color = "black";
      document.getElementById("h3_tarefas").style.color = "black";
      document.getElementById("h3_tarefas_lucro").style.color = "black";
      
    } else { 

      if (nome == ""){
        document.getElementById("h3_nome").style.color = "red";
      } else {
        document.getElementById("h3_nome").style.color = "black";
      }
      if (jornada <= 0 || jornada > 24){
        document.getElementById("h3_jornada").style.color = "red";
      } else {
        document.getElementById("h3_jornada").style.color = "black";
      }
      if (qtdFuncionario <= 0){
        document.getElementById("h3_funcionarios").style.color = "red";
      } else {
        document.getElementById("h3_funcionarios").style.color = "black";
      }
      if (diasTrab <= 0 || diasTrab > 31){
        document.getElementById("h3_dias").style.color = "red";
      } else {
        document.getElementById("h3_dias").style.color = "black";
      }
      if (tarefa <= 0){
        document.getElementById("h3_tarefas").style.color = "red";
      } else {
        document.getElementById("h3_tarefas").style.color = "black";
      }
      if (tarefa_lucro <= 0){
        document.getElementById("h3_tarefas_lucro").style.color = "red";
      } else {
        document.getElementById("h3_tarefas_lucro").style.color = "black";
      }
      
      cardErro.style.display = "block"
      mensagem_erro.innerHTML = "Preencha todos os campos corretamente para prosseguir!";
      return false;
    }
    
    var horasMes = qtdFuncionario * jornada * diasTrab
    h2_bemvindo.innerHTML = `Bem vindo, `
    h2_NomeEmpresa.innerHTML = `${nome}`
    p_horas.innerHTML = `${horasMes}h`
    p_valor.innerHTML= `R$ ${tarefa_lucro.toFixed(2)}`
    div_perca_antes.innerHTML = `Ganho mensal: <br>R$ ${lucro_antes.toFixed(2)}`
    div_perca_depois.innerHTML = `Ganho mensal: <br>R$ ${lucro_depois.toFixed(2)}`
    div_abs_antes.innerHTML = `Itens produzidos mensalmente: ${produtividade_antes.toFixed(0)} `
    div_abs_depois.innerHTML = `Itens produzidos mensalmente: ${produtividade_depois.toFixed(0)} `
    div_info_texto.innerHTML = `<br> Nossos serviços podem aumentar<br>em até 35% da produtividade das squads.`

    document.getElementById("informacoes_Princ").style.visibility = 'visible';


    // inicio grafico

    const labels = [
      'Antes',
      'Depois'
    ];
  
    const data = {
    labels: ['Produção mensal'],
    datasets: [{
      // axis: 'y',
      label: 'Antes',
      data: [produtividade_antes],
      backgroundColor: [
        'rgba(255, 51, 51, 0.4)'
      ],
      borderColor: [
        'rgb(0, 150 ,255,)'
      ],
      borderWidth: 1
    },
    {
      // axis: 'y',
      label: 'Depois',
      data: [produtividade_depois],
      backgroundColor: [
        'rgba(0, 150 ,255, 0.4)'
      ],
      borderColor: [
        'rgb(0, 150 ,255,)'
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data,
    options: { 
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
    labels: ['Ganhos Mensais'],
    datasets: [{
      axis: 'y',
      label: 'Antes',
      data: [lucro_antes],
      backgroundColor: [
        'rgba(255, 51, 51, 0.4)'
      ],
      borderColor: [
        'rgb(0, 150 ,255,)'
      ],
      borderWidth: 1
    },
    {
      axis: 'y',
      label: 'Depois',
      data: [lucro_depois],
      backgroundColor: [
        'rgba(0, 150 ,255, 0.4)'
      ],
      borderColor: [
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
