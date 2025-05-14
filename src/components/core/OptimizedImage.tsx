import { component$ } from '@builder.io/qwik';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  class?: string;
  style?: Record<string, string>;
}

export const OptimizedImage = component$<OptimizedImageProps>(({ 
  src, 
  alt, 
  width, 
  height, 
  class: className, 
  style 
}) => {
  // For images in the public directory, we need to use them as is
  const isPublicImage = src.startsWith('/');
  
  if (isPublicImage) {
    // For public images, we'll use a standard img tag but with loading="lazy"
    // and decoding="async" for better performance
    return (
      <img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        class={className}
        style={style}
        loading="lazy"
        decoding="async"
      />
    );
  }
  
  // For images in the src directory, we'll use the optimized approach
  // This would be used with imports like:
  // import Image from '~/media/image.png?jsx';
  // <Image />
  return (
    <img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      class={className}
      style={style}
      loading="lazy"
      decoding="async"
    />
  );
});
