'use client';

import React from 'react';
import Editor from './editor';
import { Toolbar } from './Toolbar';
import { Navbar } from './Navbar';

const Page = () => {
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 z-10 right-0 bg-[#FAFBFD] print:hidden">
        <Navbar />
        <Toolbar />
      </div>
      <div className="pt-[114px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
};

export default Page;
