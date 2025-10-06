'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const params = useParams();

  return <div>DocumentID: {params.id}</div>;
};

export default Page;
