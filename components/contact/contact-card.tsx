import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export const ContactCards = () => {
  return (
    <div className="flex flex-col gap-4 justify-between md:flex-row">
      <div className="flex flex-col gap-2">
        <FaLinkedin size={40} />
        <span className="text-gray-500">Linkedin</span>
        <Link href="https://www.linkedin.com/in/maliheh-norouzi-6576a756/">
          linkedin.com/in/maliheh-norouzi
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <FaGithub size={40} />
        <span className="text-gray-500">Github</span>
        <Link href="https://www.linkedin.com/in/maliheh-norouzi-6576a756/">
          github.com/maliheNoroozi
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <MdAlternateEmail size={40} />
        <span className="text-gray-500">Email</span>
        <Link href="mailto:malih.noroozi64@gmail.com" className="">
          malih.noroozi64@gmail.com
        </Link>
      </div>
    </div>
  );
};
