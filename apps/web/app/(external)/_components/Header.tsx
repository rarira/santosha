import Link from 'next/link';

function Header(): React.JSX.Element {
  return (
    <header className="flex w-full md:max-w-[var(--max-width)] h-[4rem] justify-between mx-1 md:mx-auto">
      <div className="flex w-min items-center justify-center pl-2 md:pl-0">
        <h1 className="text-3xl md:text-4xl font-bold self-center">Santosha</h1>
      </div>
      <nav className="hidden md:flex w-full items-center">
        <ul className="flex w-full flex-row justify-around items-center">
          <li>
            <Link href="#intro-section">소개</Link>
          </li>
          <li>
            <Link href="#class-section">요가 종류</Link>
          </li>
          <li>
            <Link href="#flow-section">과정</Link>
          </li>
          <li>
            <Link href="#contact-section">연락</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
