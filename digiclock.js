clockChange();
setInterval(clockChange, 1000);
function clockChange() {
  switch (nowH1) {
    case "0":
      document.querySelector("#h1bar2").style.display = "block";
      document.querySelector("#h1bar4").style.display = "none";
      document.querySelector("#h1bar6").style.display = "block";
      break;
    case "1":
      document.querySelector("#h1bar1").style.display = "none";
      document.querySelector("#h1bar2").style.display = "none";
      document.querySelector("#h1bar4").style.display = "none";
      document.querySelector("#h1bar5").style.display = "none";
      document.querySelector("#h1bar7").style.display = "none";
      break;
    case "2":
      document.querySelector("#h1bar1").style.display = "block";
      document.querySelector("#h1bar2").style.display = "none";
      document.querySelector("#h1bar4").style.display = "block";
      document.querySelector("#h1bar5").style.display = "block";
      document.querySelector("#h1bar6").style.display = "none";
      document.querySelector("#h1bar7").style.display = "block";
      break;
  }
  switch (nowH2) {
    case "0":
      document.querySelector("#h2bar4").style.display = "none";
      document.querySelector("#h2bar5").style.display = "block";
      document.querySelector("#h2bar7").style.display = "block";
      break;
    case "1":
      document.querySelector("#h2bar1").style.display = "none";
      document.querySelector("#h2bar2").style.display = "none";
      document.querySelector("#h2bar4").style.display = "none";
      document.querySelector("#h2bar5").style.display = "none";
      document.querySelector("#h2bar7").style.display = "none";
      break;
    case "2":
      document.querySelector("#h2bar1").style.display = "block";
      document.querySelector("#h2bar2").style.display = "none";
      document.querySelector("#h2bar4").style.display = "block";
      document.querySelector("#h2bar5").style.display = "block";
      document.querySelector("#h2bar6").style.display = "none";
      document.querySelector("#h2bar7").style.display = "block";
      break;
    case "3":
      document.querySelector("#h2bar2").style.display = "none";
      document.querySelector("#h2bar5").style.display = "none";
      document.querySelector("#h2bar6").style.display = "block";
      break;
    case "4":
      document.querySelector("#h2bar1").style.display = "none";
      document.querySelector("#h2bar2").style.display = "block";
      document.querySelector("#h2bar5").style.display = "none";
      document.querySelector("#h2bar7").style.display = "none";
      break;
    case "5":
      document.querySelector("#h2bar1").style.display = "block";
      document.querySelector("#h2bar3").style.display = "none";
      document.querySelector("#h2bar5").style.display = "none";
      document.querySelector("#h2bar7").style.display = "block";
      break;
    case "6":
      document.querySelector("#h2bar3").style.display = "none";
      document.querySelector("#h2bar5").style.display = "block";
      break;
    case "7":
      document.querySelector("#h2bar3").style.display = "block";
      document.querySelector("#h2bar4").style.display = "none";
      document.querySelector("#h2bar5").style.display = "none";
      document.querySelector("#h2bar7").style.display = "none";
      break;
    case "8":
      document.querySelector("#h2bar4").style.display = "block";
      document.querySelector("#h2bar5").style.display = "block";
      document.querySelector("#h2bar7").style.display = "block";
      break;
    case "9":
      document.querySelector("#h2bar5").style.display = "none";
      document.querySelector("#h2bar7").style.display = "none";
      break;
  }
  switch (nowM1) {
    case "0":
    case "0":
      document.querySelector("#m1bar3").style.display = "block";
      document.querySelector("#m1bar4").style.display = "none";
      document.querySelector("#m1bar5").style.display = "block";
      break;
    case "1":
      document.querySelector("#m1bar1").style.display = "none";
      document.querySelector("#m1bar2").style.display = "none";
      document.querySelector("#m1bar4").style.display = "none";
      document.querySelector("#m1bar5").style.display = "none";
      document.querySelector("#m1bar7").style.display = "none";
      break;
    case "2":
      document.querySelector("#m1bar1").style.display = "block";
      document.querySelector("#m1bar2").style.display = "none";
      document.querySelector("#m1bar4").style.display = "block";
      document.querySelector("#m1bar5").style.display = "block";
      document.querySelector("#m1bar6").style.display = "none";
      document.querySelector("#m1bar7").style.display = "block";
      break;
    case "3":
      document.querySelector("#m1bar2").style.display = "none";
      document.querySelector("#m1bar5").style.display = "none";
      document.querySelector("#m1bar6").style.display = "block";
      break;
    case "4":
      document.querySelector("#m1bar1").style.display = "none";
      document.querySelector("#m1bar2").style.display = "block";
      document.querySelector("#m1bar5").style.display = "none";
      document.querySelector("#m1bar7").style.display = "none";
      break;
    case "5":
      document.querySelector("#m1bar1").style.display = "block";
      document.querySelector("#m1bar3").style.display = "none";
      document.querySelector("#m1bar5").style.display = "none";
      document.querySelector("#m1bar7").style.display = "block";
      break;
  }
  switch (nowM2) {
    case "0":
      document.querySelector("#m2bar4").style.display = "none";
      document.querySelector("#m2bar5").style.display = "block";
      document.querySelector("#m2bar7").style.display = "block";
      break;
    case "1":
      document.querySelector("#m2bar1").style.display = "none";
      document.querySelector("#m2bar2").style.display = "none";
      document.querySelector("#m2bar4").style.display = "none";
      document.querySelector("#m2bar5").style.display = "none";
      document.querySelector("#m2bar7").style.display = "none";
      break;
    case "2":
      document.querySelector("#m2bar1").style.display = "block";
      document.querySelector("#m2bar2").style.display = "none";
      document.querySelector("#m2bar4").style.display = "block";
      document.querySelector("#m2bar5").style.display = "block";
      document.querySelector("#m2bar6").style.display = "none";
      document.querySelector("#m2bar7").style.display = "block";
      break;
    case "3":
      document.querySelector("#m2bar2").style.display = "none";
      document.querySelector("#m2bar5").style.display = "none";
      document.querySelector("#m2bar6").style.display = "block";
      break;
    case "4":
      document.querySelector("#m2bar1").style.display = "none";
      document.querySelector("#m2bar2").style.display = "block";
      document.querySelector("#m2bar5").style.display = "none";
      document.querySelector("#m2bar7").style.display = "none";
      break;
    case "5":
      document.querySelector("#m2bar1").style.display = "block";
      document.querySelector("#m2bar3").style.display = "none";
      document.querySelector("#m2bar5").style.display = "none";
      document.querySelector("#m2bar7").style.display = "block";
      break;
    case "6":
      document.querySelector("#m2bar3").style.display = "none";
      document.querySelector("#m2bar5").style.display = "block";
      break;
    case "7":
      document.querySelector("#m2bar3").style.display = "block";
      document.querySelector("#m2bar4").style.display = "none";
      document.querySelector("#m2bar5").style.display = "none";
      document.querySelector("#m2bar7").style.display = "none";
      break;
    case "8":
      document.querySelector("#m2bar4").style.display = "block";
      document.querySelector("#m2bar5").style.display = "block";
      document.querySelector("#m2bar7").style.display = "block";
      break;
    case "9":
      document.querySelector("#m2bar5").style.display = "none";
      document.querySelector("#m2bar7").style.display = "none";
      break;
  }
  switch (nowS1) {
    case "0":
      document.querySelector("#s1bar3").style.display = "block";
      document.querySelector("#s1bar4").style.display = "none";
      document.querySelector("#s1bar5").style.display = "block";
      break;
    case "1":
      document.querySelector("#s1bar1").style.display = "none";
      document.querySelector("#s1bar2").style.display = "none";
      document.querySelector("#s1bar4").style.display = "none";
      document.querySelector("#s1bar5").style.display = "none";
      document.querySelector("#s1bar7").style.display = "none";
      break;
    case "2":
      document.querySelector("#s1bar1").style.display = "block";
      document.querySelector("#s1bar2").style.display = "none";
      document.querySelector("#s1bar4").style.display = "block";
      document.querySelector("#s1bar5").style.display = "block";
      document.querySelector("#s1bar6").style.display = "none";
      document.querySelector("#s1bar7").style.display = "block";
      break;
    case "3":
      document.querySelector("#s1bar2").style.display = "none";
      document.querySelector("#s1bar5").style.display = "none";
      document.querySelector("#s1bar6").style.display = "block";
      break;
    case "4":
      document.querySelector("#s1bar1").style.display = "none";
      document.querySelector("#s1bar2").style.display = "block";
      document.querySelector("#s1bar5").style.display = "none";
      document.querySelector("#s1bar7").style.display = "none";
      break;
    case "5":
      document.querySelector("#s1bar1").style.display = "block";
      document.querySelector("#s1bar3").style.display = "none";
      document.querySelector("#s1bar5").style.display = "none";
      document.querySelector("#s1bar7").style.display = "block";
      break;

  }
  switch (nowS2) {
    case "0":
      document.querySelector("#s2bar4").style.display = "none";
      document.querySelector("#s2bar5").style.display = "block";
      document.querySelector("#s2bar7").style.display = "block";
      break;
    case "1":
      document.querySelector("#s2bar1").style.display = "none";
      document.querySelector("#s2bar2").style.display = "none";
      document.querySelector("#s2bar4").style.display = "none";
      document.querySelector("#s2bar5").style.display = "none";
      document.querySelector("#s2bar7").style.display = "none";
      break;
    case "2":
      document.querySelector("#s2bar1").style.display = "block";
      document.querySelector("#s2bar2").style.display = "none";
      document.querySelector("#s2bar4").style.display = "block";
      document.querySelector("#s2bar5").style.display = "block";
      document.querySelector("#s2bar6").style.display = "none";
      document.querySelector("#s2bar7").style.display = "block";
      break;
    case "3":
      document.querySelector("#s2bar2").style.display = "none";
      document.querySelector("#s2bar5").style.display = "none";
      document.querySelector("#s2bar6").style.display = "block";
      break;
    case "4":
      document.querySelector("#s2bar1").style.display = "none";
      document.querySelector("#s2bar2").style.display = "block";
      document.querySelector("#s2bar5").style.display = "none";
      document.querySelector("#s2bar7").style.display = "none";
      break;
    case "5":
      document.querySelector("#s2bar1").style.display = "block";
      document.querySelector("#s2bar3").style.display = "none";
      document.querySelector("#s2bar5").style.display = "none";
      document.querySelector("#s2bar7").style.display = "block";
      break;
    case "6":
      document.querySelector("#s2bar3").style.display = "none";
      document.querySelector("#s2bar5").style.display = "block";
      break;
    case "7":
      document.querySelector("#s2bar3").style.display = "block";
      document.querySelector("#s2bar4").style.display = "none";
      document.querySelector("#s2bar5").style.display = "none";
      document.querySelector("#s2bar7").style.display = "none";
      break;
    case "8":
      document.querySelector("#s2bar4").style.display = "block";
      document.querySelector("#s2bar5").style.display = "block";
      document.querySelector("#s2bar7").style.display = "block";
      break;
    case "9":
      document.querySelector("#s2bar5").style.display = "none";
      document.querySelector("#s2bar7").style.display = "none";
      break;
  }
}