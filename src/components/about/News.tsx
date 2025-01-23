import { newsData } from "@/data/about/newsData";

export default function News() {
  return (
    <>
      <div className="flex flex-col gap-8">
        {newsData.map((item) => (
          <div key={item.title}>
            <a href={item.reference} target="_blank" className="hover:underline hover:underline-offset-2">
              <span className="r-text-base font-medium">{item.title}</span>
              <br />
              <span className="r-text-sm">{item.subtitle}</span>
            </a>

            <div className="r-text-xs pt-1.5 text-dark">
              <span>{item.press}</span>
              <span className="ml-2">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
