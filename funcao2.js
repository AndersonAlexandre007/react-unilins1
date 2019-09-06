//Funcao (function) e Arrow function (=>)no Javascript
const calculo = function (valor) {
    return valor * 3;
}
console.log(calculo(4));

//arrow function
const calculo2 = (valor) => valor * 3;
console.log(calculo2(5));

// exemplo function
const oldWay = function(nome, apelido) {
  return `Meu nome é ${apelido}, ${nome}`;
}
console.log(oldWay('James Bond','Bond'));

//arrow function
const oldWay2 = (nome, apelido) => `Meu nome é ${apelido}, ${nome}`;
console.log(oldWay('James Bond','Bond'));


//definicao de um OBJETO
//criando funcao sem arrow function
const sandwich = {
    bread: 'integral',
    cheese: 'white',

    prepare: function(){
        return `Eu quero um sandwich com frainha ${this.bread} e queijo ${this.cheese}`; 
    },
    make() {
        const that = this;
        setTimeout( function(){
            console.log(that.prepare());
        }, 1000);
    }
}

sandwich.make();

const sandwich2 = {
    bread: 'integral',
    cheese: 'white',

    prepare() {
        return `Eu quero um sandwich com frainha ${this.bread} e queijo ${this.cheese}`; 
    },
    make: function() {
        setTimeout( () => console.log(this.prepare()),1000);
    }
}
sandwich2.make();

//Array 
const exemplo01 = [1, 2, 3, 4, 5];
const calcArray01 = exemplo01.map((item) => item * 2);
console.log(calcArray01);

const exemplo02 = ['joao','lxzero','chaola','pablo','sombra'];
const calcArray02 = exemplo02.map((item) => item.length);
console.log(calcArray02); 


//diferencia entre VAR, LET, CONST
var exibeMsg = function(){
    var msgForaDoIF = 'varJavascript';
    if (msgForaDoIF == 'varJvascript'){
    let msgDrentoDoIF = 'letJavascript';
        console.log(msgDrentoDoIF);
        console.log(msgForaDoIF);
    }
    //console.log(msgDrentoDoIF);
    console.log(msgForaDoIF); 
}

//Qual a saida acima?

console.log(exibeMsg())