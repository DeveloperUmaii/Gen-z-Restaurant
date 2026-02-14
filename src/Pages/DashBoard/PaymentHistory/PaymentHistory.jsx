import { useQuery } from "@tanstack/react-query";
import SecTionTitle from "../../../Components/SecTionTitle";
// import { backEndServerLinkLocal } from "../../../hooks/hookAxiosLocal";
import hookAxiosLocal from "../../../hooks/hookAxiosLocal";

const PaymentHistory = () => {


    const backEndServerLinkLocal = hookAxiosLocal();

    const { data:paymentistory =[]} = useQuery({
      queryKey: ['paymentistory'],
      queryFn: async () => {
        // const res = await backEndServerLinkLocal.get('/paymenthistory')
        // const res = await backEndServerLinkLocal.get(`/paymenthistory/${email}`)
        return res.data;
        console.log(res.data);
      }
    })
  // উদাহরণস্বরূপ কিছু ডাটা (এটি আপনি API থেকে আনবেন)
  const payments = [
    {
      email: "info@gmail.com",
      category: "Food Order",
      price: 71.5,
      date: "Monday, April 10, 2023",
    },
    {
      email: "info@gmail.com",
      category: "Food Order",
      price: 71.5,
      date: "Monday, April 10, 2023",
    },
    {
      email: "info@gmail.com",
      category: "Food Order",
      price: 71.5,
      date: "Monday, April 10, 2023",
    },
    {
      email: "info@gmail.com",
      category: "Food Order",
      price: 71.5,
      date: "Monday, April 10, 2023",
    },
    {
      email: "info@gmail.com",
      category: "Food Order",
      price: 71.5,
      date: "Monday, April 10, 2023",
    },
    {
      email: "info@gmail.com",
      category: "Food Order",
      price: 71.5,
      date: "Monday, April 10, 2023",
    },
  ];

  return (
    <div className="w-full px-4 md:px-10 py-10 bg-white min-h-screen">
      {/* Header Section */}
      <div className="text-center mt-12">
              <SecTionTitle subHeading="---At a Glance!---" heading="Payment History" />
      </div>

      {/* Table Container */}
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-12 shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold uppercase mb-6 font-serif">
          Total Payments: {paymentistory?.length}
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full border-separate border-spacing-y-0">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th className="py-5 rounded-tl-xl uppercase text-sm">Email</th>
                <th className="uppercase text-sm">Category</th>
                <th className="uppercase text-sm">Total Price</th>
                <th className="py-5 rounded-tr-xl uppercase text-sm">
                  Payment Date
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentistory.map((paymentistory, index) => (
                <tr key={index} className="border-b">
                  <td className="py-5 text-gray-500">{paymentistory?.email}</td>
                  <td className="text-gray-500">{paymentistory?.category}</td>
                  <td className="text-gray-500 font-medium">
                    ${paymentistory?.price}
                  </td>
                  <td className="text-gray-500">{paymentistory.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
