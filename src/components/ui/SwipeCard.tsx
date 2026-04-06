import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface SwipeCardProps {
  images: string[];
}

const SWIPE_THRESHOLD = 20;

const SwipeCard = ({ images }: SwipeCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const dragX = useMotionValue(0);
  const rotate = useTransform(dragX, [-150, 150], [-15, 15]);
  const opacity = useTransform(dragX, [-150, 0, 150], [0.5, 1, 0.5]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    dragX.set(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    dragX.set(e.clientX - startX.current);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (Math.abs(dragX.get()) > SWIPE_THRESHOLD) {
      const direction = dragX.get() > 0 ? 500 : -500;

      animate(dragX, direction, {
        duration: 0.3,
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          dragX.set(0);
        },
      });
    } else {
      animate(dragX, 0, {
        duration: 0.4,
        type: "spring",
        stiffness: 300,
      });
    }
  };

  return (
    <div
      className="relative w-44 h-58 top-3 cursor-grab"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {images.map((img, index) => {
        const offset = (index - currentIndex + images.length) % images.length;

        const isTop = offset === 0;

        return (
          <motion.div
            key={index}
            className="absolute inset-0 rounded-xl overflow-hidden origin-bottom"
            style={{
              zIndex: images.length - offset,
              x: isTop ? dragX : offset * 2,
              rotate: isTop ? rotate : offset % 2 === 0 ? -5 : 5,
              opacity: isTop ? opacity : 1,
              y: offset * -18,
              scale: 1 - offset * 0.06,
              cursor: isTop ? "grab" : "default",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 32,
              delay: offset * 0.05,
            }}
            onMouseDown={isTop ? handleMouseDown : undefined}
          >
            <img
              src={img}
              loading="eager"
              alt="photo"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default SwipeCard;
