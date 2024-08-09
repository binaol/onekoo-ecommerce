import React from "react";
import { MdOutlineAttachEmail, MdCallEnd } from "react-icons/md";
import { Link } from "react-router-dom";

const Conta = () => {
  return (
    <React.Fragment>
      {/* email */}
      <div className="flex flex-row">
        <div className="bg-white flex flex-col gap-4 h-screen w-full md:w-[50rem] items-center justify-center">
          {/* Card 1 */}
          <Link
            className="rounded-sm w-11/12 md:w-1/2 grid grid-cols-12 bg-secondary shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
            onClick={() => window.scrollTo(0, 0)}
            to={`https://www.example.com`}
          >
            {/* Icon */}
            <div className="col-span-12 md:col-span-1 w-[1rem] h-[1rem]">
              <MdOutlineAttachEmail />
            </div>
            {/* Title */}
            <div className="col-span-11 xl:-ml-0">
              <p className="text-white font-semibold">Department one </p>
            </div>
            {/* Description */}
            <div className="md:col-start-2 col-span-11 xl:-ml-0">
              <p className="text-sm text-white font-semibold">
                example@onekoocoffee.com{" "}
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            className="rounded-sm w-11/12 md:w-1/2 grid grid-cols-12 bg-secondary shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
            onClick={() => window.scrollTo(0, 0)}
            to={`https://www.example.com`}
          >
            {/* Icon */}
            <div className="col-span-12 md:col-span-1 w-[1rem] h-[1rem]">
              <MdOutlineAttachEmail />
            </div>
            {/* Title */}
            <div className="col-span-11 xl:-ml-0">
              <p className="text-white font-semibold"> Department two </p>
            </div>
            {/* Description */}
            <div className="md:col-start-2 col-span-11 xl:-ml-0">
              <p className="text-sm text-white font-semibold">
                example@onekoocoffee.com{" "}
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            className="rounded-sm w-11/12 md:w-1/2 grid grid-cols-12 bg-secondary shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
            onClick={() => window.scrollTo(0, 0)}
            to={`https://www.example.com`}
          >
            {/* Icon */}
            <div className="col-span-12 md:col-span-1 w-[1rem] h-[1rem]">
              <MdOutlineAttachEmail />
            </div>
            {/* Title */}
            <div className="col-span-11 xl:-ml-0">
              <p className="text-white font-semibold">Department three </p>
            </div>
            {/* Description */}
            <div className="md:col-start-2 col-span-11 xl:-ml-0">
              <p className="text-sm text-white font-semibold">
                example@onekoocoffee.com{" "}
              </p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            className="rounded-sm w-11/12 md:w-1/2 grid grid-cols-12 bg-secondary shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
            onClick={() => window.scrollTo(0, 0)}
            to={`https://www.example.com`}
          >
            {/* Icon */}
            <div className="col-span-12 md:col-span-1 w-[1rem] h-[1rem]">
              <MdOutlineAttachEmail />
            </div>
            {/* Title */}
            <div className="col-span-11 xl:-ml-0">
              <p className="text-white font-semibold">Department four </p>
            </div>
            {/* Description */}
            <div className="md:col-start-2 col-span-11 xl:-ml-0">
              <p className="text-sm text-white font-semibold">
                example@onekoocoffee.com{" "}
              </p>
            </div>
          </Link>
        </div>

        {/* phone */}
        <div className="bg-white flex flex-col gap-4 h-screen w-[50rem] items-center justify-center">
          {/* Card 1 */}
          <Link
            className="rounded-sm w-1/2 grid grid-cols-12 bg-secondary shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
            onClick={() => window.scrollTo(0, 0)}
            to={`https://www.example.com`}
          >
            {/* Icon */}
            <div className="col-span-12 md:col-span-1 w-[1rem] h-[1rem]">
              <MdCallEnd />
            </div>
            {/* Title */}
            <div className="col-span-11 xl:-ml-0">
              <p className="text-white font-semibold">Department one </p>
            </div>
            {/* Description */}
            <div className="md:col-start-2 col-span-11 xl:-ml-0">
              <p className="text-sm text-white font-semibold">
                +251 987654321{" "}
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            className="rounded-sm w-1/2 grid grid-cols-12 bg-secondary shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
            onClick={() => window.scrollTo(0, 0)}
            to={`https://www.example.com`}
          >
            {/* Icon */}
            <div className="col-span-12 md:col-span-1 w-[1rem] h-[1rem]">
              <MdCallEnd />
            </div>
            {/* Title */}
            <div className="col-span-11 xl:-ml-0">
              <p className="text-white font-semibold"> Department two </p>
            </div>
            {/* Description */}
            <div className="md:col-start-2 col-span-11 xl:-ml-0">
              <p className="text-sm text-white font-semibold">
                +251 987654321{" "}
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            className="rounded-sm w-1/2 grid grid-cols-12 bg-secondary shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
            onClick={() => window.scrollTo(0, 0)}
            to={`https://www.example.com`}
          >
            {/* Icon */}
            <div className="col-span-12 md:col-span-1 w-[1rem] h-[1rem]">
              <MdCallEnd />
            </div>
            {/* Title */}
            <div className="col-span-11 xl:-ml-0">
              <p className="text-white font-semibold">Department three </p>
            </div>
            {/* Description */}
            <div className="md:col-start-2 col-span-11 xl:-ml-0">
              <p className="text-sm text-white font-semibold">
                +251 987654321{" "}
              </p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            className="rounded-sm w-1/2 grid grid-cols-12 bg-secondary shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
            onClick={() => window.scrollTo(0, 0)}
            to={`https://www.example.com`}
          >
            {/* Icon */}
            <div className="col-span-12 md:col-span-1 w-[1rem] h-[1rem]">
              <MdCallEnd />
            </div>
            {/* Title */}
            <div className="col-span-11 xl:-ml-0">
              <p className="text-white font-semibold">Department four </p>
            </div>
            {/* Description */}
            <div className="md:col-start-2 col-span-11 xl:-ml-0">
              <p className="text-sm text-white font-semibold">
                +251 987654321{" "}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Conta;
