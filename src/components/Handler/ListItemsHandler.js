const ListItemsHandler = (props) =>
  props.info.map((item) => {
    let image = <img src={item.img} alt={item.name} />;

    if (item.img === "") {
      image = "";
    }

    return (
      <div key={Math.random()} className={props.classes.list}>
        <a href={item.href} className="itemContainer">
          <div>{image}</div>
          <div>{item.name}</div>
        </a>
      </div>
    );
  });

export default ListItemsHandler;
