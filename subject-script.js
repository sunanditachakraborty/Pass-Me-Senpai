document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const year = urlParams.get("year");
    const branch = urlParams.get("branch");
    const subjectCode = urlParams.get("subject");
    const subjectTitle = document.getElementById("subject-title");
    const resourceList = document.getElementById("resource-list");
    const backButton = document.getElementById("back-button");

    subjectTitle.innerText = `${branch} - ${subjectCode}`;

    const driveLinks = {
        // 1st Year CSE
        "BIOLOGY FOR ENGINEERS": { pyqs: "https://drive.google.com/drive/folders/1ZRICbYVrrAulsKoaS1ln2pooRTcmgpEf?usp=sharing", notes: "https://drive.google.com/file/d/1CSE101NOTE/view" },
        "CSE102": { pyqs: "https://drive.google.com/file/d/1CSE102PYQ/view", notes: "https://drive.google.com/file/d/1CSE102NOTE/view" },
        "CSE103": { pyqs: "https://drive.google.com/file/d/1CSE103PYQ/view", notes: "https://drive.google.com/file/d/1CSE103NOTE/view" },
        "CSE104": { pyqs: "https://drive.google.com/file/d/1CSE104PYQ/view", notes: "https://drive.google.com/file/d/1CSE104NOTE/view" },
        "CSE105": { pyqs: "https://drive.google.com/file/d/1CSE105PYQ/view", notes: "https://drive.google.com/file/d/1CSE105NOTE/view" },

        // 1st Year ECE
        "ECE101": { pyqs: "https://drive.google.com/file/d/1ECE101PYQ/view", notes: "https://drive.google.com/file/d/1ECE101NOTE/view" },
        "ECE102": { pyqs: "https://drive.google.com/file/d/1ECE102PYQ/view", notes: "https://drive.google.com/file/d/1ECE102NOTE/view" },

        // 2nd Year CSE
        "CSE201": { pyqs: "https://drive.google.com/file/d/2CSE201PYQ/view", notes: "https://drive.google.com/file/d/2CSE201NOTE/view" },
        "CSE202": { pyqs: "https://drive.google.com/file/d/2CSE202PYQ/view", notes: "https://drive.google.com/file/d/2CSE202NOTE/view" },
        "CSE203": { pyqs: "https://drive.google.com/file/d/2CSE202PYQ/view", notes: "https://drive.google.com/file/d/2CSE202NOTE/view" },


        // 2nd Year ECE
        "ECE201": { pyqs: "https://drive.google.com/file/d/2ECE201PYQ/view", notes: "https://drive.google.com/file/d/2ECE201NOTE/view" },
        "ECE202": { pyqs: "https://drive.google.com/file/d/2ECE202PYQ/view", notes: "https://drive.google.com/file/d/2ECE202NOTE/view" },

        // 3rd Year CSE
        "CSE301": { pyqs: "https://drive.google.com/file/d/3CSE301PYQ/view", notes: "https://drive.google.com/file/d/3CSE301NOTE/view" },
        "CSE302": { pyqs: "https://drive.google.com/file/d/3CSE302PYQ/view", notes: "https://drive.google.com/file/d/3CSE302NOTE/view" },

        // 3rd Year ECE
        "ECE301": { pyqs: "https://drive.google.com/file/d/3ECE301PYQ/view", notes: "https://drive.google.com/file/d/3ECE301NOTE/view" },
        "ECE302": { pyqs: "https://drive.google.com/file/d/3ECE302PYQ/view", notes: "https://drive.google.com/file/d/3ECE302NOTE/view" },

        // 4th Year CSE
        "CSE401": { pyqs: "https://drive.google.com/file/d/4CSE401PYQ/view", notes: "https://drive.google.com/file/d/4CSE401NOTE/view" },
        "CSE402": { pyqs: "https://drive.google.com/file/d/4CSE402PYQ/view", notes: "https://drive.google.com/file/d/4CSE402NOTE/view" },

        // 4th Year ECE
        "ECE401": { pyqs: "https://drive.google.com/file/d/4ECE401PYQ/view", notes: "https://drive.google.com/file/d/4ECE401NOTE/view" },
        "ECE402": { pyqs: "https://drive.google.com/file/d/4ECE402PYQ/view", notes: "https://drive.google.com/file/d/4ECE402NOTE/view" }
    };

    if (driveLinks[subjectCode]) {
        ["pyqs", "notes"].forEach(type => {
            const button = document.createElement("a");
            button.href = driveLinks[subjectCode][type];
            button.target = "_blank";
            button.innerText = type.toUpperCase();
            button.classList.add("grid-item");
            resourceList.appendChild(button);
        });
    } else {
        resourceList.innerHTML = "<p>COMING SOON</p>";
    }

    backButton.href = `subjects.html?year=${year}&branch=${branch}`;
});
