import React from 'react';

const Draft = () => {
    return (
        <div>
            







                  <td className="flex flex-col items-center justify-center gap-1">
                    {/* আইকন উপরে থাকবে */}
                    <MdOutlinePending className="text-2xl text-green-600" />

                    {/* টেক্সট একদম আইকনের নিচে থাকবে */}
                    <span
                      className={`text-sm font-medium ${booking.status === "pending" ? "text-green-600" : "text-orange-600"}`}>
                      {booking.status}
                    </span>
                    {booking.status === "pending" ?                     
                    <span
                      className='text-sm font-medium  text-green-600'>
                      {booking.status}
                    </span> : 
                    
                    
                    <span
                      className='text-sm font-medium text-orange-600 '>
                      {booking.status}
                    </span> }



                  </td>












        </div>
    );
};

export default Draft;