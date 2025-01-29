import clsx from "clsx";

interface CalendarProps {
  dates: string[];
}

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function Calendar({ dates }: CalendarProps) {
  const startDate = dates[0];
  const endDate = dates[1] || startDate; // endDate가 없으면 startDate와 동일하게 설정

  // 날짜가 범위의 시작 날짜인지 확인
  const isFirstDay = (date: string) => {
    return date === startDate;
  };

  // 날짜가 범위의 끝 날짜인지 확인
  const isLastDay = (date: string) => {
    return date === endDate;
  };

  // 날짜가 범위 안에 있는지 체크
  const isInRange = (date: string) => {
    return date >= startDate && date <= endDate;
  };

  const renderCalendar = () => {
    const monthDays: string[] = [];
    const currentMonth = startDate.slice(0, 7); // YYYY-MM 형태로 현재 월을 추출
    const [year, month] = currentMonth.split("-").map(Number);

    // 해당 월의 첫 날과 마지막 날 계산
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay(); // 첫 번째 날의 요일 (0: 일요일, 1: 월요일, ...)

    // 빈 날짜는 현재 월 이전의 마지막 날짜로 채우기
    const prevMonthLastDay = new Date(year, month - 1, 0).getDate(); // 이전 달의 마지막 날짜
    const prevMonthDays = prevMonthLastDay - firstDayOfWeek + 1; // 첫 번째 주에 들어갈 이전 달의 날짜들

    // 첫 번째 주 이전의 날짜를 이전 월 날짜로 채우기
    for (let i = prevMonthDays; i <= prevMonthLastDay; i++) {
      const prevMonthDayString = `${year}-${String(month - 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
      monthDays.push(prevMonthDayString); // 이전 월 날짜
    }

    // 현재 월의 모든 날짜를 배열에 추가
    for (let day = 1; day <= lastDayOfMonth; day++) {
      const dayString = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      monthDays.push(dayString);
    }

    // 나머지 날짜는 다음 달 날짜로 채우기
    const nextMonthDays = 7 - (monthDays.length % 7); // 다음 달 날짜로 채워야 할 날짜 수

    for (let i = 1; i <= nextMonthDays; i++) {
      const nextMonthDayString = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
      monthDays.push(nextMonthDayString);
    }

    // 달력을 7일씩 묶어서 한 주 단위로 나누기
    const weeks = [];
    for (let i = 0; i < monthDays.length; i += 7) {
      weeks.push(monthDays.slice(i, i + 7));
    }

    return weeks.map((week, weekIndex) => (
      // 날짜
      <div key={weekIndex} className="grid h-full grid-cols-7">
        {week.map((day, dayIndex) => {
          const [, month, dayOfMonth] = day.split("-").map(Number);

          const formattedDay = dayOfMonth === 1 ? `${month}/${dayOfMonth}` : dayOfMonth; // "2/1" 형식으로 표시

          return (
            <div
              key={dayIndex}
              className={clsx(
                "flex items-center justify-center text-center text-sm font-medium sm:text-base md:text-lg lg:text-sm xl:text-base",
                {
                  "bg-primary text-white": day && isInRange(day),
                  "text-transparent": !day,
                  "rounded-bl rounded-tl": day && isInRange(day) && isFirstDay(day),
                  "rounded-br rounded-tr": day && isInRange(day) && isLastDay(day),
                  rounded: day && isInRange(day) && isFirstDay(day) && isLastDay(day),
                },
              )}
            >
              {day && formattedDay}
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="aspect-[12/6] md:aspect-[12/5] lg:aspect-[12/8] xl:aspect-[12/8]">
      <div className="flex h-full w-full flex-col rounded bg-neutral p-1">
        <div className="grid grid-cols-7 justify-between">
          {/* 요일 */}
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-medium text-dark sm:text-sm md:text-base lg:pt-1 lg:text-xs xl:pt-2 xl:text-sm"
            >
              {day}
            </div>
          ))}
        </div>
        {renderCalendar()}
      </div>
    </div>
  );
}
