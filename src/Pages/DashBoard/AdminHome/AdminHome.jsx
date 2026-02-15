import React from 'react';
import { FaWallet, FaUsers, FaBook, FaTruck } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';

const AdminHome = () => {
    // স্ট্যাটাস ডাটা (Card Data)
    const stats = [
        { label: 'Revenue', value: '1000', icon: <FaWallet />, bg: 'from-[#BB34F5] to-[#FCDBFF]' },
        { label: 'Customers', value: '1500', icon: <FaUsers />, bg: 'from-[#D3A256] to-[#FDE8C0]' },
        { label: 'Products', value: '103', icon: <FaBook />, bg: 'from-[#FE4880] to-[#FECDE9]' },
        { label: 'Orders', value: '500', icon: <FaTruck />, bg: 'from-[#6AA4F8] to-[#98CCFB]' },
    ];

    // কাস্টম বার চার্ট ডাটা
    const barData = [
        { name: 'Dessert', uv: 30 },
        { name: 'Pizza', uv: 35 },
        { name: 'Salad', uv: 20 },
        { name: 'Soup', uv: 25 },
    ];

    // পাই চার্ট ডাটা
    const pieData = [
        { name: 'Dessert', value: 31 },
        { name: 'Pizza', value: 21 },
        { name: 'Salad', value: 28 },
        { name: 'Soup', value: 21 },
    ];

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

    return (
        <div className="w-full px-6 py-10">
            <h2 className="text-3xl font-serif font-bold mb-8 uppercase">Hi, Welcome Back!</h2>

            {/* Stats Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, idx) => (
                    <div key={idx} className={`flex items-center justify-center gap-4 py-8 rounded-lg text-white bg-gradient-to-r ${stat.bg} shadow-md`}>
                        <div className="text-4xl">{stat.icon}</div>
                        <div>
                            <div className="text-3xl font-bold">{stat.value}</div>
                            <div className="text-lg">{stat.label}</div>
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
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
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
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
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
};

export default AdminHome;