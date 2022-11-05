import img from "../assets/me.jpg";
import dots from "../assets/dots-horizontal.svg";
import slack from "../assets/slack.svg";
import github from "../assets/github.svg";
import camera from "../assets/camera.svg";
import share from "../assets/share.svg";
import { Link } from "react-router-dom";

export function Home() {
  const links = [
    {
      text: "Twitter Link",
      to: "https://twitter.com/jax_emmanuel/",
      id: "my__twitter",
    },
    { text: "Zuri Team", to: "https://training.zuri.team/", id: "btn__zuri" },
    { text: "Zuri Books", to: "http://books.zuri.team/", id: "books" },
    {
      text: "Python Books",
      to: "https://books.zuri.team/python-for-beginners?ref_id=jax",
      id: "book__python",
    },
    {
      text: "Background Check for Coders",
      to: "https://background.zuri.team/",
      id: "pitch",
    },
    {
      text: "Design Books",
      to: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ];

  return (
    <>
      <button
        className="translate-y-2 grid place-items-center ml-auto xl:mr-60 w-10 h-10 rounded-full border-dashed border-2 border-gray-300 transition-colors hover:bg-gray-50 focus:ring-gray-100 focus:ring-4 disabled:bg-gray-50"
        type="button"
      >
        <img src={dots} className="md:hidden" alt="options icon" />
        <img src={share} className="hidden md:block" alt="share icon" />
      </button>
      <main className="grid justify-items-center">
        <div className="mb-6 relative cursor-pointer">
          <span className="opacity-0 hover:opacity-100 transition-opacity absolute bg-[rgba(52,64,84,0.75)] rounded-full inset-0">
            <img src={camera} className="absolute inset-x-9 inset-y-[70%]" />
          </span>
          <img src={img} id="profile__img" alt="jax's profile picture" className="h-[5.5rem] w-[5.5rem] rounded-full" />
        </div>
        <h1 className="font-bold text-lg text-grey-900 mb-8" id="twitter">
          jax_emmanuel
        </h1>
        <span id="slack" hidden>
          jax
        </span>
        <div className="flex flex-col gap-6 w-full mb-6">
          {links.map(({ id, to, text }) => (
            <a
              href={to}
              id={id}
              key={id}
              className="link"
            >
              {text}
            </a>
          ))}
          <Link to="/contact" id="contact" className="link">Contact</Link>
        </div>
        <div className="flex pt-6 pb-8 gap-6">
          <img src={slack} alt="slack logo" />
          <a></a>
          <img src={github} alt="github logo" />
        </div>
      </main>
    </>
  );
}