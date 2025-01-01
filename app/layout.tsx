import React from 'react';
import { Menu, Upload, ChevronDown, BarChart3, FileText } from 'lucide-react';

const MobileLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Nav */}
      <nav className="bg-white border-b border-slate-200 fixed w-full top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="text-lg font-semibold text-slate-800">Winterfat</div>
          <Menu className="h-6 w-6 text-slate-600" />
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-16 px-4 pb-8 bg-gradient-to-b from-white to-slate-50">
        <h1 className="text-3xl font-bold text-slate-900 mt-8">Contract Guardian</h1>
        <p className="mt-4 text-slate-600">Spotting your most dangerous deadlines</p>
      </div>

      {/* Main Actions */}
      <div className="px-4 space-y-4">
        <button className="w-full p-6 bg-white rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center space-y-2">
          <Upload className="h-8 w-8 text-slate-400" />
          <span className="text-sm text-slate-600">Upload Contract</span>
        </button>

        <button className="w-full p-6 bg-white rounded-lg shadow-sm flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BarChart3 className="h-6 w-6 text-emerald-500" />
            <span className="text-slate-800">View Dashboard</span>
          </div>
          <ChevronDown className="h-5 w-5 text-slate-400" />
        </button>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 px-4">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow-sm flex items-center space-x-3">
              <FileText className="h-5 w-5 text-slate-400" />
              <div>
                <div className="text-sm font-medium text-slate-800">Contract Analysis #{i}</div>
                <div className="text-xs text-slate-500">2 hours ago</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-6 px-4 border-t border-slate-200">
        <div className="text-center text-sm text-slate-500">
          © 2024 Winterfat Diagnostics
        </div>
      </footer>
    </div>
  );
};

export default MobileLayout;
