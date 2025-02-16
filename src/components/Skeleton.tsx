export default function Skeleton() {
  return (
    <li className="bg-neutral-900 p-4 w-[98%] lg:w-96 rounded-lg shadow-md flex justify-between items-center animate-pulse">
      <div className="h-20 w-20 bg-neutral-800 rounded-lg"></div>
      <div className="space-y-2">
        <div className="h-4 bg-neutral-800 rounded w-32"></div>
        <div className="h-3 bg-neutral-800 rounded w-24"></div>
      </div>
      <div className="h-10 w-20 bg-neutral-800 rounded-lg"></div>
    </li>
  );
}
