function generateCertificate() {
    // Get input values from form
    const recipientName = document.getElementById("recipientName").value;
    const assignmentScore = document.getElementById("assignmentScore").value;
    const quizScore = document.getElementById("quizScore").value;
    const liveTestScore = document.getElementById("liveTestScore").value;
    const ctfScore = document.getElementById("ctfScore").value;
    const studentId = document.getElementById("studentId").value;
    const courseDuration = document.getElementById("courseDuration").value;

    // Update the certificate with form values
    document.getElementById("displayRecipientName").textContent = recipientName;
    document.getElementById("displayRecipientStrong").textContent = recipientName;
    document.getElementById("displayAssignmentScore").textContent = `${assignmentScore}%`;
    document.getElementById("displayQuizScore").textContent = `${quizScore}%`;
    document.getElementById("displayLiveTestScore").textContent = `${liveTestScore}%`;
    document.getElementById("displayCtfScore").textContent = `${ctfScore}%`;
    document.getElementById("displayStudentId").textContent = `STUDENT ID: ${studentId}`;
    document.getElementById("displayCourseDuration").textContent = `COURSE DURATION: ${courseDuration}`;
}
