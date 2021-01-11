/** @format */

const HOME = "/";
const COMPONENTS = "/components";

// Authentication routes
const LOGIN = "/login";
const SIGNUP = "/signup";
const REGISTER = "/register";
const FORGOT = "/forgot";
const RESET = "/reset";
const FORGOT_PASSWORD = "/forgotpassword";
const RESET_SUCCESS = "/reset-success";

// Dashboard routes
const DASHBOARD = "/dashboard";
const PAID_TESTS = "/dashboard/paid";
const MOCK_TESTS = "/dashboard/mock";
const START_EXAM = "/dashboard/start";
const WALLET = "/wallet";
const PERFORMANCE = "/performance";
const FEEDBACK = "/feedback";

// Examination routes
const EXAM = "/exam";

const PAGES_URL = {
  HOME,
  COMPONENTS,
  // Authentication routes
  LOGIN,
  SIGNUP,
  REGISTER,
  FORGOT,
  RESET,
  FORGOT_PASSWORD,
  RESET_SUCCESS,
  // Dashboard routes
  DASHBOARD,
  PAID_TESTS,
  MOCK_TESTS,
  START_EXAM,
  WALLET,
  PERFORMANCE,
  FEEDBACK,
  // Examination routes
  EXAM,
};

export default PAGES_URL;
