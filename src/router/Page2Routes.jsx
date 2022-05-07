import Page2 from "../Page2";
import URLParameter from "../URLParameter";

const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <URLParameter />
  }
];

export default Page2Routes;
