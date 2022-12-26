import React from 'react';

export const Service = ({service}) => {
    return (
      <div className="overflow-x-auto flex justify-center items-center">
        <table className="table w-6/12 shadow-2xl border-2 border-secondary-200">
          <tbody className="text-center">
            <tr>
              <td className="py-3 px-6">
                {service.serviceName}
              </td>
              <td className='text-secondary'>${service.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};