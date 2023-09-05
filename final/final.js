// 핸드폰번호 숫자 외 텍스트 방지 //
function onlyNumber(event){
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
        return;
    else
        return false;
}
 
function removeChar(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
        return;
    else
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

// 핸드폰번호 입력 시 자동 포커스 이동 //
const changeFocus1 = () => {

    let phone1 = document.getElementById("p1").value
    if(phone1.length === 3) {
        document.getElementById("p2").focus()
    }

}

const changeFocus2 = () => {

    let phone2 = document.getElementById("p2").value
    if(phone2.length === 4) {
        document.getElementById("p3").focus()
    }

}

const checkValidation = () => {

    let phone1 = document.getElementById("p1").value
    let phone2 = document.getElementById("p2").value
    let phone3 = document.getElementById("p3").value

    if(phone1 && phone2 && phone3.length === 4) {
        // 모든 input이 비어있지 않을 때 //
        document.getElementById("b1").disabled = false
        document.getElementById("b1").style.color = "white"
        document.getElementById("b1").style.border = "1px solid #0068ff"
        document.getElementById("b1").style.backgroundColor = "#0068ff"
        document.getElementById("b1").style.cursor = "pointer"
        

    } else {
        // 하나라도 비어있을 때 //
        document.getElementById("b1").disabled = true
        document.getElementById("b1").style.color = "#d2d2d2"
        document.getElementById("b1").style.border = "1px solid #d2d2d2"
        document.getElementById("b1").style.backgroundColor = "transparent"
        document.getElementById("b1").style.cursor = "default"
    }

}


// 타이머 작동 & 인증버튼 활성화 //
let isStarted = false;
let timer;
let time;

let auth = () => {

    time = 180
    timer = setInterval(function() {
    
        if(time>=0) {
            let min = Math.floor( time / 60 )
            let sec = String(time % 60).padStart(2, "0")
            document.getElementById("timer").innerText = min + ":" + sec
            time = time - 1          

            document.getElementById("b1").disabled = true
            document.getElementById("b1").style.cursor = "default"
        
        } else {
            document.getElementById("b1").disabled = false
            document.getElementById("b1").style.cursor = "pointer"
            
            document.getElementById("b2").disabled = true
            document.getElementById("b2").style.color = "#d2d2d2"
            document.getElementById("b2").style.border = "1px solid #d2d2d2"
            document.getElementById("b2").style.backgroundColor = "transparent"
            document.getElementById("b2").style.cursor = "default"
            document.getElementById("timer").innerText = "3" + ":" + "00"
            document.getElementById("target").innerText = "000000"
            console.log("시간 초과")
            isStarted = false
            clearInterval(timer)
            
        }
        
    },1000)

    if(isStarted === false) {
        //  버튼 클릭 시 인증번호 부여 및 타이머 작동 //
        isStarted = true
        document.getElementById("b2").disabled = false
        document.getElementById("b2").style.color = "white"
        document.getElementById("b2").style.border = "1px solid #0068ff"
        document.getElementById("b2").style.backgroundColor = "#0068ff"
        document.getElementById("b2").style.cursor = "pointer"

        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("target").innerText = token 
        
    } else {
        
    }

}

let auth2 = () => {
    // 타이머가 작동중일 때 인증 확인 클릭하면 //
    alert("인증완료")
    document.getElementById("b2").disabled = true
    document.getElementById("b2").style.cursor = "default"
    document.getElementById("timer").innerText = "인증완료"
    document.getElementById("signUpButton").disabled = false
    document.getElementById("signUpButton").style.color = "white"
    document.getElementById("signUpButton").style.border = "1px solid #0068ff"
    document.getElementById("signUpButton").style.backgroundColor = "#0068ff"
    document.getElementById("signUpButton").style.cursor = "pointer"
    clearInterval(timer)
    console.log("인증 완료")
}

let signupCheck = () => {

    let email_write = document.getElementById("email")
    let email_check = document.getElementById("email").value
    let name = document.getElementById("name")
    let pwd = document.getElementById("pwd")
    let rePassword = document.getElementById("rePassword")
    let address = document.getElementById("address")
    let genderWoman = document.getElementById("genderW").checked
    let genderMan = document.getElementById("genderM").checked

    if(email_write.value === "" ) {
        alert("이메일을 입력하세요.")
        email.focus()
        return false
    } 

    if(email_check.includes("@") === false) {
        alert("올바른 이메일 형식이 아닙니다.")
        email.focus()
        return false
    }
    
    if(name.value === "") {
        alert("이름을 입력하세요.")
        name.focus()
        return false
    } 
    
    if(pwd.value === "") {
        alert("비밀번호를 입력하세요.")
        pwd.focus()
        return false
    } 
    
    if(rePassword.value === "") {
        alert("비밀번호를 다시 입력해주세요.")
        rePassword.focus()
        return false
    } 
    
    if(address.value === "none") {
        alert("주소를 선택해주세요.")
        address.focus()
        return false
    }
    
    if(genderWoman === false && genderMan ===false) {
        alert("성별을 선택해주세요.")
        genderW.focus()
        return false    

    } else {
        alert("코드캠프 가입을 축하합니다!")
    }
}