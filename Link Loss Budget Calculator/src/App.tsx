import { useState } from 'react'
import './App.css'
import Step1 from './components/step1'
import { appStyles, inlineStyles } from './styles/AppStyles'

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
    <div className={appStyles.container}>
      {/* Header */}
      <div className={appStyles.header}>
        <h2 className={appStyles.headerTitle} style={inlineStyles.headerTitle}>
          Link Loss Budget Worksheet
        </h2>
        <p className={appStyles.headerDescription} style={inlineStyles.headerDescription}>
          This calculator can be used to estimate the maximum stress associated with fiber in bending. 
          It can also be used to determine the minimum bend radius value necessary to remain below a given stress level. 
          The calculator updates the field values after each keystroke.
        </p>
      </div>

      {/* Step Navigation */}
      <div className={appStyles.stepNavigation}>
        <div className={appStyles.stepNavigationInner}>
          <div className={appStyles.stepNavigationWrapper}>
            {steps.map((step) => (
              <div
                key={step.id}
                className={`${appStyles.stepItemBase} ${
                  currentStep === step.id
                    ? appStyles.stepItemActive
                    : appStyles.stepItemInactive
                }`}
              >
                <div className={appStyles.stepCircle}>
                  <span className={appStyles.stepNumber} style={inlineStyles.stepNumber}>
                    {step.id}
                  </span>
                </div>
                <span className={appStyles.stepLabel} style={inlineStyles.stepLabel}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className={appStyles.contentArea}>
        {currentStep === 1 && (
          <Step1 onNext={handleNext} />
        )}

        {currentStep !== 1 && (
          <Step1 onNext={handleNext} />
        )}
      </div>

      {/* Footer */}
      <div className={appStyles.footer}>
        <p className={appStyles.footerText} style={inlineStyles.footerText}>
          Corning Optical Communications has made every effort to ensure that accurate calculations are produced by using this calculator. However, Corning Optical Communications assumes no liability for damages that may arise from using these calculations in telecommunications system design. This calculator should be used as a tool in conjunction with standard industry methodology for figuring a Link Loss Budget.
        </p>
      </div>
    </div>
  )
}

export default App
