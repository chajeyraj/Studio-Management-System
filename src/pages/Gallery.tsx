import React, { useEffect, useState } from 'react';
import { projects } from '../utils/mockData';
import { LockIcon, UnlockIcon, EyeIcon, EyeOffIcon, XIcon } from 'lucide-react';
export const Gallery: React.FC = () => {
  // State to track which galleries have been unlocked
  const [unlockedGalleries, setUnlockedGalleries] = useState<Record<string, boolean>>({});
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // Load unlocked galleries from localStorage on component mount
  useEffect(() => {
    const savedUnlocked = localStorage.getItem('unlockedGalleries');
    if (savedUnlocked) {
      try {
        setUnlockedGalleries(JSON.parse(savedUnlocked));
      } catch (e) {
        console.error('Failed to parse unlocked galleries from localStorage');
      }
    }
  }, []);
  // Save unlocked galleries to localStorage when they change
  useEffect(() => {
    if (Object.keys(unlockedGalleries).length > 0) {
      localStorage.setItem('unlockedGalleries', JSON.stringify(unlockedGalleries));
    }
  }, [unlockedGalleries]);
  const handlePasswordSubmit = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    if (password === project.password) {
      setUnlockedGalleries(prev => ({
        ...prev,
        [projectId]: true
      }));
      setPassword('');
      setError('');
      setSelectedProject(null);
    } else {
      setError('Incorrect password. Please try again.');
    }
  };
  const handleLockGallery = (projectId: string) => {
    setUnlockedGalleries(prev => {
      const updated = {
        ...prev
      };
      delete updated[projectId];
      return updated;
    });
  };
  const isGalleryUnlocked = (projectId: string) => {
    return !projects.find(p => p.id === projectId)?.isPasswordProtected || unlockedGalleries[projectId];
  };
  return <div className="space-y-6 animate-fadeIn relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-moving-gradient pointer-events-none -z-10"></div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 hover-lift">
            Upload New Gallery
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6 relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 card-hover animate-fadeIn" style={{
          animationDelay: `${0.1 * index}s`
        }}>
              <div className="relative aspect-w-3 aspect-h-2">
                {project.images && project.images.length > 0 && <>
                    {isGalleryUnlocked(project.id) ? <img src={project.images[0].url} alt={project.title} className="w-full h-48 object-cover transition-all duration-500" /> : <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <LockIcon className="h-12 w-12 text-gray-400 mx-auto animate-pulse" />
                          <p className="mt-2 text-sm text-gray-500">
                            Password Protected
                          </p>
                        </div>
                      </div>}
                    {/* Password protection indicator */}
                    {project.isPasswordProtected && <div className="absolute top-2 right-2">
                        {isGalleryUnlocked(project.id) ? <button onClick={() => handleLockGallery(project.id)} className="p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors duration-150 hover-lift" title="Lock gallery">
                            <UnlockIcon className="h-4 w-4 text-green-600" />
                          </button> : <div className="p-1.5 bg-white rounded-full shadow-sm">
                            <LockIcon className="h-4 w-4 text-red-600 animate-pulse" />
                          </div>}
                      </div>}
                  </>}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">{project.clientName}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-500">
                    {new Date(project.date).toLocaleDateString()}
                  </p>
                  {project.isPasswordProtected && !isGalleryUnlocked(project.id) && <button onClick={() => setSelectedProject(project.id)} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover-lift">
                        Unlock
                      </button>}
                </div>
              </div>
            </div>)}
        </div>
      </div>
      {/* Password Modal */}
      {selectedProject && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 animate-slideInRight">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Enter Gallery Password
              </h3>
              <button onClick={() => {
            setSelectedProject(null);
            setPassword('');
            setError('');
          }} className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              This gallery is password protected. Please enter the password to
              view it.
            </p>
            {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm animate-pulse">
                {error}
              </div>}
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="block w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200" placeholder="Enter password" autoComplete="off" />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500 transition-colors duration-200" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOffIcon className="h-5 w-5" aria-hidden="true" /> : <EyeIcon className="h-5 w-5" aria-hidden="true" />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <button type="button" className="mr-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200" onClick={() => {
            setSelectedProject(null);
            setPassword('');
            setError('');
          }}>
                Cancel
              </button>
              <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover-lift" onClick={() => handlePasswordSubmit(selectedProject)}>
                Unlock Gallery
              </button>
            </div>
          </div>
        </div>}
    </div>;
};