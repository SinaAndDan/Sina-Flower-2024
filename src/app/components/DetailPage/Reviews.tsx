import { motion } from "framer-motion";
import { Content, Exo_2 } from "next/font/google";
import React, { useEffect, useRef, useState, RefObject } from "react";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineSend } from "react-icons/md";
import { useGlobalContext } from "src/app/context/GlobalContext";
import { ReviewProps } from "src/types/review";

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400"],
});

const Reviews: React.FC<ReviewProps> = ({
  reviewRef,
  liked,
  disliked,
  onLikeClick,
  onDisLikeClick,
  onReply,
  isReply,
}) => {
  const [value, setValue] = useState<string>("");
  const [reply, setReply] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const yourReply = useRef<HTMLTextAreaElement | null>(null);
  const { content, language } = useGlobalContext();

  const fontClass = language !== "pe" ? exo.className : "font-yekan";

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleReplyInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(event.target.value);
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
    }
  }, [reply]);

  const englishSendButton =
    language === "pe" ? "-translate-x-0.5" : "rotate-[360deg] translate-x-0.5";

  return (
    <div className="pb-32" ref={reviewRef}>
      <div className=" pt-5 flex justify-between border-b-2 border-darkGray border-opacity-20 pb-8 items-center ">
        <span className="min-h-12 min-w-12 bg-green rounded-full"></span>
        <div className="flex items-center w-full bg-gray-200 mr-2">
          <textarea
            ref={textareaRef}
            value={value}
            rows={1}
            id="autoGrowInput"
            onChange={handleInput}
            placeholder={content.cmPlaceHolder}
            className={`w-full min-h-[2rem] text-sm outline-none bg-gray px-3 py-[0.3rem] text-right resize-none leading-[1.2rem] word-break-keep whitespace-normal ${language === "pe" ? "" : "text-start"
              }`}
          />
          <motion.div
            whileHover={{ scale: 1.1 }} // Hover animation here
            whileTap={{ scale: 0.9 }} // Tap animation here
            className="bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow
 rounded-full min-w-10 min-h-10 flex items-center justify-center mr-2"
          >
            <MdOutlineSend
              className={`rotate-180 text-white w-6 h-6  cursor-pointer ${englishSendButton}`}
            />
          </motion.div>
        </div>
      </div>
      <div className="pt-5 flex">
        <span className="w-10 h-10 bg-black rounded-full min-h-12 min-w-12"></span>
        <div className="flex justify-between w-full items-start">
          <div className="flex items-start">
            <p className="px-4">علی قلی</p>
            <p className={`opacity-75 ${fontClass}`}>{content.time}</p>
          </div>
          <BsThreeDots className="mt-1" />
        </div>
      </div>
      <p className="opacity-90 px-14 relative">
        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
        باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
        جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
        رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
      </p>
      <span className="mx-14 flex items-center mt-8">
        <button className={`mx-3 ${fontClass}`} onClick={onReply}>
          {content.reply}
        </button>
        <button
          className={`w-16 h-10 rounded-3xl flex items-center justify-center ${liked ? "bg-blue" : "bg-gray"
            }`}
          onClick={onLikeClick}
        >
          <BiSolidLike className={`${liked && "text-white"} mx-1 `} />
          <p className={`${liked && "text-white"}`}>
            {liked ? content.selectedLike : content.likeNum}
          </p>
        </button>
        <button
          className={`w-16 h-10 rounded-3xl flex items-center justify-center mx-3 ${disliked ? "bg-red" : "bg-gray"
            }`}
          onClick={onDisLikeClick}
        >
          <BiSolidDislike className={`${disliked && "text-white"} mx-1 `} />
          <p className={`${disliked && "text-white"}`}>
            {disliked ? content.selectedDisLike : content.disLikeNum}
          </p>
        </button>
      </span>

      {isReply && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center w-full mt-3 max-w-[90%] mr-auto"
        >
          <textarea
            ref={yourReply}
            value={reply}
            rows={1}
            id="autoGrowInput"
            onChange={handleReplyInput}
            placeholder={content.replyPlaceHolder}
            className={`w-full min-h-[2rem] text-sm outline-none bg-gray px-3 py-[0.2rem] text-right resize-none leading-[1.6rem] word-break-keep whitespace-normal direction-rtl ${language === "pe" ? "" : "text-start"
              }`}
          />
          <motion.div
            whileHover={{ scale: 1.1 }} // Hover animation here
            whileTap={{ scale: 0.9 }} // Tap animation here
            className="bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow
 rounded-full min-w-10 min-h-10 flex items-center justify-center mr-2"
          >
            <MdOutlineSend
              className={`rotate-180 text-white w-6 h-6 cursor-pointer ${englishSendButton}`}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Reviews;
