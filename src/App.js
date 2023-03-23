import './App.css';
import Logo from './images.png'

function App() {
  return (
    <div classNameName="App">
     <header aria-label="Site Header" className="bg-gray-200 m-3 rounded-lg">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <img
            className="h-[100px]"
       
            fill="none"
            src={Logo}
          >
           
          </img>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-6 text-l">
            <li>
              <a
                className="text-gray-500 transition hover:text-teal-700 hover:font-semibold"
                href="/"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition  hover:text-teal-700 hover:font-semibold"
                href="/"
              >
                Careers
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-teal-700 hover:font-semibold"
                href="/"
              >
                History
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-teal-700 hover:font-semibold"
                href="/"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-teal-700 hover:font-semibold"
                href="/"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-teal-700 hover:font-semibold"
                href="/"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-white  hover:text-teal-600"
            href="/"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600  hover:text-white  hover:bg-teal-600"
              href="/"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:bg-teal-600 "
          >
            <svg
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

    </div>
  );
}

export default App;
