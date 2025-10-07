'use client';

import React from 'react';
import Editor from './editor';
import {Toolbar} from './Toolbar';

const Page = () => {
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Toolbar/>
      <Editor />
    </div>
  );
};

export default Page;
