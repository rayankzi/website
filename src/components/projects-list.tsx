import { Link } from "next-view-transitions";

export function ProjectsList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="pb-1">
        <span className="text-lg font-medium">Personal Projects</span>
        <p>My best work</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="transition duration-200 flex flex-col">
          {/* List Item */}
          <ProjectItem />
        </div>

        <Link
          href="/projects"
          className="group flex items-center gap-1 text-low-contrast-text transition-all duration-300 ease-in-out hover:text-high-contrast-text"
        >
          View all
          <span className="transition-transform group-hover:translate-x-1 ml-1">
            {`→`}
          </span>{" "}
        </Link>
      </div>
    </div>
  );
}

export function ProjectItem() {
  return (
    <Link
      href="/blog/main"
      className="flex py-6 gap-4 items-center no-underline hover:bg-[#191919] transition-all duration-200 rounded-md hover:border-[#222222] hover:px-3 hover:-mx-3"
    >
      <div className="flex w-full flex-col items-start justify-between gap-1 md:flex-row md:items-center">
        <span>Blog Post Name</span>
        <span className="font-regular text-sm text-low-contrast-text">
          Blog Post Date
        </span>
      </div>
    </Link>
  );
}
