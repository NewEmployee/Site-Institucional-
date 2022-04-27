// Graficos

function salaum(){
    const labels = [
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30'
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Temperatura Ideal Mínima',
            backgroundColor: 'rgb(0,191,255)',
            borderColor: 'rgb(60,179,113)',
            data: [23, 22, 21, 20, 19, 18],
        },
        {
            label: 'Temperatura Interna',
            backgroundColor: 'rgb(60,179,113)',
            borderColor: 'rgb(60,179,113)',
            data: [29, 28, 27, 26, 25, 24],
        },
        {
            label: 'TTemperatura Ideal Máxima',
            backgroundColor: 'rgb(255, 117, 24)',
            borderColor: 'rgb(255, 117, 24)',
            data: [26, 25, 24, 23, 22, 21],
        },
        ]
}
  
}
