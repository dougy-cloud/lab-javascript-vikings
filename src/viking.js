// Soldier
class Soldier {
    constructor(health, strength){
    this.health = health;
    this.strength = strength;
}

attack() {
    return this.strength;
}

receiveDamage(damage) {
this.health -= damage;
    // a function to remove received dame from the health property. 
    // damage is coming from attack function.
    // basically strength 
     ;
}
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }

    battleCry(){
        return "Odin Owns You All!"
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
        return `${this.name} has died in act of combat`
    }

}


}



// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)

    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
        return `A Saxon has died in combat`
    }
}
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(Viking){
        this.vikingArmy.push(Viking) // push fonction to 
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){

        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)] /* what is happening
        previously we define class War with an empty array for the vikingArmy, then we create the addViking method which is pushing a Viking object to the army. plus one each time called.
        so what we're achieving here is the random choice of a viking that will attack. 
        To achieve that we need (1) this randomViking to be in vikingArmy array (2) to be able to choose randomly into the array as it will grow each time invoked. How ? using Math.random method we will be provided a number betwen 0.1 and 1 that we will times the current length of the vikingArmy. This will be used inside Math.floor method guaranting us a number that will be equivalent to an indexed position.*/
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)] // same thing.

        //how to remove dead saxons from the army. well, they need to have 0 health. so the Viking needs to attack them in order to do so. if they dead, they out.
        // Saxon object is already inside the randomSaxon variable because it's the array where it's pushed. so it seems we could write a conditionnal :

        let fight = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0){
        this.saxonArmy.shift()
    }
        return fight;
       

    }


    saxonAttack(){

        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

        let fight = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0){
            this.vikingArmy.shift()
        }

        return fight;

    }

    showStatus(){
        if(!this.saxonArmy.length){
            return "Vikings have won the war of the century!";
        }
        if (!this.vikingArmy.length){
            return "Saxons have fought for their lives and survived another day...";
        }
        return "Vikings and Saxons are still in the thick of battle."

    }
}


