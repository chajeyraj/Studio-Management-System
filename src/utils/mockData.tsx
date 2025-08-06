import React from 'react';
// Mock data for the application
// Bookings
export const bookings = [{
  id: '1',
  clientId: '101',
  clientName: 'Emma Thompson',
  date: '2023-11-15T10:00:00',
  endDate: '2023-11-15T14:00:00',
  serviceType: 'Wedding Photography',
  status: 'confirmed',
  photographerId: '201',
  photographerName: 'Alex Johnson',
  location: '123 Wedding Venue, City',
  notes: 'Outdoor ceremony, indoor reception',
  price: 1200
}, {
  id: '2',
  clientId: '102',
  clientName: 'James Wilson',
  date: '2023-11-16T13:00:00',
  endDate: '2023-11-16T15:00:00',
  serviceType: 'Corporate Headshots',
  status: 'confirmed',
  photographerId: '202',
  photographerName: 'Sarah Miller',
  location: 'Office Building, Downtown',
  notes: '15 employees, neutral background',
  price: 600
}, {
  id: '3',
  clientId: '103',
  clientName: 'Sophia Garcia',
  date: '2023-11-17T09:00:00',
  endDate: '2023-11-17T11:00:00',
  serviceType: 'Family Portrait',
  status: 'pending',
  photographerId: '201',
  photographerName: 'Alex Johnson',
  location: 'City Park',
  notes: 'Family of 5, including a dog',
  price: 350
}, {
  id: '4',
  clientId: '104',
  clientName: 'Michael Brown',
  date: '2023-11-18T16:00:00',
  endDate: '2023-11-18T18:00:00',
  serviceType: 'Product Photography',
  status: 'confirmed',
  photographerId: '203',
  photographerName: 'David Lee',
  location: 'Studio',
  notes: '20 products, white background',
  price: 800
}, {
  id: '5',
  clientId: '105',
  clientName: 'Olivia Martinez',
  date: '2023-11-20T11:00:00',
  endDate: '2023-11-20T16:00:00',
  serviceType: 'Engagement Session',
  status: 'pending',
  photographerId: '202',
  photographerName: 'Sarah Miller',
  location: 'Botanical Gardens',
  notes: 'Couple wants urban and nature shots',
  price: 500
}];
// Clients
export const clients = [{
  id: '101',
  name: 'Emma Thompson',
  email: 'emma@example.com',
  phone: '555-123-4567',
  address: '123 Main St, Anytown',
  isVip: true,
  joinDate: '2022-01-15',
  notes: 'Prefers afternoon sessions',
  bookings: ['1']
}, {
  id: '102',
  name: 'James Wilson',
  email: 'james@example.com',
  phone: '555-234-5678',
  address: '456 Oak Ave, Somecity',
  isVip: false,
  joinDate: '2022-03-22',
  notes: 'Corporate client, represents XYZ Corp',
  bookings: ['2']
}, {
  id: '103',
  name: 'Sophia Garcia',
  email: 'sophia@example.com',
  phone: '555-345-6789',
  address: '789 Pine St, Othertown',
  isVip: false,
  joinDate: '2022-05-10',
  notes: 'Has young children and a dog',
  bookings: ['3']
}, {
  id: '104',
  name: 'Michael Brown',
  email: 'michael@example.com',
  phone: '555-456-7890',
  address: '101 Elm Rd, Somewhere',
  isVip: true,
  joinDate: '2022-02-05',
  notes: 'Repeat business client, product photography',
  bookings: ['4']
}, {
  id: '105',
  name: 'Olivia Martinez',
  email: 'olivia@example.com',
  phone: '555-567-8901',
  address: '202 Maple Dr, Anycity',
  isVip: false,
  joinDate: '2022-07-18',
  notes: 'Getting married in December',
  bookings: ['5']
}];
// Team Members
export const team = [{
  id: '201',
  name: 'Alex Johnson',
  email: 'alex@studiomanager.com',
  phone: '555-111-2222',
  role: 'Lead Photographer',
  specialties: ['Wedding', 'Portrait', 'Family'],
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  bio: '10 years of experience in wedding and portrait photography.'
}, {
  id: '202',
  name: 'Sarah Miller',
  email: 'sarah@studiomanager.com',
  phone: '555-222-3333',
  role: 'Senior Photographer',
  specialties: ['Corporate', 'Engagement', 'Event'],
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  bio: 'Specializes in corporate photography and events.'
}, {
  id: '203',
  name: 'David Lee',
  email: 'david@studiomanager.com',
  phone: '555-333-4444',
  role: 'Product Photographer',
  specialties: ['Product', 'Commercial', 'Food'],
  avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  bio: 'Expert in product and commercial photography with studio lighting.'
}, {
  id: '204',
  name: 'Jessica Taylor',
  email: 'jessica@studiomanager.com',
  phone: '555-444-5555',
  role: 'Assistant Photographer',
  specialties: ['Wedding', 'Event'],
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  bio: 'Wedding and event second shooter with 3 years of experience.'
}, {
  id: '205',
  name: 'Ryan Clark',
  email: 'ryan@studiomanager.com',
  phone: '555-555-6666',
  role: 'Videographer',
  specialties: ['Wedding Video', 'Corporate Video', 'Promotional'],
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  bio: 'Cinematographer specializing in wedding and promotional videos.'
}];
// Equipment
export const equipment = [{
  id: '301',
  name: 'Canon EOS R5',
  type: 'Camera',
  status: 'available',
  serialNumber: 'CN12345678',
  purchaseDate: '2022-01-10',
  lastMaintenance: '2023-06-15',
  notes: 'Primary wedding camera'
}, {
  id: '302',
  name: 'Sony A7 III',
  type: 'Camera',
  status: 'in_use',
  serialNumber: 'SN98765432',
  assignedTo: '202',
  purchaseDate: '2021-11-05',
  lastMaintenance: '2023-05-20',
  notes: "Sarah's primary camera"
}, {
  id: '303',
  name: 'Canon 70-200mm f/2.8',
  type: 'Lens',
  status: 'available',
  serialNumber: 'LN24681357',
  purchaseDate: '2022-02-15',
  lastMaintenance: '2023-06-15',
  notes: 'Telephoto zoom lens'
}, {
  id: '304',
  name: 'Profoto B10 Plus',
  type: 'Lighting',
  status: 'in_use',
  serialNumber: 'PF13579246',
  assignedTo: '203',
  purchaseDate: '2022-03-20',
  lastMaintenance: '2023-04-10',
  notes: 'Studio strobe'
}, {
  id: '305',
  name: 'DJI Ronin-S',
  type: 'Stabilizer',
  status: 'maintenance',
  serialNumber: 'DJ97531246',
  purchaseDate: '2021-10-12',
  lastMaintenance: '2023-07-05',
  notes: 'Gimbal stabilizer, needs new battery'
}, {
  id: '306',
  name: 'MacBook Pro 16"',
  type: 'Computer',
  status: 'available',
  serialNumber: 'MP24682468',
  purchaseDate: '2022-04-25',
  lastMaintenance: '2023-03-15',
  notes: 'Editing laptop'
}];
// Gallery Projects
export const projects = [{
  id: '401',
  clientId: '101',
  clientName: 'Emma Thompson',
  title: 'Thompson Wedding',
  date: '2023-10-15',
  type: 'Wedding',
  photographerId: '201',
  status: 'completed',
  password: 'wedding2023',
  isPasswordProtected: true,
  images: [{
    id: 'img1',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    caption: 'Ceremony'
  }, {
    id: 'img2',
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    caption: 'Reception'
  }, {
    id: 'img3',
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    caption: 'First Dance'
  }]
}, {
  id: '402',
  clientId: '102',
  clientName: 'James Wilson',
  title: 'XYZ Corp Headshots',
  date: '2023-09-22',
  type: 'Corporate',
  photographerId: '202',
  status: 'completed',
  password: 'xyz2023',
  isPasswordProtected: true,
  images: [{
    id: 'img4',
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    caption: 'CEO Portrait'
  }, {
    id: 'img5',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    caption: 'Team Photo'
  }]
}, {
  id: '403',
  clientId: '104',
  clientName: 'Michael Brown',
  title: 'Product Catalog Fall 2023',
  date: '2023-08-10',
  type: 'Product',
  photographerId: '203',
  status: 'completed',
  password: 'products2023',
  isPasswordProtected: false,
  images: [{
    id: 'img6',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    caption: 'Watch'
  }, {
    id: 'img7',
    url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    caption: 'Sunglasses'
  }, {
    id: 'img8',
    url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    caption: 'Camera'
  }]
}];
// Invoices
export const invoices = [{
  id: '501',
  clientId: '101',
  clientName: 'Emma Thompson',
  projectId: '401',
  date: '2023-10-20',
  dueDate: '2023-11-20',
  amount: 1500,
  status: 'paid',
  items: [{
    description: 'Wedding Photography Package',
    quantity: 1,
    rate: 1200,
    amount: 1200
  }, {
    description: 'Additional Prints',
    quantity: 1,
    rate: 300,
    amount: 300
  }]
}, {
  id: '502',
  clientId: '102',
  clientName: 'James Wilson',
  projectId: '402',
  date: '2023-09-25',
  dueDate: '2023-10-25',
  amount: 800,
  status: 'paid',
  items: [{
    description: 'Corporate Headshots (15 employees)',
    quantity: 15,
    rate: 50,
    amount: 750
  }, {
    description: 'Digital Delivery',
    quantity: 1,
    rate: 50,
    amount: 50
  }]
}, {
  id: '503',
  clientId: '104',
  clientName: 'Michael Brown',
  projectId: '403',
  date: '2023-08-15',
  dueDate: '2023-09-15',
  amount: 1200,
  status: 'pending',
  items: [{
    description: 'Product Photography (20 items)',
    quantity: 20,
    rate: 40,
    amount: 800
  }, {
    description: 'Photo Editing & Retouching',
    quantity: 10,
    rate: 40,
    amount: 400
  }]
}, {
  id: '504',
  clientId: '103',
  clientName: 'Sophia Garcia',
  date: '2023-11-05',
  dueDate: '2023-12-05',
  amount: 350,
  status: 'draft',
  items: [{
    description: 'Family Portrait Session',
    quantity: 1,
    rate: 300,
    amount: 300
  }, {
    description: 'Digital Images',
    quantity: 1,
    rate: 50,
    amount: 50
  }]
}];
// Studio settings
export const studioSettings = {
  name: 'Capture Studio',
  logo: 'https://placehold.co/200x60?text=Capture+Studio',
  address: '123 Photography Lane, Artville, AV 12345',
  phone: '555-STUDIO-1',
  email: 'info@capturestudio.com',
  website: 'www.capturestudio.com',
  workingHours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed'
  },
  socialMedia: {
    instagram: '@capturestudio',
    facebook: 'CaptureStudioOfficial',
    twitter: '@CaptureStudio'
  }
};
// Dashboard stats
export const dashboardStats = {
  totalBookings: 28,
  upcomingBookings: 12,
  completedBookings: 16,
  totalClients: 24,
  activeClients: 18,
  totalRevenue: 32500,
  equipmentStatus: {
    available: 15,
    inUse: 8,
    maintenance: 3
  },
  recentActivity: [{
    id: '1',
    type: 'booking',
    message: 'New booking: Emma Thompson - Wedding Photography',
    time: '2 hours ago'
  }, {
    id: '2',
    type: 'invoice',
    message: 'Invoice #501 marked as paid',
    time: '5 hours ago'
  }, {
    id: '3',
    type: 'client',
    message: 'New client registered: Olivia Martinez',
    time: '1 day ago'
  }, {
    id: '4',
    type: 'equipment',
    message: 'DJI Ronin-S marked for maintenance',
    time: '2 days ago'
  }]
};