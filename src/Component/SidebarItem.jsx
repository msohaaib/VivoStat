import React, { memo } from "react";

const SidebarItem = memo(({ icon, label, collapsed, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()} // Keyboard support
      tabIndex={0}
      role="button"
      className={`flex items-center space-x-3 p-2 rounded cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isActive
          ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
          : "hover:bg-gray-200 text-gray-700 dark:hover:bg-gray-700 dark:text-gray-300"
      }`}
      aria-label={label}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </div>
  );
});

export default SidebarItem;
