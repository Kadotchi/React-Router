import { Link } from "react-router-dom";

const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);
  return (
    <div>
      <h1>Page1ページ</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DeatilA</Link>
      <br />
      <Link to="/page1/detailB">DeatilB</Link>
      <br />
    </div>
  );
};

export default Page1;
