export const Gradient = () => {
  return (
    <div
      aria-hidden="true"
      className="-space-x-152 absolute inset-0 grid grid-cols-2 opacity-40 dark:opacity-20 xsm:-space-x-52"
    >
      <div
        style={{ transform: "translate3d(0, 0, 0)" }}
        className="h-56 bg-gradient-to-br from-blue to-green blur-[100px] dark:from-blue"
      />
      <div
        style={{ transform: "translate3d(0, 0, 0)" }}
        className="to- h-32 bg-gradient-to-r from-red to-yellow blur-[100px] dark:to-yellow"
      />
    </div>
  );
};
