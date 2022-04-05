
var selected_number = [,,];
var selected_room = 0;

var random_number_array = [,,];

function make_random_number(){
    for(i=0; i<=2; i++){
        var random_picked = Math.floor(Math.random()*10);

        if(random_number_array.indexOf(random_picked) == -1){
            random_number_array[i] = random_picked;
        }else{
            i--;
        }
        
    }
    console.log(random_number_array);
}

function number_room_design(){
    for(i=0; i<=2; i++){
        var room = document.getElementById("number_room_"+i).style;
        if(i!=selected_room){
            room.backgroundColor = "white"; 
        }else{
            room.backgroundColor = "lightgrey";  
        }
    }
}

function new_game(){
    make_random_number();
    for(i=0; i<=2; i++){
        document.getElementById("number"+i).innerHTML = "";
        selected_number[i] = null;
    }
    document.getElementById("now_ball_count").innerHTML = "";
    selected_room = 0;
    number_room_design();
}

new_game()

function put(num){
    if(num == selected_number[0]|| num == selected_number[1] || num == selected_number[2]){
        alert("이미 고른 숫자입니다.")
    }else{
        selected_number[selected_room] = parseInt(num);
        document.getElementById("number"+selected_room).innerHTML = num;
    }
}

function room_clicked(room_num){
    if(room_num == "number_room_0"){
        selected_room = 0;
    }else if(room_num == "number_room_1"){
        selected_room = 1;
    }else if(room_num == "number_room_2"){
        selected_room = 2;
    }else{ 
        alert("에러")
    }
    number_room_design()
}

function ball_count(){
    var strike = 0;
    var ball = 0;
    for(i=0; i<=2; i++){
        if(random_number_array[i] == selected_number[i]){
            strike += 1;
        }else if(random_number_array.indexOf(selected_number[i]) != -1){
            ball += 1;
        }
    }

    if(strike==3){
        document.getElementById("now_ball_count").innerHTML = "3 Strike! 새 게임을 눌러주세요";
    }else{
        document.getElementById("now_ball_count").innerHTML = "strike: " + strike + " ball: " + ball;
    }
}

function erase(){
    document.getElementById("number"+selected_room).innerHTML = "";
    selected_number[selected_room] = null;
}

// function put(num){
//     var picked_num = num;
    
//     if(selected_room==1){
//         put_num_to_room(picked_num)
//     }
//     else if(selected_room==2){

//     }
//     else{
        

//     }
// }

