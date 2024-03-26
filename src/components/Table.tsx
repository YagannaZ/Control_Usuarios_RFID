import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { useState } from "react";
import { IUser } from "../interfaces/userInterface.interface";
import AlertUserForm from "./AlertUserForm";

export const UsuariosPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [editState, setEditState] = useState({ edit: false, id: "" });

  useEffect(() => {
    if (loading) {
      const getUsuarios = async () => {
        const usersCollection = await getDocs(collection(db, "usuarios"));
        setUsers(usersCollection.docs.map((doc) => doc.data()));
        setLoading(false);
      };

      getUsuarios();
    }
  }, [loading]);

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <h1>Usuarios</h1>
            <hr />
            {loading && <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>}
            {!loading && users.length > 0 && (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">RFID</th>
                    <th scope="col">Activo</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.RFID}</td>
                      <td>{user.active}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

