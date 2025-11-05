import profile from '../assets/images/profile_bust2.jpg';
import { ResumeButton } from './ResumeButton';

const About = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section {...props} className='py-24 translate-y-4 transition-all duration-500'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='space-y-6'>
            <h2 className='text-4xl font-bold mb-4'>About Neto</h2>
            <p className='text-xl text-gray-600 dark:text-gray-400 mb-6'>
              David is a next-generation React toolkit that helps developers ship faster, smarter, and better.
With built-in performance optimization, accessibility tools, and UI-first workflows, David lets you focus on creating experiences users love; without the friction.
            </p>
            <p className='text-xl text-gray-600 dark:text-gray-400 mb-6'>
             Whether you're crafting your next side project or scaling a production-ready app, Neto gives you everything you need to build fast and ship faster.
With built-in tools for responsive design, smooth state management, and high performance, Neto is your all-in-one solution for modern web development.
            </p>
            <div className='flex gap-4'>
              <a
                href='#contact'
                className='px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20 shadow-blue-200/20 dark:shadow-blue-700/10'
              >
                Contact Me
              </a>
              <ResumeButton />
            </div>
          </div>
          <div className='relative'>
            <div className='w-72 h-72 mx-auto animate-morph bg-gradient-to-br from-primary via-secondary to-accent rounded-full relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-br from-primary/50 via-secondary/50 to-accent/50 rounded-full blur-2xl animate-morph'></div>
              <img
                src={profile}
                alt='Profile Photo'
                className='absolute inset-0 w-full h-full object-cover z-10'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
