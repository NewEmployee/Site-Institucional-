var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {
    instrucaoSql = `select 
                        valor_registro, 
                        data_hora,
                        DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico
                        from registro_sensor
                        where fk_sensor = ${idSensor}
                        order by id_registro desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {
            instrucaoSql = `select
                            valor_registro, 
                            data_hora,
                            DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico
                            from registro_sensor where fk_sensor = ${idSensor} 
                            order by id_registro desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}