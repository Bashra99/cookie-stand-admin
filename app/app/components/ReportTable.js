import React from 'react'
import { Data } from './Data'

export default function ReportTable() {
    
    const hourTotals = Data.reduce((acc, location) => {
        const sales = location[Object.keys(location)[0]];
        sales.forEach((sale, index) => {
            if (acc[index] === undefined) {
                acc[index] = 0;
            }
            acc[index] += sale;
        });
        return acc;
    }, []);
   

    return (
        <div>
             {Data[0] ? (
                <table class="table-auto bg-emerald-300 w-full text-center">
                <thead>
                    <tr>
                        <th class="border border-black-100 ">Location</th>
                        <th class="border border-black-100">6am</th>
                        <th class="border border-black-100">7am</th>
                        <th class="border border-black-100">8am</th>
                        <th class="border border-black-100">9am</th>
                        <th class="border border-black-100">10am</th>
                        <th class="border border-black-100">11am</th>
                        <th class="border border-black-100">12pm</th>
                        <th class="border border-black-100">1pm</th>
                        <th class="border border-black-100">2pm</th>
                        <th class="border border-black-100">3pm</th>
                        <th class="border border-black-100">4pm</th>
                        <th class="border border-black-100">5pm</th>
                        <th class="border border-black-100">total</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {Data.map(row => {
                                const total = row[Object.keys(row)[0]].reduce((acc, sale) => acc + sale, 0);
                                
                                return (
                                    <tr>
                                        <td class="border border-black-100">{Object.keys(row)[0]}</td>
                                        {row[Object.keys(row)[0]].map((sale) => <td class="border border-black-100">{sale}</td>)}

                                        <td class="border border-black-100">{total}</td>
                                        


                                    </tr>
                                );
                            })}
                                    </tbody>
                                                 <tfoot>
                        <tr>
                            <td class="border border-black-100" >Total</td>
                            {hourTotals.map((total) => <td>{total}</td>)}
                            <td class="border border-black-100">{hourTotals.reduce((acc, total) => acc + total, 0)}</td>
                            
                        </tr>
                        </tfoot>


                   
            </table>
            ) : (
                <h1 >No Cookie Stands Available</h1>
            )}
        </div>
    );
}
