 let calculation = "";
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".calbutton");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (value === "C") {
          calculation = "";
        } else if (value === "=") {
          try {
            calculation = eval(calculation).toString();
          } catch {
            calculation = "Error";
          }
        } else {
          calculation += value;
        }
        
        display.textContent = calculation;
      });
    });