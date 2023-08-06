export const Ball = ({ isPowerBall, value }: { isPowerBall?: boolean; value: string }) => {
  return (
    <div
      className={`text-2xl font-bold text-black dark:text-black shadow-switcher rounded-full ${
        isPowerBall ? "bg-yellow" : "bg-true-white"
      } border border-stroke h-12 w-12 flex items-center justify-center`}
    >
      {value}
    </div>
  );
};
