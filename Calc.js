var buttons = document.querySelectorAll('button');


let string = "";

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        // Get the input and button values
        var input = document.querySelector('result');
        var btnVal = this.innerHTML;
        if (btnVal == '=') {
            string = eval(string)
            result.innerHTML = string
        }

        else if (btnVal == 'AC') {
            string = ""
            result.innerHTML = 0;
        }

        else if (btnVal == 'DEL') {

            string = string.slice(0, string.length - 1) + string.slice(string.length, string.length)
            if (string == "") {
                result.innerHTML = 0;
            }
            else {
                result.innerHTML = string
            }
        }
        else {
            string = string + btnVal;
            result.innerHTML = string
        }
    }
}

//Array.from(buttons).forEach((button) => {
    //button.addEventListener('click', (e) => {
      //  string = string + e.target.innerHTML;
        //document.querySelector('keyboard').value = string;
    //})
//})


