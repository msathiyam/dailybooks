import React from 'react';
import CommingSoon from '../../../components/comming-soon';
import Generalsettting from '../../manage-settings/wesite-settings/settings-component/generalsettings'
import { Tabs } from 'antd';
// import {setting} from '../../../assets/Images/Avatar 8.png'
import MailSettings from "./settings-component/mail-settings"
import Recaptcha from "./settings-component/recaptcha"
import SocialService from "./settings-component/socialService"
import TermsofService from "./settings-component/termsofservice"
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    // image: {setting},
    label: <div className='text-[#455a64] font-bold text-base  hover:bg-slate-100 p-2 rounded-full'>General Settings</div>,
    children: <Generalsettting/>,
  },
  {
    key: '2',
    label: <div className='text-[#455a64] font-bold text-base  hover:bg-slate-100 p-2 rounded-full'>Email Settings</div>,
    children: <MailSettings/>,
  },
  {
    key: '3',
    label:<div className='text-[#455a64] font-bold text-base  hover:bg-slate-100 p-2 rounded-full'>reCaptcha Settings v2</div> ,
    children: <Recaptcha/>,
  },
  {
    key: '4',
    label: <div className='text-[#455a64] font-bold text-base  hover:bg-slate-100 p-2 rounded-full'>Social Settings</div>,
    children: <SocialService/>,
  },
  {
    key: '5',
    label: <div className='text-[#455a64] font-bold text-base  hover:bg-slate-100 p-2 rounded-full'>Terms of service</div>,
    children: <TermsofService/>,
  },
];
export default function Goals() {
  return (
   <div>
     <Tabs defaultActiveKey="1" items={items} className='' onChange={onChange} />
    </div>
    )
}
