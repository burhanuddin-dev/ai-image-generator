import { HiOutlineSparkles } from "react-icons/hi2";

function Header() {
  return (
    <>
      <nav>
        <div className="logo">
            <HiOutlineSparkles />
        </div>
        <p className="logo-text">
          Imagine<span className="ai-text">AI</span>
        </p>
      </nav>
    </>
  );
}

export default Header;
