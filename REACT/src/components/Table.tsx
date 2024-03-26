import { getDocs, collection, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { useState, useEffect } from "react";

export const Table = () => {
  const [users, setUsers] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  const [loading, setLoading] = useState(true);
  // const [editState, setEditState] = useState({ edit: false, id: "" });

  useEffect(() => {
    if (loading) {
      const getUsuarios = async () => {
        const usersCollection = await getDocs(collection(db, "Usuarios"));
        // setUsers(usersCollection.docs.map((doc) => doc.data()));
        setUsers(usersCollection.docs);
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
            {/* <h1>Usuarios</h1> */}
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
                      <td>{user.data().name}</td>
                      <td>{user.data().RFID}</td>
                      <td>{user.data().active}</td>
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

