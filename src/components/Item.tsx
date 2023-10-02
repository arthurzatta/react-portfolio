import Description from "./Description";

type ProjectProps = { name: string; href?: string; source?: string; date?: string; description?: string };

export default function Item({ name, href, source, date, description }: ProjectProps) {
  return (
    <div className="text-white flex flex-col gap-[0.15rem] pb-5">
      <p className="text-[1.6rem] font-medium">{name}</p>
      {(href || date) && (
        <div className="flex gap-2 uppercase text-[1.3rem] font-light">
          {href && <a href={href}>{source}</a>}
          {date && <p>{date}</p>}
        </div>
      )}
      {description && <Description>{description}</Description>}
    </div>
  );
}
