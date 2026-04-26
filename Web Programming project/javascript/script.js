document.addEventListener("DOMContentLoaded", function () {
    const resumeForm = document.getElementById("resumeForm");
    const resumeText = document.getElementById("resumeText");
    const resumeFile = document.getElementById("resumeFile");
    const resumeMsg = document.getElementById("resumeMsg");

    if (!resumeForm || !resumeText || !resumeFile || !resumeMsg) {
        console.log("Form elements not found.");
        return;
    }

    resumeForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const textValue = resumeText.value.trim();
        const hasFile = resumeFile.files.length > 0;

        if (textValue === "" && !hasFile) {
            resumeMsg.textContent = "Please paste your resume or upload a file first.";
            resumeMsg.style.color = "red";
            return;
        }

        resumeMsg.textContent = "Resume submitted successfully.";
        resumeMsg.style.color = "green";

        resumeForm.reset();
    });
});