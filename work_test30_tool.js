function creatTWID() {
    let letters = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
    let area = letters.charAt(parseInt(Math.random()*26));   // *代表個數   +位移量

    let areanum = letters.indexOf(area) + 10;
let gender = parseInt(Math.random()*2+1);
 
    console.log("請告訴我地點代碼"+ areanum);

    let newTWID = TWIDcreatcheck(area, areanum, gender);
    document.getElementById("mesg").innerHTML = newTWID;
    
}




function creatTWIDByGender() {
    let letters = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
    let area = letters.charAt(parseInt(Math.random()*26));  
    let areanum = letters.indexOf(area) + 10;
    let gender = document.querySelector("input[name=gender]:checked").value;

    let newTWID = TWIDcreatcheck(area, areanum, gender);
    document.getElementById("mesg").innerHTML = newTWID;


}





function creatTWIDByArea() {
    let area = document.querySelector("input[name=area]:checked").value;
    let letters = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
    let areanum = letters.indexOf(area) + 10;
    let gender = parseInt(Math.random()*2+1);
    let newTWID = TWIDcreatcheck(area, areanum, gender);
    document.getElementById("mesg").innerHTML = newTWID;
}







function creatTWIDByAll(g, a) {
    let gender = document.querySelector("input[name=gender]:checked").value;
    let area = document.querySelector("input[name=area]:checked").value;

    let letters = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
    let areanum = letters.indexOf(area) + 10;

    let newTWID = TWIDcreatcheck(area, areanum, gender);
    document.getElementById("mesg").innerHTML = newTWID;
}

function TWIDcreatcheck(area, areanum, gender) {

    
  // let num7 = parseInt(Math.random() * 10000000);
  let num7 = Math.random().toString().slice(-7);
  console.log("我要產生七位數" + num7);



  let TWID = areanum + "" + gender + num7;
  console.log("我的身分證代碼" + TWID);
  console.log("傳進來的地點代碼" + areanum);

  let n1 = parseInt(TWID.substr(0, 1));
  let n2 = parseInt(TWID.substr(1, 1));
  let n3 = parseInt(TWID.substr(2, 1));
  let n4 = parseInt(TWID.substr(3, 1));
  let n5 = parseInt(TWID.substr(4, 1));
  let n6 = parseInt(TWID.substr(5, 1));
  let n7 = parseInt(TWID.substr(6, 1));
  let n8 = parseInt(TWID.substr(7, 1));
  let n9 = parseInt(TWID.substr(8, 1));
  let n10 = parseInt(TWID.substr(9, 1));
  console.log("n1:" + n1 + "<br>"+
  "n2:" + n2 + "<br>"+
  "n3:" + n3 + "<br>"+
  "n4:" + n4 + "<br>"+
  "n5:" + n5 + "<br>"+
  "n6:" + n6 + "<br>"+
  "n7:" + n7 + "<br>"+
  "n8:" + n8 + "<br>"+
  "n9:" + n9 + "<br>"+
  "n10:" + n10 + "<br>" );

  let sumnon11 = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1;
  console.log("我的加總:" + sumnon11);

  let n11;                        //n11:沒有值。 要用這種做法不管是if for function 都要在同一層級才能用這種方式去取代變數值
  if (sumnon11 % 10 != 0) {
    
      n11 = 10 - (sumnon11 % 10);     //n11:賦予值。
      console.log("我的n11是:" + n11);
  } else {
      n11 = 0;        //n11:賦予值。
  }

  let newTWID = area + gender + num7 + n11;           //n11:採用新的值。
    return newTWID;
}
