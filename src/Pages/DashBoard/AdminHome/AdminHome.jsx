import {useQuery} from '@tanstack/react-query';
import { FaWallet, FaUsers, FaBook, FaTruck } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';
import UseAuthHook from '../../../providers/ContexHook/UseAuthHook';
import hookAxiosSecure from '../../../hooks/hookAxiosSecure';

const AdminHome = () => {

    const {user} = UseAuthHook();
    // const {name, }

    const axiosSecure = hookAxiosSecure();
    const {data: stats={}} = useQuery({
        queryKey: ['stats'],
        queryFn: async() => {
            const res = await axiosSecure.get('/admin-stats');
            console.log(res.data)
            return (res.data)
        }
    })

    const {data: barData=[]} = useQuery ({
        queryKey: ['order-stat'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stat');
            console.log(res.data);
            return (res.data);
        }
    }) 

    // const uv = bbarData.quantity;
    // console.log(uv,'BAR DATA UV')

    // স্ট্যাটাস ডাটা (Card Data)
    const statsCss = [
        { label: 'Revenue', value: stats.revenue || 0, icon: <FaWallet />, bg: 'from-[#BB34F5] to-[#FCDBFF]' },
        { label: 'Customers', value: stats.customers || 0, icon: <FaUsers />, bg: 'from-[#D3A256] to-[#FDE8C0]' },
        { label: 'Products', value: stats.products || 0, icon: <FaBook />, bg: 'from-[#FE4880] to-[#FECDE9]' },
        { label: 'Orders', value: stats.orders || 0, icon: <FaTruck />, bg: 'from-[#6AA4F8] to-[#98CCFB]' },
    ];

    // কাস্টম বার চার্ট ডাটা
    // const barData = [
    //     { name: 'Dessert', uv: 30 },
    //     { name: 'Pizza', uv: 35 },
    //     { name: 'Salad', uv: 20 },
    //     { name: 'Soup', uv: 25 },
    // ];

    // পাই চার্ট ডাটা
    // const pieData = [
    //     { name: 'Dessert', value: 31 },
    //     { name: 'Pizza', value: 21 },
    //     { name: 'Salad', value: 28 },
    //     { name: 'Soup', value: 21 },
    // ];

    const COLORS = ['#00C49F', '#0088FE', '#FFBB28', '#FF8042'];

    // কাস্টম সেপ বার চার্টের জন্য (Triangle Bar)
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
     barData.map(piedata =>{
        name: categoryName; valu: revenue;
     })
    return (
        <div className="w-full px-6 py-10 mt-16">
            <h2 className="text-3xl font-serif font-bold mb-8 uppercase">Hi, Welcome Back!</h2>

            {/* Stats Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {statsCss.map((statCss, index) => (
                    <div key={index} className={`flex items-center justify-center gap-4 py-8 rounded-lg text-white bg-gradient-to-r ${statCss.bg} shadow-md`}>
                        <div className="text-4xl">{statCss.icon}</div>
                        <div>
                            <div className="text-3xl font-bold">{statCss.value}</div>
                            <div className="text-lg">{statCss.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-sm border">
                {/* Bar Chart */}
                <div className="w-full lg:w-1/2 h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="categoryName" />
                            <YAxis />
                            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {barData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="w-full lg:w-1/2 h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={barData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey='value'
                            >
                                {barData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend verticalAlign="top" iconType="diamond" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};// revenue categoryName 

export default AdminHome;