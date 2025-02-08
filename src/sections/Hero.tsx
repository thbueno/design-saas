"use client";

import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        {/* Toggle null */}
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-diesel-500 to-amber-400 rounded-full text-diesel-100 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        {/* Content */}
        <h1 className="text-6xl md:text-6xl lg:text-7xl font-medium text-center mt-6">
          uma agência experiente
          <br />
          especializada em{" "}
          <span className="font-curve text-diesel-500"> inovar</span>
        </h1>
        <p className="text-center text-xl text-stone-500 mt-8 max-w-xl mx-auto">
          Design é mais do que aparência, é experiência. Criamos interfaces e
          materiais visuais que comunicam, engajam e fortalecem a identidade da
          sua marca.
        </p>
        {/* Point to Action */}
        <form className="flex border border-diesel-500/30 rounded-full p-2 mt-8 max-w-lg mx-auto ">
          <input
            type="email"
            placeholder="Informe seu email"
            className="bg-transparent pl-4 md:flex-1 w-full placeholder:text-stone-400"
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
