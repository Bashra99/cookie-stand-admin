import React from 'react'
import Form from './Form'
import ReportTable from './ReportTable'

export default function Main() {
  return (
    <div  >
      <div class="flex flex-row-reverse  ">
        <Form />

      </div>
      <div  class="relative overflow-x-auto m-20">
        <ReportTable />

        </div>
    </div>


  )
}