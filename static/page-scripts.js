var navbar = document.getElementsByClassName("top-nav")[0];
navbar.onclick = function(e) {
  MenuToggle(e.target);
}

var btns = document.getElementsByClassName("top-nav__dd-btn");
for(var i = 0; i < btns.length; i++) {
    btns[i].onkeydown = function(e) {
      MenuToggle(e.target);
    }
}

function MenuToggle(clicked) {
  var btns = document.getElementsByClassName("top-nav__dd-btn");
  for(var i = 0; i < btns.length; i++) {
    var menuHeader = btns[i].parentElement;
    var btn = btns[i];
    if(btns[i] == clicked) {
      menuHeader.classList.add("top-nav__dd--open")
      btn.setAttribute("aria-expanded", "true");
    }
    else {
      menuHeader.classList.remove("top-nav__dd--open")
      btn.setAttribute("aria-expanded", "false");
    }
  }
}
