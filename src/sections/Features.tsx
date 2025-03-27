import ArrowIcon from "@/components/ArrowIcon";
import DashboardIcon from "@/components/DashboardIcon";
import FeatureCard from "@/components/FeatureCard";
import PathIcon from "@/components/PathIcon";
import Tag from "@/components/Tag";

const features = [
  "Identidade Visual",
  "Branding",
  "Produção Audiovisual",
  "Social Media",
  "Marking Digital",
  "SEO",
  "E-commerce",
  "Sites",
  "apps mobile",
  "IA Generativa",
  "Deep Learning",
  "SaaS",
  "Aplicações Web",
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Serviços</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Um conjunto de{" "}
          <span className="text-diesel-500 font-curve">serviços</span> completo
        </h2>
        {/* Features grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
          {/* Feature card 1 */}
          <FeatureCard
            title="Precisão no universo Digital"
            description="Consultoria Estratégica com resultados que convertem em negócios reais e comunidades engajadas com seu conteúdo"
            className="col-span-2 lg:col-span-1 group"
          >
            {/* Avatars */}
            <div className="aspect-video flex items-center justify-center">
              {/* <Image src={path} alt="Caminho" className="size-full p-4" /> */}
              <PathIcon className="size-full p-4 stroke-diesel-500" />
            </div>
          </FeatureCard>
          {/* Feature card 2 */}
          <FeatureCard
            title="Design cativante em todas as plataformas"
            description="sua marca no centro das atenções com uma identidade visual exclusiva, instantaneamente reconhecível e consistentemente engajante em todas as principais aplicações digitais."
            className="col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <ArrowIcon className="size-full p-4 stroke-diesel-500" />
            </div>
          </FeatureCard>
          {/* Feature card 3 */}
          <FeatureCard
            title="Sites e aplicativos inovadores"
            description="Elaboramos com dedicação cada detalhe, desde a navegação intuitiva até as interfaces visualmente impressionantes"
            className="col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <DashboardIcon className="size-full p-4 stroke-diesel-500" />
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
              <span className="font-medium text-stone-500 md:text-lg hover:text-diesel-500 transition-colors duration-300 ease-in-out transform hover:scale-105">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
