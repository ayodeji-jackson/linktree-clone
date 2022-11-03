import zuri from "../assets/Zuri.Internship_Logo.svg";
import i4g from "../assets/I4G.svg";

export function Footer() {
  return (
    <footer className="py-8">
      <hr />

      <div className="mt-9 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <img src={zuri} className="w-fit" alt="zuri internship logo" />
        <p className="text-gray-500 text-sm">HNG Internship 9 Frontend Task</p>
        <img src={i4g} className="w-fit" alt="i4g logo" />
      </div>
    </footer>
  );
}
