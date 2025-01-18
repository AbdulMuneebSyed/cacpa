import OrbitingCircles from "@/components/ui/orbiting-circles";
import { IoLaptopOutline } from "react-icons/io5";
import Image from "next/image";
import web from "@/public/web.png";
import hr from "@/public/hr.png";
import ad from "@/public/ad.png";
import manage from "@/public/manage.png";
import mar from "@/public/mar.png";
import biz from "@/public/biz.png";
export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex pt-20 pb-10 min-h-screen w-full flex-col items-center justify-center  overflow-hidden rounded-lg border bg-white md:shadow-xl">
      <span className="whitespace-pre-wrap pb-10 bg-gradient-to-b from-[#3f5964] to-[#19b2b0] bg-clip-text text-center text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Our Services
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[100px] flex flex-col border-none bg-transparent "
        duration={20}
        delay={3.33}
        radius={200}
      >
        <Image
          src={web} // Path to the image
          alt="Description of image"
          width={100} // Set the width of the image
          height={100} // Set the height of the image
        />{" "}
        <span className="  text-black w-40 from-black text-xs font-semibold text-center  dark:from-white dark:to-black">
          Web Development & Hosting Services
        </span>
      </OrbitingCircles>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className=" absolute inset-0 size-full"
      >
        <circle
          className="stroke-black/50 stroke-1 dark:stroke-white/10"
          cx="50%"
          cy="50%"
          r="100px"
          fill="none"
        />
      </svg>
      <OrbitingCircles
        className="size-[25px] border-none bg-transparent  flex flex-col"
        duration={20}
        delay={6.66}
        radius={200}
      >
        <Image
          src={hr} // Path to the image
          alt="Description of image"
          width={100} // Set the width of the image
          height={100} // Set the height of the image
        />
        <span className="  text-black w-40 from-black text-xs font-semibold text-center  dark:from-white dark:to-black">
          Human Resource Management
        </span>
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent  flex flex-col"
        radius={200}
        duration={20}
        delay={9.99}
        // reverse
      >
        <Image
          src={ad} // Path to the image
          alt="Description of image"
          width={100} // Set the width of the image
          height={100} // Set the height of the image
        />
        <span className="  text-black w-40 from-black text-xs font-semibold text-center  dark:from-white dark:to-black">
          Business Management & Consultancy
        </span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent  flex flex-col"
        radius={200}
        duration={20}
        delay={13.32}
      >
        <Image
          src={biz} // Path to the image
          alt="Description of image"
          width={100} // Set the width of the image
          height={100} // Set the height of the image
        />
        <span className="  text-black w-40 from-black text-xs font-semibold text-center  dark:from-white dark:to-black">
          Digital Marketing & Business Consultant
        </span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent  flex flex-col"
        radius={200}
        duration={20}
        delay={16.65}
      >
        <Image
          src={mar} // Path to the image
          alt="Description of image"
          width={100} // Set the width of the image
          height={100} // Set the height of the image
        />
        <span className="  text-black w-40 from-black text-xs font-semibold text-center  dark:from-white dark:to-black">
          Warehouse Management
        </span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent  flex flex-col"
        radius={200}
        duration={20}
        delay={19.98}
      >
        <Image
          src={manage} // Path to the image
          alt="Description of image"
          width={100} // Set the width of the image
          height={100} // Set the height of the image
        />
        <span className="  text-black w-40 from-black text-xs font-semibold text-center  dark:from-white dark:to-black">
          Governance, Risk Management & Compliance
        </span>
      </OrbitingCircles>
    </div>
  );
}

export function OrbitingCirclesMobile() {
  return (
    <div className="relative flex md:pb-10 h-screen w-full flex-col items-center justify-center  overflow-hidden rounded-lg border bg-white md:shadow-xl">
      <span className="whitespace-pre-wrap bg-gradient-to-b from-[#3f5964] to-[#19b2b0] bg-clip-text text-center text-xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Our Services
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[100px] flex flex-col border-none bg-transparent "
        duration={20}
        delay={3.33}
        radius={150}
      >
        <Image
          src={web} // Path to the image
          alt="Description of image"
          width={70} // Set the width of the image
          height={70} // Set the height of the image
        />{" "}
        <span className="  text-black w-40 from-black text-xs font-medium text-center  dark:from-white dark:to-black">
          Web Development & Hosting Services
        </span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[25px] border-none bg-transparent  flex flex-col"
        duration={20}
        delay={6.66}
        radius={150}
      >
        <Image
          src={hr} // Path to the image
          alt="Description of image"
          width={70} // Set the width of the image
          height={70} // Set the height of the image
        />{" "}
        <span className="  text-black w-40 from-black text-xs font-medium text-center  dark:from-white dark:to-black">
          Human Resource Management
        </span>
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent  flex flex-col"
        radius={150}
        duration={20}
        delay={9.99}
        // reverse
      >
        <Image
          src={ad} // Path to the image
          alt="Description of image"
          width={70} // Set the width of the image
          height={70} // Set the height of the image
        />{" "}
        <span className="  text-black w-40 from-black text-xs font-medium text-center  dark:from-white dark:to-black">
          Warehouse Management
        </span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent  flex flex-col"
        radius={150}
        duration={20}
        delay={13.32}
      >
        <Image
          src={biz} // Path to the image
          alt="Description of image"
          width={70} // Set the width of the image
          height={70} // Set the height of the image
        />{" "}
        <span className="  text-black w-40 from-black text-xs font-medium text-center  dark:from-white dark:to-black">
          Business Management & Consultancy
        </span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent  flex flex-col"
        radius={150}
        duration={20}
        delay={16.65}
      >
        <Image
          src={mar} // Path to the image
          alt="Description of image"
          width={70} // Set the width of the image
          height={70} // Set the height of the image
        />{" "}
        <span className="  text-black w-40 from-black text-xs font-medium text-center  dark:from-white dark:to-black">
          Digital Marketing & Business Consultant
        </span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent  flex flex-col"
        radius={150}
        duration={20}
        delay={19.98}
      >
        <Image
          src={manage} // Path to the image
          alt="Description of image"
          width={70} // Set the width of the image
          height={70} // Set the height of the image
        />{" "}
        <span className="  text-black w-40 from-black text-xs font-medium text-center  dark:from-white dark:to-black">
          Governance, Risk Management & Compliance
        </span>
      </OrbitingCircles>
    </div>
  );
}
