import React from 'react';

import clsx from 'clsx';

import { type TGlobalProps } from '@/types';

export default function Layout({ children, className }: TGlobalProps) {
  return <main className={clsx('', className)}>{children}</main>;
}
