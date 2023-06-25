import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.status} style={{ color: '#00a400' }}>
          &#8226;
        </span>
      ) : (
        <span className={css.status} style={{ color: '#fa383e' }}>
          &#8226;
        </span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
