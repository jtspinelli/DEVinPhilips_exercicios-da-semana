function exercicio1() {
    alert("Este exercício aparece no console.")
    let procuraMinMax = (list) => {
        try {
            let menorValor = list[0];
            let maiorValor = list[0];
        
            for(const element of list){
                if(element < menorValor){
                    menorValor = element;
                }
        
                if(element > maiorValor){
                    maiorValor = element;
                }
            }
        
            return `Lista: [${list}]\nMenor valor: ${menorValor}, Maior valor: ${maiorValor}`;
        } catch(error){
            return "Não é possível encontrar.";
        }

    }

    let procuraMinMax2ndVersion = (lista) => {
        try {
            let listaOrdenada = lista.sort();
            return `Menor valor: ${listaOrdenada[0]}, Maior valor: ${listaOrdenada[lista.length - 1]}`;
        } catch (error){
            return "Não é possível encontrar.";
        }
        
    }

    const lista1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
    const lista2 = [];
    const lista3 = [1];
    const lista4 = [1, -1];
    const lista5 = null;
    const lista6 = [-2, -2, -2, -2];
    const lista7 = [20, 10, 30];


    console.log(procuraMinMax(lista1));
    console.log(procuraMinMax2ndVersion(lista1) + "\n");

    console.log(procuraMinMax(lista2));
    console.log(procuraMinMax2ndVersion(lista2) + "\n");

    console.log(procuraMinMax(lista3));
    console.log(procuraMinMax2ndVersion(lista3) + "\n");

    console.log(procuraMinMax(lista4));
    console.log(procuraMinMax2ndVersion(lista4) + "\n");

    console.log(procuraMinMax(lista5));
    console.log(procuraMinMax2ndVersion(lista5) + "\n");

    console.log(procuraMinMax(lista6));
    console.log(procuraMinMax2ndVersion(lista6) + "\n");

    console.log(procuraMinMax(lista7));
    console.log(procuraMinMax2ndVersion(lista7));    
}