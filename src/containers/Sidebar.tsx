import { AiFillMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Sidebar() {
  return (
    <div className="flex flex-col items-center text-[#b1b1b1] border-r-solid border-r-2 border-r-[#353535] px-4">
      <img className="h-[17.6rem] w-[17.6rem] rounded-full bg-over" src="src/assets/Me.jpeg"></img>
      <p className="font-semibold text-[2.1rem] mt-2">Arthur Zatta</p>
      <div className="flex gap-2">
        <a href="https://github.com/arthurzatta" target="_blank">
          <FaGithub className="text-[1.6rem]" />
        </a>
        <a href="https://www.linkedin.com/in/arthurzatta/" target="_blank">
          <FaLinkedin className="text-[1.6rem]" />
        </a>
        <a href="mailto:arthur.zatta@gmail.com" target="_blank">
          <AiFillMail className="text-[1.6rem]" />
        </a>
      </div>
      <div className="font-light text-[1.6rem] my-6">
        <p>Software Developer</p>
      </div>
    </div>
  );
}
