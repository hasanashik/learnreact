import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  onClose: () => void;
}
const Alart = ({ children, onClose }: Prop) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alart;
