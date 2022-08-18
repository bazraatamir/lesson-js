let UserName = document.getElementById("username");
let phoneNumber = document.getElementById('number');
let email = document.getElementById('email');
let submit = document.getElementById('submit');
let data = []
const NewUser=function(username,number,Email){
    this.username = username,
    this.number = number,
    this.email = Email
    this.passWord=passwor = this.username[0].toUpperCase()+this.number;
  

} 

submit.addEventListener('click',()=>{
    let user = new NewUser(UserName.value,phoneNumber.value,email.value);
    data.push(user)
})
