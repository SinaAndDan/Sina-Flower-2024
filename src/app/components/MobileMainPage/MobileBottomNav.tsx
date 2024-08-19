import React, { memo } from "react";
import Icons from "./Icons"; // Adjust the path as necessary

// Type Definitions
type IconProps = {
  icon: JSX.Element;
  label: string;
  tooltipId: string;
  extraClasses?: string;
};

type TooltipProps = {
  id: string;
  label: string;
};

// Memoized IconButton Component with Display Name
const IconButton: React.FC<IconProps> = memo(
  ({ icon, label, tooltipId, extraClasses = "" }) => (
    <button
      data-tooltip-target={tooltipId}
      type="button"
      className={`inline-flex flex-col items-center justify-center px-5 hover:bg-green-100 group ${extraClasses}`}
    >
      <svg
        className="w-5 h-5 mb-1 text-green-200 group-hover:text-green-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        {icon}
      </svg>
      <span className="sr-only">{label}</span>
    </button>
  )
);

// Add a displayName for better debugging
IconButton.displayName = "IconButton";

// Tooltip Component
const Tooltip: React.FC<TooltipProps> = ({ id, label }) => (
  <div
    id={id}
    role="tooltip"
    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-white rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
  >
    {label}
    <div className="tooltip-arrow" data-popper-arrow></div>
  </div>
);

// Button and Tooltip Configurations
const buttons = [
  { icon: Icons.shop, label: "Shop", tooltipId: "tooltip-shop" },
  { icon: Icons.favorites, label: "Favorites", tooltipId: "tooltip-favorites" },
  { icon: Icons.home, label: "Home", tooltipId: "tooltip-home" },
  { icon: Icons.profile, label: "Profile", tooltipId: "tooltip-profile" },
  { icon: Icons.settings, label: "Settings", tooltipId: "tooltip-settings" },
];

// MobileMainPage Component
const MobileBottomNav: React.FC = () => (
  <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 translate-y-4 bg-white border border-gray-200 bottom-4 left-1/2">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
      {buttons.map(({ icon, label, tooltipId }) => (
        <React.Fragment key={label}>
          <IconButton icon={icon} label={label} tooltipId={tooltipId} />
          <Tooltip id={tooltipId} label={label} />
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default MobileBottomNav;
