
import { ReactNode } from 'react';

export interface SubService {
  id?: string;
  name: string;
  price: string;
  duration?: number; // in minutes
  description?: string;
}

export interface Service {
  id?: string;
  icon: ReactNode;
  title: string;
  category?: string;
  subServices: SubService[];
  isActive?: boolean;
}
