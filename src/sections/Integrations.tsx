import figmaIcon from "@/assets/images/figma-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import IntegrationsColumn from "@/components/IntegrationsColumn";
import Tag from "@/components/Tag";

const integrations = [
  {
    name: "ChatGPT",
    icon: figmaIcon,
    description: "ChatGPT é a plataforma mais completa do mercado.",
  },
  {
    name: "Google Gemini",
    icon: notionIcon,
    description: " é um chatbot desenvolvido pelo Google.",
  },
  {
    name: "Microsoft copilot",
    icon: slackIcon,
    description:
      "Copilot é um marco na evolução da inteligência artificial da Microsoft.",
  },
  {
    name: "DeepSeek",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Claude",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "Notebook LM",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          {/* Integrations Title and Description */}
          <div className="">
            <div className="flex justify-start">
              <Tag>AI</Tag>
            </div>

            <h2 className="text-6xl font-medium mt-6">
              precisão no mundo da{" "}
              <span className="text-diesel-500 font-curve">
                Inteligência artificial
              </span>
            </h2>
            <p>
              Navegue com tranquilidade e segurança com a nossa consultoria
              especializada nas inteligências artificiais mais eficentes do
              mercado. Integração automatizada com as principais plataformas.
            </p>
          </div>

          {/* Integrations grid */}
          <div className="">
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
