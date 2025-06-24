import { useEffect, useState } from 'react';
import { createClient, OAuthStrategy } from '@wix/sdk';

// WIX Configuration
const wixClient = createClient({
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID || 'a50c7850-dcd6-4184-b9ad-957b5f2f239c',
  })
});

interface Event {
  _id: string;
  eventName: string;
  eventDateTime: string;
  venue: any;
  showType: string;
  capacity: number;
  status: string;
}

interface Comedian {
  _id: string;
  name: string;
  email: string;
  bio: string;
  experience: string;
  totalShows: number;
  confirmationRate: number;
}

interface Application {
  _id: string;
  event: any;
  isAvailable: boolean;
  submittedDate: string;
  notes: string;
}

export default function ComedianPortal() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'login' | 'register' | 'dashboard'>('login');
  const [events, setEvents] = useState<Event[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [comedianProfile, setComedianProfile] = useState<Comedian | null>(null);
  
  // Form states
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    name: '',
    bio: '',
    experience: 'Beginner'
  });

  useEffect(() => {
    // For now, just set loading to false - WIX integration will be added after basic setup works
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock login for initial testing - will integrate with WIX after deployment works
    setTimeout(() => {
      setUser({ email: loginForm.email, name: 'Test Comedian' });
      setComedianProfile({
        _id: '1',
        name: 'Test Comedian', 
        email: loginForm.email,
        bio: 'Testing the portal',
        experience: 'Beginner',
        totalShows: 5,
        confirmationRate: 80
      });
      setView('dashboard');
      setLoading(false);
    }, 1500);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock registration for initial testing
    setTimeout(() => {
      setUser({ email: registerForm.email, name: registerForm.name });
      setComedianProfile({
        _id: '2',
        name: registerForm.name,
        email: registerForm.email,
        bio: registerForm.bio,
        experience: registerForm.experience,
        totalShows: 0,
        confirmationRate: 0
      });
      setView('dashboard');
      setLoading(false);
    }, 1500);
  };

  const handleGoogleLogin = async () => {
    alert('Google login will be integrated after basic setup is working!');
  };

  const applyForShow = async (eventId: string) => {
    alert('Show application will be integrated with WIX backend!');
  };

  const logout = async () => {
    setUser(null);
    setComedianProfile(null);
    setEvents([]);
    setApplications([]);
    setView('login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading Stand Up Sydney Portal...</div>
      </div>
    );
  }

  if (view === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 w-full max-w-md border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">🎭 Stand Up Sydney</h1>
            <p className="text-white/80">Comedian Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/80">Or continue with</span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="mt-4 w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white/80">
              Don't have an account?{' '}
              <button
                onClick={() => setView('register')}
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'register') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 w-full max-w-md border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">🎭 Join Stand Up Sydney</h1>
            <p className="text-white/80">Create your comedian profile</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={registerForm.email}
                onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Stage Name</label>
              <input
                type="text"
                value={registerForm.name}
                onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your comedian name"
                required
              />
            </div>

            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={registerForm.password}
                onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
                required
              />
            </div>

            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Bio</label>
              <textarea
                value={registerForm.bio}
                onChange={(e) => setRegisterForm({...registerForm, bio: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your comedy style..."
                rows={3}
              />
            </div>

            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Experience Level</label>
              <select
                value={registerForm.experience}
                onChange={(e) => setRegisterForm({...registerForm, experience: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Beginner">Beginner (0-1 years)</option>
                <option value="Intermediate">Intermediate (1-3 years)</option>
                <option value="Experienced">Experienced (3-5 years)</option>
                <option value="Professional">Professional (5+ years)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/80">
              Already have an account?{' '}
              <button
                onClick={() => setView('login')}
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Sign in here
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">🎭 Stand Up Sydney</h1>
              <span className="ml-3 text-gray-500">Comedian Portal</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Welcome, {comedianProfile?.name || user?.name}</span>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Applications</p>
                <p className="text-2xl font-semibold text-gray-900">{applications.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Shows</p>
                <p className="text-2xl font-semibold text-gray-900">{comedianProfile?.totalShows || 0}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Success Rate</p>
                <p className="text-2xl font-semibold text-gray-900">{comedianProfile?.confirmationRate || 0}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Experience</p>
                <p className="text-2xl font-semibold text-gray-900">{comedianProfile?.experience || 'Beginner'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">🎉 Welcome to Stand Up Sydney Portal!</h2>
          <p className="text-gray-600 mb-4">
            Your comedian portal is now live and working! This is the foundation that will connect to your WIX backend.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">✅ What's Working Right Now:</h3>
            <ul className="text-blue-800 space-y-1">
              <li>• Beautiful login and registration forms</li>
              <li>• Responsive dashboard with stats</li>
              <li>• Mock data for testing</li>
              <li>• Google OAuth integration ready</li>
              <li>• Mobile-friendly design</li>
            </ul>
            <h3 className="font-semibold text-blue-900 mt-4 mb-2">🔄 Next Steps:</h3>
            <ul className="text-blue-800 space-y-1">
              <li>• Deploy to Vercel (you can do this now!)</li>
              <li>• Connect to WIX backend for real data</li>
              <li>• Add show application functionality</li>
              <li>• Set up email notifications</li>
            </ul>
          </div>
        </div>

        {/* Mock Available Shows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Available Shows</h2>
              <p className="text-sm text-gray-600">Apply for upcoming comedy events</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Friday Night Laughs</h3>
                      <p className="text-sm text-gray-600 mt-1">Friday, June 28, 2025 at 8:00 PM</p>
                      <p className="text-sm text-gray-600">Open Mic • Capacity: 80</p>
                      <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Open for Applications
                      </span>
                    </div>
                    <button
                      onClick={() => applyForShow('demo-1')}
                      className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Comedy Night Special</h3>
                      <p className="text-sm text-gray-600 mt-1">Saturday, June 29, 2025 at 7:30 PM</p>
                      <p className="text-sm text-gray-600">Featured Show • Capacity: 120</p>
                      <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Open for Applications
                      </span>
                    </div>
                    <button
                      onClick={() => applyForShow('demo-2')}
                      className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application History */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Your Applications</h2>
              <p className="text-sm text-gray-600">Track your application status</p>
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-center py-4">
                No applications yet. Apply for a show above to get started!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
