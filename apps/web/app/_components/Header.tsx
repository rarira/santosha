function Header() {
  return (
    <header className="flex w-[var(--max-width)] h-[50px] flex-row justify-between fixed">
      <div className="w-[150px]">
        <h1 className="text-4xl font-bold self-center">Santosha</h1>
      </div>
      <nav className="w-full">
        <ul className="flex w-full flex-row justify-around items-center">
          <li>소개</li>
          <li>요가 종류</li>
          <li>과정</li>
          <li>연락</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
