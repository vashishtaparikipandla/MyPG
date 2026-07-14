import React from 'react';
import { ArrowLeft, ShieldCheck, UploadCloud, FileText } from 'lucide-react';

export function IdVerificationScreen({ onBack, onNext }: { onBack: () => void, onNext: () => void }) {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <div className="p-4 pt-12">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
      </div>
      
      <div className="px-6 flex-1 flex flex-col pt-4">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
           <ShieldCheck className="w-8 h-8 text-[#ff5a1f]" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Verify your identity</h1>
        <p className="text-gray-500 mb-8 font-medium">To ensure community safety, all tenants must verify their government ID before joining a hostel.</p>
        
        <div className="space-y-4">
           {/* Option 1 */}
           <div className="border-2 border-[#ff5a1f] bg-orange-50 rounded-[1.5rem] p-5 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#ff5a1f] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">Recommended</div>
              <div className="flex items-center">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <FileText className="w-5 h-5 text-[#ff5a1f]" />
                 </div>
                 <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-lg">Aadhaar Card</h3>
                    <p className="text-sm text-gray-500 font-medium">Instant verification via UIDAI</p>
                 </div>
              </div>
           </div>
           
           {/* Option 2 */}
           <div className="border-2 border-gray-100 bg-white rounded-[1.5rem] p-5 cursor-pointer hover:border-gray-200 transition-colors">
              <div className="flex items-center">
                 <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                    <FileText className="w-5 h-5 text-gray-600" />
                 </div>
                 <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-lg">PAN Card</h3>
                    <p className="text-sm text-gray-500 font-medium">Takes 1-2 minutes</p>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="mt-8">
           <label className="block text-sm font-bold text-gray-700 mb-2">Upload Document Image</label>
           <div className="border-2 border-dashed border-gray-200 rounded-[1.5rem] p-8 flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
              <UploadCloud className="w-10 h-10 text-gray-300 mb-3" />
              <p className="font-bold text-gray-700">Tap to upload</p>
              <p className="text-xs text-gray-500 mt-1 font-medium">JPG, PNG or PDF (max. 5MB)</p>
           </div>
        </div>
        
        <div className="mt-auto pb-8 pt-6">
           <button 
             onClick={onNext}
             className="w-full bg-[#ff5a1f] hover:bg-[#e04a15] text-white font-bold py-4 rounded-full transition-colors shadow-lg shadow-orange-500/30 text-lg"
           >
             Submit & Continue
           </button>
           <button onClick={onNext} className="w-full mt-4 text-gray-400 hover:text-gray-600 transition-colors font-bold py-2">
             Do this later
           </button>
        </div>
      </div>
    </div>
  );
}
