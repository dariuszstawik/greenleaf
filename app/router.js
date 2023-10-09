import { generateStaticParams } from "./config";

const routes = [
  {
    path: "/aktualnosci/:slug",
    component: NewsPost,
    generateStaticParams,
  },
];

export default routes;
