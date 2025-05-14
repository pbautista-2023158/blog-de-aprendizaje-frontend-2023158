export default function CourseFilter({ selected, onChange }) {
  const courses = ["Todos", "Taller III", "Tecnologia III", "Practica Supervisada"];

  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="select"
    >
      {courses.map((course) => (
        <option key={course} value={course}>
          {course}
        </option>
      ))}
    </select>
  );
}
