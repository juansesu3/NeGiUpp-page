import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <img
          style={{ width: "50px" }}
          src="https://my-page-negiupp.s3.amazonaws.com/1687424109024.png"
          alt="logo-image"
        />
      </Link>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/proyects"}>Proyects</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      <Link href={"/contact"}> Let&apos;s talk</Link>
    </header>
  );
};

export default Header;
