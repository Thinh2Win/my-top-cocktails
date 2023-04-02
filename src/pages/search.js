import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import SearchDisplay from '@/components/SearchDisplay/SearchDisplay';
import Table from '@/components/Table/Table';

export default function search() {
  return (
    <>
      <Navbar />
      <SearchDisplay />
      <Table />
    </>
  )
}
