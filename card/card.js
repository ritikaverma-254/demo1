const button2 = document.querySelector('.button2')
const data1 = document.querySelector(".firstSection")
const data2 = document.querySelector(".secondSection")

button2.addEventListener("click",function(){
    alert("Really want to Delete this Data ")
    data1.remove();
})


 const editableContent = document.getElementsByClassName('edi-btn');
    const editButton = document.getElementsByClassName('button1');

    editButton.addEventListener('click', function() {
        if (editableContent.contentEditable === 'true') {
            editableContent.contentEditable = 'false';
            editableContent.style.backgroundColor = 'transparent';
            editButton.textContent = 'Edit';

        } else {
            editableContent.contentEditable = 'true';
            editableContent.style.backgroundColor = '#f0f0f0';
            editButton.textContent = 'Save';
            editableContent.focus();
        }
    });


