import Header from "./Header";
import Content from "./Content";
const Course = ({ course }) => {
	console.log(course)
  return (
    <div className="mainDiv">
      <Header name={course.name} />
			<Content parts={course.parts} />
    </div>
  );
};

export default Course;
