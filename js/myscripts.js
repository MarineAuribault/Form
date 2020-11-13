document.addEventListener('DOMCContentLoaded', function()) {

    $('form').submit(function(e){

            $('#errorFirstName').attr('hidden', true)
            $('#errorLastName').attr('hidden', true)
            $('#errorEmail').attr('hidden', true)
            $('#errorPassword').attr('hidden', true)
            $('#errorGender').attr('hidden', true)
            $('#errorTos').attr('hidden', true)


            let valid = true;
            
            let firstname = $ ('#firstName').val();
            
            if(firstName === '' || firstname === 'undefined'){
                $('#errorFirstName').removeAttr('hidden');
                valid = false;
            }

            let lastName = $ ('#lastName').val();
            if(lastName === '' || lirstname === 'undefined'){
                $('#errorLastName').removeAttr('hidden');
                valid = false;
            }

            let email = $ ('#email').val();
            if(email === '' || email === 'undefined'){
                $('#errorEmail').removeAttr('hidden');
                valid = false;
            }

            let password = $ ('#password').val();
            if(password === '' || password === 'undefined'){
                $('#errorPassword').removeAttr('hidden');
                valid = false;
            }

            let checkboxMale = $ ('#male').is (':checked')
            let checkboxFemale = $ ('#female').is (':checked')

            if(checkboxMale === false && checkboxFemale === false){
                $('errorCheckbox').removeAttr('hidden')
                valid = false
            }

            let checkConditions = $('#tos').is (':checked')
            if(checkConditions === false ){
                $('errorTos').removeAttr('hidden')
                valid = false
            }




            e.preventDefault();

    })

})

