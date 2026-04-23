export type Screen = 'Home' | 'Scan' | 'Contact' | 'Tasks' | 'Profile' | 'Guide';

export interface Contact {
  id: string;
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  avatar?: string;
  status?: 'OCR Validated' | 'Manual Edit' | 'Linked';
  lastSeen: string;
}

export interface Task {
  id: string;
  title: string;
  status: 'Pending' | 'Completed' | 'Overdue' | 'Extracted' | 'Upcoming';
  owner: string;
  ownerAvatar?: string;
  dueDate: string;
}
