import NextLink from './NextLink';

/**
 * ListItemLink Component
 * Renders a <li> element containing a navigation link.
 *
 * Props:
 * @param {string} href - The URL the link should navigate to.
 * @param {string} title - The text to display for the link.
 * @param {string} linkClassName - Optional class name(s) for the link. Default is 'nav-link'.
 * @param {string} liClassName - Optional class name(s) for the list item. Default is 'nav-item'.
 */
const ListItemLink = ({
  href,
  title,
  linkClassName = 'nav-link',
  liClassName = 'nav-item',
}) => {
  return (
    <li className={liClassName} data-bs-dismiss="offcanvas">
      <NextLink className={linkClassName} href={href} title={title} />
    </li>
  );
};

export default ListItemLink;
