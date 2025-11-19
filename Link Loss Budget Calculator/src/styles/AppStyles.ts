export const appStyles = {
  container: "w-full max-w-[1000px] mx-auto bg-white shadow-xl overflow-hidden flex flex-col px-4 sm:px-6 lg:px-0",
  header: "flex flex-col gap-3 w-full py-4 sm:py-6 lg:py-8",
  headerTitle: "w-full font-bold text-[20px] sm:text-[24px] lg:text-[30px] leading-[120%] mb-[15px] sm:mb-[20px] lg:mb-[25px] text-black text-left",
  headerDescription: "font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[150%] text-left",
  stepNavigation: "w-full flex gap-[10px] overflow-x-auto scrollbar-hide",
  stepNavigationInner: "flex w-full",
  stepNavigationWrapper: "flex justify-between sm:justify-around w-full p-2 sm:p-3 lg:p-4 gap-1 sm:gap-2",
  stepItemBase: "flex flex-col gap-[6px] sm:gap-[8px] lg:gap-[10px] pt-2 pb-2 px-1 sm:pt-3 sm:pb-3 sm:px-2 lg:pt-4 lg:pb-4 lg:px-4 transition-all items-center min-w-[60px] sm:min-w-[80px] lg:min-w-[100px]",
  stepItemActive: "bg-white border-2 border-[#005293] rounded-lg",
  stepItemInactive: "bg-transparent border-0",
  stepCircle: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full border border-[#005293] flex items-center justify-center p-1 flex-shrink-0",
  stepNumber: "font-bold text-[12px] sm:text-[14px] lg:text-[15px] leading-[100%] text-center text-[#005293]",
  stepLabel: "text-[10px] sm:text-[12px] lg:text-[15px] leading-[120%] text-center text-black text-wrap max-w-[70px] sm:max-w-[90px] lg:max-w-none",
  contentArea: "w-full flex flex-col sm:flex-row pt-4 pr-4 pb-6 pl-4 sm:pt-6 sm:pr-6 sm:pb-8 sm:pl-6 lg:pt-8 lg:pr-8 lg:pb-10 lg:pl-8 gap-4 sm:gap-6 lg:gap-10 bg-[#F2F4F7]",
  footer: "w-full flex px-2 sm:px-3 lg:px-2 gap-[10px] py-4",
  footerText: "font-normal text-[8px] sm:text-[9px] lg:text-[10px] leading-[150%] text-left mb-[15px] sm:mb-[20px] lg:mb-[25px]"
} as const;

export const inlineStyles = {
  headerTitle: {
    fontFamily: 'TheSans B4, sans-serif',
    fontWeight: 530
  },
  headerDescription: {
    fontFamily: 'Arial, sans-serif',
    color: '#101114',
    letterSpacing: '-0.01em'
  },
  stepNumber: {
    fontFamily: 'TheSans B4, sans-serif',
    fontWeight: 530
  },
  stepLabel: {
    fontFamily: 'TheSans B4, sans-serif',
    fontWeight: 500,
    letterSpacing: '0%'
  },
  footerText: {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 400,
    color: '#101114',
    letterSpacing: '0%',
    hangingPunctuation: 'first last'
  }
} as const;
