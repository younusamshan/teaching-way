

document.getElementById('formSumbit').addEventListener('submit', (event)=>{
   event.preventDefault()
   let userName = document.getElementById('userName').value
   let lastName = document.getElementById('lastName').value
   let password = document.getElementById('password').value
   let cpassword = document.getElementById('cpassword').value
   // console.log(userName);
   // console.log(lastName);
   // console.log(password);
   // console.log(cpassword);


   // if(!userName || !lastName || !password || !cpassword){
   //    alert('All Faied Are Requard')
   //    return
   // }
   // if(password.length < 8){
   //    alert('Password Shuld be Eight Charetor')
   //    return
   // }
   // if(password !== cpassword){
   //    alert('Passwor not match cpassword')
   //    return
   // }

let user  = {
  userName: userName,
  password: password,
   post: []
}

localStorage.setItem('user', JSON.stringify(user))
alert('Login successfully')
setTimeout(()=>{
window.location.href = 'login.html'
},1000)










})