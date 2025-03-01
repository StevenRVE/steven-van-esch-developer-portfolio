const BurgerButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      aria-label="Burger Menu Button"
      className="relative p-6 bg-slate-200 bg-opacity-50 rounded-md"
      onClick={onClick}
    >
      <div className="absolute space-y-2 z-50 -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-1 bg-white animate-pulse"></div>
        <div className="w-8 h-1 bg-white animate-pulse"></div>
        <div className="w-8 h-1 bg-white animate-pulse"></div>
      </div>
    </button>
  );
};

export default BurgerButton;
