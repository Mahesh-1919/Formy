import { Button } from "@/components/ui/button";
export default function Navbar() {
  return (
    <nav className="  mx-auto md:px-16 px-8 py-6 flex justify-between">
      <div className="font-bold text-2xl flex gap-2 items-center justify-center">
        <img src="/logo.png" alt="logo" className="h-8 w-8" />
        <h1>Formy</h1>
      </div>
      {/* <div className="md:block hidden">
        <ul className="flex gap-8 navbar ">
          <li>Home</li>
          <li> Services</li>

          <li>About</li>
        </ul>
      </div> */}
      <div className="font-bold text-2xl italic hidden md:block">
        Coming soon <span className="text-accent">!</span>
      </div>
      <div className="flex gap-4 ">
        <Button className="bg-white text-accent" variant={"outline"}>
          Signin
        </Button>
        <Button className="bg-accent">Signup</Button>
      </div>
    </nav>
  );
}
