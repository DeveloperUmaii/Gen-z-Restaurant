// React-icons ব্যবহার করার জন্য, আপনাকে প্রথমে এটি ইনস্টল করতে হবে: npm install react-icons
import { FaTrashAlt, FaUserCog } from 'react-icons/fa'; // FaUserCog হল Role আইকনের জন্য

// --- ডামি ডেটা (Dummy Data) ---
const DUMMY_USERS = [
  { id: 1, name: "John Doe", email: "john.doe@gmail.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane.s@gmail.com", role: "User" },
  { id: 3, name: "Ruhul Amin", email: "ruhul.amin@gmail.com", role: "User" },
  { id: 4, name: "Sonia Mirza", email: "sonia.m@gmail.com", role: "Admin" },
  { id: 5, name: "Rajesh K.", email: "rajesh.k@gmail.com", role: "User" },
  { id: 6, name: "Nabila F.", email: "nabila.f@gmail.com", role: "User" },
  { id: 7, name: "Tariq H.", email: "tariq.h@gmail.com", role: "User" },
  { id: 8, name: "Laila B.", email: "laila.b@gmail.com", role: "User" },
  { id: 9, name: "Omar F.", email: "omar.f@gmail.com", role: "Admin" },
];

const AllUsers = () => {
  const totalUsers = DUMMY_USERS.length;

  return (
    <div className="p-4 sm:p-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto my-10">
      
      {/* --- হেডার সেকশন --- */}
      <div className="text-center mb-6">
        <p className="text-sm font-light text-gray-500 tracking-widest">---How many?---</p>
        <h2 className="text-2xl sm:text-3xl font-serif tracking-wide text-gray-800 mt-1">
          MANAGE ALL USERS
        </h2>
      </div>
      
      {/* --- মোট ব্যবহারকারী সংখ্যা --- */}
      <h3 className="text-xl font-bold mb-4 text-gray-700">
        TOTAL USERS: <span className="text-2xl">{totalUsers}</span>
      </h3>
      
      {/* --- টেবিল কন্টেইনার --- */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          
          {/* --- টেবিল হেডার --- */}
          <thead className="bg-amber-800">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white w-12">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                NAME
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white hidden sm:table-cell">
                EMAIL
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white w-20">
                ROLE
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white w-20">
                ACTION
              </th>
            </tr>
          </thead>
          
          {/* --- টেবিল বডি --- */}
          <tbody className="bg-white divide-y divide-gray-100">
            {DUMMY_USERS.map((user, index) => (
              <tr key={user.id} className="hover:bg-amber-50">
                {/* সিরিয়াল নং */}
                <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold text-gray-900 bg-gray-50">
                  {index + 1}
                </td>
                
                {/* নাম */}
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800">
                  {user.name}
                </td>
                
                {/* ইমেল */}
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                  {user.email}
                </td>
                
                {/* রোল আইকন */}
                <td className="px-6 py-3 whitespace-nowrap text-center text-sm">
                  {/* ছবিতে হলুদ-বাদামী আইকনটি অনুসরণ করা হয়েছে */}
                  <span className="inline-flex items-center justify-center p-2 rounded-full bg-yellow-600/20 text-yellow-800 shadow-md">
                    <FaUserCog className="h-5 w-5" />
                  </span>
                </td>
                
                {/* অ্যাকশন (ডিলিট) */}
                <td className="px-6 py-3 whitespace-nowrap text-center text-sm">
                  <button
                    onClick={() => console.log(`Deleting user: ${user.name}`)}
                    className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out shadow-lg"
                    title="Delete User"
                  >
                    <FaTrashAlt className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;