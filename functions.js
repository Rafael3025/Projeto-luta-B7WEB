const defaultCharacter = {
    name: '',
    life: 1,
    maxlife: 1,
    attack: 0,
    defense: 0
}

const createCavaleiro = (name) => {
    return{
        ...defaultCharacter,
        name,
        life: 100,
        maxlife: 100,
        attack: 10,
        defense: 8
    }
}

const createMago = (name) => {
    return{
        ...defaultCharacter,
        name,
        life: 50,
        maxlife: 50,
        attack: 14,
        defense: 3
    }
}

const createMonstroFraco = (name) =>{
    return{
        ...defaultCharacter,
        name: 'Montro Fraco',
        life: 40,
        maxlife: 40,
        attack: 4,
        defense: 4
    }
}

const createMonstroForte = (name) => {
    return{
        ...defaultCharacter,
        name: 'Monstro Forte',
        life: 120,
        maxlife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    lutador1: null,
    lutador2: null,
    lutador1EL: null,
    lutador2EL: null,

    start(lutador1, lutador2, lutador1EL,lutador2EL){
        this.lutador1 = lutador1;
        this.lutador2 = lutador2;
        this.lutador1EL = lutador1EL;
        this.lutador2EL =lutador2EL;

        this.lutador1EL.querySelector('.attackButton').addEventListener('click', () => this.ataque(this.lutador1, this.lutador2));

        this.lutador2EL.querySelector('.attackButton').addEventListener('click', () => this.ataque(this.lutador2, this.lutador1));
        

        this.update();
    },
    update(){
        // lutador01
        this.lutador1EL.querySelector('.name').innerHTML = `${this.lutador1.name} - ${this.lutador1.life.toFixed(1)} HP`
        let f1Pct = (this.lutador1.life / this.lutador1.maxlife) * 100;
        this.lutador1EL.querySelector('.bar').style.width = `${f1Pct}%`;

        // lutador02
        this.lutador2EL.querySelector('.name').innerHTML = `${this.lutador2.name} - ${this.lutador2.life.toFixed(1)} HP`
        let f2Pct = (this.lutador2.life / this.lutador2.maxlife) * 100
        this.lutador2EL.querySelector('.bar').style.width = `${f2Pct}%`
        
    },
    ataque(atacando, atacado){
        if(atacando.life <= 0 || atacado.life <= 0){
           log.addMensagem("Alguem ta morto, não pode atacar.")
            return;
        }

        const ataqueFactor = (Math.random() * 2). toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const ataqueAtual = atacando.attack * ataqueFactor;
        const defenseAtual = atacado.defense * defenseFactor;

        if(ataqueAtual > defenseAtual){
            atacado.life -= ataqueAtual;
            atacado.life = atacado.life < 0 ? 0: atacado.life;
           log.addMensagem(`${atacando.name} causou ${ataqueAtual.toFixed(2)} de dano em ${atacado.name}`);
        }else{
            log.addMensagem(`${atacado.name} conseguiu defender..` )
        }

        this.update();
    }
}

const log = {
    list: [],
    addMensagem(msg){
        this.list.push(msg);
        this.render();
    },
    render(){
        const logEL = document.querySelector('.log');
        logEL.innerHTML = '';

        for(let i in this.list){
            logEL.innerHTML += `<li> ${this.list[i]}  </li>`;
        }
    }
}