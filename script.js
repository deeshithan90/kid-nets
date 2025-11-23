var username = document.querySelector(".username")
var number = document.querySelector(".number")
var password = document.querySelector(".password")
var SchoolName = document.querySelector(".School-Name")
var Adders = document.querySelector(".Adders")
var btn = document.querySelector(".btn")
var gs = document.querySelector(".gs")
var Email = document.querySelector(".Email")

        const signup = () => {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|.+\.in)$/;

            // Check if any field is empty
            if (!username.value || !number.value || !Email.value || !password.value || !SchoolName.value || !Adders.value || !gs.value) {
                alert("Please fill all fields");
                return;
            }

            // Validate email
            if (!emailPattern.test(Email.value)) {
                alert("Invalid Email");
                return;
            }

            // Save to localStorage
            localStorage.setItem("school", SchoolName.value);
            localStorage.setItem("address", Adders.value);
            localStorage.setItem("username", username.value);
            localStorage.setItem("password", password.value);
            localStorage.setItem("number", number.value);
            localStorage.setItem("kid", gs.value);

            alert("Successfully signed up!");
            // Redirect (make sure your path is correct)
            location.href = "login.html";
        };

        // Button click
        btn.addEventListener("click", signup);

function cll(){
    localStorage.setItem("school",JSON.stringify(SchoolName.value))
           localStorage.setItem("adders",JSON.stringify(Adders.value))
           localStorage.setItem("username",JSON.stringify(username.value))
           localStorage.setItem("password",JSON.stringify(password.value))
           localStorage.setItem("number",JSON.stringify(number.value))
           alert("Succesfully signup")
}


const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
    // Toggle the type attribute
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle the icon (optional)
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});
