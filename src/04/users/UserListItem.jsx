export function UserListItem(props) {
    const { user: { email, avatar } } = props;
    
    return (
      <li>
        <h5>{props.user.email}</h5>
        <img src={avatar} alt={email} />
      </li>
    )
  }