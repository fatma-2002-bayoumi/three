var allwebsite =[

];
var site=null;
//display from local storage
if(localStorage.getItem("x")!==null)
{allwebsite=JSON.parse(localStorage.getItem("x"))
    display()
}

//add function
 var mybtn1=document.getElementById("btn1");
mybtn1.addEventListener("click",function(){
    site={
        sitename:document.getElementById("twoid").value,
        siteurl:document.getElementById("threeid").value
    }
allwebsite.push(site)
//store in localstorage
localStorage.setItem("x",JSON.stringify(allwebsite))

display () 
cleardata()
})
//display

function display(){
    var content=""
for(var i=0;i<allwebsite.length;i++)

{content+=
    
   
    ` <tr ">
        <td class="p-3 w-25">${i+1}</td>
                <td class="p-3 w-25">${allwebsite[i].sitename}</td>
                <td class="p-3 w-25  "><button id="visitid" class=" btn btn-success" onclick="visit(${i})"> visit</button></td>
                <td class="p-3 w-25    "><button id="deleteid"  onclick="deletfun(${i})" class=" btn btn-danger">delete</button></td>
    </tr>`

}
document.getElementById("bodyid").innerHTML=content
}
//clear 
function cleardata(){
    document.getElementById("twoid").value=null
    document.getElementById("threeid").value=null
  
}
//delete
function deletfun (i)
{
allwebsite.splice(i,1)
display()
//store after delete in local storage
localStorage.setItem("x",JSON.stringify(allwebsite))
}
//visit
function visit (i)
{
    
        window.open(allwebsite[i].siteurl, "_blank");
   

}
//validation
button=document.getElementById("btn1")
console.log(button)

var allregex ={
    threeid:/^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/,
    twoid:/^\w{3,}(\s+\w+)*$/
}
function validation (myinput)
{
    if(allregex [myinput.id].test(myinput.value)) 
    {
        myinput.classList.add("is-valid")
        myinput.classList.remove("is-invalid")
        button.removeAttribute("disabled","disabled")
    }
    else
    { myinput.classList.add("is-invalid")
        myinput.classList.remove("is-valid")
        button.setAttribute("disabled","disabled")
}
}
