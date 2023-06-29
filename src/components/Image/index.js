import { Img } from './styles';

const Image = ({ src, maxWidth, maxHeight }) => {
  return (
    <Img 
      src={src} 
      maxWidth={maxWidth}
      maxHeight={maxHeight}
    />
  )
}

export default Image;