import * as icon from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';
import { LucideIcon as LucideIconType } from 'lucide-react';

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: keyof typeof icon;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon = ({ name, size = 20, color, className, ...props }: IconProps) => {
  const LucideIcon = icon[name] as LucideIconType;

  return (
    <div className={cn('inline-flex', className)} {...props}>
      <LucideIcon size={size} color={color} />
    </div>
  );
};
