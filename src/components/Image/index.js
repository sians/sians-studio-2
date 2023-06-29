import { Img } from './styles';

const Image = ({ 
  src, 
  maxWidth, 
  maxHeight, 
  alt,
  title
 }) => {
  return (
    <Img 
      src={src} 
      alt={alt}
      title={title}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
    />
  )
}

export default Image;