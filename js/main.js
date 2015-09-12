'use strict';

window.onload = function () {
  deObfuscateEmailAddress();
};

function deObfuscateEmailAddress() {
  var elements = document.getElementsByClassName("email-address");
  for (var i = 0; i < elements.length; ++i) {
    var item = elements[i];
    item.textContent = deObfuscateEmailAddressString(item.textContent, "textContent");
    item.href = deObfuscateEmailAddressString(item.href, "href");
  }
}

function deObfuscateEmailAddressString(s, source) {
  if(s) {
    s = s.replace(/nospam-/gi, "");
    s = s.replace(/-at-/gi, "@");
  }
  return s;
}
