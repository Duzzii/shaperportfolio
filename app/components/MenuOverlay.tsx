import React from "react";
import NavLink from "./NavLink";

interface Link {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: Link[];
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, onClose }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-80 p-4 z-40">
      {/* Close Button */}
      <button onClick={onClose} className="text-white mb-4">
        Close
      </button>
      <ul className="flex flex-col items-center">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
