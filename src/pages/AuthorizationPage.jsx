import Authorization from '../components/Authorization';

const AuthorizationPage = () => {
  return (
    <>
      {/* <div className="flex justify-center w-full items-center bg-slate-900 text-slate-50 font-normal pt-5 pl-5"><h1>Jamming</h1></div> */}
      <div className='flex h-screen w-full items-center justify-center bg-slate-950'>
        <div className='flex h-96 w-8/12 flex-col justify-center rounded-xl border bg-slate-800 py-24 text-center text-fuchsia-50'>
          <Authorization />
        </div>
      </div>
    </>
  );
};

export default AuthorizationPage;
