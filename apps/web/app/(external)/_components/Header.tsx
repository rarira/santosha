import Link from 'next/link';

function Header(): JSX.Element {
  return (
    <header className="flex w-full max-w-[var(--max-width)] h-[50px] justify-between mx-auto">
      <div className="flex w-[200px] items-center justify-center">
        <h1 className="text-4xl font-bold self-center">Santosha</h1>
      </div>
      <nav className="flex w-full items-center">
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
