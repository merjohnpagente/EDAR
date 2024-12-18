document.getElementById('loginForm').addEventListener('submit')
function login()
{
event.preventDefault();

    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;


    const correctUsername = 'edarvincent143';
    const correctPassword = '127299090019';

    if (username == correctUsername && password == correctPassword)
    {
        alert('Login Successful!');
        window.location.href = 'index2.html';
    }
    else 
    {
        alert('Invalid Username or Password!')
    }
}


