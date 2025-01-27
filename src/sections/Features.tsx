import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import Avatar from "@/components/Avatar";
import FeatureCard from "@/components/FeatureCard";
import Key from "@/components/Key";
import Tag from "@/components/Tag";
import Image from "next/image";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        {/* Features grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
          {/* Feature card 1 */}
          <FeatureCard
            title="Real-time collaboration"
            description="work together in real-time, with real-time collaboration."
            className="col-span-2 lg:col-span-1"
          >
            {/* Avatars */}
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image src={avatar1} alt="Avatar 1" className=" rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image src={avatar2} alt="Avatar 2" className=" rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image src={avatar3} alt="Avatar 3" className=" rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
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
            title="Interactive Prototyping"
            description="Engage your audience with interactive prototyping"
            className="col-span-2 lg:col-span-1"
          >
            <div className="aspact-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 text-center">
                We've achieved{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  incredible
                </span>{" "}
                grow this year
              </p>
            </div>
          </FeatureCard>
          {/* Feature card 3 */}
          <FeatureCard
            title="keyboard quicks Actions"
            description="Powerfull commands to help you create design faster"
            className="col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key className="w-28">Shift</Key>
              <Key>alt</Key>
              <Key>C</Key>
            </div>
          </FeatureCard>
        </div>
        {/* tags Features */}
        <div className="mt-8 gap-3 flex flex-wrap justify-center">
          {features.map((feature) => (
            <div
              className="bg-neutral-800 border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center"
              key={feature}
            >
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
