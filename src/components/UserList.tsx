import React, { useEffect } from 'react';
import { useTypedSelector } from "../store/hooks/useTypedSelector";
import { useActions } from "../store/hooks/useActions";

const UserList: React.FC = () => {
  const {users, error, loading} = useTypedSelector(state => state.user)
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{ error }</h1>
  }

  return (
    <div>
      { users.map(it => <div key={ it.id }>{ it.name }</div>) }
    </div>
  );
};

export default UserList;