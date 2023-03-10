export const longPress = (callback) => {
  var node = document.body
  var longpress = false;
  var presstimer = null;
  
  var cancel = function(e) {
      if (presstimer !== null) {
          clearTimeout(presstimer);
          presstimer = null;
      }
  
      this.classList.remove("longpress");
  };
  
  var click = function(e) {
      if (presstimer !== null) {
          clearTimeout(presstimer);
          presstimer = null;
      }
  
      this.classList.remove("longpress");
  
      if (longpress) {
          return false;
      }
  };
  
  var start = function(e) {
      if (e.type === "click" && e.button !== 0) {
          return;
      }
  
      longpress = false;
  
      this.classList.add("longpress");
  
      if (presstimer === null) {
          presstimer = setTimeout(function() {
            callback()
              longpress = true;
          }, 1000);
      }
  
      return false;
  };
  
  node.addEventListener("mousedown", start);
  node.addEventListener("touchstart", start);
  node.addEventListener("click", click);
  node.addEventListener("mouseout", cancel);
  node.addEventListener("touchend", cancel);
  node.addEventListener("touchleave", cancel);
  node.addEventListener("touchcancel", cancel);
  
}

