export default function Landing() {
  return (
    <div className='flex flex-col justify-center items-center mt-40'>
      <h1 className='font-bold text-5xl m-3'>
        Turn User Feedback into Your Biggest Advantage
      </h1>
      <h2 className='text-gray-600 my-6 max-w-2xl text-xl'>
        Maily helps you collect, organize, and understand feedback from your
        users all in one simple, powerful platform.
      </h2>
      <a href='/auth/google'>
        <button className='border-white text-white font-bold bg-orange-300 p-4 cursor-pointer rounded-2xl hover:translate-1.5 transition-all'>
          Get Started!
        </button>
      </a>
    </div>
  );
}
