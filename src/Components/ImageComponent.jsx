import { FaFileImage } from "react-icons/fa";

function ImageComponent({ imageUrl, isLoading }) {
  return (
    <div className="image-container">
      <div className="image-box">
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
            <p>AI is thinking... Please wait</p>
          </div>
        ) : imageUrl ? (
          <img className="image" src={imageUrl} alt="AI Generated" />
        ) : (
          <>
            <div className="image-logo">
              <FaFileImage />
            </div>
            <p>Your generated image will appear here</p>
          </>
        )}
      </div>
      <a
        href={imageUrl}
        disabled={!imageUrl}
        target="_blank"
        className="download-btn"
        download="AI_Generated_Image.png"
      >
        Download Image
      </a>
    </div>
  );
}

export default ImageComponent;
