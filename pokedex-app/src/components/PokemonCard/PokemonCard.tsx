import Image from "next/image";

export default function PokemonCard() {
  return (
    <section className=" shadow-xl rounded-2xl p-6 bg-primary-900 w-[302px] grid gap-6 hover:scale-105 transition ease-linear duration-200">
      <article className=" flex  rounded-2xl p-4 bg-primary-500 justify-around ">
        <h3 className=" font-extrabold text-lg "> #01</h3>
        <h3 className=" w-fit"> pokemon </h3>
        <figure className=" rounded-full border-2 p-3"></figure>
      </article>

      <article className=" h-40 w-auto relative object-contain">
        <Image
          src={"https://i.ibb.co/jJN7wpG/pokemon.jpg"}
          alt={"pokemon"}
          className="filter  mix-blend-multiply brightness-125 "
          fill
        />
      </article>
      <article className=" w-full rounded-2xl bg-primary-500 grid p-2 gap-3 text-center">
        <fieldset className=" w-full flex  justify-between">
          <div className=" grid ">
            <h4 className=" text-sm"> Altura</h4>
            <p className=" text-xl">0.4 m</p>
          </div>
          <div className=" grid ">
            <h4 className=" text-sm"> Type</h4>
            <p className=" text-xl">trueno</p>
          </div>
          <div className=" grid ">
            <h4 className=" text-sm"> Peso</h4>
            <p className=" text-xl">6.0 kg</p>
          </div>
        </fieldset>
        <fieldset className="flex gap-4 justify-around  text-center ">
          <div className=" grid ">
            <h4 className=" text-sm"> Visto</h4>
            <p className=" text-xl">31</p>
          </div>
          <div className=" grid ">
            <h4 className=" text-sm"> Atrapado</h4>
            <p className=" text-xl">28</p>
          </div>
        </fieldset>
      </article>
    </section>
  );
}
