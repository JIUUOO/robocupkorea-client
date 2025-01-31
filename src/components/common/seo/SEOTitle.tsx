import { Helmet } from "react-helmet-async";

import { useLanguage } from "@/hooks/useLanguage";

interface SEOTitleProps {
  title?: undefined | string;
}

const metaContentMap = {
  "ko-KR": {
    title: "한국로보컵협회",
  },
  "en-US": {
    title: "RCKA",
  },
};

export default function SEOTitle({ title }: SEOTitleProps) {
  const { language } = useLanguage();
  const meta = metaContentMap[language];

  return (
    <Helmet prioritizeSeoTags>
      <title>
        {title ? `${title} |` : ""} {meta.title}
      </title>

      <meta property="og:title" content={meta.title} />

      <meta name="twitter:title" content={meta.title} />
    </Helmet>
  );
}
