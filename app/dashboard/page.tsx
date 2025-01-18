"use client"
import { LeadManagementTable } from '@/components/ui/dataTable'
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Lead Management</h1>
      <LeadManagementTable />
    </div>
  );
}

export default page;