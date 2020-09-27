/**
 * super()
 * 子类的构造函数执行之前必须执行一次super函数
 */
class Aminal {
    constructor (name){
        this.name = name
    }

    showName(){
        console.log(`基类:${this.name}`)
    }
}

class Dog extends Aminal {  
    constructor(name){
        super('cat')
        // this.name = name
    }
}

const dog = new Dog('dog')

dog.showName()