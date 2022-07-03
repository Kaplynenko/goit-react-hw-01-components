const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span
        class="status"
        style={{ backgroundColor: isOnline ? '#21CA28' : '#CA3821' }}
      ></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
export default FriendListItem;
