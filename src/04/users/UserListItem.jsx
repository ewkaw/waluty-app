export function UserListItem(props) {
    const { user: { email, avatar }, onDelete } = props;
    
    return (
      <li>
        <h5>{props.user.email}</h5>
        <button onClick={() => {
            // alert('Kliknieto: ' +  email);
            onDelete(props.user.id);
          }}
        >
          Usun
        </button>
        <br />
        <img src={avatar} alt={email} />
      </li>
    )
  }