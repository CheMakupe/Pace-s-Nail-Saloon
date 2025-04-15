
import { ReactNode } from 'react';

export interface SubService {
  name: string;
  price: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  subServices: SubService[];
}
