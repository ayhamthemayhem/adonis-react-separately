import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [appReady, setAppReady] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAppState = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:3333/test");

        const body = await res.json();
        console.log(body);
        setAppReady(true);
        setIsError(false);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setAppReady(false);
        setIsLoading(false);
      }
    };
    getAppState();
  }, []);

  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async () => {
    try {
      const formData = new FormData();
      //@ts-ignore
      formData.append("file_upload", selectedFile);

      const response = await fetch("http://localhost:3333/file", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Success:", result);
      setUploadSuccess(true);
      setUploadError(false);
    } catch (error) {
      console.log(error);
      setUploadError(true);
      setUploadSuccess(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isLoading && <h1>Loading :/</h1>}
        {appReady && <h1>App is connected to backend :D </h1>}
        {isError && <h1>App could not connect to backend :(</h1>}

        {appReady && (
          <div>
            <input type="file" name="file_upload" onChange={changeHandler} />
            {isFilePicked && selectedFile ? (
              <div>
                <p>Filename: {selectedFile.name && selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
                <p>
                  lastModifiedDate:{" "}
                  {new Date(selectedFile.lastModified).toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
            <div>
            </div>
            {uploadSuccess && <h2>Upload success!!</h2>}
            {uploadError && <h2>Upload err!!</h2>}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
