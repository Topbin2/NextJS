import { useRouter } from "next/router";
import { useEffect } from "react";

const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  );
};

export default PortfolioProjectPage;
