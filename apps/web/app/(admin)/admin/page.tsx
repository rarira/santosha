import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const AdminApp = dynamic(() => import('./_components/AdminApp'), { ssr: false });

const Page: NextPage = () => <AdminApp />;

export default Page;
