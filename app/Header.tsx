export const Header: React.FC = () => {
  return (
    <div className="relative z-10 border-b py-8 shadow-md bg-green-400 text-white text-center">
      <div className="mx-auto">
        <a href="/">
          <h1 className="text-4xl font-bold">
            Compare estimated vs actual waste!
          </h1>
        </a>
      </div>
    </div>
  );
};
