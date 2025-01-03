import LogoInstitution1 from "@/assets/images/logos/institution1.jpg";
import LogoInstitution2 from "@/assets/images/logos/institution2.jpg";
import LogoInstitution3 from "@/assets/images/logos/institution3.jpg";

export default function Institution() {
  const logoInstitution = [
    { src: LogoInstitution1, href: "https://www.motie.go.kr/" },
    { src: LogoInstitution2, href: "https://www.nts.go.kr/" },
    { src: LogoInstitution3, href: "https://www.acrc.go.kr/" },
  ];

  return (
    <div className="flex justify-center py-10">
      <div className="max-md:flex max-md:flex-col max-md:gap-4 md:grid md:grid-cols-3">
        {logoInstitution.map(({ src, href }) => (
          <div className="" key={src}>
            <a href={href} target="_blank">
              <img src={src} className="object-cover max-md:h-12 md:h-10 lg:h-14" alt="logoInstitution" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
