import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={` text-white flex cursor-pointer justify-center items-center bg-repeat-round h-12 shadow-xl w-12 rounded-full absolute lg:right-[80rem] md:right-[91%] right-[80%] z-20 top-[50%] translate-x-[-50%] before:text-lg `}
      style={{
        fontSize: "50px",
        background: "#75593C",
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewOutlinedIcon />
    </div>
  );
}
export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={` text-white cursor-pointer flex justify-center items-center bg-repeat-round h-12 shadow-xl w-12 rounded-full absolute lg:left-[82rem] md:left-[96%] left-[90%] top-[50%] translate-x-[-50%] before:text-lg `}
      style={{
        fontSize: "50px",
        background: "#75593C",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosOutlinedIcon />
    </div>
  );
}
