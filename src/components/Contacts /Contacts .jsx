import s from "./contacts.module.css";
import { PropTypes } from "prop-types";

const Contacts = ({ items, onDaleteCard }) => {
  return (
    <div>
      <ul>
        {items.map(({ name, phone, id }) => (
          <li key={id} className={s.item}>
            <p>
              {name}:{phone}
            </p>
            <button
              type="submit"
              onClick={() => onDaleteCard(id)}
              className={s.btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  items: PropTypes.array,
  onDaleteCard: PropTypes.func,
};
export default Contacts;
