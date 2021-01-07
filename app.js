'use strict';

var rmvBtn = document.getElementById('list-one');
var label = document.querySelector("label"); 
rmvBtn.addEventListener('click', function(){
   var rmvCheckBoxes = document.getElementsByName('check');

    for(var i = 0; i < rmvCheckBoxes.length; i++)
    {
        if(rmvCheckBoxes[i].checked)
        {
            //console.log(rmvCheckBoxes[i].value);
            //console.log(label.textContent);

            // removeElm(rmvCheckBoxes[i]); 
            
            // label.setAttribute("for", rmvCheckBoxes[i].id)
            var del = document.createElement("del");
            del.textContent = rmvCheckBoxes[i].value;
            console.log("vlauaa" + del.textContent);
            label.textContent.replace(label.textContent, del.textContent );
            label.appendChild(del);

        }
      
    }  
});

