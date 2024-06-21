import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const AdminApp = dynamic(() => import('./_components/admin-app'), { ssr: false });

const Page: NextPage = () => <AdminApp />;

export default Page;
