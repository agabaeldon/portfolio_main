// Import individual project data files
import { eyitMediaData } from "./projects/eyitMedia";
import { kashfloData } from "./projects/kashflo";
import { pepasData } from "./projects/pepas";
import { ecommercePlatformData } from "./projects/ecommercePlatform";
import { analyticsDashboardData } from "./projects/analyticsDashboard";
import { mobileSuperAppData } from "./projects/mobileSuperApp";

// Export combined projects array for listing
export const projects = [
  eyitMediaData,
  kashfloData,
  pepasData,
  ecommercePlatformData,
  analyticsDashboardData,
  mobileSuperAppData,
];

// Export individual data for easy access
export { eyitMediaData, kashfloData, pepasData, ecommercePlatformData, analyticsDashboardData, mobileSuperAppData };


