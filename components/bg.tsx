import { motion } from "framer-motion";

interface BgProps {
  children: React.ReactNode;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}

const Bg: React.FC<BgProps> = ({
  children,
  backgroundColor = "bg-gradient-to-br from-[#f0f4f8] to-[#d1e3f8]",
  backgroundImage,
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
}) => {
  return (
    <div
      className={`relative min-h-screen overflow-hidden ${backgroundColor}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat,
      }}
    >
      {children}
    </div>
  );
};

export default Bg;
