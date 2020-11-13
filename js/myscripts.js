$( document ).ready(function() {


    $('form').on("submit",function(e){

            $('#errorFirstName').attr('hidden', true)
            $('#errorLastName').attr('hidden', true)
            $('#errorEmail').attr('hidden', true)
            $('#errorPassword').attr('hidden', true)
            $('#errorGender').attr('hidden', true)
            $('#errorTos').attr('hidden', true)


            let valid = true;
            
            let firstname = $('#firstName').val();
            
            if(firstname === '' || firstname === 'undefined'){
                $('#errorFirstName').removeAttr('hidden');
                valid = false;
            }
            else{
                $('#errorFirstName').attr('hidden');
                valid = true;
            }

            let lastName = $('#lastName').val();
            if(lastName === '' || lastName === 'undefined'){
                $('#errorLastName').removeAttr('hidden');
                valid = false;
            }
            else{
                $('#errorLirstName').attr('hidden');
                valid = true;
            }

            let email = $('#email').val();
            if(email === '' || email === 'undefined'){
                $('#errorEmail').removeAttr('hidden');
                valid = false;
            }
            else{
                $('#errorEmail').attr('hidden');
                valid = true;
            }

            let password = $('#password').val();
            if(password === '' || password === 'undefined'){
                $('#errorPassword').removeAttr('hidden');
                valid = false;
            }
            else{
                $('#errorPassword').attr('hidden');
                valid = true;
            }

            let checkboxMale = $('#male').is(':checked')
            let checkboxFemale = $('#female').is(':checked')

            if(checkboxMale === false && checkboxFemale === false){
                $('#errorCheckbox').removeAttr('hidden')
                valid = false
            }
            else{
                $('#errorCheckbox').attr('hidden');
                valid = true;
            }

            let checkConditions = $('#tos').is(':checked')
            if(checkConditions === false ){
                $('#errorTos').removeAttr('hidden')
                valid = false
            }
            else{
                $('#errorTos').attr('hidden');
                valid = true;
            }

            let skills = $('#skills').val()
            if(skills == 'Choose...'){
                $('#errorSkills').removeAttr('hidden')
                valid = false;
            }
            else{
                $('#errorSkills').attr('hidden');
                valid = true;
            }




            if(!valid){
                e.preventDefault();
            }

    })

})

