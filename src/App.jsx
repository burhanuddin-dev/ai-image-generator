import NavigationBar from "./Components/NavigationBar.jsx";
import Header from "./Components/Header.jsx";
import Search from "./Components/Search.jsx";
import ImageComponent from "./Components/ImageComponent.jsx";
import { useEffect, useState } from "react";
import GenerateImage from "./api/server.js";

function App() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!prompt) return;

    async function main() {
      setIsLoading(true);
      const imageurl = await GenerateImage(prompt);
      setImageUrl(imageurl);
      setIsLoading(false);
    }

    main();
  }, [prompt]);

  return (
    <div className="app">
      <NavigationBar />
      <Header />
      <Search setPrompt={setPrompt} />
      <ImageComponent imageUrl={imageUrl} isLoading={isLoading} />
    </div>
  );
}

export default App;
