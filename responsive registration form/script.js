const form = document.querySelector("form");
      NextBtn = form.querySelector(".NextBtn");
      BackBtn = form.querySelector(".BackBtn");
      allInput = form.querySelectorAll(".first input");


NextBtn.addEventListener("click", () => {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    });
}); 

BackBtn.addEventListener("click", () => form.classList.remove('secActive'));