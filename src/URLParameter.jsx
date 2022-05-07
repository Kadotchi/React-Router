import { useParams } from "react-router-dom";

const URLParameter = () => {
  const { id } = useParams();
  return (
    <>
      <h1>URLParameter</h1>
      <p>パラメーターは{id}です</p>
    </>
  );
};

export default URLParameter;
