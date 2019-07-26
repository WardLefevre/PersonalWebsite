/* JS */

/* Navigation */
document.getElementById("navtitle").style.fontSize = "70px";

window.onscroll = function() {
  if ((window.pageYOffset) > 50 ) {
    document.getElementById("navtitle").style.fontSize = "30px";
  } else {
    document.getElementById("navtitle").style.fontSize = "70px";
  };

  if ((window.pageYOffset) > 280 && (window.pageYOffset) < 580) {
    document.getElementById("recordioimg").style.webkitFilter = "grayscale(0)";
  } else {
    document.getElementById("recordioimg").style.webkitFilter = "grayscale(1)";
  };

  if ((window.pageYOffset) > 580 && (window.pageYOffset) < 930) {
    document.getElementById("penplotterimg").style.webkitFilter = "grayscale(0)";
  } else {
    document.getElementById("penplotterimg").style.webkitFilter = "grayscale(1)";
  };

  if ((window.pageYOffset) > 840 && (window.pageYOffset) < 1200) {
    document.getElementById("circuitryimg").style.webkitFilter = "grayscale(0)";
  } else {
    document.getElementById("circuitryimg").style.webkitFilter = "grayscale(1)";
  };

  if ((window.pageYOffset) > 1200 && (window.pageYOffset) < 1500) {
    document.getElementById("weatherstationimg").style.webkitFilter = "grayscale(0)";
    document.getElementById("webdevelopmentimg").style.webkitFilter = "grayscale(0)";
  } else {
    document.getElementById("weatherstationimg").style.webkitFilter = "grayscale(1)";
    document.getElementById("webdevelopmentimg").style.webkitFilter = "grayscale(1)";
  };

  if ((window.pageYOffset) > 1800 && (window.pageYOffset) < 2500) {
    document.getElementById("knowledgeimg").style.webkitFilter = "grayscale(0)";
    document.getElementById("skillsimg").style.webkitFilter = "grayscale(0)";
    document.getElementById("educationimg").style.webkitFilter = "grayscale(0)";
    document.getElementById("languageimg").style.webkitFilter = "grayscale(0)";
    document.getElementById("machineryimg").style.webkitFilter = "grayscale(0)";
    document.getElementById("programsimg").style.webkitFilter = "grayscale(0)";
    document.getElementById("controllersimg").style.webkitFilter = "grayscale(0)";
  } else {
    document.getElementById("knowledgeimg").style.webkitFilter = "grayscale(1)";
    document.getElementById("skillsimg").style.webkitFilter = "grayscale(1)";
    document.getElementById("educationimg").style.webkitFilter = "grayscale(1)";
    document.getElementById("languageimg").style.webkitFilter = "grayscale(1)";
    document.getElementById("machineryimg").style.webkitFilter = "grayscale(1)";
    document.getElementById("programsimg").style.webkitFilter = "grayscale(1)";
    document.getElementById("controllersimg").style.webkitFilter = "grayscale(1)";
  };
}

function copymail() {
  var textArea = document.createElement("textarea");
  textArea.value = "wardlefevre@pm.me";
  document.getElementById("navtitle").appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.getElementById("mail").innerHTML = "Address copied";
  document.getElementById("navtitle").removeChild(textArea);
  setTimeout(function(){document.getElementById("mail").innerHTML = "wardlefevre@pm.me";}, 1000);
}

function copytele() {
  var textArea = document.createElement("textarea");
  textArea.value = "0471 30 44 00";
  document.getElementById("navtitle").appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.getElementById("tele").innerHTML = "Number copied";
  document.getElementById("navtitle").removeChild(textArea);
  setTimeout(function(){document.getElementById("tele").innerHTML = "0471 30 44 00";}, 1000);
}

/* Birthday */
var now = new Date();
var day = new Date(1997, 2, 9);
var sec = Math.round((now - day)/1000);
var yea = Math.floor((now - day)/31536000000);
var tik = 1;
function birth() {
  if (tik==0){
    document.getElementById("birth").innerHTML = sec+" seconds";
    tik++;
  }else{document.getElementById("birth").innerHTML = yea+" years on Earth"; tik--;}
}
birth();
window.setInterval(function(){
      sec++;
      if (tik==1){document.getElementById("birth").innerHTML = sec+" seconds"};
}, 1000);

/* Typing */
var typing=Typing("~2500~Hello!~2000~*!*~500~, I am Ward.~3000~*Ward.*~500~a creator~1000~*creator*~300~maker~1000~* maker*~400~n inventor~1000~*Hello, I am an inventor*~1000~Welcome to my website!", 100, 300, 70, "text", "blinker");
typing();
var typing=Typing("About me~24000~*About me*~500~Click me:~9500~*Click me:*~500~About me", 100, 300, 70, "text2", "blinker2");
typing();
var typing=Typing("Contact~28000~*Contact*~500~And me!~3000~*And me!*~500~Contact", 100, 300, 70, "text3", "blinker3");
typing();

setTimeout(function(){document.getElementById("welcomeimg").style.webkitFilter = "grayscale(0)";}, 7400);
setTimeout(function(){document.getElementById("blinker").innerHTML = "&nbsp;";}, 24000);
setTimeout(function(){document.getElementById("blinker2").innerHTML = "|";}, 24000);
setTimeout(function(){document.getElementById("blinker2").innerHTML = "&nbsp;";}, 28000);
setTimeout(function(){document.getElementById("blinker3").innerHTML = "|";}, 28000);
setTimeout(function(){document.getElementById("blinker3").innerHTML = "&nbsp;";}, 36000);
setTimeout(function(){document.getElementById("blinker2").innerHTML = "|";}, 36000);
setTimeout(function(){document.getElementById("blinker2").innerHTML = "&nbsp;";}, 38400);

function Typing(string, type_speed, blink_speed, backspace_speed, mainspanid, blinkerid) {
    return function() {
        
        let sin = string;
        let sout = "";
        let mainspan = document.getElementById(mainspanid);
        let time_order = 0;
        let blinkercontrol;
        var timeout = [];

        function startblinker() {
            blinkercontrol = setInterval(function() {
                let blinker = document.getElementById(blinkerid);
                if (blinker.style.visibility == "") {
                    blinker.style.visibility = "hidden";
                } else {
                    blinker.style.visibility = "";
                }
            }, blink_speed);
        }

        function stopblinker() {
            clearInterval(blinkercontrol);
            let blinker = document.getElementById(blinkerid);
            blinker.style.visibility = "";
        }
        for (let i = 0; i < sin.length + 1; i++) {
            if (sin[i] == "~") {
                let pause_det = calctime(i);
                pause(i, pause_det[1]);
                i = pause_det[0];
            } else if (sin[i] == "@") {
                next_line(i);
            } else if (sin[i] == "*") {
                let sen_back = wordsreplace(i);
                back_space(i, sen_back[1], backspace_speed);
                i = sen_back[0];
            } else if (sin[i] == undefined) {
                timeout.push(setTimeout(function() {
                    startblinker()
                }, time_order));
            } else {
                put(i);
            }
        }

        function calctime(a) {
            a++;
            let int = "";
            while (sin[a] != "~") {
                int = int + sin[a];
                a++;
            }
            let time = Number(int);
            if (time) {
                return [a, time];

            } else {

                catcherror("Looks like you have entered wrong time in your delay statement");
            }
        }

        function wordsreplace(a) {
            a++;
            let line = ""
            while (sin[a] != "*") {
                line = line + sin[a];
                if (sin[a] == "~" || sin[a] == "*") {
                    catcherror("Do not use ~ or * in  backspace statement");
                }
                a++;
            }
            return [a, line];
        }

        function back_space(a, text, speed) {
            a = text.length + 1;
            let index = text.length - 1;
            while (index >= 0) {
                time_order = time_order + speed;
                (function(word) {
                    timeout.push(setTimeout(function() {
                        if (word == sout[sout.length - 1]) {
                            sout = sout.substring(0, sout.length - 1);
                            mainspan.innerHTML = sout;
                        } else if (sout[sout.length - 1] == ">") {
                            sout = sout.substring(0, sout.length - 5);
                            mainspan.innerHTML = sout;
                        } else {
                            catcherror("ahh look likes your backspace statement !== actual statement");
                        }

                    }, time_order))
                })(text[index]);
                index--;
            }
        }

        function next_line(a) {
            timeout.push(setTimeout(function() {
                sout = sout + "<br>";
                mainspan.innerHTML = sout;
            }, time_order));
        }

        function pause(a, time) {
            timeout.push(setTimeout(function() {
                startblinker();
            }, time_order))
            timeout.push(setTimeout(function() {
                stopblinker();
            }, time_order + time));
            time_order = time_order + time;
        }

        function put(a) {
            time_order = time_order + (type_speed)
            timeout.push(setTimeout(function() {
                sout = sout + sin[a];
                mainspan.innerHTML = sout;
            }, time_order));
        }

        function catcherror(errormsg) {
            for (let c = 0; c < timeout.length; c++) {
                clearTimeout(timeout[c]);
            }
            throw new Error(errormsg);

        }
    }
}
