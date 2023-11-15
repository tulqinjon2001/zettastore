import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-slate-50 p-4 fixed top-0 w-full z-50 shadow text-gray-700">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href={"/"}
            className="p-8 w-10 h-10 bg-blue-600 text-white font-bold flex items-center justify-center rounded-full"
          >
            Logo
          </Link>
          <Link href={"/"} className="mx-5 font-bold">
            My Logotip
          </Link>
          <div className="bg-blue-600 w-0.5 h-10 mx-5"></div>
        </div>
        <div className="space-x-4 flex items-center">
          <nav className="space-x-5 ">
            <Link href={"/"} className="hover:text-blue-600 font-medium">
              Main
            </Link>
            <Link href={"/about"} className="hover:text-blue-600 font-medium">
              About use
            </Link>
            <Link
              href={"/prodeucts"}
              className="hover:text-blue-600 font-medium"
            >
              Products
            </Link>
          </nav>
          <button className="button border text-white bg-blue-600 hover:text-black hover:bg-transparent">
            Login
          </button>
          <button className="button bg-transparent hover:bg-blue-600 hover:text-white shadow">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
