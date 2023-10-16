import Image from "next/image";
import group from "../../../public/image/group.jpg";
import handstandgroup from "../../../public/image/handstandgroup.jpeg";
import oneHand from "../../../public/image/oneHand.jpg";

export default async function About({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  return (
    <div className="max-w-[1000px] min-h-screen mt-10 mb-20 mx-3 md:mx-auto">
      <h2 className="md:text-[3.2rem] text-[1.8rem]	font-semibold text-center text-blue-dark ">
        Acerca de mí
      </h2>
      <section className="md:flex  mt-10 mb-24 md:mt-16 ">
        <div className="md:w-[50%] ">
          <h3 className="mb-4 text-center md:text-left md:text-[1.5rem] text-[1.3rem]	font-semibold">
            Recorrido:
          </h3>
          <p className="mb-4 text-center md:text-left md:w-[450px]">
            Soy Leonardo, un apasionado de la parada de manos. Comencé esta
            fascinante travesía en 2011 y a lo largo de mas de una década, he
            explorado un mundo de disciplinas circenses y artísticas que han
            enriquecido mi práctica y enseñanza.
          </p>
        </div>
        <div className="md:w-[500px] w-[260px] md:mt-0 md:mx-0 mx-auto mt-10">
          <Image src={oneHand} alt="sobre-mi" className="img-home" />
        </div>{" "}
      </section>
      <section className="md:flex  mt-10 mb-24 md:mt-16 ">
        <div className="md:w-[50%] md:order-2 md:ml-5">
          <h3 className="mb-4 text-center md:text-left md:text-[1.5rem] text-[1.3rem]	font-semibold">
            Misión:
          </h3>
          <p className="mb-4 text-center md:text-left md:w-[450px] ">
            Mi misión es compartir mi pasión y conocimiento con otros,
            ayudándoles a alcanzar sus objetivos en la parada de manos. Me
            dedico a crear un ambiente de aprendizaje inclusivo y accesible para
            personas de todos los niveles de habilidad, desde principiantes
            hasta atletas experimentados.
          </p>
        </div>
        <div className="md:w-[500px] md:order-1 w-[260px] md:mt-0 md:mx-0 mx-auto mt-10">
          <Image src={group} alt="sobre-mi" className="img-home" />
        </div>{" "}
      </section>
      <section className="md:flex  mt-10 mb-24 md:mt-16 ">
        <div className="md:w-[50%] ">
          <h3 className="mb-4 text-center md:text-left md:text-[1.5rem] text-[1.3rem]	font-semibold">
            Visión:
          </h3>
          <p className="mb-4 text-center md:text-left md:w-[450px]">
            Mi visión es construir una comunidad de practicantes apasionados y
            dedicados a la parada de manos. Quiero que este sea un espacio donde
            la gente pueda desafiar sus límites, fortalecer sus cuerpos y
            descubrir su propio potencial a través de esta disciplina única.
            Espero que, con el tiempo, mi método de enseñanza ayude a inspirar y
            empoderar a personas de todo el mundo a descubrir la alegría y los
            beneficios de la parada de manos en sus vidas.
          </p>
        </div>
        <div className="md:w-[500px] w-[260px] md:mt-0 md:mx-0 mx-auto mt-10">
          <Image src={handstandgroup} alt="sobre-mi" className="img-home" />
        </div>{" "}
      </section>
    </div>
  );
}
