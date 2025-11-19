import { useState } from 'react'
import './App.css'
import Step1 from './components/Step1'

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;

function App() {
  const [currentStep, setCurrentStep] = useState<Step>(1);

  const steps = [
    { id: 1, label: 'Fiber Loss' },
    { id: 2, label: 'Connector Loss' },
    { id: 3, label: 'Splice Loss' },
    { id: 4, label: 'Other Components' },
    { id: 5, label: 'Specifications' },
    { id: 6, label: 'Powers Penalties' },
    { id: 7, label: 'Results' }
  ];

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  return (
    <div className="w-[1000px] mx-auto bg-white shadow-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex flex-col gap-3 w-full">
        <h2 className="w-full font-bold text-[30px] leading-[120%] mb-[25px] text-black text-left" style={{ fontFamily: 'TheSans B4, sans-serif', fontWeight: 530 }}>
          Link Loss Budget Worksheet
        </h2>
        <p className="font-normal text-[16px] leading-[150%] text-left" style={{ fontFamily: 'Arial, sans-serif', color: '#101114', letterSpacing: '-0.01em' }}>
          This calculator can be used to estimate the maximum stress associated with fiber in bending. 
          It can also be used to determine the minimum bend radius value necessary to remain below a given stress level. 
          The calculator updates the field values after each keystroke.
        </p>
      </div>

      {/* Step Navigation */}
      <div className="w-full flex gap-[10px]" style={{ borderColor: '#F2F4F7' }}>
        <div className="flex gap-[24px]">
          <div className="flex justify-around p-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col gap-[10px] pt-4 pb-4 px-4 transition-all items-center ${
                  currentStep === step.id
                    ? 'text-blue-600 bg-white'
                    : 'text-gray-400'
                }`}
                style={{
                  backgroundColor: currentStep === step.id ? '#FFFFFF' : 'transparent',
                  border: currentStep === step.id ? '2px solid #005293' : 'none'
                }}
              >
                <div className="w-[32px] h-[32px] rounded-[24px] border flex items-center justify-center p-1" style={{ borderColor: '#005293' }}>
                  <span className="font-bold text-[15px] leading-[100%] text-center" style={{ fontFamily: 'TheSans B4, sans-serif', fontWeight: 530, color: '#005293' }}>
                    {step.id}
                  </span>
                </div>
                <span className="text-[15px] leading-[120%] text-center" style={{ fontFamily: 'TheSans B4, sans-serif', fontWeight: 500, color: '#000000', letterSpacing: '0%' }}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full flex  pt-8 pr-8 pb-10 pl-8 gap-10" style={{ backgroundColor: '#F2F4F7' }}>
        {currentStep === 1 && (
          <Step1 onNext={handleNext} />
        )}

        {currentStep !== 1 && (
          <Step1 onNext={handleNext} />
        )}
      </div>

      {/* Footer */}
      <div className="w-full flex pr-2 pl-2 gap-[10px]">
        <p className="font-normal text-[10px] leading-[150%] text-left mb-[25px]" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 400, color: '#101114', letterSpacing: '0%', hangingPunctuation: 'first last' }}>
          Corning Optical Communications has made every effort to ensure that accurate calculations are produced by using this calculator. However, Corning Optical Communications assumes no liability for damages that may arise from using these calculations in telecommunications system design. This calculator should be used as a tool in conjunction with standard industry methodology for figuring a Link Loss Budget.
        </p>
      </div>
    </div>
  )
}

export default App
