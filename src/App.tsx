import img from "./assets/profile__img.svg";
import dots from "./assets/dots-horizontal.svg";
import slack from "./assets/slack.svg";
import github from "./assets/github.svg";
import zuri from "./assets/Zuri.Internship_Logo.svg";
import i4g from "./assets/I4G.svg";
import camera from "./assets/camera.svg";
import share from "./assets/share.svg";

interface Link {
  id: string;
  text: string;
  to: string;
}

const App = () => {
  const links: Link[] = [
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
    <div className="w-full py-16 px-4 flex flex-col my-0 mx-auto max-w-6xl">
      <button
        className="translate-y-2 grid place-items-center ml-auto xl:mr-60 w-10 h-10 rounded-full border-dashed border-2 border-gray-300 transition-colors hover:bg-gray-50 focus:ring-gray-100 focus:ring-4 disabled:bg-gray-50"
        type="button"
      >
        <img src={dots} className="md:hidden" />
        <img src={share} className="hidden md:block" />
      </button>
      <main className="grid justify-items-center">
        <div className="mb-6 relative cursor-pointer">
          <span className="opacity-0 hover:opacity-100 transition-opacity absolute bg-[rgba(52,64,84,0.75)] rounded-full inset-0">
            <img src={camera} className="absolute inset-x-9 inset-y-[70%]" />
          </span>
          <img src={img} id="profile__img" />
        </div>
        <h1 className="font-bold text-lg text-grey-900 mb-8" id="twitter">
          jax_emmanuel
        </h1>
        <span id="slack" hidden>
          jax
        </span>
        <div className="flex flex-col gap-6 w-full mb-6">
          {links.map((link) => (
            <a
              href={link.to}
              key={link.id}
              id={link.id}
              className="bg-gray-200 text-center rounded-lg py-6 px-8 font-medium text-sm transition-colors hover:bg-gray-300 focus:border-gray-400 focus:border focus:shadow-sm focus:shadow-[#1018280D] disabled:bg-gray-25 disabled:border-gray-100"
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="flex pt-6 pb-8 gap-6">
          <img src={slack} />
          <a></a>
          <img src={github} />
        </div>
      </main>
      <footer className="py-8">
        <hr />

        <div className="mt-9 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <img src={zuri} className="w-fit" />
          <p className="text-gray-500 text-sm">
            HNG Internship 9 Frontend Task
          </p>
          <img src={i4g} className="w-fit" />
        </div>
      </footer>
    </div>
  );
};

export default App;
