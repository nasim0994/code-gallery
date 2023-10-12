import Image from "next/image";
import Link from "next/link";

export default function PopularBlogs() {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="" className="lg:col-span-2 featured_class_card">
            <div className="featured_class featured_class_1"></div>

            <div className="z-30 absolute bottom-6 left-4 text-start text-base-100">
              <h2 className="text-3xl">How to lear Wev Development</h2>
              <p className="py-2 inline text-sm opacity-80">
                Code Gallery - 10-10-2023
              </p>
            </div>
          </Link>

          <Link href="" className="featured_class_card">
            <div className="featured_class featured_class_2"></div>

            <div className="z-30 absolute bottom-6 left-4 text-start text-base-100">
              <h2 className="text-3xl">How to lear Wev Development</h2>
              <p className="py-2 inline text-sm opacity-80">
                Code Gallery - 10-10-2023
              </p>
            </div>
          </Link>

          <Link href="" className="featured_class_card">
            <div className="featured_class featured_class_3"></div>

            <div className="z-30 absolute bottom-6 left-4 text-start text-base-100">
              <h2 className="text-3xl">How to lear Wev Development</h2>
              <p className="py-2 inline text-sm opacity-80">
                Code Gallery - 10-10-2023
              </p>
            </div>
          </Link>

          <Link href="" className="featured_class_card">
            <div className="featured_class featured_class_4"></div>

            <div className="z-30 absolute bottom-6 left-4 text-start text-base-100">
              <h2 className="text-3xl">How to lear Wev Development</h2>
              <p className="py-2 inline text-sm opacity-80">
                Code Gallery - 10-10-2023
              </p>
            </div>
          </Link>

          <Link href="" className="featured_class_card">
            <div className="featured_class featured_class_5"></div>

            <div className="z-30 absolute bottom-6 left-4 text-start text-base-100">
              <h2 className="text-3xl">How to lear Wev Development</h2>
              <p className="py-2 inline text-sm opacity-80">
                Code Gallery - 10-10-2023
              </p>
            </div>
          </Link>

          <Link href="" className="lg:col-span-2 featured_class_card">
            <div className="featured_class featured_class_6"></div>
            <div className="z-30 absolute bottom-6 left-4 text-start text-base-100">
              <h2 className="text-3xl">How to lear Wev Development</h2>
              <p className="py-2 inline text-sm opacity-80">
                Code Gallery - 10-10-2023
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
