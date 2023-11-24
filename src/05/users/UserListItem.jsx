export function UserListItem(props) {
    const { user: { email, avatar }, onDelete, onEdit } = props;
    
    const handleEditFormSubmit= e => {
      e.preventDefault();

      const formData = new FormData(e.target);

      const email = formData.get('email');

      onEdit(props.user.id, email);
    }

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

        <form onSubmit={handleEditFormSubmit}>
          <input type="text" name="email" defaultValue={email} placeholder="Email" />
          <button>Zapisz</button>
        </form>
      </li>
    )
  }