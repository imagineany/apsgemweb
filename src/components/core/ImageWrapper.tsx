import { component$, Slot } from '@builder.io/qwik';

interface ImageWrapperProps {
  width: string;
  class?: string;
}

export const ImageWrapper = component$<ImageWrapperProps>(({ 
  width, 
  class: className 
}) => {
  return (
    <div 
      class={`image-wrapper ${className || ''}`} 
      style={{ width }}
    >
      <Slot />
    </div>
  );
});
