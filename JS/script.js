document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('student-form') || document.querySelector('form');
  const nameInput = document.getElementById('student-name') || document.querySelector('#student-name');
  const markInput = document.getElementById('student-mark') || document.querySelector('#student-mark');
  const resultArea = document.getElementById('result') || document.querySelector('#result');
  const studentsList = document.getElementById('students-list') || document.querySelector('#students-list');

  if (!form || !nameInput || !markInput || !resultArea || !studentsList) {
    console.warn('Expected form elements not found. Ensure your HTML includes IDs: student-form, student-name, student-mark, result, students-list');
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const mark = parseInt(markInput.value, 10);

    // Validation
    if (!name) {
      resultArea.textContent = 'Error: Student name cannot be empty.';
      resultArea.style.color = 'crimson';
      return;
    }

    if (isNaN(mark) || mark < 0 || mark > 100) {
      resultArea.textContent = 'Error: Enter a valid mark between 0 and 100.';
      resultArea.style.color = 'crimson';
      return;
    }

    // Determine grade and pass/fail
    let grade = '';
    let passed = false;

    if (mark >= 80 && mark <= 100) {
      grade = 'Distinction';
      passed = true;
    } else if (mark >= 65) {
      grade = 'Merit';
      passed = true;
    } else if (mark >= 50) {
      grade = 'Pass';
      passed = true;
    } else {
      grade = 'Fail';
      passed = false;
    }

    // Update result area
    resultArea.textContent = `${name} — ${mark}% — ${grade} (${passed ? 'PASS' : 'FAIL'})`;
    resultArea.style.color = passed ? 'green' : 'crimson';

    // Append to students list
    const li = document.createElement('li');
    li.textContent = `${name} — ${mark}% — ${grade} (${passed ? 'PASS' : 'FAIL'})`;
    studentsList.appendChild(li);

    // Reset form for next entry
    form.reset();
    nameInput.focus();
  });
});
