import Categories from "@/components/Categories/Categories";
import Hero from "@/components/Hero/Hero";
import PopularBlogs from "@/components/PopularBlogs/PopularBlogs";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularBlogs />
    </>
  );
}
