var e=document.querySelector(".logo"),n=new Promise(function(e,n){e("Promise was resolved!")}),t=new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected!").message)},3e3)});function o(e,n){var t=document.createElement("div");t.className=e,t.textContent=n,document.body.insertAdjacentHTML("beforeend",t.outerHTML)}e.addEventListener("click",function(){n.then(function(e){o("message",e)})}),t.then(function(e){}).catch(function(e){o("message error-message",e)});
//# sourceMappingURL=index.2f619212.js.map
