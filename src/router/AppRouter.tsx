import { Navigate, Route, Routes } from 'react-router-dom';
import FormPage from '../pages/FormPage';
import UserTablePage from '../pages/UserTablePage';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="home"/>} />
                <Route path="home" element={<UserTablePage />}/>
                <Route path="form" element={<FormPage/>}/>
            </Routes>
        </>
    )
}