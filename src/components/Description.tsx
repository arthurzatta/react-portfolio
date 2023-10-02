type DescriptionProps = { children: React.ReactNode };

export default function Description({ children }: DescriptionProps) {
  return <p className="text-clamp font-light text-white flex flex-wrap">{children}</p>;
}
