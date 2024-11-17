import { Link } from "react-router-dom";
import "./App.css";

export default function About() {
  return (
    <>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
        <h2 className="text-3xl font-semibold text-center text-indigo-600">
          About Me
        </h2>

        <p className="text-lg text-gray-700">
          Hi there! I’m a student who is starting slowly with software
          development. I may lack experience in the software industry and the
          workforce, but I’m passionate and eager to learn. I’m deeply
          interested in exploring the world of software development, and I’m
          excited to grow in this field.
        </p>

        <p className="text-lg text-gray-700">
          If you have any advice or resources to share, I would greatly
          appreciate it! Please feel free to reach out—I’m open to learning from
          others and always looking for ways to improve. Please be kind to me.
          :)
        </p>

        <div className="text-center">
          <p className="font-medium text-gray-600">Nice to meet you all!</p>
        </div>

        <div className="card bg-gray-100 shadow-xl p-4 mt-6">
          <h3 className="text-xl font-semibold text-indigo-600">
            Let’s Connect
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Feel free to connect with me if you have any tips, ideas, or
            collaboration opportunities!
          </p>
          <Link to="/">
          <button className="btn btn-primary mt-4">HOME</button>
          </Link>
        </div>
      </div>
    </>
  );
}
