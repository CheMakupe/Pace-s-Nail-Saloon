
export interface BookingData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  submittedAt: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ServiceOption {
  id: string;
  name: string;
  category: 'manicure' | 'pedicure' | 'soak-off' | 'nail-art';
  price: string;
  duration?: number; // in minutes
  description?: string;
}
