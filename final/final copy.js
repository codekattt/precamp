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
function getToken(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("target").innerText = token

    document.getElementById("b1").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("b1").setAttribute("disabled", "true")
    document.getElementById("b2").style="background-color: #0068FF; color: #FFFFFF; cursor: pointer;"
    document.getElementById("b2").removeAttribute("disabled")
    getTokenTimer()
}

let interval;
function getTokenTimer(){
    let timer = 10
    interval = setInterval(() => {
        if(timer >= 0){
            const minutes = Math.floor(timer / 60)
            const seconds = timer % 60

            document.getElementById("timer").innerText = minutes + ":" + String(seconds).padStart(2, "0")
            timer -= 1
        } else {
            document.getElementById("target").innerText = "000000"
            document.getElementById("b1").style = ""
            document.getElementById("b1").setAttribute("disabled", "true")

            document.getElementById("timer").innerText = "3:00"
            document.getElementById("b2").style = ""
            document.getElementById("b2").setAttribute("disabled", "true")

            clearInterval(interval)
        }
    }, 1000)
}

function getConfirm(){
    clearInterval(timer)
    document.getElementById("b2").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("b2").setAttribute("disabled", "true")
    document.getElementById("b2").innerText = "인증완료"
    alert("인증이 완료되었습니다.")

}
