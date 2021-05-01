const Nav = (props) => {
  return (
    <nav className={`${props.className}__nav`}>
      <ul className={`${props.className}__list`}>
        {props.arr.map((item) => (
          <li className={`${props.className}__list-item`} key={item.id}>
            <a href={item.link} className={`${props.className}__link`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
