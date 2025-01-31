import { historyData } from "@/data/about/historyData";
import { useLanguage } from "@/hooks/useLanguage";

interface HistoryProps {
  count?: undefined | number;
}

export default function History({ count }: HistoryProps) {
  const { language } = useLanguage();

  const historyRecords = count ? historyData[language].slice(0, count) : historyData[language];

  return (
    <div className="flex flex-col gap-12 lg:gap-16">
      {historyRecords.map((record) => (
        <div key={record.year} className="flex w-full lg:gap-20">
          <div className="r-text-2xl flex justify-end pl-2 pr-6 font-semibold">{record.year}</div>
          <div className="gird-cols-1 grid w-full gap-8 md:grid-cols-2 lg:gap-16 xl:grid-cols-3">
            {record.events.map((event) => (
              <div key={event.title} className="flex w-56 flex-col gap-1 md:w-64 xl:w-80">
                <div className="r-text-base font-semibold">
                  <span className="r-text-2xl"></span>
                  {event.date[0]}
                  {event.date[1] && <span> - {event.date[1]}</span>}
                </div>
                <div className="r-text-lg">{event.title}</div>
                <div className="r-text-sm">{event.location}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
