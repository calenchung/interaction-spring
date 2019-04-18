  var entryCount = 0;
  var displayCount = 0;

  $(document).ready(function() {

    $(document).on("keypress", function(e) {
      e.preventDefault();
      entryCount ++;
      displayCount ++;

      var char = String.fromCharCode(e.which);
      console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
      createElement(char);
    });

    $(document).on("keydown", function(e) {
      //if pressed key is a backspace
      if (e.which == 8){
        e.preventDefault();
        entryCount ++;
        displayCount --;
        console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
        deleteElement();
      }
    });

  });

  function createElement(k) {
    var elem = $('#cursor');
    if (k == " ") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/space-bar.svg" class="image-1"></div></div>'); }
    // an interesting wavy effect maybe?
    if (k == "a" || k == "A") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/a-half.svg" class="image-1"><img src="assets/a-mid.svg" class="image-2"><img src="assets/a-half2.svg" class="image-3"></div></div>'); }
    if (k == "b" || k == "B") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/b-half.svg" class="image-1"><img src="assets/b-mid.svg" class="image-2"><img src="assets/b-half2.svg" class="image-3"></div></div>'); }
    if (k == "c" || k == "C") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/c-half.svg" class="image-1"><img src="assets/c-mid.svg" class="image-2"><img src="assets/c-half2.svg" class="image-3"></div></div>'); }
    if (k == "d" || k == "D") { elem.before('<div class="a d"><div class="pull-tab"></div><div class="images"><img src="assets/d-half.svg" class="image-1"><img src="assets/d-mid.svg" class="image-2"><img src="assets/d-half2.svg" class="image-3"></div></div>'); }
    if (k == "e" || k == "E") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/e-half.svg" class="image-1"><img src="assets/e-mid.svg" class="image-2"><img src="assets/e-half2.svg" class="image-3"></div></div>'); }
    if (k == "f" || k == "F") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/f-half.svg" class="image-1"><img src="assets/f-mid.svg" class="image-2"><img src="assets/f-half2.svg" class="image-3"></div></div>'); }
    if (k == "g" || k == "G") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/g-half.svg" class="image-1"><img src="assets/g-mid.svg" class="image-2"><img src="assets/g-half2.svg" class="image-3"></div></div>'); }
    if (k == "h" || k == "H") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/h-half.svg" class="image-1"><img src="assets/h-mid.svg" class="image-2"><img src="assets/h-half2.svg" class="image-3"></div></div>'); }
    if (k == "i" || k == "I") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/i-half.svg" class="image-1"><img src="assets/i-mid.svg" class="image-2"><img src="assets/i-half2.svg" class="image-3"></div></div>'); }
    if (k == "j" || k == "J") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/j-half.svg" class="image-1"><img src="assets/j-mid.svg" class="image-2"><img src="assets/j-half2.svg" class="image-3"></div></div>'); }
    if (k == "k" || k == "K") { elem.before('<div class="a k"><div class="pull-tab"></div><div class="images"><img src="assets/k-half.svg" class="image-1"><img src="assets/k-mid.svg" class="image-2"><img src="assets/k-half2.svg" class="image-3"></div></div>'); }
    if (k == "l" || k == "L") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/l-half.svg" class="image-1"><img src="assets/l-mid.svg" class="image-2"><img src="assets/l-half2.svg" class="image-3"></div></div>'); }
    if (k == "m" || k == "M") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/m-half.svg" class="image-1"><img src="assets/m-mid.svg" class="image-2"><img src="assets/m-half2.svg" class="image-3"></div></div>'); }
    if (k == "n" || k == "N") { elem.before('<div class="a n"><div class="pull-tab"></div><div class="images"><img src="assets/n-half.svg" class="image-1"><img src="assets/n-mid.svg" class="image-2"><img src="assets/n-half2.svg" class="image-3"></div></div>'); }
    if (k == "o" || k == "O") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/o-half.svg" class="image-1"><img src="assets/o-mid.svg" class="image-2"><img src="assets/o-half2.svg" class="image-3"></div></div>'); }
    if (k == "p" || k == "P") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/p-half.svg" class="image-1"><img src="assets/p-mid.svg" class="image-2"><img src="assets/p-half2.svg" class="image-3"></div></div>'); }
    if (k == "q" || k == "Q") { elem.before('<div class="a q"><div class="pull-tab"></div><div class="images"><img src="assets/q-half.svg" class="image-1"><img src="assets/q-mid.svg" class="image-2"><img src="assets/q-half2.svg" class="image-3"></div></div>'); }
    if (k == "r" || k == "R") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/r-half.svg" class="image-1"><img src="assets/r-mid.svg" class="image-2"><img src="assets/r-half2.svg" class="image-3"></div></div>'); }
    if (k == "s" || k == "S") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/s-half.svg" class="image-1"><img src="assets/s-mid.svg" class="image-2"><img src="assets/s-half2.svg" class="image-3"></div></div>'); }
    if (k == "t" || k == "T") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/t-half.svg" class="image-1"><img src="assets/t-mid.svg" class="image-2"><img src="assets/t-half2.svg" class="image-3"></div></div>'); }
    if (k == "u" || k == "U") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/u-half.svg" class="image-1"><img src="assets/u-mid.svg" class="image-2"><img src="assets/u-half2.svg" class="image-3"></div></div>'); }
    if (k == "v" || k == "V") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/v-half.svg" class="image-1"><img src="assets/v-mid.svg" class="image-2"><img src="assets/v-half2.svg" class="image-3"></div></div>'); }
    if (k == "w" || k == "W") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/w-half.svg" class="image-1"><img src="assets/w-mid.svg" class="image-2"><img src="assets/w-half2.svg" class="image-3"></div></div>'); }
    if (k == "x" || k == "X") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/x-half.svg" class="image-1"><img src="assets/x-mid.svg" class="image-2"><img src="assets/x-half2.svg" class="image-3"></div></div>'); }
    if (k == "y" || k == "Y") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/y-half.svg" class="image-1"><img src="assets/y-mid.svg" class="image-2"><img src="assets/y-half2.svg" class="image-3"></div></div>'); }
    if (k == "z" || k == "Z") { elem.before('<div class="a"><div class="pull-tab"></div><div class="images"><img src="assets/z-half.svg" class="image-1"><img src="assets/z-mid.svg" class="image-2"><img src="assets/z-half2.svg" class="image-3"></div></div>'); }
    if (k == " ") { elem.before('<span class="inner">&nbsp;</span>') };
  }

  function deleteElement() {
    $(".a").last().remove();
  }
