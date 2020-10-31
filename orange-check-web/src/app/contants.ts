import { environment } from 'src/environments/environment';

export const APPLICATION_BASE_ROUTE = 'app';
export const WEBSITE_BASE_ROUTE = 'pages';
export const API_BASE_ROUTE = environment.githubpage ? 'orange-check-web/assets/api' : 'assets/api';
