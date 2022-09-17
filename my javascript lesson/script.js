let num = 5;
let string = "save";

console.log("string - string", num + string)
console.log("num * num", num * num)
console.log("7" * "5", "7" * "5")
console.log("7 /5",  "7" / "5")
console.log("7 % 5",  "7" % "5")

document.write("Name")

let items = ["monitor", "converter", "extension"]

let list_items = "";
  for(let i=0; i < items.length; i++){
    
      let item = items[i];

      list_items += "<li>" + item + "</li>";
      console.log(item) 
    
  }

  console.log(items,length);
    
      let cart_items = document.getElementById("cart_items");
      console.log(cart_items);
      cart_items.innerHTML= list_items;
      document.getElementById("cart_items").style.textTransform = "uppercase";




 let todate = new Date()
 console.log(todate)
 console.log(todate.getDate())
 console.log(todate.getFullYear())
 console.log(todate.getDay())
 console.log(todate.getMinutes())
 console.log(todate.getSeconds())
 console.log(todate.getHours())
 console.log(todate.getMonth())
 console.log(todate.getUTCFullYear())
 console.log(todate.getTimezoneOffset())
 console.log(todate.getUTCMilliseconds())

 console.log(Date.now)



 let event_time = Date.now() + 4 * 60 * 60 * 1000;

 let a_second = 1000,
   a_minute = a_second * 60,
   an_hour = a_minute * 60,
   hours = 0,
   minutes = 0,
   seconds = 0,
   current_date,
   time_difference,
   time_string;

 setInterval(() => {
   current_date = Date.now();
   time_difference = event_time - current_date;

   hours = Math.floor(time_difference / an_hour);

   time_difference -= an_hour * hours;

   minutes = Math.floor(time_difference / a_minute);

   time_difference -= minutes * a_minute;

   seconds = Math.floor(time_difference / a_second);

   time_string = `${hours}hrs : ${minutes}mins : ${seconds}secs`;

   let span = document.querySelector("#countdown")
   span.innerText =time_string;
 }, 1000);







console.log("Protocol:", location.protocol)
console.log("Host:", location.host)
console.log("Hostname:", location.hostname)
console.log("Port:", location.port)
console.log("Partname:", location.partname)
console.log("Href:", location.href)
console.log("Origin:", location.origin)
console.log("Hash:", location.hash)

//  location.assign("\index.html")
  
//  location.replace( "\index.html")

// let admin = window.open("\logo .png")
// setTimeout(() => {
//   admin.close()
// }, 2500)


// //let greeting = prompt("hey user tell me hi")
// console.log(greeting)

// localStorage.setItem("visitor", "savvy")
// localStorage.setItem("last_visit", Date.now())


// let visitor = localStorage.getItem("vistor"), 
// last_visit = localStorage.getItem("last_visit")

// let today = new Date();
// let welcome_message = `hey ${visitor}, you were here ${today.getMinutes() - new Date(Number(last_visit)).getMinutes()
// }mins ago`;

// alert(welcome_message)


console.log(document.children)
console.log(document.querySelector("head").children)



let p = document.getElementById("pixel")
p.innerText += '   more text here'

let li = document.createElement('li')
li.className = "item"
li.id = "idlist"
li.textContent = "list1"
document.getElementById("items").appendChild(li);


let li_creator =  (text_context)=>{
    let li  = document.createElement('li')
    li.className = "item"
    li.id = text_context
    li.textContent = text_context

    return li

}

let text_context= ['item 1', 'item 2' , 'item 3'] 

for(let i =0; i< text_context.length; i++)
{
    document.getElementById("items").appendChild(li_creator(text_context[i]));
}
