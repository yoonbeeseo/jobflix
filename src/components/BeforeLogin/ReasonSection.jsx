import { reasons } from "../../lib/dummy";

const ReasonSection = () => {
  return (
    <div className="px-4">
      <h1 className="text-2xl font-black mb-2">가입해야 하는 또 다른 이유</h1>
      <ul className="grid 500:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {reasons.map((reason, index) => (
          <ReasonItem key={index} {...reason} />
        ))}
      </ul>
    </div>
  );
};

export default ReasonSection;

function ReasonItem(reason) {
  return (
    <li className="p-4 bg-linear-to-r from-red-950 to-zic-900 flex flex-col border border-zinc-800 rounded-xl">
      <h2 className="font-semibold">{reason.title}</h2>
      <p className="font-light text-zinc-500 text-sm mb-2">{reason.desc}</p>
      <div className="flex justify-end flex-1 items-end">
        <reason.Icon className=" text-4xl" />
      </div>
    </li>
  );
}
