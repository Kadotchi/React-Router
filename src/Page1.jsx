import { Link, useHistory } from "react-router-dom";

const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();
  const onClickDeatilA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1ページ</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DeatilA</Link>
      <br />
      <Link to="/page1/detailB">DeatilB</Link>
      <br />
      <button onClick={onClickDeatilA}>DetailA</button>
    </div>
  );
};

export default Page1;
