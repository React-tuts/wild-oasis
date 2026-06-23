export type StyledModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const StyledModal = ({ children, onClose }: StyledModalProps) => {
  return (
    <div
      className="fixed z-50 inset-0 bg-black/25 backdrop-blur-xs
  flex items-center justify-center
  "
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl py-5"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
