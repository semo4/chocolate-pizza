'use strict';

var rmvBtn = document.getElementById('list-one');

rmvBtn.addEventListener('click', function () {
    var rmvCheckBoxes = document.querySelectorAll('check');

    for (var i = 0; i < rmvCheckBoxes.length; i++) {
        if (rmvCheckBoxes[i].value == "on") {
            var label = document.querySelector("label");
            console.log(rmvCheckBoxes[i].value);
            //console.log(label.textContent);
            // removeElm(rmvCheckBoxes[i]); 
            label.setAttribute("for", rmvCheckBoxes[i].id);
            // var del = document.createElement("del");
            //del.textContent = rmvCheckBoxes[i].value;
            //console.log("vlauaa" + del.textContent);
            label.innerHTML = "<del>" + label.textContent + "</del>";
            //label.appendChild(del);
        }
        if (rmvCheckBoxes[i].value == "off") {
            var label = document.querySelector("label");
            console.log(rmvCheckBoxes[i].value);
            label.setAttribute("for", rmvCheckBoxes[i].id);
            label.innerHTML = "";
            label.innerHTML = label.textContent;
        }

    }
});

