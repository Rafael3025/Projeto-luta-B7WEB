const char = createMago('Rafael');
const Monstro = createMonstroForte();

// console.log(Monstro.name)
// console.log(Monstro.life)

stage.start(
    char,
    Monstro,
    document.querySelector('#char'),
    document.querySelector('#monster')
    
);