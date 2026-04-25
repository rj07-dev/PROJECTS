import { addCourse, removeCourse, getCourses, getFilteredCourses, loadSampleCourses, getSummary } from './modules/app.js';
import { getTimeData } from './modules/api.js';

const courseForm = document.getElementById('courseForm');
const courseList = document.getElementById('courseList');
const summary = document.getElementById('summary');
const filterDepartment = document.getElementById('filterDepartment');
const loadSampleBtn = document.getElementById('loadSampleBtn');
const timeBtn = document.getElementById('timeBtn');
const timeBox = document.getElementById('timeBox');

function renderCourses(courseArray) {
  courseList.innerHTML = '';

  if (courseArray.length === 0) {
    courseList.innerHTML = '<p>No courses available.</p>';
    return;
  }

  courseArray.forEach(course => {
    const div = document.createElement('div');
    div.className = 'course-card';

    div.innerHTML = `
      <h3>${course.code} - ${course.name}</h3>
      <p>Department: ${course.department}</p>
      <p>Capacity: ${course.capacity}</p>
      <p>Enrolled: ${course.enrolled}</p>
      <p>Available Seats: ${course.getAvailableSeats()}</p>
      <p class="${course.isFull() ? 'full' : 'open'}">
        ${course.isFull() ? 'Full' : 'Open'}
      </p>
      <button data-id="${course.id}">Remove</button>
    `;

    courseList.appendChild(div);
  });
}

function renderSummary() {
  const data = getSummary();
  summary.textContent = `Total Courses: ${data.total} | Open: ${data.open} | Full: ${data.full}`;
}

courseForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('courseName').value;
  const code = document.getElementById('courseCode').value;
  const department = document.getElementById('department').value;
  const capacity = document.getElementById('capacity').value;
  const enrolled = document.getElementById('enrolled').value;

  if (Number(enrolled) > Number(capacity)) {
    alert('Enrolled students cannot be greater than capacity');
    return;
  }

  addCourse(name, code, department, capacity, enrolled);
  renderCourses(getCourses());
  renderSummary();
  courseForm.reset();
});

filterDepartment.addEventListener('change', function() {
  const selectedDepartment = filterDepartment.value;
  renderCourses(getFilteredCourses(selectedDepartment));
});

loadSampleBtn.addEventListener('click', function() {
  loadSampleCourses();
  renderCourses(getCourses());
  renderSummary();
});

courseList.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    const id = event.target.getAttribute('data-id');
    removeCourse(id);
    renderCourses(getFilteredCourses(filterDepartment.value));
    renderSummary();
  }
});

timeBtn.addEventListener('click', async function() {
  try {
    const data = await getTimeData();
    timeBox.innerHTML = `
      <p>Date: ${data.date}</p>
      <p>Time: ${data.time}</p>
      <p>Day: ${data.dayOfWeek}</p>
      <p>Time Zone: ${data.timeZone}</p>
    `;
  } catch (error) {
    timeBox.innerHTML = `<p>${error.message}</p>`;
  }
});

renderCourses(getCourses());
renderSummary();