import Link from "next/link";
import { GithubIcon, TwitterIcon } from "./icons";

export default function SocialIcons() {
  return (
    <div className="space-x-3 transition text-gray-500">
      <Link
        href="https://twitter.com/atharva__shukla/"
        className="hover:text-gray-700"
      >
        <TwitterIcon />
      </Link>
      <Link
        href="https://github.com/atharvashukla/"
        className="hover:text-gray-700"
      >
        <GithubIcon />
      </Link>
    </div>
  );
}
