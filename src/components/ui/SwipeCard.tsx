import { useRef, useState } from "react";

interface SwipeCardProps {
  images: string[];
}

const SwipeCard = ({ images }: SwipeCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dismissed, setDismissed] = useState<number[]>([]);

  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    setDragX(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragX(e.clientX - startX.current);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (Math.abs(dragX) > 80) {
      setDismissed((prev) => [...prev, currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }
    setDragX(0);
  };

  return (
    <div
      className="relative w-24 h-28"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {images.map((img, index) => {
        if (dismissed.includes(index)) return null;
        const isTop = index === currentIndex;
        return (
          <div
            key={index}
            className="absolute inset-0 rounded-xl overflow-hidden"
            style={{
              zIndex: images.length - index,
              transform: isTop
                ? `translateX(${dragX}px) translateY(${index * -6}px) rotate(${dragX * 0.05}deg)`
                : `translateY(${index * -6}px) scale(${1 - index * 0.04})`,
              transition: isDragging ? "none" : "transform 0.3s ease",
              cursor: isTop ? "grab" : "default",
            }}
            onMouseDown={isTop ? handleMouseDown : undefined}
          >
            <img src={img} alt="photo" className="w-full h-full object-cover" />
          </div>
        );
      })}
    </div>
  );
};

export default SwipeCard;
