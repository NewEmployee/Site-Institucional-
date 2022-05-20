  function calcular() {

    var nome = nomeE.value
    var qtdFuncionario = Number(qntdFuncionario.value)
    var jornada = Number(horas.value)
    var diasTrab = Number(diasTrabalhados.value)
    var tarefa = Number(input_tarefas.value)
    var tarefa_custo = Number(input_tarefas_custo.value)
    // var falta = Number(faltas.value)
    // var atraso = Number(atrasos.value)
    // var salario = Number(mSalario.value)


    var produtividade_antes = tarefa / jornada
    var produtividade_depois = tarefa * 1.35 / jornada

    var custo_antes = tarefa_custo * (tarefa * qtdFuncionario)
    var custo_depois = tarefa_custo * ((tarefa * 1.35) * qtdFuncionario)


    if (nome != "" && qtdFuncionario > 0 && jornada > 0 && jornada <= 24 && diasTrab > 0 && diasTrab <= 31 && tarefa > 0 && tarefa_custo > 0 ){
    
      mensagem_erro.innerHTML = "";
      document.getElementById("h3_nome").style.color = "black";
      document.getElementById("h3_jornada").style.color = "black";
      document.getElementById("h3_funcionarios").style.color = "black";
      document.getElementById("h3_dias").style.color = "black";
      document.getElementById("h3_tarefas").style.color = "black";
      document.getElementById("h3_tarefas_custo").style.color = "black";
      
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
      if (tarefa_custo <= 0){
        document.getElementById("h3_tarefas_custo").style.color = "red";
      } else {
        document.getElementById("h3_tarefas_custo").style.color = "black";
      }
      
      cardErro.style.display = "block"
      mensagem_erro.innerHTML = "Preencha todos os campos corretamente para prosseguir!";
      return false;
    }
    
    var horasMes = qtdFuncionario * jornada * diasTrab
    // var horasPerdidas = falta * jornada + atraso

    // var indice = horasPerdidas / horasMes * 100

    // var indice_depois = indice * 0.49

    // var salarioHora = salario / diasTrab / jornada

    // var perca_antes = salarioHora * horasPerdidas
    // var perca_depois = salarioHora * (horasPerdidas  * 0.49)

    h2_bemvindo.innerHTML = `Bem vindo, `
    h2_NomeEmpresa.innerHTML = `${nome}`
    p_horas.innerHTML = `${horasMes}h`
    // p_abstencao.innerHTML = `${horasPerdidas} H`
    p_valor.innerHTML= `R$ ${tarefa_custo.toFixed(2)}`
    div_perca_antes.innerHTML = `Ganho mensal: <br>R$ ${custo_antes.toFixed(2)}`
    div_perca_depois.innerHTML = `Ganho mensal: <br>R$ ${custo_depois.toFixed(2)}`
    div_abs_antes.innerHTML = `Diária/média: ${produtividade_antes.toFixed(2)} `
    div_abs_depois.innerHTML = `Diária/média  : ${produtividade_depois.toFixed(2)} `
    div_info_texto.innerHTML = `<br> Nossos serviços podem aumentar<br>em até 35% da produtividade das squads.`

    document.getElementById("informacoes_Princ").style.visibility = 'visible';


    // inicio grafico

    const labels = [
      'Antes',
      'Depois'
    ];
  
    const data = {
    labels: ['Itens diários'],
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
    // indexAxis: 'y',  
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
      data: [custo_antes],
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
      data: [custo_depois],
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
