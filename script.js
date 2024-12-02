const divStyle = document.getElementsByName('divStyle');
console.log(divStyle)

const textfields = document.getElementsByClassName('textfield')
console.log(textfields)

const saving = document.getElementById('delBtn')
console.log(saving)

const emptyDiv = document.getElementById('emptyDiv')
console.log(emptyDiv)

emptyDiv.style.visibility = 'hidden';

function inputInfo(e) {
    
    console.log('User: ', e.target);
    const targetName = e.target.name;
    if (targetName === 'content') {
        const inputValue = e.target.value;
        emptyDiv.innerHTML = inputValue;
        emptyDiv.style.visibility = 'visible';
    }
};

for (let i = 0; i < textfields.length; i++) {
    textfields[i].addEventListener('blur', inputInfo)
}

function handleclick(e){
    e.preventDefault();
    emptyDiv.remove();
};
saving.addEventListener('click', handleclick);


divStyle.forEach(checkbox => checkbox.addEventListener('change', function(e) {
    if(checkbox.checked){
     colorCheck = textfields[0].value 
     emptyDiv.style.background = colorCheck;
     emptyDiv.innerHTML = colorCheck;
     emptyDiv.style.visibility = 'visible';
    } else {
        emptyDiv.style.visibility = 'hidden';
    }
}
));