import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";

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
        <h2 className="text-6xl font-medium text-center mt-6">
          Where power meets
          <span className="text-lime-400">simplicity</span>
        </h2>
        {/* Features grid */}
        <div>
          {/* Feature card 1 */}
          <FeatureCard
            title="Real-time collaboration"
            description="work together in real-time, with real-time collaboration."
          />
          {/* Feature card 2 */}
          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your audience with interactive prototyping"
          />
          {/* Feature card 3 */}
          <FeatureCard
            title="keyboard quicks Actions"
            description="Powerfull commands to help you create design faster"
          />
        </div>
        {/* tags Features */}
        <div className="">
          {features.map((feature) => (
            <div key={feature}>
              <span></span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
