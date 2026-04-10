'use client';

type ProtectedImageProps = {
  src: string;
  alt: string;
  className?: string;
  minHeight?: string;
};

export default function ProtectedImage({
  src,
  alt,
  className,
  minHeight,
}: ProtectedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{
        minHeight,
        userSelect: 'none',
      }}
    />
  );
}
