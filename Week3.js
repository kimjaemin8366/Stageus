// 예제 1
// function printMesseage() {
//     console.log("hello world") //log : 현재 프로그램의 상태 
//     // console.log : 콘솔에 현재 프로그램의 상태를 남기겠다. 
// }

// printMesseage()
// printMesseage()
// printMesseage()
// printMesseage2() // 에러가 발생하기 전까지는 돌려주고, 에러 발생시에는 멈춤
// printMesseage()
// printMesseage()
// // 세미콜론 안붙여도 가능
// //  함수를 쓰는 첫번쨰 이유!

// function printMesseage2() {
//     console.lg("hello world") //에러 발생!
// }


// 예제 2
// // function add(num1, num2){
// //     console.log(num1+num2)

// // } // 매개변수만 있는 함수

// // function add2(num1, num2){
// //     return num1 + num2
// }

// add(1, 5)
// console.log(add2(1, 5))

// 연습문제 1
// function multiple(num){
//     console.log(num*1)
//     console.log(num*2)
//     console.log(num*3)
//     console.log(num*4)
//     console.log(num*5)
//     console.log(num*6)
//     console.log(num*7)
//     console.log(num*8)
//     console.log(num*9)
// }

// multiple(8)


// function add(){
    
//     //변수 : 값을 저장할 수 있는 공간
//     // 변수에 저장 안하면, 사라짐
//     // html 연동을 위해서는 무조건 document로 시작
//     var num1 = document.getElementById("first_number").value
//     var num2 = document.getElementById("second_number").value
//     // 문자 : string(str)
//     // 숫자 : integer(int)
//     // input의 value는 무조건 문자가 들어옴.
//     // console.log(parseInt(num1)+parseInt(num2))

//     var result = document.getElementById("result")
//     result.innerHTML = parseInt(num1)+parseInt(num2)
// } 

// function minus() {
//     var num1 = document.getElementById("first_number").value
//     var num2 = document.getElementById("second_number").value

//     var result = document.getElementById("result")
//     result.innerHTML = parseInt(num1) - parseInt(num2)
// }

// function multi() {
//     var num1 = document.getElementById("first_number").value
//     var num2 = document.getElementById("second_number").value

//     var result = document.getElementById("result")
//     result.innerHTML = parseInt(num1)*parseInt(num2)
// }

// function divide() {
//     var num1 = document.getElementById("first_number").value
//     var num2 = document.getElementById("second_number").value

//     var result = document.getElementById("result")
//     result.innerHTML = parseInt(num1)/parseInt(num2)
// }

var name2 = "stageus"


function cal(operator){
    var num1 = document.getElementById("first_number").value
    var num2 = document.getElementById("second_number").value
    console.log(name2)
    var result = document.getElementById("result")
//if 소괄호 안에는 조건
    if (operator=="plus") {
        result.innerHTML = parseInt(num1) + parseInt(num2)
    }

    else if(operator=="minus"){
        result.innerHTML = parseInt(num1) - parseInt(num2)
    }
    else if(operator=="mul"){
        result.innerHTML = parseInt(num1) * parseInt(num2)
    }
    else if(operator=="divide"){
        result.innerHTML = parseInt(num1) / parseInt(num2)
    }else{
        console.log("오타")
    }
}

function printNum(){
    
}

// 중복코드 제거하자!

// if~else문의 경우, 가장 많이 쓰는 것을 맨 위에 쓰자.

//변수 개념
// 지역 변수 : 특정 지역 안에서 만들어진 변수, 괄호로 묶인 곳


