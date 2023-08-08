import {Inter} from 'next/font/google'
import MobileBackground from "@/components/mobile-background";
import DesktopBackground from "@/components/desktop-background";
import QuestionAnswer from "@/components/questionanswer";


export default function Home() {
  return (
      <>
        <div className="flex justify-center items-center md:mt-16">
          <div className="relative grid md:bg-white  justify-center md:min-w-[900px] md:min-h-[500px] p-4 rounded-3xl md:grid-cols-50-50 ">
            <div className="absolute top-0 left-14 flex flex-col place-items-center  ">
              <div className="block md:hidden"><MobileBackground  /></div>
              <div className="hidden md:block"><DesktopBackground /></div>
            </div>
            <div className="md:self-items-start flex flex-col md:col-start-2 bg-white rounded-3xl shadow-2xl md:shadow-none mt-28 p-6 pt-32 m md:p-8 md:mr-8 md:m-0 max-w-[400px] md:max-w-none gap-2 ">
              <h1 className="text-center font-bold text-4xl md:mt-8 md:mb-4 md:text-left">FAQ</h1>
              <QuestionAnswer question="How many team members can I invite?" answer="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."/>
              <QuestionAnswer question="What is the maximum file upload size?" answer="No more than 2GB. All files in your account must fit your allotted storage space.2"/>
              <QuestionAnswer question="How do I reset my password?" answer="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you. "/>
              <QuestionAnswer question="Can I cancel my subscription?" answer="Yes! Send us a message and we’ll process your request no questions asked."/>
              <QuestionAnswer question="Do you provide additional support?" answer="Chat and email support is available 24/7. Phone lines are open during normal business hours.2"/>

            </div>
          </div>
        </div>
      </>
  )
}
