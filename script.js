//head 
document.title = "Javascript 7-dars 2-bo'lim";

//body va css
document.body.style.backgroundColor = 'dodgerblue';
let container = document.createElement('div'); // Barcha elementlarni saqlab turuvchi
container.style.maxWidth = '40%';
container.style.minHeight = 'auto';
container.style.border = "solid 1px #ddd";
container.style.boxShadow = '0px 0px 50px #00000044';
container.style.margin = '20px auto';
container.style.padding = '20px 20px';
container.style.backgroundColor = "white";
container.style.borderRadius = '25px';
container.style.marginTop = '80px';


document.body.appendChild(container);


let form = document.createElement('form');
form.action = '#';
form.style.boxSizing = "border-box";
form.style.padding = "30px";

let signInDiv = document.createElement('div');
form.appendChild(signInDiv);
signInDiv.style.textAlign = "center";

let signIn = document.createElement('span');
signIn.innerHTML = "Sign In";
signInDiv.appendChild(signIn);
signIn.style.fontFamily = "font-family: 'Alice', serif";
signIn.style.fontWeight = "900";
signIn.style.fontSize = "40px";

let emailAddress = document.createElement('h1');
emailAddress.innerHTML = "Email address";
emailAddress.style.display = "block";
emailAddress.style.fontSize = "20px";
emailAddress.style.marginTop = "10px";
emailAddress.style.fontWeight = "600";
emailAddress.style.fontFamily = "sans-serif";
emailAddress.style.color = "#333";
form.appendChild(emailAddress);

let input1 = document.createElement('input');
input1.placeholder = "Enter email";
input1.style.width = "100%";
input1.style.fontSize = "24px";
input1.style.borderRadius = "5px";
input1.style.boxSizing = "border-box";
input1.style.padding = "10px";
input1.style.border = "1px solid #777";
input1.style.outline = "none";
input1.style.transition = "0.8s";
input1.id = "input1Id";
form.appendChild(input1);

let password = document.createElement('h1');
password.innerHTML = "Password";
password.style.display = "block";
password.style.fontSize = "20px";
password.style.marginTop = "10px";
password.style.fontWeight = "600";
password.style.fontFamily = "sans-serif";
password.style.color = "#333";
form.appendChild(password);

let input2 = document.createElement('input');
input2.placeholder = "Enter password";
input2.style.width = "100%";
input2.style.fontSize = "24px";
input2.style.borderRadius = "5px";
input2.style.boxSizing = "border-box";
input2.style.padding = "10px";
input2.style.border = "1px solid #777";
input2.style.outline = "none";
input2.id = "input2Id";
input2.style.transition = "0.8s";
form.appendChild(input2);

let checkboxDiv = document.createElement('div');
checkboxDiv.style.marginTop = "20px";
form.appendChild(checkboxDiv);

let checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.style.zoom = "2";
checkbox.style.transition = "0.8s";
checkbox.id = "checkboxId";
checkboxDiv.appendChild(checkbox);

let remember = document.createElement('span');
remember.innerHTML = "Remember me";
remember.style.fontSize = "22px";
remember.style.fontFamily = "sans-serif";
remember.style.position = "relative";
remember.style.top = "-5px";
checkboxDiv.appendChild(remember);

let submit = document.createElement('button');
submit.innerHTML = "Submit";
submit.type = "submit";
submit.style.backgroundColor = "dodgerblue";
submit.style.border = "none";
submit.style.width = "100%";
submit.style.padding = "20px";
submit.style.marginTop = "20px";
submit.style.color = "#fff";
submit.style.borderRadius = "10px";
submit.style.fontSize = "20px";
submit.style.outline = "none";
submit.style.cursor = "pointer";
submit.style.transition = "0.8s";
submit.id = "submitId";

form.appendChild(submit);


let forgotPasswordDiv = document.createElement('div');
forgotPasswordDiv.style.textAlign = "right";
forgotPasswordDiv.style.paddingTop = "10px";

let forgotSpan1 = document.createElement('span');
forgotSpan1.innerHTML = "Forgot ";
forgotSpan1.style.fontSize = "20px";
forgotSpan1.style.color = "#333";
forgotSpan1.style.fontWeight = "800";
forgotSpan1.style.cursor = "pointer";
forgotPasswordDiv.appendChild(forgotSpan1);

let forgotSpan2 = document.createElement('span');
forgotSpan2.innerHTML = "password?";
forgotSpan2.style.color = "blue";
forgotSpan2.style.fontSize = "20px";
forgotSpan2.style.fontWeight = "800";
forgotSpan2.style.cursor = "pointer";
forgotPasswordDiv.appendChild(forgotSpan2);

form.appendChild(forgotPasswordDiv);
container.appendChild(form);


document.getElementById('input1Id').onclick = function () {
    document.getElementById('input1Id').style.boxShadow = "0px 0px 10px 5px dodgerblue";
}

document.getElementById('input1Id').onmouseout = function () {
    document.getElementById('input1Id').style.boxShadow = "none";
}


document.getElementById('input2Id').onclick = function () {
    document.getElementById('input2Id').style.boxShadow = "0px 0px 10px 5px dodgerblue";
}

document.getElementById('input2Id').onmouseout = function () {
    document.getElementById('input2Id').style.boxShadow = "none";
}


document.getElementById('checkboxId').onclick = function () {
    document.getElementById('checkboxId').style.boxShadow = "0px 0px 5px 2px dodgerblue";
}

document.getElementById('checkboxId').onmouseout = function () {
    document.getElementById('checkboxId').style.boxShadow = "none";
}


document.getElementById('submitId').onclick = function () {
    document.getElementById('submitId').style.boxShadow = "0px 0px 10px 5px rgb(102, 179, 255)";
}

document.getElementById('submitId').onmouseout = function () {
    document.getElementById('submitId').style.boxShadow = "none";
}

