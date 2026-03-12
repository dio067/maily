export default function Header() {
  return (
    <nav className='flex sticky top-0 z-index mb-7 justify-between border-b border-white shadow-xl bg-gray-300 h-full'>
      <h1 className='py-4 px-6 m-2 font-bold text-2xl'>Maily</h1>
      <button className=' m-4 w-21 h-12 border cursor-pointer  hover:-translate-y-0.5 hover:shadow-2xl  transition-all bg-black text-white rounded-2xl font-bold'>
        Login
      </button>
    </nav>
  );
}
