//---登入頁面判斷是否登入
function Login() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://could-victorzhj.c9users.io/20160623/php/getUserInfo.php";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok") {
                window.location.href = "https://could-victorzhj.c9users.io/20160623/index.html";
            }
            else {
                document.getElementById("login").style.display = "inline";
                document.getElementById("regist").style.display = "inline";
                document.getElementById("login").className = "active";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//---註冊頁面判斷是否登入
function NoLogin() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://could-victorzhj.c9users.io/20160623/php/getUserInfo.php";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok") {
                window.location.href = "https://could-victorzhj.c9users.io/20160623/index.html";
            }
            else {
                document.getElementById("login").style.display = "inline";
                document.getElementById("regist").style.display = "inline";
                document.getElementById("regist").className = "active";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//---登入
function verifyLogin() {
    var xmlhttp = new XMLHttpRequest();
    var userid = document.getElementById("userlogin").value;
    var userpass = document.getElementById("userpass").value;
    var url = "https://could-victorzhj.c9users.io/20160623/php/connect.php?userid=" + userid + "&userpass=" + userpass;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok") {
                //alert("登入成功");
                window.location.href = "https://could-victorzhj.c9users.io/20160623/index.html"; // 將網頁重導向至 index.html
            }
            else {
                alert("登入失敗");
                document.getElementById("userpass").value = "";
                document.getElementById("userpass").focus();
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//---首頁判斷登入
function loadUserInfoindex() {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://could-victorzhj.c9users.io/20160623/php/getUserInfo.php";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok") {
                document.getElementById("logout").style.display = "inline";
                document.getElementById("changedata").style.display = "inline";
                document.getElementById("hello").innerHTML = doc.data.username + " 歡迎你:) ";
                document.getElementById("p1").innerHTML = "帳號：" + doc.data.userid;
                document.getElementById("p2").innerHTML = "使用者名稱：" + doc.data.username;
                document.getElementById("p3").innerHTML = "年齡：" + doc.data.age;
                document.getElementById("p4").innerHTML = "電話：" + doc.data.phone;
                document.getElementById("index").className = "active";
            }
            else {
                //alert("尚未登入");        
                document.getElementById("regist").style.display = "inline";
                document.getElementById("login").style.display = "inline";
                document.getElementById("hello").innerHTML = "Hello!請先登入或註冊";
                document.getElementById("index").className = "active";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//---登出

function logout() {
    var xmlhttp = new XMLHttpRequest();

    var url = "https://could-victorzhj.c9users.io/20160623/php/logout.php";

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            //alert("已登出!!!");        
            window.location.href = "https://could-victorzhj.c9users.io/20160623/index.html"; // 將網頁重導向至 index.html
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//---修改個人資料頁面
function changeRegister() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://could-victorzhj.c9users.io/20160623/php/getUserInfo.php";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok") {
                document.getElementById("logout").style.display = "inline";
                document.getElementById("changedata").style.display = "inline";
                document.getElementById("changedata").className = "active";
                document.getElementById("changename").focus()
            }
            else {
                window.location.href = "https://could-victorzhj.c9users.io/20160623/index.html";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function changeDatahandler(doc) {
    //alert(doc.result);

    if (doc.result == "ok") {
        alert("修改成功");
        window.location.href = "https://could-victorzhj.c9users.io/20160623/index.html"; // 將網頁重導向至 test_default.html
    }
    else {
        alert("修改失敗");

        document.getElementById("changename").value = "";
        document.getElementById("changeage").value = "";
        document.getElementById("changephone").value = "";

    }
}

function changeData() {

    var xmlhttp = new XMLHttpRequest();

    //userid | pass | username  | age  | phone  

    var username = document.getElementById("changename").value;
    var age = document.getElementById("changeage").value;
    var phone = document.getElementById("changephone").value;
    var url = "https://could-victorzhj.c9users.io/20160623/member/php/changeRegisterDataDo.php?username=" + username + "&age=" + age + "&phone=" + phone;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            changeDatahandler(doc);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//---修改個人密碼頁面
function changepasshandler(doc) {
    //alert(doc.result);

    if (doc.result == "ok") {
        alert("修改成功");
        window.location.href = "https://could-victorzhj.c9users.io/20160623/member/changeRegisterData.html";
    }
    else {
        alert("修改失敗");

        document.getElementById("oldpass").value = "";
        document.getElementById("newpass").value = "";
        document.getElementById("reupass").value = "";

        document.getElementById("oldpass").focus();
    }
}

function changepass() {

    if (document.getElementById("newpass").value !== document.getElementById("reupass").value) {
        alert("密碼有問題!!!");
        document.getElementById("newpass").value = "";
        document.getElementById("reupass").value = "";
        document.getElementById("newpass").focus();

        return;
    }

    var xmlhttp = new XMLHttpRequest();

    //userid | pass | username  | age  | phone  

    var oldpass = document.getElementById("oldpass").value;
    var newpass = document.getElementById("newpass").value;
    var url = "https://could-victorzhj.c9users.io/20160623/member/php/changePassDo.php?oldpass=" + oldpass + "&newpass=" + newpass;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            changepasshandler(doc);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//---管理員系統
function rootlogin() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://could-victorzhj.c9users.io/20160623/php/getUserInfo.php";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok") {
                window.location.href = "https://could-victorzhj.c9users.io/20160623/admin/admsys.html";
            }
            else {
                //alert("尚未登入");        
                document.getElementById("regist").style.display = "inline";
                document.getElementById("login").style.display = "inline";
                document.getElementById("root").className = "active";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function adminLoginhandler(doc) {
    //alert(doc.result);

    if (doc.result == "ok") {
        alert("登入成功");
        window.location.href = "https://could-victorzhj.c9users.io/20160623/admin/admsys.html"; // 將網頁重導向至 test_default.html
    }
    else {
        alert("登入失敗");

        document.getElementById("admpass").value = "";
        document.getElementById("admpass").focus();
    }
}

function adminLogin() {
    var xmlhttp = new XMLHttpRequest();
    var userid = document.getElementById("admlogin").value;
    var pass = document.getElementById("admpass").value;
    var url = "https://could-victorzhj.c9users.io/20160623/admin/php/loginverify.php?userid=" + userid + "&pass=" + pass;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            adminLoginhandler(doc);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}

//---管理員帳號才能做的事 
function checkroot() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://could-victorzhj.c9users.io/20160623/admin/php/getUserInfo.php";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok") {
                document.getElementById("logout").style.display = "inline";
                document.getElementById("root").className = "active";
                document.getElementById("changedata").style.display = "inline";
            }
            else {
                //alert("尚未登入");        
                window.location.href = "https://could-victorzhj.c9users.io/20160623/index.html";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//---管理員新增會員
function addmem() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://could-victorzhj.c9users.io/20160623/admin/php/getUserInfo.php";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok") {
                document.getElementById("logout").style.display = "inline";
                document.getElementById("changedata").style.display = "inline";
                document.getElementById("root").className = "active";

            }
            else {
                window.location.href = "https://could-victorzhj.c9users.io/20160623/index.html";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function addmemberhandler(doc) {
    //alert(doc.result);

    if (doc.result == "ok") {
        alert("註冊成功");
        window.location.href = "https://could-victorzhj.c9users.io/20160623/admin/admsys.html"; // 將網頁重導向至 login.html
    }
    else {
        alert("註冊失敗");

        document.getElementById("addpwd").value = "";
        document.getElementById("addpwd2").value = "";
        document.getElementById("addpwd").focus();
    }
}

function addmember() {

    if (document.getElementById("addpwd").value !== document.getElementById("addpwd2").value) {
        alert("密碼有問題!!!");
        document.getElementById("addpwd").value = "";
        document.getElementById("addpwd2").value = "";
        document.getElementById("addpwd").focus();

        return;
    }

    var xmlhttp = new XMLHttpRequest();

    //userid | pass | username  | age  | phone  

    var userid = document.getElementById("adduserid").value;
    var pass = document.getElementById("addpwd").value;
    var username = document.getElementById("addusername").value;
    var age = document.getElementById("addage").value;
    var phone = document.getElementById("addphone").value;

    var url = "https://could-victorzhj.c9users.io/20160623/admin/php/addMember.php?userid=" + userid + "&pass=" + pass + "&username=" + username + "&age=" + age + "&phone=" + phone;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            addmemberhandler(doc);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();


}

//---管理員更改會員資料
function changememhandler(doc) {
    //alert(doc.result);

    if (doc.result == "ok") {
        alert("修改成功");
        window.location.href = "https://could-victorzhj.c9users.io/20160623/admin/admsys.html";
    }
    else {
        alert("修改失敗");

        document.getElementById("username").focus();
    }
}

function changemem() {

    var xmlhttp = new XMLHttpRequest();

    //userid | pass | username  | age  | phone  

    var userid = document.getElementById("chuserid").value;
    var pass = document.getElementById("chpass").value;
    var username = document.getElementById("chusername").value;
    var age = document.getElementById("chage").value;
    var phone = document.getElementById("chphone").value;
    var url = "https://could-victorzhj.c9users.io/20160623/admin/php/changememberdata.php?userid=" + userid + "&pass=" + pass + "&username=" + username + "&age=" + age + "&phone=" + phone;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
            var doc = JSON.parse(xmlhttp.responseText);
            changememhandler(doc);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//---管理員刪除會員資料
function delemember() {

    var xmlhttp = new XMLHttpRequest();

    //userid | pass | username  | age  | phone  

    var userid = document.getElementById("deleuserid").value;

    var url = "https://could-victorzhj.c9users.io/20160623/admin/php/delemember.php?userid=" + userid;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok") {
                window.location.href = "https://could-victorzhj.c9users.io/20160623/admin/admsys.html";
            }
            else {
                alert("無法刪除!");
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();


}


// ---載入使用者資料

function loadUserInfo() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://could-victorzhj.c9users.io/20160623/php/getUserInfo.php";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            if (doc.result == "ok") {
                document.getElementById("logout").style.display = "inline";
                document.getElementById("changedata").style.display = "inline";
                document.getElementById("allpost").className = "active";
            }
            else {
                //alert("尚未登入");
                window.location.href = "https://could-victorzhj.c9users.io/20160623/index.html";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


//---載入文章列表

function handlerPostList(doc) {
    //alert(doc.result);

    if (doc.result == "ok") {
        var postListContainer = document.getElementById("postList");
        for (var i = 0; i < doc.data.length; i++) {
            var onePost = document.createElement("li");
            onePost.innerHTML = '<a href="https://could-victorzhj.c9users.io/20160623/post/onePost.html?pno=' + doc.data[i].pno + '">' + doc.data[i].title + '</a>';
            postListContainer.appendChild(onePost);
        }
    }
    else {
        //alert("尚未登入");
        window.location.href = "login.html"; // 將網頁重導向至 test_login.html

    }
}

function loadPostList() {
    var xmlhttp = new XMLHttpRequest();

    var url = "https://could-victorzhj.c9users.io/20160623/post/getPostList.php";

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var doc = JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);
            handlerPostList(doc);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}


