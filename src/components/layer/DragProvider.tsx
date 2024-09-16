'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { type TChildren } from '@/types';

type TProps = TChildren;

export default function DragProvider({ children }: TProps) {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
}
