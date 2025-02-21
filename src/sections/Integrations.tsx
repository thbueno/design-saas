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
    description:
      "O ChatGPT é um modelo de inteligência artificial baseado em linguagem natural",
  },
  {
    name: "Google Gemini",
    icon: notionIcon,
    description:
      " O Gemini é um modelo de inteligência artificial avançado, criado pelo Google AI.",
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
    description:
      "Empresa de inteligência artificial focada em desenvolver soluções avançadas de IA para diversas aplicações.",
  },
  {
    name: "Claude",
    icon: framerIcon,
    description:
      "Uma assistente de IA desenvolvido pela Anthropic para ajudar com uma ampla variedade de tarefas.",
  },
  {
    name: "Notebook LM",
    icon: githubIcon,
    description: "Usa o poder da IA para fazer resumos rápidos e tomar notas.",
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
