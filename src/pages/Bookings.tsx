import React, { useState } from 'react';
import { bookings } from '../utils/mockData';
import { PlusIcon, SearchIcon, FilterIcon, CalendarIcon, CheckCircleIcon, ClockIcon, XIcon, EditIcon, TrashIcon } from 'lucide-react';
export const Bookings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  // Filter bookings based on search term and filters
  const filteredBookings = bookings.filter(booking => {
    // Search filter
    const searchMatch = booking.clientName.toLowerCase().includes(searchTerm.toLowerCase()) || booking.serviceType.toLowerCase().includes(searchTerm.toLowerCase());
    // Status filter
    const statusMatch = statusFilter === 'all' || booking.status === statusFilter;
    // Date filter - simplified for demo
    let dateMatch = true;
    if (dateFilter) {
      const bookingDate = new Date(booking.date).toISOString().split('T')[0];
      dateMatch = bookingDate === dateFilter;
    }
    return searchMatch && statusMatch && dateMatch;
  });
  const handleAddBooking = () => {
    setSelectedBooking(null);
    setShowModal(true);
  };
  const handleEditBooking = (booking: any) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };
  return <div className="space-y-6 animate-fadeIn relative">
      {/* Background animation */}
      <div className="absolute inset-0 bg-moving-gradient pointer-events-none -z-10"></div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Bookings</h1>
        <div className="mt-3 sm:mt-0">
          <button type="button" onClick={handleAddBooking} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add New Booking
          </button>
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-4 border-b border-gray-200 sm:p-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Filters
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                Search
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input type="text" name="search" id="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search by client or service" />
              </div>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select id="status" name="status" value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option value="all">All</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input type="date" name="date" id="date" value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
          </div>
        </div>
        {/* Bookings Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Photographer
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBookings.length > 0 ? filteredBookings.map(booking => <tr key={booking.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-indigo-700 font-medium">
                            {booking.clientName.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {booking.clientName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {booking.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(booking.date).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(booking.date).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}{' '}
                        -
                        {new Date(booking.endDate).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {booking.serviceType}
                      </div>
                      <div className="text-sm text-gray-500">
                        ${booking.price}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.photographerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => handleEditBooking(booking)} className="text-indigo-600 hover:text-indigo-900 mr-4 transition-colors duration-150">
                        <EditIcon className="h-5 w-5" />
                        <span className="sr-only">Edit</span>
                      </button>
                      <button className="text-red-600 hover:text-red-900 transition-colors duration-150">
                        <TrashIcon className="h-5 w-5" />
                        <span className="sr-only">Delete</span>
                      </button>
                    </td>
                  </tr>) : <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                    No bookings found matching your filters.
                  </td>
                </tr>}
            </tbody>
          </table>
        </div>
      </div>
      {/* Add/Edit Booking Modal */}
      {showModal && <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button type="button" className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setShowModal(false)}>
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {selectedBooking ? 'Edit Booking' : 'Add New Booking'}
                  </h3>
                  <div className="mt-4">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="client" className="block text-sm font-medium text-gray-700">
                          Client
                        </label>
                        <select id="client" name="client" defaultValue={selectedBooking?.clientId || ''} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option value="">Select a client</option>
                          <option value="101">Emma Thompson</option>
                          <option value="102">James Wilson</option>
                          <option value="103">Sophia Garcia</option>
                          <option value="104">Michael Brown</option>
                          <option value="105">Olivia Martinez</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date
                          </label>
                          <input type="date" name="date" id="date" defaultValue={selectedBooking ? new Date(selectedBooking.date).toISOString().split('T')[0] : ''} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                            Time
                          </label>
                          <input type="time" name="time" id="time" defaultValue={selectedBooking ? new Date(selectedBooking.date).toTimeString().slice(0, 5) : ''} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                          Service Type
                        </label>
                        <select id="service" name="service" defaultValue={selectedBooking?.serviceType || ''} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option value="">Select a service</option>
                          <option value="Wedding Photography">
                            Wedding Photography
                          </option>
                          <option value="Corporate Headshots">
                            Corporate Headshots
                          </option>
                          <option value="Family Portrait">
                            Family Portrait
                          </option>
                          <option value="Product Photography">
                            Product Photography
                          </option>
                          <option value="Engagement Session">
                            Engagement Session
                          </option>
                          <option value="Event Photography">
                            Event Photography
                          </option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="photographer" className="block text-sm font-medium text-gray-700">
                          Photographer
                        </label>
                        <select id="photographer" name="photographer" defaultValue={selectedBooking?.photographerId || ''} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option value="">Select a photographer</option>
                          <option value="201">Alex Johnson</option>
                          <option value="202">Sarah Miller</option>
                          <option value="203">David Lee</option>
                          <option value="204">Jessica Taylor</option>
                          <option value="205">Ryan Clark</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                          Location
                        </label>
                        <input type="text" name="location" id="location" defaultValue={selectedBooking?.location || ''} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter location" />
                      </div>
                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                          Notes
                        </label>
                        <textarea id="notes" name="notes" rows={3} defaultValue={selectedBooking?.notes || ''} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Add any special requirements or notes" />
                      </div>
                      <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                          Status
                        </label>
                        <select id="status" name="status" defaultValue={selectedBooking?.status || 'pending'} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm transition-colors duration-200" onClick={() => setShowModal(false)}>
                  {selectedBooking ? 'Save Changes' : 'Create Booking'}
                </button>
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm transition-colors duration-200" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};