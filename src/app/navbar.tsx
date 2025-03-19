import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-white/10 backdrop-blur-md text-white md:px-8 py-4 rounded-3xl">  {/* //  bg-gray-800 */}
      
      <div className="w-full flex justify-between items-center md:px-8 py-2">

        <section className="flex space-x-7">
          <Link href="/link1" className="hover:underline">
            Home
          </Link>
          <Link href="/link2" className="hover:underline">
            Timeline
          </Link>
          <Link href="/link3" className="hover:underline">
            Projects
          </Link>

          <Link href="/link4" className="hover:underline">
            Contact
          </Link>

          <Link href="/" className="font-semibold hover:underline">
            language
          </Link>

          <Link href="/" className="font-semibold hover:underline">
            theme
          </Link>

          <Link href="/" className="font-semibold hover:underline">
            Resume
          </Link>


        </section>

        

        
      </div>
    </nav>
  );
}
