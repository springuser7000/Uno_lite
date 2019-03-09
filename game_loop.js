// Copyright 2019 springuser700 all rights reserved.

var money = 50;
var money_plus = 1;  
var fortune_power = 0;
var upgrade_mining_point = 50;
var upgrade_fortune_point = 50;
var Lottery_point;
var alert_onoff = 1; 
var A = 0;
var code_for_admin;
var Fortune_Master = false;
var seojuncoin = 0;
var buy_robot_bool = false;
var robot_speed = 1200;
var robot_speed_money = 200;
var robot_plus = 1;
var robot_plus_money = 200;
//var robot_;
var text = "";
var possible = "밝뷁봙웱옭숽옳덣꽑꿹낈쏤뢁뷇홝홖읡읞";
//갯수
var seojuncoin_how_many = 0;
//횟수
var seojuncoin_how_much = 0;
//시세
var one;







document.getElementById("money_html").innerHTML = money + " Point";
document.getElementById("how_much_mining_upgrade").innerHTML = "Upgrade Mining(" + upgrade_mining_point + " Point Require)";
document.getElementById("how_much_fortune_upgrade").innerHTML = "Upgrade Fortune(" + upgrade_fortune_point + " Point Require)";
document.getElementById("info").innerHTML = money_plus + " Mining Level"
document.getElementById("info-1").innerHTML = fortune_power + " Fortune Level"
document.getElementById("info2").innerHTML = money_plus + " Mining Level"
document.getElementById("info2-1").innerHTML = fortune_power + " Fortune Level"
document.getElementById("info3").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
seojuncoin_how_much = Math.floor(Math.random() * 10000);
document.getElementById("invest").innerHTML = seojuncoin_how_much + "p/c" + " " + seojuncoin + " coins you have"

document.getElementById("add_robot_id").innerHTML = robot_plus_money + " points require"
document.getElementById("speed_robot_id").innerHTML = robot_speed_money + " points require"
update()


one = setInterval(function(){ check_robot(); }, robot_speed);

function update(){
  document.getElementById("money_html").innerHTML = money + " Point";
  document.getElementById("info").innerHTML = money_plus + " Mining Level"
  document.getElementById("info-1").innerHTML = fortune_power + " Fortune Level"
  document.getElementById("info2").innerHTML = money_plus + " Mining Level"
  document.getElementById("info2-1").innerHTML = fortune_power + " Fortune Level"
  document.getElementById("info3").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
  document.getElementById("invest").innerHTML = seojuncoin_how_much + "p/c" + " " + seojuncoin + " coins you have"
  document.getElementById("add_robot_id").innerHTML = robot_plus_money + " points require"
  document.getElementById("speed_robot_id").innerHTML = robot_speed_money + " points require"
}

function fortune_function(){
  if (fortune_power > Math.floor(Math.random() * 80)){   
    money = money + money_plus * 15;
    if (alert_onoff == 1){
    	window.alert(money_plus * 15 + " added!");
    }
    update()
   } else if(Fortune_Master == true){
     money = money + money_plus * 15
     if (alert_onoff == 1){
    	window.alert(money_plus * 15 + " added!");
    }
   }
  }

function earnmoney(){
    money = money + money_plus;
    fortune_function()
    update()
}

function upgrade_hardware(){
	if (money >= upgrade_mining_point){
    	money = money - upgrade_mining_point;
        upgrade_mining_point = upgrade_mining_point + 75;
        money_plus = money_plus + 1;
        update()
        document.getElementById("how_much_mining_upgrade").innerHTML = "Upgrade Mining(" + upgrade_mining_point + " Point Require)";
    } else {
    	if (alert_onoff == 1){
    		window.alert("Not Enough point for upgade Mining");
       	}
    }

}

function upgrade_software(){
	if (money >= upgrade_fortune_point){
    	money = money - upgrade_fortune_point;
        upgrade_fortune_point = upgrade_fortune_point + 75;
        fortune_power = fortune_power + 1;
        update();
        document.getElementById("how_much_fortune_upgrade").innerHTML = "Upgrade Fortune(" + upgrade_fortune_point + " Point Require)";
    } else {
    	if (alert_onoff == 1){
    		window.alert("Not Enough point for upgade Fortune");
        }
    }

}

function Lottery_cheap(){
	if (money >= 10){
	  Lottery_point = Math.floor(Math.random() * 20);
    money = money - 10;
    money = money + Lottery_point;
    update();
    if (alert_onoff == 1){
    	window.alert(Lottery_point + " returned!");
    }
  }
}

function Lottery_midium(){
	if (money >= 50){
	  Lottery_point = Math.floor(Math.random() * 150);
    money = money - 50;
    money = money + Lottery_point;
    update();
    if (alert_onoff == 1){
    	window.alert(Lottery_point + " returned!");
    }
  }
}

function Lottery_expencive(){
	if (money >= 100){
    Lottery_point = Math.floor(Math.random() * 200);
    money = money - 100;
    money = money + Lottery_point;
    update();
    if (alert_onoff == 1){
    	window.alert(Lottery_point + " returned!");
    }
  }
}


function Alert_OnOff_function() {
  if (alert_onoff == 0){
    alert_onoff = 1
    window.alert("Alert will show");
  } else if (alert_onoff == 1){
    alert_onoff = 0
    window.alert("Alert will not show");
  }
}

function Input_command() {
  if (window.event.keyCode == 13) {
    DaTa = $("#input_some_command").val();
    document.getElementById("input_some_command").value = "";
    if (DaTa.toLowerCase() == "offalert") {
      alert_onoff = 0;
    }else if (DaTa.toLowerCase() == "onalert") {
      alert_onoff = 1;
    }else if (DaTa.toLowerCase() == "fastnoobbuff" || "ff"){
      money = money + 1000;
      update();
    }
  }
}


function Wait_and_boom(){
	var Money_re;
    if (money >= 10000){
        money = money - 10000;
        Money_re = money;
        money = 0;
        update();
        setTimeout(function(){
            money = money + Money_re * 2;
            update();
            window.alert(Money_re * 2 + "Returned!");
        }, 60000); 
    } else {
    	if (alert_onoff == 1){
    		window.alert("Not Enough point for buy bomb");
        }
    }
}

function temple(){
    if (money >= 1000){
        money = money - 1000;
        update();
        Fortune_Master = true;
        setTimeout(function(){
          Fortune_Master = false;
        }, 30000); 
    } else {
    	if (alert_onoff == 1){
    		window.alert("Not Enough point for conversation");
        }
    }
}
function reload_seojuncoin() {
  seojuncoin_how_much = Math.floor(Math.random() * 10000);
  while (false == Boolean(seojuncoin_how_much > 7000)){
    seojuncoin_how_much = Math.floor(Math.random() * 10000);
  }
  update()
}

function buy_seojuncoin(){
  if (money - seojuncoin_how_much <= 0){
    window.alert("you don't have money.")
  } else {
    money = money - seojuncoin_how_much;
    seojuncoin = seojuncoin + 1;
    update();
  }
}

function sell_seojuncoin(){
  if (seojuncoin == 0){
    window.alert("You don't have any seojuncoins.")
  } else {
    money = money + seojuncoin_how_much;
    seojuncoin = seojuncoin - 1;
    update();
  }
}

function buy_all_seojuncoin(){
  var var1;
  if (money - seojuncoin_how_much <= 0){
    window.alert("you don't have money.")
  } else {
    var1 = Math.floor(money / seojuncoin_how_much);
    money = money - seojuncoin_how_much * var1;
    seojuncoin = seojuncoin + var1;
    update();
  }
}

function sell_all_seojuncoin(){
  if (seojuncoin == 0){
    window.alert("You don't have any seojuncoins.")
  } else {
    money = seojuncoin * seojuncoin_how_much;
    seojuncoin = 0;
    update();
  }
}







//robot function
function buy_robot(){
  if (buy_robot_bool == false){
    if (money >= 5000){
      money = money - 5000;
      update();
      buy_robot_bool = true;
    } else {
      if (alert_onoff == 1){
        window.alert("Not enough points to buy robot")
      }
    }
  } else {
    if (alert_onoff == 1){
      window.alert("You already buy robot.")
    }
  }
}


function check_robot(){
  if (buy_robot_bool == true){
    money = money + robot_plus;
    update();
  }
}

function upgrade_robot_speed(){
  if(0 <= money - robot_speed_money){
    if (100 < robot_speed){
      money = money - robot_speed_money;
      robot_speed_money += 325;
      robot_speed -= 100;
      update();
      reset_robot_speed_timer();
    } else{
      window.alert("You already did all robot's speed upgrade.");
    }
  } else {
    if (alert_onoff == 1){
      window.alert("Not enough points to upgrade robot's speed");
    }
  }
}

function upgrade_robot_add(){
  if (0 <= money - robot_plus_money){
    money = money - robot_plus_money;
    robot_plus_money += 325;
    robot_plus += 1;
    update();
  } else {
    if (alert_onoff == 1){
      window.alert("Not enough points to upgrade robot's power");
    }
  }
}

function reset_robot_speed_timer(){
  //asdf
  clearInterval(one);
  one = setInterval(function(){ check_robot(); }, robot_speed);
}











$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
  $(document).bind('keydown', function(e){
    if(e.keyCode == 123){
      e.preventDefault();
      e.returnValue = false;
    }
  });
});