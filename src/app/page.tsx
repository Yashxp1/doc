import { ModeToggle } from '@/components/darkmode/ModeToggle';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <Link href="/document/123">Landing page</Link>
      <ModeToggle />
    </div>
  );
};

export default page;
