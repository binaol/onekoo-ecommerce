import React from "react";
import pdf from "../../assets/images/dictionary.pdf";
import { RiFileDownloadFill } from "react-icons/ri";

const Download = () => {
  return (
    <React.Fragment>
      <div className="flex flex-row mt-[3rem] p-6 gap-8 border-2 border-secondary">
        <div className="my-auto">
          <div className="text-lg text-primary">Downloads</div>
        </div>
        <div className="text-secondary my-auto rounded-full p-4 flex flex-row">
          <p className=" px-4">File name</p>
          <a href={pdf} download="dictionary.pdf">
            <RiFileDownloadFill className="w-[3rem] h-[3rem]" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Download;
