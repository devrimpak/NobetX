document.addEventListener("DOMContentLoaded", function () {
    const scheduleBtn = document.getElementById("scheduleBtn");
    const dutyTeachersBtn = document.getElementById("dutyTeachersBtn");
    const homeBtn = document.getElementById("homeBtn");

    const homeSection = document.getElementById("homeSection");
    const scheduleSection = document.getElementById("scheduleSection");
    const dutyTeachersSection = document.getElementById("dutyTeachersSection");

    scheduleBtn.addEventListener("click", function () {
        homeSection.classList.add("hidden");
        dutyTeachersSection.classList.add("hidden");
        scheduleSection.classList.remove("hidden");
    });

    dutyTeachersBtn.addEventListener("click", function () {
        homeSection.classList.add("hidden");
        scheduleSection.classList.add("hidden");
        dutyTeachersSection.classList.remove("hidden");
    });

    homeBtn.addEventListener("click", function () {
        scheduleSection.classList.add("hidden");
        dutyTeachersSection.classList.add("hidden");
        homeSection.classList.remove("hidden");
    });

    // Editable cells
    const cells = document.querySelectorAll("#mainSchedule .editable");

    cells.forEach(cell => {
        cell.addEventListener("click", function () {
            let currentText = this.innerText;
            let input = document.createElement("input");
            input.type = "text";
            input.value = currentText;
            input.style.width = "100%";
            input.style.textAlign = "center";
            this.innerHTML = "";
            this.appendChild(input);
            input.focus();

            input.addEventListener("blur", function () {
                cell.innerText = input.value;
            });

            input.addEventListener("keypress", function (e) {
                if (e.key === "Enter") {
                    cell.innerText = input.value;
                }
            });
        });
    });
});

    // Editable cells
    const cellss = document.querySelectorAll("#dutyTeacher .editable");

    cells.forEach(cell => {
        cell.addEventListener("click", function () {
            let currentText = this.innerText;
            let input = document.createElement("input");
            input.type = "text";
            input.value = currentText;
            input.style.width = "100%";
            input.style.textAlign = "center";
            this.innerHTML = "";
            this.appendChild(input);
            input.focus();

            input.addEventListener("blur", function () {
                cell.innerText = input.value;
            });

            input.addEventListener("keypress", function (e) {
                if (e.key === "Enter") {
                    cell.innerText = input.value;
                }
            });
        });
    });

