# Image Optimization in Qwik

This directory contains source images that are optimized using Qwik's built-in image optimization capabilities.

## How Image Optimization Works

Qwik uses the `vite-imagetools` plugin to automatically optimize images. When you import an image with the `?jsx` suffix, it:

1. Converts the image to multiple webp images at different resolutions (200px, 400px, 600px, 800px, 1200px)
2. Optimizes each image to reduce its size
3. Generates an `<img>` element with the `srcset` attribute to provide responsive images

## Usage

### For images in the src directory:

```tsx
// Import with the ?jsx suffix and optional parameters
import Image from '~/media/your_image.png?w=1200&h=1200&format=webp&jsx';

// Use in your component
<Image />
```

### For images in the public directory:

```tsx
// Import the OptimizedImage component
import { OptimizedImage } from '../core/OptimizedImage';

// Use in your component
<OptimizedImage 
  src="/images/your_image.png" 
  alt="Image description" 
/>
```

## Parameters

You can customize the image optimization with the following parameters:

- `w` or `width`: Set the width of the image
- `h` or `height`: Set the height of the image
- `format`: Specify the output format (webp, png, jpg, etc.)
- `quality`: Set the quality of the image (1-100)

Example:

```tsx
import Image from '~/media/your_image.jpg?w=800&h=600&format=webp&quality=90&jsx';
```

## Responsive Images with Proper Aspect Ratio

To maintain the aspect ratio of responsive images, use the `ImageWrapper` component:

```tsx
import { ImageWrapper } from '../core/ImageWrapper';
import Image from '~/media/your_image.png?jsx';

<ImageWrapper width="300px">
  <Image />
</ImageWrapper>
```

## Benefits

- Zero runtime JavaScript
- Automatic width/height to prevent layout shifts
- Lazy loading and async decoding by default
- Optimized file sizes
- Responsive images that load the appropriate size based on the device
