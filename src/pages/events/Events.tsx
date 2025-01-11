import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardItem";
import Card from "@/components/common/card/Card";

import logoRcka from "@/assets/images/logos/rcka.png";
import LinkButton from "@/components/common/button/LinkButton";

export default function Events() {
  return (
    <>
      <div className="container">
        <div className="r-text-3xl font-semibold">Upcoming Event</div>
      </div>
      <CardContainer>
        <CardGroup>
          <Card
            title="제13회 한국로보컵오픈"
            content={<></>}
            footer={<LinkButton to="/events/robocup-open-2025" title="자세히 보기" icon={true} />}
          />
        </CardGroup>
      </CardContainer>

      <div className="container">
        <div className="r-text-3xl font-semibold">Past Events</div>
      </div>
      <CardContainer gridcols="lg:grid-cols-2">
        <CardGroup colspan="col-span-1">
          <Card
            title="제5회 한국창의코딩대회"
            content={
              <>
                <img src={logoRcka} />
              </>
            }
          />
        </CardGroup>
        <CardGroup colspan="col-span-1">
          <Card
            title="제12회 한국로보컵오픈"
            content={
              <>
                <img src={logoRcka} />
              </>
            }
          />
        </CardGroup>
      </CardContainer>
    </>
  );
}
