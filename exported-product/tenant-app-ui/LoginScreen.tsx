import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export function LoginScreen({ onBack, onNext }: { onBack: () => void, onNext: () => void }) {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <div className="p-4 pt-12">
        <button onClick={step === 'otp' ? () => setStep('phone') : onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
      </div>
      
      <div className="px-6 flex-1 flex flex-col pt-8">
        {step === 'phone' ? (
           <>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">What's your number?</h1>
            <p className="text-gray-500 mb-8 font-medium">We'll send you a code to verify your account.</p>
            
            <div className="flex bg-gray-50 border-2 border-gray-100 rounded-[1.5rem] p-1 overflow-hidden focus-within:ring-2 focus-within:ring-[#ff5a1f]/20 focus-within:border-[#ff5a1f] transition-all">
               <div className="flex items-center justify-center px-4 border-r border-gray-200">
                 <span className="text-gray-900 font-bold">+91</span>
               </div>
               <input 
                 type="tel" 
                 placeholder="10-digit mobile number" 
                 className="flex-1 bg-transparent py-4 px-4 outline-none font-bold text-gray-900 placeholder:text-gray-400 placeholder:font-medium"
               />
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-3 text-sm text-gray-400 font-bold uppercase tracking-wider">
               <div className="flex-1 h-px bg-gray-100"></div>
               <span>Or continue with</span>
               <div className="flex-1 h-px bg-gray-100"></div>
            </div>
            
            <div className="mt-8 space-y-3">
              <button className="w-full flex items-center justify-center space-x-3 border-2 border-gray-100 rounded-[1.5rem] py-4 hover:bg-gray-50 transition-colors">
                 <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
                 <span className="font-bold text-gray-800">Google</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-3 bg-black text-white rounded-[1.5rem] py-4 hover:bg-gray-900 transition-colors">
                 <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="w-6 h-6 filter invert" />
                 <span className="font-bold">Apple</span>
              </button>
            </div>
            
            <div className="mt-auto pb-8 pt-4">
              <button 
                onClick={() => setStep('otp')}
                className="w-full bg-[#ff5a1f] hover:bg-[#e04a15] text-white font-bold py-4 rounded-full transition-colors shadow-lg shadow-orange-500/30 text-lg"
              >
                Continue
              </button>
              <p className="text-center text-xs text-gray-400 font-medium mt-4 px-4">
                 By continuing, you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
              </p>
            </div>
           </>
        ) : (
           <>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Enter code</h1>
            <p className="text-gray-500 mb-10 font-medium">We sent a 4-digit code to <span className="font-bold text-gray-900">+91 98765 43210</span></p>
            
            <div className="flex justify-between space-x-4 mb-8 px-2">
               {[1,2,3,4].map(i => (
                 <input 
                   key={i}
                   type="text" 
                   maxLength={1}
                   className="w-16 h-20 text-center text-3xl font-bold bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#ff5a1f] focus:bg-white outline-none transition-all shadow-sm"
                   placeholder="0"
                 />
               ))}
            </div>
            
            <p className="text-center text-gray-500 font-medium mt-4">
               Didn't receive it? <button className="text-[#ff5a1f] font-bold ml-1">Resend in 0:59</button>
            </p>
            
            <div className="mt-auto pb-8 pt-4">
              <button 
                onClick={onNext}
                className="w-full bg-[#ff5a1f] hover:bg-[#e04a15] text-white font-bold py-4 rounded-full transition-colors shadow-lg shadow-orange-500/30 text-lg"
              >
                Verify & Login
              </button>
            </div>
           </>
        )}
      </div>
    </div>
  );
}
