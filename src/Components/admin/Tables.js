import React from 'react'

function Tables({data}) {
  return (



                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img className="rounded-full" src={data.img} width="40" height="40" alt="Alex Shatov"/></div>
                                        <div className="font-medium text-gray-800">{data.name}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">{data.name}@gmail.com</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center justify-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img className="rounded-full" src={data.text} width="40" height="40" alt="Alex Shatov"/></div>
                                    </div>
                                </td>
                                
                            </tr>
                            

  )
}

export default Tables
