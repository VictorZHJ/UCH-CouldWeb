//---登入
function verifyLogin(){
    var xmlhttp = new XMLHttpRequest();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var url = "connect.php?email=" + email + "&password=" + password;
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok"){
                alert("登入成功");
                window.location.href = "default.html";  // 將網頁重導向至 test_default.html
            }
            else {
                alert("登入失敗");        
        
                document.getElementById("password").value ="";
                document.getElementById("password").focus();
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    
}   


//---判斷是否登入
function loadUserInfo(){
    var xmlhttp = new XMLHttpRequest();

    var url = "getUserInfo.php";
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok"){
                document.getElementById("username").innerHTML = doc.data.uname;
            }else {
                alert("尚未登入");        
                window.location.href = "login.html";  // 將網頁重導向至 login.html
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
            alert("已登出!!!");        
            window.location.href = "login.html";  // 將網頁重導向至 login.html
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    
}  