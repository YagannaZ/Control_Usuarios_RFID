// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

import { Table } from "../components/Table"

function UserTablePage () {
    return (
        <div className="container">
            <h1 className="mt-3">Table de usuarios</h1>
            <Table />
        </div>
    )
}

export default UserTablePage