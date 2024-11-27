// Created By MK

const AppUtils = {
    
  // Format time into MM : SS
  formatTime: (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")} : ${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  },
};

export default AppUtils;
