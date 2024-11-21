const divStyle = document.getElementsByName('divStyle');
console.log(divStyle)

const textfields = document.getElementsByClassName('textfield')
console.log(textfields)

const saving = document.getElementById('saveBtn')
console.log(saving)

const voidDiv = document.getElementById('emptyDiv')
console.log(voidDiv)

function inputInfo(e) {
    console.log('User: ', e.target);
}