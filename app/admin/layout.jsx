import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "GizmoCart. - Admin",
    description: "GizmoCart. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
