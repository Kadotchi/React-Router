import { useLocation } from "react-router-dom";

const Page1DeatailA = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <h1>Page1DeatailA</h1>
    </>
  );
};

export default Page1DeatailA;
