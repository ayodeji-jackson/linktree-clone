import img from './assets/profile__img.svg';
import dots from './assets/dots-horizontal.svg';
import slack from './assets/slack.svg';
import github from './assets/github.svg';
import zuri from './assets/Zuri.Internship_Logo.svg';
import i4g from './assets/I4G.svg';

interface Link {
  text: string;
  to: string;
}

const App = () => {
  const links: Link[] = [
    {text: 'Twitter Link', to: ''}, 
    {text: 'Zuri Team', to: ''}, 
    {text: 'Zuri Books', to: ''}, 
    {text: 'Python Books', to: ''}, 
    {text: 'Background Check for Coders', to: ''}, 
    {text: 'Design Books', to: ''}, 
  ]

  return (
    <div className='w-full py-16 px-4 flex flex-col my-0 mx-auto max-w-6xl'>
      <button className='translate-y-2 grid place-items-center ml-auto w-10 h-10 rounded-full border-dashed border-2 border-gray-300 transition-colors hover:bg-gray-50 focus:ring-gray-100 focus:ring-4 disabled:bg-gray-50' type="button">
        <img src={dots} />
      </button>
      <main className='grid justify-items-center'>
        <img src={img} className="mb-6" />
        <h1 className='font-bold text-lg text-grey-900 mb-8'>Ayodeji Oyeleye</h1>
        <div className='flex flex-col gap-6 w-full mb-6'>
          {
            links.map(link => (
              <a href={link.to} key={link.text} className="bg-gray-200 text-center rounded-lg py-6 px-8 font-medium text-sm transition-colors hover:bg-gray-300 focus:border-gray-400 focus:border focus:shadow-sm focus:shadow-[#1018280D] disabled:bg-gray-25 disabled:border-gray-100">{link.text}</a>
            ))
          }
        </div>
        <div className='flex pt-6 pb-8 gap-6'>
          <img src={slack} />
          <img src={github} />
        </div>
      </main>
      <footer className='py-8 flex flex-col gap-4'>
        <hr />
        <img src={zuri} className="mt-5 w-fit" />
        <p className='text-gray-500 text-sm'>HNG Internship 9 Frontend Task</p>
        <img src={i4g} className="w-fit" />
      </footer>
    </div>
  );
}

export default App
