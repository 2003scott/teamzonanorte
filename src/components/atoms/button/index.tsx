import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Icon } from '../icon';
import * as icon from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white shadow hover:bg-primary/90',
        secondary: 'bg-secondary text-white shadow hover:bg-secondary/90'
      },
      size: {
        default: 'h-9 rounded-md px-8 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-9 px-4 py-2',
        icon: 'h-9 w-9',
        none: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconName?: keyof typeof icon;
  positionIcon?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconName, positionIcon = 'right', ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {iconName && positionIcon === 'left' && <Icon name={iconName} className="mr-2" />}
        {props.children}
        {iconName && positionIcon === 'right' && <Icon name={iconName} className="ml-2" />}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
