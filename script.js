//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ageForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting traditionally

        // Get input values
        const age = document.getElementById("age").value.trim();
        const name = document.getElementById("name").value.trim();

        // Validate inputs
        if (!age || !name) {
            alert("Please enter valid details.");
            return;
        }

        // Convert age to number
        const ageNum = parseInt(age, 10);

        // Create a promise to validate age
        const ageValidation = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ageNum >= 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000); // 4-second delay
        });

        // Handle promise resolution or rejection
        ageValidation
            .then(message => alert(message))
            .catch(message => alert(message));
    });
});
