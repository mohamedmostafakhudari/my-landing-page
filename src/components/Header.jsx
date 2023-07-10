import Navbar from "./Navbar";
export default function Header() {
  return (
    <header id="header" className="bg-neutral-800">
      <div className="container">
        <Navbar />
        <div className="flex | py-24 items-center gap-8 flex-wrap">
          <div className="flex-1 space-y-2 text-center | sm:text-left">
            <h1 className="font-extrabold text-neutral-100">
              This website is awesome
            </h1>
            <p className="max-w-[34ch] mx-auto | sm:mx-0 sm:max-w-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              fuga quos, numquam esse tempora ea?
            </p>
            <button className="button">Sign up</button>
          </div>
          <div className="grid | flex-1 bg-neutral-500 place-items-center h-48">
            <p className="text-neutral-100 min-w-[200px] text-center sm:min-w-[300px]">
              this is a placeholder for an image
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
