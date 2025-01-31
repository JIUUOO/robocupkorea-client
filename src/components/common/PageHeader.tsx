interface PageHeaderProps {
  title: string;
  description?: undefined | string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="container flex flex-col gap-1 lg:gap-1.5">
      <h1 className="r-text-4xl font-semibold">{title}</h1>
      {description && <div className="r-text-base">{description}</div>}
    </div>
  );
}
