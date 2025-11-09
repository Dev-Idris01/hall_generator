
const nameInput = document.getElementById('studentName');
const hallDisplay = document.getElementById('hallNumber');
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');



function generateHallNumber() {
const studentName = nameInput.value.trim();
if (studentName === '') {
alert("Please enter the student's name first!");
return;
}



const hallNumber = Math.floor(Math.random() * 10) + 1;
hallDisplay.textContent = "Dear " + studentName + ", " + "Your are in hall " + hallNumber;

//hallDisplay.textContent = "Dear, ${studentName} is assigned to 🎓 Hall ${hallNumber}";
}



function resetForm() {
nameInput.value = '';
hallDisplay.textContent = '';
}



generateBtn.addEventListener('click', generateHallNumber);
resetBtn.addEventListener('click', resetForm);