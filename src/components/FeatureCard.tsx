import { twMerge } from "tailwind-merge";

export default function FeatureCard(props: {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const { title, description, children, className } = props;
  return (
    <div
      className={twMerge(
        "bg-stone-300/20 border border-stone-400/40 p-6 rounded-3xl",
        className
      )}
    >
      <div className="aspect-video">{children}</div>
      <h3 className="text-3xl font-medium mt-6">{title}</h3>
      <p className="text-stone-500/50 mt-2">{description}</p>
    </div>
  );
}
