import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="p-4 bg-white shadow-md">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/site-a">Site A</Link>
        </li>
        <li>
          <Link href="/site-a/templates">Templates</Link>
        </li>
        <li>
          <Link href="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}
