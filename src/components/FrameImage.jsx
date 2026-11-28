import { useState } from 'react';

/**
 * Shows the WHOLE photo when it is tall (portrait) or nearly square, with a soft blurred
 * copy of the same photo filling the empty sides. Wide photos fill the frame as before.
 * Give it the size you want through className (for example "h-44" or "w-full h-64").
 */
export default function FramedImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  loading,
  fetchPriority,
}) {
  const [tall, setTall] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-blue-50 ${className}`}>
      {tall && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-80"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        onLoad={(e) => {
          const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
          if (w && h) setTall(w / h < 1.2);
        }}
        className={`relative w-full h-full ${tall ? 'object-contain' : 'object-cover'} ${imgClassName}`}
      />
    </div>
  );
}
