const divStyle = document.getElementsByName('divStyle');
console.log(divStyle)

const textfields = document.getElementsByClassName('textfield')
console.log(textfields)

const saving = document.getElementById('delBtn')
console.log(saving)

const emptyDiv = document.getElementById('emptyDiv')
console.log(emptyDiv)


function inputInfo(e) {
    
    console.log('User: ', e.target);
    const targetName = e.target.name;
    if (targetName === 'content') {
        const inputValue = e.target.value;
        emptyDiv.innerHTML = inputValue;
    } else if (targetName === 'Color') { 
        const colorInput = e.target.value;
        emptyDiv.style.background = colorInput;
        emptyDiv.innerHTML = colorInput;
    } 
};

for (let i = 0; i < textfields.length; i++) {
    textfields[1].addEventListener('blur', inputInfo)
}

function handleclick(e){
    e.preventDefault();
    emptyDiv.remove();
};
saving.addEventListener('click', handleclick);


divStyle.forEach(checkbox => checkbox.addEventListener('change', function(e) {
    const targetName = e.target.name
    if (checkbox.checked) {
    colorInput = e.target.value;

    }
//.insertAdjacentElement("beforeend", )
    
}));