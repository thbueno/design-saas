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
          <a href="#hero">
            <Image src={LogoImage} alt="Layers Logo" />
            </a>
          </div>
          <div className="">
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogo className="h-8 hover:scale-110 transition-transform duration-500 ease-in-out" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo className="h-8 hover:scale-110 transition-transform duration-500 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
