import Link from "next/link";

const buttonStyles =
  "rounded-md border border-fuchsia-600 bg-gradient-radial from-purple-400   to-pink-400 bg-clip-text px-4  py-2 text-transparent hover:bg-gradient-radial hover:from-fuchsia-900/50 hover:to-fuchsia-900/50 hover:bg-clip-border hover:text-fuchsia-500 ";

export default function Home() {
  return (
    <>
      <Link href={"/single"}>
        <button className={buttonStyles}>Single Player VS CPU</button>
      </Link>

      {/*<Link href={"/multi"}>
        <button className={buttonStyles} disabled>
          Multi Player
        </button>
      </Link> */}

      <Link href={"/multi-practice"}>
        <button className={buttonStyles}>Multi Player Practice</button>
      </Link>
    </>
  );
}
