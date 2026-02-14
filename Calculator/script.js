
let inputBox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let btnValue = e.target.innerText;

        if (btnValue === "Ac") {
            string = "";
            inputBox.value = string;
        }

        else if (btnValue === "Del") {
            string = string.slice(0, -1);
            inputBox.value = string;
        }

        else if (btnValue === "=") {
            try {
                string = eval(string);
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
            }
        }

        else if (btnValue === "%") {
            string = (eval(string) / 100).toString();
            inputBox.value = string;
        }

        else {
            string += btnValue;
            inputBox.value = string;
        }
    });
});
