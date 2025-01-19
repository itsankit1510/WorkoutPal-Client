const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
          © 2024 WorkoutPal AI. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            href="#"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
