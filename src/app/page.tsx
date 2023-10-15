import Image from "next/image";
import Link from "next/link";
import home from "../../public/image/home.svg";

export default function Home() {
  return (
    <>
      <div className=" mx-auto md:w-[1000px] w-full h-screen ">
        <div className="w-[100%] mt-8   md:flex animate__animated animate__fadeIn">
          <div>
            <h1 className="md:text-[3.2rem] text-[1.8rem]	font-semibold text-center md:text-left text-blue-dark ">
              Invierte en tu conocimiento y
            </h1>
            <h1 className=" text-[#8f76ff] md:text-[3.2rem] text-[1.8rem]	font-semibold text-primary text-center md:text-left">
              maestría en el Handstand
            </h1>
            <p className="text-gray text-sm md:w-[90%] mt-8 mb-8 text-center md:text-left">
              Domina el Handstand con el E-Learning: Forja tu camino hacia
              nuevas habilidades y tus objetivos
            </p>
            <div className="text-center md:mx-0 mx-auto rounded-xl h-[36px] w-[200px] color-light bg-[#A5A6F6] hover:bg-[#6C63FF]">
              <Link
                className="text-white text-center"
                href="/"
                style={{ lineHeight: "35px", height: "35px" }}
              >
                ¡Comienza!
              </Link>
            </div>
          </div>
          <div className="md:w-[600px] w-[260px] md:mt-0 md:mx-0 mx-auto mt-10">
            <Image src={home} alt="coursite" className="img-home" />
          </div>
        </div>
      </div>
    </>
  );
}
