class Users {
    constructor(name, age, mail, profession) {
        this.name = name,
            this.age = age,
            this.mail = mail,
            this.profession = profession
    }

    showGreeting(message) {
        return message;
    }

    showInfo() {
        return `
            <b>Nombre:</b> ${this.name} <br/>
            <b>edad:</b> ${this.age} <br/>
            <b>Correo:</b> ${this.mail} <br/>
            <b>Profesion:</b> ${this.profession} <br/>
            <hr/>
        `;
    }
}

const elkin = new Users('Isaac Alarca', 4, 'edu@edu.com', 'Genius');
//document.write(elkin.showGreeting('Hi Bro'));
document.write(elkin.showInfo());

class Estudents extends Users {
    constructor(name, age, mail, profession) {
        super(name, age, mail);
        this.profession = profession;
    }
}

const lau = new Estudents('Laura', 32, 'alguien@edu.co', 'Developer');
document.write(lau.showInfo())
