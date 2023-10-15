import Link from "next/link";

export const Footer = () => {
  return (
    <div className="footer">
      <Link href={"/"} className="text-4xl	font-semibold md:my-0 my-4">
        <span className="text-[#9E8AFC]">Cour</span>
        <span className="text-white">site</span>
      </Link>
      <p className="text-gray-300 md:mb-0 mb-8">Todos los derechos reservados</p>
      {/* <Link href={"/teacher/register"} className="text-gray-300">
        ¿Quieres enseñar?
      </Link> */}
    </div>
  );
};
