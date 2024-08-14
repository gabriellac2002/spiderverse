import Image from "next/image";

const Header = () => {
  return (
    <header>
        <Image src="/icons/menu.svg" alt="Menu" width={36} height={25}/>
        <Image src="/spider-logo.svg" alt="Logo" width={260} height={70}/>
        <Image src="/icons/user.svg" alt="Login" width={36} height={36}/>
    </header>
  );
};

export default Header;