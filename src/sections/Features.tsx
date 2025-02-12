import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Avatar from "@/components/Avatar";
import FeatureCard from "@/components/FeatureCard";
import Key from "@/components/Key";
import Tag from "@/components/Tag";
import Image from "next/image";

const features = [
  "identidade visual",
  "Social Media",
  "Branding",
  "Video Production",
  "Website",
  "apps",
  "Automação com AI",
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Serviços</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          especialistas em{" "}
          <span className="text-diesel-500 font-curve">cultivar</span>
        </h2>
        {/* Features grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
          {/* Feature card 1 */}
          <FeatureCard
            title="Precisão no ambiente Digital"
            description="Consultoria Estratégica com resultados que convertem em negócios reais e comunidades engajadas com seu conteúdo"
            className="col-span-2 lg:col-span-1 group"
          >
            {/* Avatars */}
            <div className="aspect-video inline-flex items-center justify-center">
              <Avatar className="z-40">
                <Image
                  src={avatar1}
                  alt="Avatar 1"
                  className="size-full rounded-full inline-flex items-center justify-center"
                />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                <div className="size-full bg-stone-400 rounded-full inline-flex items-center justify-center gap-1 relative">
                  <Image
                    src={avatar4}
                    alt="Avatar 1"
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="size-1.5 rounded-full bg-white inline-flex"
                    />
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          {/* Feature card 2 */}
          <FeatureCard
            title="Design criativo para todas as plataformas"
            description="sua marca no centro das atenções com uma identidade visual exclusiva, instantaneamente reconhecível e consistentemente cativante em todas as plataformas digitais."
            className="col-span-2 lg:col-span-1 group"
          >
            <div className="aspact-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-stone-700/20 group-hover:text-stone-700/10 transition duration-500 text-center">
                We've achieved{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                  <span>incredible</span>
                  <video
                    src="/assets/gif-incredible.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  ></video>
                </span>{" "}
                grow this year
              </p>
            </div>
          </FeatureCard>
          {/* Feature card 3 */}
          <FeatureCard
            title="Sites cativantes e aplicativos intuitivos"
            description="Elaboramos com dedicação cada detalhe, desde a navegação intuitiva até as interfaces visualmente impressionantes"
            className="col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key className="w-28 outline-transparent group-hover:outline-diesel-500 outline outline-2 outline-offset-4 ransition-all duration-300 group-hover:translate-y-1">
                Shift
              </Key>
              <Key className="outline-transparent group-hover:outline-diesel-500 outline outline-2 outline-offset-4 transition-all duration-300 group-hover:translate-y-1 delay-100">
                alt
              </Key>
              <Key className="outline-transparent group-hover:outline-diesel-500 outline outline-2 outline-offset-4 ransition-all duration-300 group-hover:translate-y-1 delay-200">
                C
              </Key>
            </div>
          </FeatureCard>
        </div>
        {/* tags Features */}
        <div className="mt-8 gap-3 flex flex-wrap justify-center group">
          {features.map((feature) => (
            <div
              className="bg-stone-200 border border-diesel-500 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-300"
              key={feature}
            >
              <span className="bg-stone-200 text-diesel-500  size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-300">
                &#10038;
              </span>
              <span className="font-medium text-stone-500 md:text-lg">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
