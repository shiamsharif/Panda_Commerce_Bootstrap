document.getElementById('email-input').addEventListener('keyup', function(event){
    const text = event.target.value;
    // console.log(text);
    const submitButton = document.getElementById('btn-submit');

    if(text.includes('gmail')){
        submitButton.removeAttribute('disabled');
    }
    else{
        submitButton.setAttribute('disabled', true);
    }
})