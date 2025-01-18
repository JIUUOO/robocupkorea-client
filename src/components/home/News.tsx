import { newsData } from "@/data/about/newsData";

export default function News() {
  return (
    <>
      <div className="flex flex-col gap-8">
        {newsData.slice(0, 2).map((item) => (
          <div>
            <a href={item.reference} target="_blank" className="hover:underline hover:underline-offset-2">
              <span className="r-text-base font-medium">{item.title}</span>
              <br />
              <span className="r-text-sm">{item.subtitle}</span>
            </a>

            <div className="r-text-xs text-dark pt-1">{item.date}</div>
          </div>
        ))}
      </div>
    </>
  );
}
