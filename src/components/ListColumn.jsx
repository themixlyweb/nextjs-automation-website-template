/**
 * ListColumn Component
 * Renders a two-column bullet list layout using Bootstrap grid.
 *
 * @param {Array<Array<string>>} list - 2D array where each sub-array is a column of list items.
 * @param {string} rowClass - Optional additional classNames for the row.
 * @param {string} bulletColor - Optional color class for bullet icons (default: 'primary').
 */
const ListColumn = ({
  list,
  rowClass = '',
  bulletColor = 'primary',
}) => {
  return (
    <div className={`row gy-3 ${rowClass}`}>
      {list.map((column, columnIndex) => (
        <div className="col-xl-6" key={columnIndex}>
          <ul className={`icon-list bullet-bg mb-0`}>
            {column.map((item, itemIndex) => (
              <li key={itemIndex} className={itemIndex !== 0 ? 'mt-3' : ''}>
                <i className={`uil uil-check fs-24 text-${bulletColor}`} /> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListColumn;
