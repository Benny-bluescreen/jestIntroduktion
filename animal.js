class Animal {
    constructor(name, age, species) {
        this.age = age;
        this.species = species;
        this.name = name;
    }

    aging() {
        this.age++;
    }

    toString() {
        return `Denna ${this.species} heter ${this.name} och är ${this.age} år gammal.`;
    }

    rename(newName) {
        if (newName.includes("xxx")) return "Felaktigt namn";

        this.name = newName;
    }
}

// Exportera klass
module.exports = Animal;