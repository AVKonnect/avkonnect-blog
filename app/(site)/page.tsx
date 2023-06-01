import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-5xl font-extrabold">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-yellow-400 via-gray-900 to-blue-400 bg-clip-text text-transparent">
          Avkonnect Blogs
        </span>
      </h1>
      <p className="mt-3 text-2xl text-gray-600">
        hi everyone add description here!!
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        Intereasting Reads
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-yellow-500 transition"
            href={`/projects/${project.slug}`}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border-gray-500"
              />
            )}

            <div className="mt-2 font-extrabold text-1xl">{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
