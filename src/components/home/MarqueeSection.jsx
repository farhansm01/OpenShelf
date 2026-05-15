import Marquee from "react-fast-marquee";

const marqueeItems = [
  { id: 1, title: "The Pragmatic Programmer" },
  { id: 2, title: "Clean Code" },
  { id: 3, title: "Atomic Habits" },
  { id: 4, title: "1984 by George Orwell" },
  { id: 5, title: "The Alchemist" },
  { id: 6, title: "🎉 Special Discount on Memberships!" },
];

const MarqueeSection = () => {
  return (
    <div className="bg-primary text-primary-content py-3 flex items-center gap-4">
      <span className="bg-secondary text-neutral font-bold px-4 py-1 shrink-0 ml-4">
        📚 New Arrivals
      </span>
      <Marquee speed={50} pauseOnHover={true}>
        {marqueeItems.map((n) => (
          <span key={n.id} className="mx-4">
            {n.title} &nbsp;
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
