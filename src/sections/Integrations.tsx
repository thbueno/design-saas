import chatGPTIcon from "@/assets/images/ai-logos/chatgpt.svg";
import claudeIcon from "@/assets/images/ai-logos/claude.svg";
import copilotIcon from "@/assets/images/ai-logos/copilot.svg";
import deepSeekIcon from "@/assets/images/ai-logos/deepseek.svg";
import geminiIcon from "@/assets/images/ai-logos/gemini.svg";
import notebookIcon from "@/assets/images/ai-logos/notebook.svg";
import IntegrationsColumn from "@/components/IntegrationsColumn";
import Tag from "@/components/Tag";

const integrations = [
  {
    name: "ChatGPT",
    icon: chatGPTIcon,
    description:
      "O ChatGPT é um modelo de inteligência artificial baseado em linguagem natural",
  },
  {
    name: "Google Gemini",
    icon: geminiIcon,
    description:
      " O Gemini é um modelo de inteligência artificial avançado, criado pelo Google AI.",
  },
  {
    name: "Microsoft copilot",
    icon: copilotIcon,
    description:
      "Copilot é um marco na evolução da inteligência artificial da Microsoft.",
  },
  {
    name: "DeepSeek",
    icon: deepSeekIcon,
    description:
      "Empresa de inteligência artificial focada em desenvolver soluções avançadas de IA para diversas aplicações.",
  },
  {
    name: "Claude",
    icon: claudeIcon,
    description:
      "Uma assistente de IA desenvolvido pela Anthropic para ajudar com uma ampla variedade de tarefas.",
  },
  {
    name: "Notebook LM",
    icon: notebookIcon,
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
