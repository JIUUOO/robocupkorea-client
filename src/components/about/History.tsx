import { historyData } from "@/data/historyData";

export default function History() {
  return (
    <div className="flex flex-col gap-12 lg:gap-16">
      {historyData.map((record) => (
        <div key={record.year} className="flex gap-10">
          <div className="r-text-2xl flex justify-end break-keep font-bold">{record.year}년</div>
          <div className="flex flex-wrap gap-6">
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
