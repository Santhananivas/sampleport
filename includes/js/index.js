let main=document.getElementById("navigate");
let hide=document.getElementById("def_nav");
let show=document.getElementById("nav_item")

function Open(){
    hide.style.display="block"
    show.style.display="none"
}

function Close(){
    hide.style.display="none"
    show.style.display="block"
}

function SendEmail() {
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("clint-message").value;
    let phone  = document.getElementById("phone").value;
    let budjet = document.getElementById("budjet").value;
    let purpose = document.getElementById("Select-Subject").value;
    let finalmessage = `   Name : ${name}
                           Email : ${email}  
                           phone : ${phone}
                           purpose : ${purpose} 
                           budjet : ${budjet}
                           Message : ${message} `;
    // Email.send({
    //     From : "santhananivas9894@gmail.com",
    //     Subject : "Mail from website",
    //     Body : finalmessage
    // }).then(
    //   message => alert(message)
    // );

    // console.log(name)
    // console.log(email)
    // console.log(message)
    // console.log(phone)
    // console.log(budjet)
    // console.log(purpose)

    if (name <= 0){
        document.getElementById("name_tag").style.color="red";
        alert('Please Enter Your Name')
    }

    else if (email <=0 ){
        document.getElementById("email_tag").style.color="red"
        alert('Please Enter Your Email')
    }

    else if (phone <=0 ){
        document.getElementById("phone_tag").style.color="red"
        alert('Please Enter Your Phone Number')
    }

    else if (budjet <=0 ){
        document.getElementById("budjet_tag").style.color="red"
        alert('Please Enter Your Budjet')
    }

    else if (message <=0 ){
        document.getElementById("message_tag").style.color="red"
        alert('Please Enter Your Message')
    }
    
    else{
        window.open(`mailto:santhananivas9894@gmail.com?subject=HII NIVAS JOB-OFFER&body=${finalmessage}`);
    }
}