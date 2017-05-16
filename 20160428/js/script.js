//---登入
function verifyLogin(){
    var xmlhttp = new XMLHttpRequest();
    var acc = document.getElementById("acc").value;
    var pwd = document.getElementById("pwd").value;
    var url = "connect.php?acc=" + acc + "&pwd=" + pwd;
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok"){
                //alert("登入成功");
                window.location.href = "index.html";  // 將網頁重導向至 index.html
            }
            else {
                //alert("登入失敗");        
        
                document.getElementById("password").value ="";
                document.getElementById("password").focus();
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}   

//---首頁判斷登入
//---判斷是否登入
function loadUserInfoindex(){
    var xmlhttp = new XMLHttpRequest();

    var url = "getUserInfo.php";
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok"){
                document.getElementById("login").style.display="none";
                document.getElementById("hello").innerHTML = doc.data.nickname + " 歡迎你:) ";
                document.getElementById("p1").innerHTML = "UID：" + doc.data.uid;
                document.getElementById("p2").innerHTML = "帳號：" + doc.data.acc;
                document.getElementById("p3").innerHTML = "使用者名稱：" + doc.data.name;
                document.getElementById("p4").innerHTML = "暱稱：" + doc.data.nickname;
                document.getElementById("p5").innerHTML = "信箱：" + doc.data.email;
                
            }else {
                //alert("尚未登入");        
                document.getElementById("logout").style.display="none"
                document.getElementById("hello").innerHTML = "歡迎，請先登入";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//---登出

function logout(){
    var xmlhttp = new XMLHttpRequest();

    var url = "logout.php";
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            //alert("已登出!!!");        
            window.location.href = "index.html";  // 將網頁重導向至 index.html
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}  

