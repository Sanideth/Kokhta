const Nav = (props) => {
  return (
    <nav
      className={`${props.className}__nav ${
        props.navActive ? 'nav-active' : ''
      }`}
    >
      <ul className={`${props.className}__list`}>
        {props.arr.map((item) => (
          <li
            className={`${props.className}__list-item ${
              props.navActive ? 'list-item-active' : ''
            }`}
            key={item.id}
          >
            <a
              href={item.link}
              className={`${props.className}__link`}
              onClick={props.onClick}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
