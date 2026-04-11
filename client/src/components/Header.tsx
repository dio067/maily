import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { useFetchUserQuery } from "../store";

export default function Header() {
  const { isFetching } = useFetchUserQuery(undefined);
  const isLoggedIn = useSelector((state: RootState) => {
    return state.authSlice.user;
  });
  let content;
  if (isFetching) {
    content = (
      <nav className='flex sticky top-0 z-index mb-7 justify-between border-b border-white shadow-xl bg-orange-300 h-full'>
        <h1 className='py-4 px-6 m-2 italic text-white  font-bold text-3xl'>
          Maily
        </h1>
        <button className=' m-4 w-45 h-12 italic border-3  border-white cursor-pointer hover:w-2xs  hover:-translate-y-0.5 hover:shadow-2xl  transition-all bg-orange-300 text-white rounded-2xl font-bold'>
          <h1 className=''>Loading</h1>
        </button>
      </nav>
    );
  } else if (!isLoggedIn) {
    content = (
      <nav className='flex sticky top-0 z-index mb-7 justify-between border-b border-white shadow-xl bg-orange-300 h-full'>
        <h1 className='py-4 px-6 m-2 italic text-white  font-bold text-3xl'>
          Maily
        </h1>
        <button className=' m-4 w-45 h-12 italic border-3  border-white cursor-pointer hover:w-2xs  hover:-translate-y-0.5 hover:shadow-2xl  transition-all bg-orange-300 text-white rounded-2xl font-bold'>
          <h1 className=''>Login With Google</h1>
        </button>
      </nav>
    );
  } else {
    content = (
      <nav className='flex sticky top-0 z-index mb-7 justify-between border-b border-white shadow-xl bg-orange-300 h-full'>
        <h1 className='py-4 px-6 m-2 italic text-white  font-bold text-3xl'>
          Maily
        </h1>
        <button className=' m-4 w-45 h-12 italic border-3  border-white cursor-pointer hover:w-2xs  hover:-translate-y-0.5 hover:shadow-2xl  transition-all bg-orange-300 text-white rounded-2xl font-bold'>
          <h1 className=''>Login Out</h1>
        </button>
      </nav>
    );
  }
  return <div>{content}</div>;
}
