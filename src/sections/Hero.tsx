import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        {/* Design examples */}
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={designExample1Image} alt="Design Example 1" />
        </div>
        <div className="absolute -right-64 -top-16 hidden lg:block">
          <Image src={designExample2Image} alt="Design Example 2" />
        </div>
        {/* Pointers */}
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Andrea" />
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="Bryan" color="red" />
        </div>

        {/* Toggle null */}
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        {/* Content */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn't slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        {/* Point to Action */}
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent placeholder:pl-4 md:flex-1 w-full"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
          >
            sign up
          </Button>
        </form>
      </div>
    </section>
  );
}
