import { component$ } from '@builder.io/qwik';

// Import case study images directly
import DigitalManufacturingImage from '~/media/digital-manufacturing-transformation.png?w=800&h=400&format=webp&jsx';
import FinancialServicesImage from '~/media/financial-services-cloud-migration.png?w=800&h=400&format=webp&jsx';
import RetailChainImage from '~/media/retail-chain-erp-solution.png?w=800&h=400&format=webp&jsx';
import EquipmentVendorImage from '~/media/5g-equipment-vendor-swap.png?w=800&h=400&format=webp&jsx';
import FibreRolloutImage from '~/media/ai-gis-fibre-rollout.png?w=800&h=400&format=webp&jsx';
import McpAgenticImage from '~/media/mcp-agentic-ai-marketplace.png?w=800&h=400&format=webp&jsx';
import OffshoreSCADAImage from '~/media/offshore-scada-system.png?w=800&h=400&format=webp&jsx';
import DecentralizedTalentImage from '~/media/decentralized-talent-marketplace.png?w=800&h=400&format=webp&jsx';

// Image component mapping
const imageComponents: Record<string, any> = {
  "/media/digital-manufacturing-transformation.png": DigitalManufacturingImage,
  "/media/financial-services-cloud-migration.png": FinancialServicesImage,
  "/media/retail-chain-erp-solution.png": RetailChainImage,
  "/media/5g-equipment-vendor-swap.png": EquipmentVendorImage,
  "/media/ai-gis-fibre-rollout.png": FibreRolloutImage,
  "/media/mcp-agentic-ai-marketplace.png": McpAgenticImage,
  "/media/offshore-scada-system.png": OffshoreSCADAImage,
  "/media/decentralized-talent-marketplace.png": DecentralizedTalentImage
};

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
  // Check if the image is one of our pre-imported case study images
  const ImageComponent = imageComponents[src];
  
  if (ImageComponent) {
    return <ImageComponent alt={alt} />;
  }
  
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
