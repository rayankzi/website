import Link from "next/link";

export function ContactMe() {
  return (
    <div id="connect" className="flex flex-col gap-4">
      <div className="pb-1">
        <span className="text-lg font-medium">Connect with me!</span>
        <p className="leading-loose">
          Reach out to me at{" "}
          <Link
            href="mailto:rkazi1@asu.edu"
            className="transition duration-200 hover:opacity-90 text-high-contrast-text"
          >
            rkazi1@asu.edu
          </Link>{" "}
          or shoot me a DM on{" "}
          <Link
            href="https://www.linkedin.com/in/rayan-kazi-77a80b2ba/"
            target="_blank"
            className="transition duration-200 hover:opacity-90 text-high-contrast-text"
          >
            LinkedIn
          </Link>
          . I&apos;ll be sure to respond timely!
        </p>
      </div>
    </div>
  );
}
