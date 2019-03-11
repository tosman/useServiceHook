import React from "react";
import useService from "./useService";
import ReactJson from "react-json-view";

export default function Greeting(props) {
  let initialUrl = "https://dog.ceo/api/breeds/list/all";
  let [url, setUrl] = React.useState(initialUrl);
  const [loading, data] = useService({ url });

  setTimeout(()=> { setUrl("https://dog.ceo/api/breed/hound/images")}, 4000)

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ReactJson theme={"apathy:inverted"} src={data} />
        </div>
      )}
    </div>
  );
}
