$(function(){ //jQueryの開始お約束消さないで！！




// console.log("外部ファイルからはろわー！");


// ここかたtweet用リンクの作り方
function twitText() {
	var s, url;
	s = "JSを利用してついーとしているよ！";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}
// ここまでtweet用リンクの作り方

// console.log("こんにちは、"+"にんじゃわんこさん");
// console.log("1991-1-1");
// console.log('あいつはいわゆる"天才"だ');

// console.log("SUNABACOKOZA".split("A"));

// var user_name = "ninjawanko"
// console.log(user_name);


// var fruit = "ぶどう";
// console.log(fruit+"を用意します");
// console.log(fruit+"の皮を剥きます");
// console.log(fruit+"をミキサーに入れます");
// console.log(fruit+"ジュースの出来上がり！");

// fruit = "マンゴー";
// console.log(fruit+"を用意します");
// console.log(fruit+"の皮を剥きます");
// console.log(fruit+"をミキサーに入れます");
// console.log(fruit+"ジュースの出来上がり！");


// // regionという名前の変数を用意してください
// var region = ["KOZA","EBETSU","TAKAMATSU"]
// console.log(region);
// console.log(region[2]);


// region = {"okinawa":"KOZA","hokkaido":"EBETSU"}
// console.log(region["hokkaido"]);


// var count = 0 ;

// count += 3 ;
// console.log(count);  //出力結果は何になるかな？１
// // count +=1 ;
// count = count + 7;
// console.log(count);  //出力結果は何になるかな？
// count += 1 ;

// console.log(1=="1"); //等しいかどうか 等価演算子
// console.log(1==="1"); //等しいかどうか厳密等価演算子
// console.log(1!="1"); //等しくない。かどうか 等価演算子
// console.log(1 <= 2); //等しいかどうか 等価演算子


// // みかんの数
// var count = 1;
// // ブドウの数
// var grapes = 0;
// var melon = 0;
// if (count>0){
// 	console.log("かわをむいて");
// 	console.log("ミキサーにかけて");
// 	console.log("オレンジジュースをつくる");
// }else if(grapes>0){
// 	console.log("かわをむいて");
// 	console.log("ミキサーにかけて");
// 	console.log("ブドウジュースを作る");
// }else if(melon>0){
// 	console.log("かわをむいて");
// 	console.log("ミキサーにかけて");
// 	console.log("メロンジュースを作る");
// }else{
// 	console.log("みかんを買いに行く");
// }

// var limit = 10;
// var getup = 12;

// if(limit<getup){
// 	console.log("遅刻です");
// }else if(limit==getup){
// 	console.log("ぎりぎりせーふ");
// }else{
// 	console.log("大変よくできました！");
// }

// var fruits = ["りんご","みかん","バナナ","マンゴー"];
// fruits[0]     //-> りんご
// for(var i=0;i<=3;i++){
// 	console.log(fruits[i]+"ジュースを作る");

// }


// for(初期値;いつまで繰り返すかの条件式;増減式){
// 	実行したいプログラム
// 	実行したいプログラム
// 	実行したいプログラム
// }
// var i = 1;

// for (var i=1;i<=100;i){
// 	console.log(i);
// }

function greet(user,age){
	console.log(user+"こんにちは,あなたは"+age+"歳です");
}

function mixedJuice(fruit){
	console.log(fruit+"を用意します");
	console.log(fruit+"の皮を剥きます");
	console.log(fruit+"をミキサーに入れます");
	console.log(fruit+"ジュースの出来上がり！");
}



var h1_node = document.getElementById("h1_node");
console.log(h1_node);
console.log(h1_node.textContent);

// ここからイベントの準備
// var btn_node = document.getElementById("btn");
// btn_node.addEventListener("mouseover",changeText);

// function changeText(){
// 	var h1_node = document.getElementById("h1_node")
// 	h1_node.textContent = "押してしまいましたね"
// }

// ここからjQueryの講義です！！
$("h1").text("hello,world!");
// $("どこの").なにを("どうする");
// $("セレクタ").プロパティ("値");

// $("どこを").on("clickした時",波括弧内の関数を実行(){
	// 	$("どこの").なにを("どうする");
	// 	$("どこの").なにを("どうする");
	// 	$("どこの").なにを("どうする");	
	// });
	

// $("どこを").on("clickした時",波括弧内の関数を実行(){});
$("#btn").on("click",function(){
	//$("どこの").なにを("どうする");
	$("h1").text("yahho---");
	$("body").css("background-color","red");
	$("a").attr("href","http://sunabaco.com");
	$("img").attr("src","./img/photo_01.png");
	
});





}); //jQueryの終了お約束消さないで！！
























