// Import individual service data files
import { webApplicationsData } from "./services/webApplications";
import { mobileAppsData } from "./services/mobileApps";
import { backendApisData } from "./services/backendApis";
import { uiUxDesignData } from "./services/uiUxDesign";
import { devopsCicdData } from "./services/devopsCicd";
import { securityPerformanceData } from "./services/securityPerformance";

// Export combined services array for listing
export const services = [
  webApplicationsData,
  mobileAppsData,
  backendApisData,
  uiUxDesignData,
  devopsCicdData,
  securityPerformanceData,
];

// Export individual data for easy access
export { webApplicationsData, mobileAppsData, backendApisData, uiUxDesignData, devopsCicdData, securityPerformanceData };


