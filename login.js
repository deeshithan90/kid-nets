var number = document.getElementById("Number")
var passwords = document.getElementById("passwords")

const login = async () => {
    try {
        //get data from local-storage
        const data1 = localStorage.getItem("number")
        const data2 = localStorage.getItem("password")
        //compare the two thing login and signup 
        const correct = await data1 == number.value
        const correct2 = await data2 == passwords.value
        if (correct , correct2) {
            alert("succesfully login")
            location.href = `file:///F:/My%20file%202025/deeshi/kid-net/subject/index.html`
        } else {
           alert("Code error")
        }
    } catch (error) {
       console.log(error)
    }
}