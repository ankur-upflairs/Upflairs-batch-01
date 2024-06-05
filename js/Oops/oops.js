// //class declaration
// class Emp{
//     show(){
//         console.log('employee details')
//     }
// }
// //object creation
// let sunil=new Emp()
// sunil.show()

// //class expression
// let Students=class{
//     show(){
//         console.log('student details')
//     }
// }
// let pawan=new Students()
// pawan.show()

// class Emp{
//     static componey='xyz'//its a class variable 
//     constructor(name,salary){
//         this.name=name
//         this.salary=salary
//     }
//     show(){
//         console.log(`employee details :- \n name - ${this.name}
//         salary- ${this.salary}`)
//     }
//     get totalSalary(){
//         return this.salary * .8
//     }
//     set bonus(bonus){
//         this._bonus=bonus
//     }
// }
// //object creation
// let sunil=new Emp('sunil',12000)
// sunil.show()
// console.log(Emp.componey)

// console.log(sunil.totalSalary)
// sunil.bonus=3000
// console.log(sunil._bonus)


class Animal{
    #region='india'//private property
    legs=4
    eyes=2
    constructor(color){
        this.color=color
    }
    // creating methods
    details(){
        console.log('this is animals details','color',this.color)
    }
    sound(){
        console.log('animal makes a sound')
    }
    showRegion(){
        console.log(this.#region)
    }
}

class Dog extends Animal{
    constructor(breed,color){
        super(color)
        this.breed=breed
    }
    details(){
        console.log(`dog details - legs= ${this.legs}
        breed= ${this.breed}`)
    }
    sound(){
        console.log(`bhow -bhow -4`)
    }
}

let pitbull=new Dog('pitbull','brown')
console.log(pitbull.eyes)
pitbull.details()
pitbull.sound()
pitbull.showRegion()

//make a class of componey - getter,setter,method,properties,private property, inheritance, polymorphism



