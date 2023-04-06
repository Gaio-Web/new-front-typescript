import imageStyles from './imageStyles.css';

interface ImageProps {
  data: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
}

const Image: React.FC<ImageProps> = ({ data }) => {
  return (
    <img src={data.urls.small} alt={data.alt_description} style={{borderRadius:'8px'}}/>
  );
};

export default Image;
