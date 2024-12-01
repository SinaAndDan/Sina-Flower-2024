import React from "react";
import ReadMore from "./ReadMore";
import { AboutProp } from "src/types/detail";

const About: React.FC<AboutProp> = () => {
  const plantDescription = `گیاه [نام گیاه] یک انتخاب عالی برای افزودن زیبایی و طراوت به محیط داخلی یا خارجی شماست. این گیاه با برگ‌های سبز و ظاهری دلنشین، به راحتی می‌تواند فضایی آرام و دلپذیر ایجاد کند. [نام گیاه] نیاز به مراقبت کمی دارد و به سرعت در محیط‌های مختلف رشد می‌کند، بنابراین برای افرادی که به دنبال گیاهی مقاوم و زیبا هستند، گزینه‌ای ایده‌آل به شمار می‌آید.

این گیاه به نور غیرمستقیم نیاز دارد و به راحتی می‌توان آن را در گلدان‌های مختلف یا حتی در فضاهای باز نگهداری کرد. آبیاری منظم و مراقبت از خاک آن باعث می‌شود که گیاه همیشه شاداب و سالم بماند.

اگر به دنبال یک گیاه جذاب برای محیط خانه یا محل کار خود هستید، [نام گیاه] بهترین انتخاب است.`;
  return <ReadMore text={plantDescription} />;
};

export default About;
