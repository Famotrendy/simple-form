// console.log("Protocol: ", location.protocol);
// console.log("Host: ", location.host);
// console.log("Hostname: ", location.hostname);
// console.log("Port: ", location.port);
// console.log("Pathname: ", location.pathname);
// console.log("Href: ", location.href);
// console.log("Origin: ", location.origin);
// console.log("Hash: ", location.hash);

// location.assign("www.google.com");
// location.replace("www.google.com")

// let admin = window.open('http://127.0.0.1:1408');


// setTimeout(() => {
// admin.print();
// admin.close();
// },2500);

// localStorage.setItem("visitor", "yes");
// localStorage.setItem("last_visit", Date.now());


// let visitor = localStorage.getItem ("viitor"), last_visit = localStorage. getItem('last_visit');

// let today = new Date();
// let welcome_message = `Hey ${visitor}, you were here ${
//     today.getMinutes() - new Date (Number (last_visit)).getMinutes()
// }mins ago`;

// alert(welcome_message);

// localStorage.setItem("last_visit, Date.now"());

// console.log(localStorage.getItem(localStorage.key(0)));

// localStorage.removeItem("visitor");

// localStorage.clear();


// console.log(document.children);
// console.log(document.querySelector("head").children);
// console.log(document.querySelector("meta"));
// console.log(document.querySelectorAll("meta"));



// let span = document.getElementsById ("countdown");


// span.style.color = "red";
// span.style.color = "red";
// span.style.color = "red";

// console.log(span.classList);
// console.log(span.className);
// console.log(span.id);
// console.log(span.textContent);
// console.log(span.tagName);



// h3
// let h3 = document.getElementById ("no");

// console.log(h3);
// console.log(h3.className);
// console.log(h3.classList);
// console.log(h3.innerText);
// console.log(h3.textContent);
// h3.innerText += ` more text content`
// h3.className += ` paragraph`
// console.log(h3.innerText);
// console.log(h3.className);
// h3.className = h3.className.replace(`yes`, ``)
// // console.log(h3.className += `another`);
// // console.log(h3.className.replace(`2,`));
// console.log(h3.id);
// h3.id += ` 12`;

// let ul = document.querySelector(`ul`);
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// console.log(ul.children[1]);
// console.log(ul.parentElement);
// console.log(ul.previousElementSibling);

// let welcome = `hey, Welcome back.`;
// alert(welcome);
// document.querySelector("#item").appendChild(li);
// document.querySelector("ol").appendChild(li);



// let li_creator = (text_content)=>{
//     let li = document.createElement('li')
//     li.className = "item"
//     li.id = text_content
//     li.textContent = text_content

//     return li

// }

// let text_contents = ['item 1', 'item 2', 'item 3']

// for (let i = 0; i< text_contents.length; i++){
//     document.getElementById("items").appendChild
//     (li_creator(text_contents[i]));

// }



let username = document.getElementById("username"), 
password = document.getElementById("password"), 
day_of_the_week = document.getElementById("day_of_the_week"), 
system_type = document.getElementById("system_type"), 
gender = document.getElementsByName("gender"),
submit_button = document.getElementById("submit"),
username_info = document.querySelector(".username_info"),
password_info = document.querySelector(".password_info");

system_type_wrapper.addEventListener('click', (e) => {
    if (e.target.getAttribute("name") === 
    "system_type") {
        let there_is_checked;
        system_type.forEach 
        ((type) => {
            if (type.checked) there_is_checked = true;
        });
        if (!there_is_checked) {
            system_type_info.textContent + "You need to choose a system type";
        } else system_type_info.textContent = "";
    }
})

username.addEventListener("focus", (e) => {
    console.log("user is typing");
});
username.addEventListener("blur", (e) => {
    console.log("user is done typing");
});

password.addEventListener("keyup", (e) => {
    let value = e.target.value;
    if (value.length < 6) {
        password_info.textContent = "Minimum password length is 6 characters";
    } else password_info.textContent = "";
});

username.addEventListener("keyup", (e) => {
    let value = e.target.value;
    if (value.includes (" ")) {
        username_info.textContent = "Space is not allowed in username";
    } else if (!value) {
        username_info.textContent = "Provide your username";
    }else username_info.textContent = "";
});

submit_button.addEventListener("click", (e)=>{let username_value = username.value;
})



// console.log(system_type);
// system_type.forEach((type) =>{
//     console.log(type);
// });

// submit_button.addEventListener("click", (e)=> {
//     // console.log("Clicked");
//     // console.log(e.target);

//     let username_value = username.value;
//     let password_value = password.value;
//     let system_type_checked = [];
//     let gender_on = "";

//     system_type.forEach((checkbox) => {
//         if (checkbox.checked) 
//         system_types_checked.push(checkbox.id);
//     });

//     // system_type.forEach((type) => {
//     //     if (type.checked) system_types_checked.push(checkbox.id);
//     // });
//     gender.forEach((radio) => {
//         if (radio.checked) gender_on = radio.id;
//     });

//     let day_of_the_week_selected =
//     day_of_the_week.options[day_of_the_week.selectedIndex].value;

//     let form_values = {
//         username: username_value,
//         password: password_value,
//         gender: gender_on,
//         system_types: system_types_checked,
//         day_of_the_week: day_of_the_week_selected,
//     };
//     console.log(form_values);
//     e.preventDefault(); 

    // console.log(day_of_the_week.selectedIndex);
    // console.log(day_of_the_week_selected);

    // e.preventDefault();



    // console.log(gender_on);
    // e.preventDefault

    // console.log(username_value, password_value);

    // system_type.forEach

//     // e.preventDefault();
// })
