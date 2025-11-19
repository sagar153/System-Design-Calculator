export const appStyles = {
  container: "w-[1000px] mx-auto bg-white shadow-xl overflow-hidden flex flex-col",
  header: "flex flex-col gap-3 w-full",
  headerTitle: "w-full font-bold text-[30px] leading-[120%] mb-[25px] text-black text-left",
  headerDescription: "font-normal text-[16px] leading-[150%] text-left",
  stepNavigation: "w-full flex gap-[10px]",
  stepNavigationInner: "flex gap-6",
  stepNavigationWrapper: "flex justify-around p-4",
  stepItemBase: "flex flex-col gap-[10px] pt-4 pb-4 px-4 transition-all items-center",
  stepItemActive: "bg-white border-2 border-[#005293]",
  stepItemInactive: "bg-transparent border-0",
  stepCircle: "w-8 h-8 rounded-full border border-[#005293] flex items-center justify-center p-1",
  stepNumber: "font-bold text-[15px] leading-[100%] text-center text-[#005293]",
  stepLabel: "text-[15px] leading-[120%] text-center text-black",
  contentArea: "w-full flex pt-8 pr-8 pb-10 pl-8 gap-10 bg-[#F2F4F7]",
  footer: "w-full flex px-2 gap-[10px]",
  footerText: "font-normal text-[10px] leading-[150%] text-left mb-[25px]"
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
