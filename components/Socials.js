import Link from "next/link";
import {
  RiTelegramLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiGithubLine,
  RiSkypeLine,
} from "react-icons/ri";

import { FaLinkedin, FaGoogle } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/Mori-asq"}
        className="hover:text-yellow-300 transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://linkedin.com/in/mohammad-morteza-asgharzadeh/"}
        className="hover:text-blue-600 transition-all duration-300"
      >
        <FaLinkedin />
      </Link>
      <Link
        href={"mailto:asgharzadehmorteza@gmail.com"}
        className="hover:text-[#81fe68] transition-all duration-300"
      >
        <FaGoogle />
      </Link>
      <Link
        href={"https://join.skype.com/invite/MKQqEyREduHI"}
        className="hover:text-[#00aaff] transition-all duration-300"
      >
        <RiSkypeLine />
      </Link>
      <Link
        href={"https://www.instagram.com/mori_asq"}
        className="hover:text-pink-600 transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://t.me/Mori_asq"}
        className="hover:text-[#00aaff] transition-all duration-300"
      >
        <RiTelegramLine />
      </Link>

      <Link
        href={"https://wa.me/09120729527"}
        className="hover:text-green-500 transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
