import { type IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function IntegrationsColumn(props: {
  integrations: IntegrationsType;
  className?: string;
}) {
  const { integrations, className } = props;
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="bg-neutral-900 border border-white/10 p-6 rounded-3xl"
        >
          <div className="flex justify-center">
            <Image
              src={integration.icon}
              alt={integration.name}
              width={100}
              height={100}
            />
          </div>

          <h3 className="text-3xl text-center font-medium mt-6">
            {integration.name}
          </h3>
          <p className="text-center text-white/50 mt-2">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
}
