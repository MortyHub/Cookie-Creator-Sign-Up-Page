var Username;
var Password;
function signup() {
	Username = document.getElementById('Username').value;
	document.cookie = `username=${Username}`;
	Password = document.getElementById('password').value;
	document.cookie = `password=${Password}`;
}
function main() {
document.getElementById('hmm').innerHTML = "Hello, ";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
	
    return null;
}
function test() {
	alert('Hello, ' + getCookie("username") + '! Welcome Back! Your Passowrd is: ' + getCookie("password"));
}

