import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const MyImage = ({ image }) => {
    const { alt, src, ...styles } = image;
    return <LazyLoadImage
        alt={alt}
        effect="blur"
        style={{...styles}}
        src={src}
    />
};