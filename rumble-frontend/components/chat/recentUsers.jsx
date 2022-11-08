const colorList = [
  "text-red",
  "text-green",
  "text-teal",
  "text-yellow",
  "text-purple",
];

export default function RecentUsers(props) {
  return (
    <div className="flex items-center justify-center bg-black min-h-14 min-w-14 rounded-xl mb-4">
      <h1 className={colorList[props.color] + " text-lg"}>{props.icon}</h1>
    </div>
  );
}
