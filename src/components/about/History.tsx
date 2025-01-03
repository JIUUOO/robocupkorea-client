export default function History() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-4">
        <div className="col-span-1 text-2xl font-medium">RCKA 2024</div>
        <div className="col-span-3 flex flex-col gap-3">
          <div>
            <div className="text-lg font-medium">2024.08.15</div>
            <div className="text-lg">제5회 한국창의코딩대회</div>
            <div className="text-sm">호반체육관</div>
          </div>
          <div>
            <div className="text-lg font-medium">2024.02.16 - 2024.02.18 </div>
            <div className="text-lg">제12회 한국로보컵오픈</div>
            <div className="text-sm">알펜시아리조트 컨벤션센터</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-1 text-2xl font-medium">RCKA 2023</div>
        <div className="col-span-3">
          <div className="text-lg font-medium">2023.08.15</div>
          <div className="text-lg">제4회 한국창의코딩대회</div>
          <div className="text-sm">호반체육관</div>
        </div>
      </div>
    </div>
  );
}
