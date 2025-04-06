import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "pdf-analyzer",
    description: "PDF Analyzer is a frontend web app built with Next.js that allows users to upload PDFs and extract text from them. It provides a simple and efficient way to view document content without requiring backend processing.",
    link: "https://pdf-analyzer-sand.vercel.app/",
    image: "/Others/project_1.png", // Correct way to define the image path
  },
];

const Projects = () => {
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState(null); // 'like' or 'dislike'

  // Load view count and user reactions from local storage
  useEffect(() => {
    const storedViews = localStorage.getItem("project_views");
    const storedLikes = localStorage.getItem("project_likes");
    const storedDislikes = localStorage.getItem("project_dislikes");
    const storedUserReaction = localStorage.getItem("user_reaction");

    if (storedViews) setViews(parseInt(storedViews) + 1);
    else setViews(1);

    if (storedLikes) setLikes(parseInt(storedLikes));
    if (storedDislikes) setDislikes(parseInt(storedDislikes));
    if (storedUserReaction) setUserReaction(storedUserReaction);

    localStorage.setItem("project_views", (parseInt(storedViews) || 0) + 1);
  }, []);

  // Handle Like
  const handleLike = () => {
    if (userReaction === "like") {
      setLikes(likes - 1);
      setUserReaction(null);
      localStorage.setItem("project_likes", likes - 1);
    } else {
      setLikes(likes + 1);
      if (userReaction === "dislike") {
        setDislikes(dislikes - 1);
        localStorage.setItem("project_dislikes", dislikes - 1);
      }
      setUserReaction("like");
      localStorage.setItem("project_likes", likes + 1);
    }
    localStorage.setItem("user_reaction", userReaction === "like" ? null : "like");
  };

  // Handle Dislike
  const handleDislike = () => {
    if (userReaction === "dislike") {
      setDislikes(dislikes - 1);
      setUserReaction(null);
      localStorage.setItem("project_dislikes", dislikes - 1);
    } else {
      setDislikes(dislikes + 1);
      if (userReaction === "like") {
        setLikes(likes - 1);
        localStorage.setItem("project_likes", likes - 1);
      }
      setUserReaction("dislike");
      localStorage.setItem("project_dislikes", dislikes + 1);
    }
    localStorage.setItem("user_reaction", userReaction === "dislike" ? null : "dislike");
  };

  return (
    <section className="py-16 px-6 bg-gray-100 text-black">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <Image 
              src={project.image} 
              alt={project.title} 
              width={300} 
              height={200} 
              className="rounded-lg object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline mt-2 inline-block">
              View Project
            </a>

            {/* View Count */}
            <p className="mt-4 text-gray-600 text-sm">👀 {views} Views</p>

            {/* Like & Dislike Buttons */}
            <div className="mt-4 flex space-x-4">
              <button
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                  userReaction === "like" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={handleLike}
              >
                👍 <span>{likes}</span>
              </button>
              <button
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                  userReaction === "dislike" ? "bg-red-500 text-white" : "bg-gray-200"
                }`}
                onClick={handleDislike}
              >
                👎 <span>{dislikes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
