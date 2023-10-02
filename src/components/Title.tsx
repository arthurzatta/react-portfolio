type TitleProps = { children: React.ReactNode };

export default function Title({ children }: TitleProps) {
  return <p className="font-semibold text-[2.1rem] text-white">{children}</p>;
}
