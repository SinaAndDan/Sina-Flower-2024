import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

interface ReviewTypes {
  about: boolean | null;
  liked: boolean | null;
  onLikeClick: () => void;
}

const Reviews: React.FC<ReviewTypes> = ({ about, liked, onLikeClick }) => {
  return (
    <>
      {!about && (
        <div className="pb-32">
          <div className=" pt-5 flex border-b-2 border-slate-700 border-opacity-20 pb-8">
            <div className="h-12 w-12 bg-red-300 rounded-full"></div>
            <input
              type="text"
              placeholder="نظر شما"
              className=" bg-slate-200 w-full h-12 outline-none px-3 mr-6"
            />
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
            <span className="absolute -bottom-10 left-0 mx-14 flex items-center">
              <button className="mx-3 text-green-600">پاسخ</button>
              <button
                className={`w-16 h-10 rounded-3xl flex items-center justify-center ${
                  liked ? "bg-blue-800" : "bg-slate-300"
                }`}
                onClick={onLikeClick}
              >
                <BiSolidLike className={`${liked && "text-white"} mx-1 `} />
                <p className={`${liked && "text-white"}`}>
                  {liked ? "۳" : "۲"}
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
