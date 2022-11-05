import { useState } from "react";

export function Contact() {
  const [ hasConsent, setHasConsent ] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formControls = e.target.querySelectorAll('input:not([type="checkbox"]), textarea');
    // if (formControls.every(input => input.validity.valid)) {
    //   alert('Message sent');
    //   return;
    // }
    for (let input of formControls) {
      input.addEventListener('focus', e => {
        e.target.nextElementSibling.classList.add('hidden');
      });
      if (!input.validity.valid) input.nextElementSibling.classList.remove('hidden');
      else input.nextElementSibling.classList.add('hidden');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[720px]">
        <h1 className="font-semibold text-4xl leading-[44px] text-gray-900 tracking-tight mb-4">
          Contact Me
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form className="flex flex-col gap-6 mb-16" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-6 sm:flex-row w-full">
            <label className="flex-1">
              First name
              <input
                type="text"
                required
                placeholder="Enter your first name"
                id="first_name"
              />
              <div className="text-[#F83F23] mt-[6px] hidden">Please enter a first name</div>
            </label>
            <label className="flex-1">
              Last name
              <input
                required
                type="text"
                placeholder="Enter your last name"
                id="last_name"
              />
              <div className="text-[#F83F23] mt-[6px] hidden">Please enter a last name</div>
            </label>
          </div>
          <label>
            Email
            <input
              type="email"
              required
              placeholder="yourname@email.com"
              id="email"
            />
            <div className="text-[#F83F23] mt-[6px] hidden">Invalid email</div>
          </label>
          <label>
            Message
            <textarea
              id="message"
              required
              className="resize-none h-[132px]"
              placeholder="Send me a message and I'll reply you as soon as possible... "
            ></textarea>
            <div className="text-[#F83F23] mt-[6px] hidden">Please enter a message</div>
          </label>
          <label className="text-gray-600 flex items-start gap-3">
            <input
              type="checkbox"
              required
              checked={hasConsent} 
              onChange={() => setHasConsent(!hasConsent)}
            />
            <span>
              You agree to providing your data to Ayodeji Oyeleye who may
              contact you.
            </span>
          </label>
          <button
            className="bg-[#1570EF] font-semibold hover:bg-[#175CD3] disabled:bg-[#B2DDFF] focus:border-[#1570EF] text-white py-3 px-[20px]"
            id="btn__submit" disabled={!hasConsent}
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
