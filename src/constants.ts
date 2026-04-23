import { Contact, Task } from './types';

export const RECENT_CONTACTS: Contact[] = [
  {
    id: '1',
    name: 'Elena Sterling',
    title: 'VP Strategy',
    company: 'Lumina Tech',
    email: 'elena.sterling@lumina.tech',
    phone: '+1 (555) 987-6543',
    address: '123 Tech Lane, San Francisco, CA',
    status: 'OCR Validated',
    lastSeen: '2h ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo4ykAAaFqUEGdR8fKZ-qgB3oleHAhUgu1FLyufuDadwJUDrjuXRJzAqdHvjOO-_hCbTIV8vAuzV2M6QR3_8Ztv8pZ43hsbItHfbjFSh7E35x9-t-RsV2Ais9Ztz85RRkSM_dL5V3hC7RlazFuaPAx6LGaMtHFcXVEgWwcVMCcZ61pYZdjKQJPaSu21MN6DlmvVuEQou7khhAA9YzwXTy5Xj75a6VtqPXr10dDO8f_x7rNHlWH51dETcr5AdEBIATVaCK9tfgY5qs'
  },
  {
    id: '2',
    name: 'Marcus Kane',
    title: 'Founding Partner',
    company: 'Kane & Co.',
    email: 'marcus@kane.com',
    phone: '+1 (555) 123-4567',
    address: '450 Montgomery St, San Francisco, CA',
    status: 'Manual Edit',
    lastSeen: 'Yesterday'
  },
  {
    id: '3',
    name: 'Sarah Wu',
    title: 'Senior Designer',
    company: 'Pixel Flow',
    email: 'sarah.wu@pixelflow.com',
    phone: '+1 (555) 555-5555',
    address: '99 Design Blvd, Austin, TX',
    status: 'Linked',
    lastSeen: '3d ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGPVgN8KGUY6-2WrFRnCf3E_woZ6FMuoXgiQNVOjTSTGv1Lv2a9fs4wFo2d8jWFVWqH7sPbPuL8bd3vRMKUV8tBNNFyJx4aLP_wXSGGyfQBAEMkKYRn5Np2c9XaBsVIAJVod6NWF6csU3n-ElcO0cTUREIH_EZmgRulwLSIc0CLWAaDv15FvmwbJDLqIyxEz0_6xX17N7RL8v5Cdlaxn0pXdtJc4jrFO1hsdQE-NXLSJ7SORgQfsBSGUTA1PBlYgCjDh5hj0Ol3ws'
  }
];

export const TASKS: Task[] = [
  {
    id: '1',
    title: 'Review Q3 Financial Projections',
    status: 'Pending',
    owner: 'David Chen',
    ownerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJYzI6-mS87s5t4wtCOwE4q_2ZrUixhG8CGCxuCW9y1ecZIhJbhgKTl4WAOwQeGFvja_MNx9ExBTeESkaHOFpH4VshrUuWfO0PeAtzGxOICoMBEhhE3NeH8krECiz8gGnQ1ssDpnaOE_LNn7zv_lCOrUUv8tHyl4YlmBHyZTgkcEvauSy6ndPjaol09PiNkfIXiW1u-2SpKYTm8XT0bijW2832KvoAIA_-Qnd6Pq-6zsAi_XjK_N5HmGxiHV6_AicMps_o9Rr9Q2w',
    dueDate: '2023-11-15'
  },
  {
    id: '2',
    title: 'Update CRM contact lists',
    status: 'Completed',
    owner: 'Sarah Jenkins',
    ownerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ1DasapsOdqzg7LfWiy661tdNcik2QJf0D_XfwAMwMd1kvyF0PrD_8yx1990eou6M5Dmrk9iuvC2Q8JKm4063yxr_Zq4VcsVdfSlswNLE7RKZwdzJWrHIK3-wNZ6GJwvAHS6aY_R12sMW3vqZz5q6E7NTn1yyQRKeBx7xvlfvsZ0DNKAKEe4q-Bj_4dH5yUDgG_3xIugCBt2x6s6wtQQaxinFByAZUxCxkKw_UUqsRHd_KPRFfrbu8jILAlrt3QMF4AFKcFX1WuQ',
    dueDate: 'Completed'
  },
  {
    id: '3',
    title: 'Next Step: Send NDA to Lumina',
    status: 'Overdue',
    owner: 'Me',
    ownerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf40HEz-z_V42w9ghvHAma8EpxvXkRus6v9zWVEU8Sk3qhvsNmXrreHY80JbHTX7j6W7VgEzAsPEI6GK-SbW4IwK4BmgL3oAtS5X40QzVsHegbwW2xH0A65VwBIuBoLeEJnhqsWXsZBXabxEhb0PGc5GeriUe1xnn5Hb2Jf3MqnvDMjT_tb1LlLkMqTm9k0RJ3Fi6YK4O_IfE7QTjzHfS9E6cYE_CCwgCfeidIBrbC8tWWpjGVMXiCOb0ScuFPC9m4nU7mmlNoXvY',
    dueDate: 'Due Oct 24'
  }
];
