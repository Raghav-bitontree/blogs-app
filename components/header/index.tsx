import { header } from "@/styles/styles";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div>
      <div className={header}>
        <span onClick={() => router.push("/blogs")}>THE BLOG</span>
      </div>
    </div>
  );
};

export default Header;
