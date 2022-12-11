import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactMe() {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:luciano.auad@gmail.com?subject=${formData.subject}
    &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-center    
      md:flex-row max-w-full md:text-left justify-evenly mx-auto items-center scroll-smooth">

      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-36">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-cyan-400/50 underline">Lets Talk.</span>
        </h4>

        <div className='space-y-10'>

          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-cyan-400 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+5527998642268</p>
          </div>


          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-cyan-400 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>luciano.auad@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-cyan-400 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Porto Canoa | Serra</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
              <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
              <input {...register('email')} className='contactInput' placeholder='e-mail' type="text" />
            </div>
            <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
            <textarea {...register('message')} className='contactInput' placeholder='Message' />
            <button className='bg-cyan-400 py-5 px-10 rounded-md text-gray-800 font-bold'>
              Submit
            </button>
          </form>

        </div>

      </div>
    </div>
  )
}