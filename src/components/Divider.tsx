type DividerProps = { orientation?: "horizontal" | "vertical" };

export default function Divider({ orientation = "horizontal" }: DividerProps) {
  if (orientation === "horizontal") return <div className="w-full h-[2px] bg-[#353535]"></div>;
  return <div className="h-full w-[2px] bg-[#353535]"></div>;
}
