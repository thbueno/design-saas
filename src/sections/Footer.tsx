import LogoImage from "@/assets/images/esthalo_logo.svg";
import InstagramLogo from "@/components/InstagramLogo";
import LinkedInLogo from "@/components/LinkedInLogo";
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
            <div className="flex gap-2">
              <LinkedInLogo className="h-8" />
              <InstagramLogo className="h-8" />
            </div>
            {/* <nav className=" flex gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-stone-500 hover:text-diesel-500 transition duration-500 ease-in-out text-md"
                >
                  {link.label}
                </a>
              ))}
            </nav> */}
          </div>
        </div>
      </div>
    </section>
  );
}
