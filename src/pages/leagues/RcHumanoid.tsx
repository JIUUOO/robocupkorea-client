import LinkButton from "@/components/common/button/LinkButton";
import Card from "@/components/common/card/Card";
import CardContainer from "@/components/common/card/CardContainer";
import CardGroup from "@/components/common/card/CardGroup";

export default function RcHumanoid() {
  return (
    <>
      <CardContainer>
        <CardGroup>
          <Card
            title="Humanoid"
            description={
              <>
                <div className="r-text-2xl font-semibold">규정</div>
                <LinkButton to="" external={true} title="규정 살펴보기" />
              </>
            }
          />
        </CardGroup>
      </CardContainer>
    </>
  );
}
