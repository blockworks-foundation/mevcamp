import Image from 'next/image'


export default function NavBar() {
    return (
        <nav className="flex flex-col items-center justify-between p-10 bg-white">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div className="fixed bottom-0 left-0 flex h-[50px] w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
                <a
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/imgs/logo-mevcamp.svg"
                    alt="Mevcamp Logo"
                    className="relative"
                    width={100}
                    height={24}
                    priority
                  />
                </a>
              </div>
            <div className="">
            <ul className="flex flex-col items-center text-center lg:flex-row lg:space-x-6">
                <li className="p-2 hover:bg-gray-200 rounded-md">
                  <button className="text-gray-500 hover:text-gray-900">What</button>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded-md">
                  <button className="text-gray-500 hover:text-gray-900">Where</button>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded-md">
                  <button className="text-gray-500 hover:text-gray-900">Contribute</button>
                </li>
                <li className="p-0">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Join us</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }