function login()
{
    var user = document.getElementById("username").value;
    user == "shivvu@9" ? alert("Username Verified") : alert("Invalid Username");
    var pw = document.getElementById("password").value;
    pw == "123" ? alert("You successfully login") : alert("Invalid Password");
}