window.exercicio4 = () => {
    alert('Este exercício aparece no console');

    const retornoEmpresa1 = new Promise( (resolve, reject) =>
    setTimeout(resolve, 5000, "Empresa 1") ); // 5 segundos

    const retornoEmpresa2 = new Promise( (resolve, reject) =>
    setTimeout(resolve, 3000, "Empresa 2") ); // 3 segundos

    Promise.race([retornoEmpresa1, retornoEmpresa2])
    .then(
        (vencedora) => console.log(`A empresa que respondeu mais rápido foi: ${vencedora}`), 
        (err) => console.log(err)
    );
}