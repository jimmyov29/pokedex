import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
      <header className=" w-full p-4 bg-secondary-blue-500  flex justify-center  ">
        <section className=" w-full max-w-[1750px] flex flex-wrap justify-center  gap-4 md:justify-between ">
          <Link href={"/"}>
            <Image
              src={"/assets/img/logo-pokemon.png"}
              alt={"logo"}
              width={60}
              height={60}
              className=" rounded-full "
            />
          </Link>
          <article className=" rounded-full w-96 bg-neutral-0 border-neutral-400 overflow-hidden ">
            <input
              type="text"
              name=""
              className=" w-full h-full outline-none p-5"
              placeholder="Buscar un Pokemon"
            />
          </article>
        </section>
      </header>
    );
}

export default Header;