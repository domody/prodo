const Navbar = () => {
  return (
    <>
      <div className="w-full xl:container px-8 xl:px-0 mx-auto flex flex-col items-start justify-start">
        <div className="flex h-20 w-full items-center justify-between">
          <div className="w-full">
            <h1>ProDo</h1>
          </div>

          <div className="w-full flex items-center justify-evenly space-x-6 text-sm font-medium">
            <a href="">AAAA</a>
            <a href="">BBBB</a>
            <a href="">CCCC</a>
            <a href="">DDDD</a>
            <a href="">EEEEE</a>
          </div>

          <div className="w-full flex justify-end items-center">
            {/* <a href="" className="text-sm">Login</a> */}
            {/* <a href="" className="py-2 px-6 bg-gradient-to-b from-transparent to-mauve-700 border border-mauve-600 rounded-lg ml-8 text-sm">Sign up</a> */}
            <a href="" className="py-1.5 px-4 bg-gradient-to-b from-transparent to-mauve-700 border border-mauve-600 rounded-lg ml-8 text-sm text-mauve-200">Join Waitlist</a>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-black/0 via-light/50 to-black/0"></div>
      </div>
    </>
  );
};

export default Navbar;
