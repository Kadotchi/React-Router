import { useLocation, useHistory } from "react-router-dom";

const Page1DeatailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <>
      <h1>Page1DeatailA</h1>
      <button onClick={onClickBack}>戻る</button>
    </>
  );
};

export default Page1DeatailA;
