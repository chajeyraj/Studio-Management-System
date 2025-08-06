import React, { useState } from 'react';
import { clients, bookings } from '../utils/mockData';
import { PlusIcon, SearchIcon, StarIcon, EditIcon, TrashIcon, XIcon, UserIcon, PhoneIcon, MailIcon, MapPinIcon, CalendarIcon } from 'lucide-react';
export const Clients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showVipOnly, setShowVipOnly] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [showClientDetails, setShowClientDetails] = useState<string | null>(null);
  // Filter clients based on search term and VIP filter
  const filteredClients = clients.filter(client => {
    const searchMatch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) || client.email.toLowerCase().includes(searchTerm.toLowerCase());
    const vipMatch = showVipOnly ? client.isVip : true;
    return searchMatch && vipMatch;
  });
  const handleAddClient = () => {
    setSelectedClient(null);
    setShowModal(true);
  };
  const handleEditClient = (client: any) => {
    setSelectedClient(client);
    setShowModal(true);
  };
  const toggleClientDetails = (clientId: string) => {
    setShowClientDetails(showClientDetails === clientId ? null : clientId);
  };
  // Get client's bookings
  const getClientBookings = (clientId: string) => {
    return bookings.filter(booking => booking.clientId === clientId);
  };
  return <div className="space-y-6 animate-fadeIn relative">
      {/* Background animation */}
      <div className="absolute inset-0 bg-dots pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-moving-gradient pointer-events-none -z-10"></div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
        <div className="mt-3 sm:mt-0">
          <button type="button" onClick={handleAddClient} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add New Client
          </button>
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-4 border-b border-gray-200 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Clients
            </h2>
            <div className="mt-3 sm:mt-0 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input type="text" name="search" id="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search clients" />
              </div>
              <div className="flex items-center">
                <input id="vip-only" name="vip-only" type="checkbox" checked={showVipOnly} onChange={e => setShowVipOnly(e.target.checked)} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="vip-only" className="ml-2 block text-sm text-gray-900">
                  VIP Clients Only
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Clients List */}
        <ul className="divide-y divide-gray-200">
          {filteredClients.length > 0 ? filteredClients.map(client => <li key={client.id}>
                <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors duration-150 cursor-pointer" onClick={() => toggleClientDetails(client.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-700 font-medium">
                          {client.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h3 className="text-sm font-medium text-gray-900">
                            {client.name}
                          </h3>
                          {client.isVip && <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              <StarIcon className="h-3 w-3 mr-1" aria-hidden="true" />
                              VIP
                            </span>}
                        </div>
                        <div className="flex mt-1">
                          <p className="text-sm text-gray-500 mr-4 flex items-center">
                            <MailIcon className="h-4 w-4 mr-1 text-gray-400" aria-hidden="true" />
                            {client.email}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center">
                            <PhoneIcon className="h-4 w-4 mr-1 text-gray-400" aria-hidden="true" />
                            {client.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={e => {
                  e.stopPropagation();
                  handleEditClient(client);
                }} className="inline-flex items-center p-1 border border-transparent rounded-full text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
                        <EditIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button onClick={e => e.stopPropagation()} className="inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200">
                        <TrashIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Expanded client details */}
                {showClientDetails === client.id && <div className="px-4 py-5 sm:px-6 bg-gray-50 border-t border-gray-200 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Contact Information
                          </h4>
                          <div className="mt-2 space-y-2">
                            <p className="text-sm text-gray-900 flex items-center">
                              <MapPinIcon className="h-4 w-4 mr-2 text-gray-400" aria-hidden="true" />
                              {client.address}
                            </p>
                            <p className="text-sm text-gray-900 flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-2 text-gray-400" aria-hidden="true" />
                              Client since:{' '}
                              {new Date(client.joinDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Notes
                          </h4>
                          <p className="mt-2 text-sm text-gray-900">
                            {client.notes || 'No notes available.'}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Booking History
                        </h4>
                        <div className="mt-2">
                          {getClientBookings(client.id).length > 0 ? <ul className="divide-y divide-gray-200">
                              {getClientBookings(client.id).map(booking => <li key={booking.id} className="py-2">
                                  <div className="flex justify-between">
                                    <div>
                                      <p className="text-sm font-medium text-gray-900">
                                        {booking.serviceType}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {new Date(booking.date).toLocaleDateString()}
                                        ,{' '}
                                        {new Date(booking.date).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                                      </p>
                                    </div>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                    </span>
                                  </div>
                                </li>)}
                            </ul> : <p className="text-sm text-gray-500">
                              No booking history available.
                            </p>}
                        </div>
                      </div>
                    </div>
                  </div>}
              </li>) : <li className="px-4 py-6 sm:px-6 text-center text-gray-500">
              No clients found matching your search.
            </li>}
        </ul>
      </div>
      {/* Add/Edit Client Modal */}
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
                    {selectedClient ? 'Edit Client' : 'Add New Client'}
                  </h3>
                  <div className="mt-4">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input type="text" name="name" id="name" defaultValue={selectedClient?.name || ''} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="John Doe" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input type="email" name="email" id="email" defaultValue={selectedClient?.email || ''} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="client@example.com" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input type="text" name="phone" id="phone" defaultValue={selectedClient?.phone || ''} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="555-123-4567" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input type="text" name="address" id="address" defaultValue={selectedClient?.address || ''} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="123 Main St, Anytown" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                          Notes
                        </label>
                        <textarea id="notes" name="notes" rows={3} defaultValue={selectedClient?.notes || ''} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Add any notes about this client" />
                      </div>
                      <div className="flex items-center">
                        <input id="is-vip" name="is-vip" type="checkbox" defaultChecked={selectedClient?.isVip || false} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="is-vip" className="ml-2 block text-sm text-gray-900">
                          Mark as VIP client
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm transition-colors duration-200" onClick={() => setShowModal(false)}>
                  {selectedClient ? 'Save Changes' : 'Add Client'}
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