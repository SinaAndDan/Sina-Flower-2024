import React, { useEffect, useRef, useState } from "react";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineSend } from "react-icons/md";

interface ReviewTypes {
  about: boolean | null;
  liked: boolean | null;
  disliked: boolean | null;
  onLikeClick: () => void;
  onDisLikeClick: () => void;
  onReply: () => void;
  isReply: boolean | null;
}

const Reviews: React.FC<ReviewTypes> = ({
  about,
  liked,
  disliked,
  onLikeClick,
  onDisLikeClick,
  onReply,
  isReply,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
    }
  }, [value]);

  return (
    <>
      {!about && (
        <div className={`${!isReply ? "mb-32" : "mb-20"}`}>
          <div className=" pt-5 flex justify-between border-b-2 border-darkGray border-opacity-20 pb-8 items-center ">
            <span className="h-12 w-12 bg-green rounded-full"></span>
            <div className="flex items-center w-full bg-gray">
              <textarea
                ref={textareaRef}
                value={value}
                rows={1}
                id="autoGrowInput"
                onChange={handleInput}
                placeholder="نظر شما"
                className="  w-full h-12 text-lg outline-none px-3 pt-2 mr-6 bg-gray"
              />
              <MdOutlineSend className="rotate-180 text-green w-10 h-10 mx-2" />
            </div>
          </div>
          <div className="pt-5 flex">
            <p className="w-10 h-10 bg-black rounded-full"></p>
            <div className="flex justify-between w-full items-start">
              <div className="flex items-start">
                <p className="px-4">علی قلی</p>
                <p className=" opacity-75">۲ ساعت پیش</p>
              </div>
              <BsThreeDots />
            </div>
          </div>
          <p className="opacity-90 px-14 relative">
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
            فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
            کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
            شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
            بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
            پیشرو در زبان فارسی ایجاد کرد.
            <span className="absolute sm:-bottom-10 -bottom-12 left-0 mx-14 flex items-center">
              <button className="mx-3 text-green-600" onClick={onReply}>
                پاسخ
              </button>
              <button
                className={`w-16 h-10 rounded-3xl flex items-center justify-center ${
                  liked ? "bg-blue" : "bg-gray"
                }`}
                onClick={onLikeClick}
              >
                <BiSolidLike className={`${liked && "text-white"} mx-1 `} />
                <p className={`${liked && "text-white"}`}>
                  {liked ? "۳" : "۲"}
                </p>
              </button>
              <button
                className={`w-16 h-10 rounded-3xl flex items-center justify-center mx-3 ${
                  disliked ? "bg-red" : "bg-gray"
                }`}
                onClick={onDisLikeClick}
              >
                <BiSolidDislike
                  className={`${disliked && "text-white"} mx-1 `}
                />
                <p className={`${disliked && "text-white"}`}>
                  {disliked ? "۵" : "۴"}
                </p>
              </button>
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Reviews;
