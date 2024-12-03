const divStyle = document.getElementsByName('divStyle');
console.log(divStyle)

const textfields = document.getElementsByClassName('textfield')
console.log(textfields)

const delBtn = document.getElementById('delBtn')
console.log(delBtn)

const emptyDiv = document.getElementById('emptyDiv')
console.log(emptyDiv)

emptyDiv.style.visibility = 'hidden';

function inputInfo(e) {
    console.log('textfield used: ', e.target.name);
    const targetName = e.target.name;
    if (targetName === 'content') {
        const inputValue = e.target.value;
        emptyDiv.innerHTML = inputValue;
        emptyDiv.style.visibility = 'visible';
        console.log("Wrote: " + textfields[1].value + " in emptyDiv")
    }  
};

for (let i = 0; i < textfields.length; i++) {
    textfields[i].addEventListener('blur', inputInfo)
}

function handleclick(e){
    e.preventDefault();
    emptyDiv.remove();
    console.log("Deleted emptyDiv")
};
delBtn.addEventListener('click', handleclick);


divStyle.forEach(checkbox => checkbox.addEventListener('change', function(e) {
     colorCheck = textfields[0].value 
     emptyDiv.style.background = colorCheck;
     emptyDiv.innerHTML = colorCheck;
     emptyDiv.style.visibility = 'visible';
     console.log("Applied color " + textfields[0].value + " to emptyDiv")
}
));