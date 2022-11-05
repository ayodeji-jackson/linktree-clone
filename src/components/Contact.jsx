export function Contact() {
  return (
    <div>
      <h1 className="font-semibold text-4xl leading-[44px] text-gray-900 tracking-tight mb-4">
        Contact Me
      </h1>
      <p className="text-gray-600 text-lg mb-12">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form className="flex flex-col gap-6 mb-16">
        <div className="flex flex-col gap-6">
          <label>
            First name
            <input type="text" placeholder="Enter your first name" id="first_name" />
          </label>
          <label>
            Last name <input type="text" placeholder="Enter your last name" id="last_name" />
          </label>
        </div>
        <label>
          Email <input type="email" placeholder="yourname@email.com" id="email" />
        </label>
        <label>
          Message
          <textarea id="message"
            className="resize-none h-[132px]"
            placeholder="Send me a message and I'll reply you as soon as possible... "
          ></textarea>
        </label>
        <label className="text-gray-600 flex items-start gap-3">
          <input type="checkbox" className="w-[20px] h-[20px] rounded-md" />
          <span>
            You agree to providing your data to Jax who may contact you.
          </span>
        </label>
        <button className="bg-[#1570EF] hover:bg-[#175CD3] disabled:bg-[#B2DDFF] focus:border-[#1570EF] text-white py-3 px-[20px]" id="btn__submit">
          Send message
        </button>
      </form>
    </div>
  );
}
