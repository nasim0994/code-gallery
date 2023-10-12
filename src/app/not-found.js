import Link from "next/link";
import { BsExclamationLg } from "react-icons/bs";
import { PiArrowBendDownLeftBold } from "react-icons/pi";

export default function NotFound() {
  return (
    <section>
      <div className="container">
        <div className="h-screen flex flex-col gap-4 justify-center items-center">
          <h2 className="ml-12 text-8xl text-primary flex items-center font-semibold">
            Oops
            <span className="-ml-10 text-[7rem]">
              <BsExclamationLg />
            </span>
          </h2>
          <p className="uppercase text-2xl font-medium -mt-2">
            404-page not found
          </p>
          <p className="text-center -mt-2 text-neutral-content">
            The page you are looking for might have been remove <br /> had its
            name change or temporarily unavailable
          </p>
          <Link href="/" className="primary-btn-g uppercase">
            <span className="flex gap-2 items-center">
              <PiArrowBendDownLeftBold className="text-[17px]" />
              <h2 className="text-sm">Go Back</h2>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
