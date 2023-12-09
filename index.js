const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

const verfiqueSe = (valor) => {
    const assercoes = {
        ehExatamenteIgualA(esperado) {
            if (valor !== esperado) {
                throw {};
            }
        }
    };
    return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
    try {
        funcaoDeTeste();
        console.log(`${titulo} passou!`);
    }
    catch {
        console.error(`${titulo} não passou!`);
    }
};

teste('somaHorasExtras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    verfiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaDesconto', () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);

    verfiqueSe(retornado).ehExatamenteIgualA(esperado);
});
