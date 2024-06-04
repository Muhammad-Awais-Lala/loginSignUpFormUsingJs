let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let users=[]
let todo=[]
function getInput(id){
    return document.getElementById(id).value
}

function getId(){
    return Math.random().toString(12).slice(2)
}
// Hide Login Show Sign Up 
function gotoSignUp(){
    document.getElementById("signUpForm").style.display="block";
    document.getElementById("loginForm").style.display="none";
}
// Hide Sign Up Show Login 
function goToLogin(){
    document.getElementById("signUpForm").style.display="none";
    document.getElementById("loginForm").style.display="block";
}
// Add user 
function addUser() {
    event.preventDefault()

    let email = getInput("email")
    let password = getInput("password")

    email = email.trim()
    password = password.trim()

    if (!regex.test(email)) {
        showTost("please enter correct email", "error")
        return
    }

    if(password.length<8){
        showTost("password must be 8 or more characters","error")
        return
    }

    let user = {
        email : email,
        password : password,
        uid: getId(),
        status:"inActive",
        createdAt: new Date(),
    }
            users.push(user)
            console.log(users)
            showTost("User Added Successfully","success")

    // for(let i=0 ; i<=users.length;i++){
    //     if(users[i].email==email||!users[i].email){
    //         showTost("User Already Exist","error")
    //         return
    //     }
    //     else{
    //         users.push(user)
    //         showTost("User Added Successfully","success")
    //         console.log(users)
    //         return
    //     }
    // }
    
}

function loginUser(){

        email = getInput("loginEmail")
        password = getInput("loginPassword")
   
        email = email.trim()
        password = password.trim()
   
       for(let i=0 ; i<users.length ; i++){

           if(users[i].email==email){
               console.log(users[i])
               showTost("Login Successfully","success")
               document.getElementById("loginForm").style.display="none";
               document.getElementById("afterLogin").style.display="block"
               document.getElementById("userEmail").innerHTML=users[i].email
               return
           }
           else{
               showTost("user not found","error" )
                return
           }
       }
   }


// current Year in footer
document.getElementById("liveYear").innerText= new Date().getFullYear()


// Toastify Function 
function showTost(text, type) {

    let color
    switch (type) {
        case "error": {
            color = "linear-gradient(to right, #c31432, #240b36)"
            break
        }
        case "success": {
            color = "#008000";
            break
        }
        default: {
            color = "#000000"
            break
        }
    }

    Toastify({
        text: text,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color,
        },
    }).showToast();

}