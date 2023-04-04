
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
    <img src={data.urls.small} alt={data.alt_description} />
  );
};

export default Image;
