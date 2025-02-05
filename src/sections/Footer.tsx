import LogoImage from "@/assets/images/esthalo_logo.svg";
import Image from "next/image";

const footerLinks = [
  { href: "#", label: "Contato" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between items-center justify-center gap-6">
          <div className="">
            <Image src={LogoImage} alt="Layers Logo" />
          </div>
          <div className="">
            <nav className=" flex gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-stone-500 hover:text-diesel-500 transition duration-500 ease-in-out text-md"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
