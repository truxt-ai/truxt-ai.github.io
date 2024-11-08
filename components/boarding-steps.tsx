'use client';

import { ArrowRight, Upload, UserCog, Wand, LucideIcon, Users, Wand2 } from 'lucide-react';

// Define the type for a single step
interface Step {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon; // LucideIcon is the type for icons from lucide-react
}

// Array of steps
const steps: Step[] = [
    {
        id: 1,
        title: 'Register',
        description: "Create your account and set up your organization's profile",
        icon: UserCog
    },
    {
        id: 2,
        title: 'Ingest your data',
        description: 'Upload and configure your support documentation and FAQs',
        icon: Upload
    },
    {
        id: 3,
        title: 'Start query',
        description: 'Begin leveraging AI-powered support automation',
        icon: Wand
    }
];

export default function BoardingSteps() {
    return (
        // <>
        //     <h1 className='text-2xl font-bold text-gray-900 text-center mt-20'>Start using truxt in three steps only</h1>
        //     <div className='w-full py-12'>
        //         <div className='container px-4'>
        //             <div className='flex justify-center items-center gap-8 md:grid-cols-3'>
        //                 {steps.map((step, index) => (
        //                     <>
        //                         {/* Step */}
        //                         <div className='flex flex-col items-center text-center'>
        //                             <div
        //                                 className='mb-4 flex h-16 w-16 items-center justify-center rounded-lg border-2 bg-white p-2'
        //                                 style={{
        //                                     boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 20px',
        //                                     color: 'rgb(32, 181, 254)',
        //                                     borderColor: 'rgba(32, 181, 254, 0.3)',
        //                                     background: 'linear-gradient(to top, rgba(32, 181, 254, 0.1), rgba(32, 181, 254, 0))'
        //                                 }}
        //                             >
        //                                 {/* Dynamically render the icon */}
        //                                 <step.icon className='h-8 w-8' />
        //                             </div>
        //                             <h3 className='mb-2 font-spaceGrotesk text-lg font-semibold'>{step.title}</h3>
        //                             <p className='text-sm text-muted-foreground'>{step.description}</p>
        //                         </div>

        //                         {/* Render the arrow unless it's the last step */}
        //                         {index < steps.length - 1 && <ArrowRight className='h-6 w-6 text-muted-foreground/50' />}
        //                     </>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </>
        <section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Start using truxt in two steps only</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Ingest your data</h3>
              <p className="text-gray-500 dark:text-gray-400">Upload and configure your support documentation and FAQs</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <Wand2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Start query</h3>
              <p className="text-gray-500 dark:text-gray-400">Begin leveraging AI-powered support automation</p>
            </div>
          </div>
        </div>
      </section>
    );
}
