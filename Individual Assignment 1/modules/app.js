import { Course } from './classes.js';

let courses = [];

export function addCourse(name, code, department, capacity, enrolled) {
  const course = new Course(name, code, department, capacity, enrolled);
  courses.push(course);
}

export function removeCourse(id) {
  courses = courses.filter(course => course.id != id);
}

export function getCourses() {
  return courses;
}

export function getFilteredCourses(department) {
  if (department === 'All') {
    return courses;
  }
  return courses.filter(course => course.department === department);
}

export function loadSampleCourses() {
  courses.push(new Course('JavaScript Basics', 'CST101', 'Computer Studies', 30, 22));
  courses.push(new Course('Business Math', 'BUS202', 'Business', 25, 25));
  courses.push(new Course('Calculus 1', 'MAT110', 'Mathematics', 40, 18));
}

export function getSummary() {
  let total = courses.length;
  let full = courses.filter(course => course.isFull()).length;
  let open = total - full;

  return { total, open, full };
}