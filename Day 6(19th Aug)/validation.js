document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const studentImage = document.getElementById('studentImage');
    const studentName = document.getElementById('studentName');
    const fatherName = document.getElementById('fatherName');
    const motherName = document.getElementById('motherName');
    const gender = document.getElementsByName('gender');
    const dob = document.getElementById('dob');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const permTel = document.getElementById('permTel');
    const tempTel = document.getElementById('tempTel');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;
        let messages = [];

        if (studentImage.files.length > 0) {
            const file = studentImage.files[0];
            if (file.size > 5 * 1024 * 1024) {
                isValid = false;
                messages.push('Student image must be less than 5MB.');
            }
        }





        if (studentName.value.trim() === '') {
            isValid = false;
            messages.push('Student name is required.');
        }

        if (fatherName.value.trim() === '') {
            isValid = false;
            messages.push('Father\'s name is required.');
        }
        if (motherName.value.trim() === '') {
            isValid = false;
            messages.push('Mother\'s name is required.');
        }

        let genderSelected = false;
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                genderSelected = true;
                break;
            }
        }
        if (!genderSelected) {
            isValid = false;
            messages.push('Gender is required.');
        }

        // const dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;  // from internet
        // if (!dobPattern.test(dob.value)) {
        //     isValid = false;
        //     messages.push('Date of birth must be in the format dd / mm / yyyy.');
        // }

        // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;// from internet
        // if (!emailPattern.test(email.value)) {
        //     isValid = false;
        //     messages.push('Invalid email address.');
        // }

        // const telPattern = /^\d{10}$/;  // from internet
        // if (!telPattern.test(tel.value)) {
        //     isValid = false;
        //     messages.push('Invalid telephone number for Tel/Mobile.');
        // }

        if (permTel.value && !telPattern.test(permTel.value)) {
            isValid = false;
            messages.push('Invalid telephone number for Permanent Tel/Mobile.');
        }
        if (tempTel.value && !telPattern.test(tempTel.value)) {
            isValid = false;
            messages.push('Invalid telephone number for Temporary Tel/Mobile.');
        }

        if (!isValid) {
            alert(messages.join('\n'));
        } else {
            form.submit();
        }
    });
});
