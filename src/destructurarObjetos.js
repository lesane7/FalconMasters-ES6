const user = {
    names: 'Isaac',
    mail: 'best@edu.co',
    age: 4,
    contry: 'colombia'

}
//modo usual JS
//console.log(user.skill)

const { names, skill, age } = user;


const viewInfo = ({ names, skill = 'student' }) => console.log(`${names} is most ${skill}`)

viewInfo(user)