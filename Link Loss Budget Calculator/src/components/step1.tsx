interface Step1Props {
  onNext: () => void;
}

function Step1({ onNext }: Step1Props) {
  return (
    <div className="space-y-8">
      <div className="text-center py-20">
        <p className="text-gray-600 text-xl mb-8">Content for this step is coming soon...</p>
        
        {/* Next Button */}
        <div className="flex justify-center">
          <button
            onClick={onNext}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md shadow-md transition-colors flex items-center space-x-2"
          >
            <span>Next</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step1;
