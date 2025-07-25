// DropdownToggleLink.jsx
// A reusable dropdown toggle link used within navigation menus

const DropdownToggleLink = ({ title, className = 'dropdown-item dropdown-toggle', ...others }) => {
  return (
    <a
      href="#"
      data-bs-toggle="dropdown"
      className={className}
      {...others}
    >
      {title}
    </a>
  );
};

export default DropdownToggleLink;
