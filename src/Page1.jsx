import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <h1>Page1ページ</h1>
      <Link to="/page1/detailA">DeatilA</Link>
      <br />
      <Link to="/page1/detailB">DeatilB</Link>
      <br />
    </div>
  );
};

export default Page1;
