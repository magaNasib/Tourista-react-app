import React from 'react'
import { Link } from 'react-router-dom';
import bgImg from '../../../assets/Image placeholder.png';
import Logo from '../../../assets/Logo.png';
function Login() {
  return (
    <div className='flex min-h-screen'>
      <div className='w-[50%]'>
        <img src={bgImg} className='object-cover' alt="background" />
      </div>
      <div className='w-[50%] px-[6.5rem] py-4'>
        <div className="flex items-center justify-center p-4">

          <Link to={'/'}>
            <img src={Logo} alt="" />

          </Link>
        </div>


        <div className='mt-[4rem] text-[#141D24]'>
          <form action="/">
            <h4 className='my-9 text-2xl font-semibold'>Sign in for your exciting journey</h4>
            <div className='flex flex-col gap-3 my-4'>
              <label htmlFor="email">
                Email
              </label>
              <input type="email" name="email" className='outline-none border px-4 py-3 rounded-[.625rem] border-[#E3E7EB]' placeholder='someone@example.com' id="email" />
            </div>
            <div className='flex flex-col gap-3 my-4 '>

              <label htmlFor="password">
                Password
              </label>
              <div className='relative flex  border px-4 py-3 rounded-[.625rem] items-center'>
                <input type="password" name="password" className='flex-1 border-[#E3E7EB] outline-none' placeholder='•••••••••••' id="password" />
                <span className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                    <path d="M21.5081 7.272C20.7276 5.56533 17.6672 0 11.0005 0C4.33387 0 1.27343 5.56533 0.492981 7.272C0.388215 7.50071 0.333984 7.74932 0.333984 8.00089C0.333984 8.25246 0.388215 8.50107 0.492981 8.72978C1.27343 10.4347 4.33387 16 11.0005 16C17.6672 16 20.7276 10.4347 21.5081 8.728C21.6126 8.49954 21.6668 8.25125 21.6668 8C21.6668 7.74875 21.6126 7.50046 21.5081 7.272ZM11.0005 14.2222C5.39431 14.2222 2.77831 9.45244 2.11165 8.00978C2.77831 6.54756 5.39431 1.77778 11.0005 1.77778C16.5934 1.77778 19.2103 6.52711 19.8894 8C19.2103 9.47289 16.5934 14.2222 11.0005 14.2222Z" fill="#141D24" />
                    <path d="M11.0001 3.55591C10.1211 3.55591 9.26179 3.81657 8.53091 4.30493C7.80002 4.79329 7.23037 5.48742 6.89398 6.29954C6.55759 7.11165 6.46957 8.00528 6.64106 8.86742C6.81255 9.72956 7.23585 10.5215 7.85741 11.1431C8.47898 11.7646 9.2709 12.1879 10.133 12.3594C10.9952 12.5309 11.8888 12.4429 12.7009 12.1065C13.513 11.7701 14.2072 11.2004 14.6955 10.4696C15.1839 9.73867 15.4446 8.87938 15.4446 8.00035C15.4431 6.82205 14.9744 5.6924 14.1412 4.85921C13.3081 4.02603 12.1784 3.55732 11.0001 3.55591ZM11.0001 10.667C10.4727 10.667 9.95712 10.5106 9.51859 10.2176C9.08006 9.92459 8.73827 9.50811 8.53643 9.02084C8.3346 8.53357 8.28179 7.9974 8.38468 7.48011C8.48758 6.96283 8.74155 6.48767 9.11449 6.11473C9.48743 5.74179 9.96259 5.48782 10.4799 5.38493C10.9972 5.28203 11.5333 5.33484 12.0206 5.53667C12.5079 5.73851 12.9243 6.0803 13.2174 6.51883C13.5104 6.95736 13.6668 7.47294 13.6668 8.00035C13.6668 8.7076 13.3858 9.38587 12.8857 9.88597C12.3856 10.3861 11.7074 10.667 11.0001 10.667Z" fill="#141D24" />
                  </svg>
                </span>
              </div>
            </div>
            <div className='text-right text-sm'>
              <Link to='/forgotpassword'>
                Forgot password?
              </Link>
            </div>
            <div className='mt-8'>
              <button type="submit" className='w-full py-3 px-4 bg-[#4A21EF] rounded-3xl text-white font-semibold'>
                Sign in
              </button>
            </div>
          </form>
        </div>

        <p className='my-10 text-center text-[#97A5B2] text-sm'>
          or use one of this
        </p>

        <div className='flex gap-4'>
          <Link className='flex justify-center border flex-1 px-4 py-3 border-[#E3E7EB] rounded-[4.5rem]' >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_1140_1838)">
                <path d="M5.31891 14.5034L4.4835 17.6221L1.43011 17.6867C0.517594 15.9942 0 14.0577 0 11.9999C0 10.01 0.483938 8.1335 1.34175 6.4812H1.34241L4.06078 6.97958L5.25159 9.68164C5.00236 10.4082 4.86652 11.1882 4.86652 11.9999C4.86661 12.8808 5.02617 13.7247 5.31891 14.5034Z" fill="#FBBB00" />
                <path d="M23.7902 9.7583C23.928 10.4842 23.9999 11.2339 23.9999 12.0001C23.9999 12.8592 23.9095 13.6972 23.7375 14.5056C23.1533 17.2563 21.6269 19.6583 19.5124 21.3581L19.5118 21.3574L16.0878 21.1827L15.6032 18.1576C17.0063 17.3348 18.1028 16.0471 18.6804 14.5056H12.2637V9.7583H23.7902Z" fill="#518EF8" />
                <path d="M19.5114 21.3575L19.5121 21.3581C17.4556 23.0111 14.8433 24.0001 11.9996 24.0001C7.42969 24.0001 3.45652 21.4458 1.42969 17.6869L5.31848 14.5037C6.33187 17.2083 8.94089 19.1336 11.9996 19.1336C13.3143 19.1336 14.546 18.7781 15.6029 18.1577L19.5114 21.3575Z" fill="#28B446" />
                <path d="M19.6596 2.76262L15.7721 5.94525C14.6783 5.26153 13.3853 4.86656 12 4.86656C8.87213 4.86656 6.21431 6.88017 5.25169 9.68175L1.34245 6.48131H1.3418C3.33895 2.63077 7.36224 0 12 0C14.9117 0 17.5814 1.03716 19.6596 2.76262Z" fill="#F14336" />
              </g>
              <defs>
                <clipPath id="clip0_1140_1838">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link className='flex justify-center border flex-1 px-4 py-3 border-[#E3E7EB] rounded-[4.5rem]' >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16.619 0H16.7898C16.9268 1.69253 16.2807 2.95719 15.4956 3.87301C14.7252 4.78251 13.6703 5.6646 11.9641 5.53076C11.8502 3.86247 12.4973 2.69161 13.2814 1.77789C14.0086 0.92636 15.3417 0.168621 16.619 0ZM21.7841 17.6167V17.6641C21.3046 19.1163 20.6206 20.361 19.7859 21.516C19.024 22.5646 18.0903 23.9758 16.423 23.9758C14.9824 23.9758 14.0254 23.0494 12.549 23.0241C10.9871 22.9988 10.1282 23.7987 8.70019 24H8.21329C7.16468 23.8482 6.31842 23.0178 5.7019 22.2695C3.88396 20.0585 2.47914 17.2025 2.21777 13.5476V12.4737C2.32843 9.85799 3.59941 7.73126 5.28878 6.70057C6.18036 6.15255 7.40602 5.68568 8.7708 5.89435C9.3557 5.98498 9.95325 6.18522 10.477 6.38335C10.9734 6.5741 11.5941 6.9124 12.1822 6.89448C12.5806 6.88289 12.9768 6.67527 13.3784 6.52878C14.5545 6.10407 15.7074 5.61718 17.2271 5.84587C19.0535 6.12199 20.3498 6.93347 21.1507 8.18548C19.6057 9.16875 18.3843 10.6505 18.593 13.1809C18.7784 15.4794 20.1148 16.8241 21.7841 17.6167Z" fill="black" />
            </svg>
          </Link>
          <Link className='flex justify-center border flex-1 px-4 py-3 border-[#E3E7EB] rounded-[4.5rem]' >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_1140_1849)">
                <path d="M24 12C24 17.9897 19.6116 22.9542 13.875 23.8542V15.4688H16.6711L17.2031 12H13.875V9.74906C13.875 8.79984 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6573 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C4.38844 22.9542 0 17.9897 0 12C0 5.37281 5.37281 0 12 0C18.6272 0 24 5.37281 24 12Z" fill="#1877F2" />
                <path d="M16.6711 15.4688L17.2031 12H13.875V9.74902C13.875 8.80003 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.736 23.95 11.3621 24 12 24C12.6379 24 13.264 23.95 13.875 23.8542V15.4688H16.6711Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1140_1849">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>

        </div>
        <div className='my-14 text-sm text-center '>Don’t have an account? <Link to='/signup' className='text-[#4A21EF]'>Create one for new adventure!</Link></div>
      </div>

    </div>
  )
}

export default Login