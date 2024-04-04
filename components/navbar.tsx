import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="mx-auto p-4 max-w-[60rem]">
      <ul className="flex items-center justify-end gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
