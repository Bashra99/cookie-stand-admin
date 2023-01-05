import React from 'react'
import { Data } from './Data'

export default function ReportTable() {
    
    
    const hourTotals = Data.reduce((acc, location) => {
        const locationName = Object.keys(location)[0];  
        const locationData = Object.values(location)[0];
        const locationTotal = locationData.reduce((acc, val) => acc + val, 0);
        return {acc,[locationName]: locationTotal}},
         {});
    const total = Object.values(hourTotals).reduce((acc, val) => acc + val, 0);
    const totalRow = {
        'Total': Object.values(hourTotals)
    }
    const allData = [Data, totalRow];
   

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
                                const total = row[Object.keys(row)[0]].reduce((acc, val) => acc + val, 0);
                                return (
                                    <tr key={Object.keys(row)[0]}>
                                        <td>{Object.keys(row)[0]}</td>
                                        {row[Object.keys(row)[0]].map((cell, index) => (
                                            <td key={index}>{cell}</td>
                                        ))}
                                        <td>{total} {}   </td>
                                    </tr>
                                );
                            })}
                                    </tbody>
                   
            </table>
            ) : (
                <h1 >No Cookie Stands Available</h1>
            )}
        </div>
    );
}
