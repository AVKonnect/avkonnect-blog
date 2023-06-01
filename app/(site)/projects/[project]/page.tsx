import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-yellow-400 via-gray-900 to-blue-400 bg-clip-text text-transparent text-7xl drop-shadow font-extrabold">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-gray-600 hover:text-yellow-500 transition"
        >
          View Project
        </a>
      </header>
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      </div>
    </div>
  );
}

// LEARN:px-paddingfrom x-axis and py-padding from y-axis
