import { Html } from '@react-three/drei';

interface PortalTooltipProps {
  title: string;
  description: string;
  visible: boolean;
}

export function PortalTooltip({ title, description, visible }: PortalTooltipProps) {
  if (!visible) return null;

  return (
    <Html center position={[0, 1, 0]}>
      <div className="bg-black/80 text-white p-4 rounded-lg shadow-lg w-64 pointer-events-none">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </Html>
  );
}