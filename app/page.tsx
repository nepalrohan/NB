import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div >
    <h2>Main Page or First Page</h2>
    <div style={{display:'flex',gap:10}}>
    <Link href='/contact'>Contact</Link>
    <Link href='/blogs'>Blogs</Link>
    <Link href='/about'>About</Link>
    </div>
    </div>
  );
}
