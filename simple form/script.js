let fullname_input = document.getElementById("fullname")
email_input = document.getElementById("email")
gender_radios = document.getElementsByName("gender")
bio_input = document.getElementById("bio")
submit = document.getElementById("users") ;

submit.addEventlistner("click", (e) => {
    let user = new Object();
    user.fullname = fullname_input.Value;
    user.email = email_input.Value;
    user.bio = bio_input.Value;
    for (let g = 0; g < gender_radios.length; g++) {
        let gender = gender_radios[g];
        if(gender.checked) {
            user.gender = gender.Value;
            break;
        }
    }
})


users_div.innerHTML += `<div class= "user-card"> id= '$(Date.now())'>
<h3 id="fullname"> ${user.fullname} </h3>
<em id = "email">${user.email} </em>
<di  v>
<em style "display:inline; font-weight: bold"> Gender: </em>
<p id= "gender" style= "dispaly: inline"> ${user.gender}</p>
<p id= "bio"> ${user.bio} </p>
</div>
</div>`;
