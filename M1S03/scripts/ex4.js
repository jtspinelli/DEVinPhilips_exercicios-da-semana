function exercicio4(){
    alert("Este exercício aparece no console.")
    
    let mesclaObjetos = (obj1, obj2) => ({...obj1, ...obj2});

    const objUm = {a: 1, b: 2};
    const objDois = {c: 3, d: 4};

    console.log(`Objetos {a: 1, b: 2} e {c: 3, d: 4} mesclados:`)
    console.log(mesclaObjetos(objUm, objDois));
}