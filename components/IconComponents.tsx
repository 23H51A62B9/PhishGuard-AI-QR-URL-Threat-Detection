import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const ShieldCheckIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008h-.008v-.008Z" />
  </svg>
);

export const TextIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
);

export const GlobeIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9Zm0 0a8.949 8.949 0 0 0 4.95-1.708m-9.9 0A8.949 8.949 0 0 0 12 21Zm0 0v.001M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-3.25 4.5A8.949 8.949 0 0 1 12 3a8.949 8.949 0 0 1 3.25 13.5m-6.5 0v.001" />
    </svg>
);

export const EyeIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639l1.45-2.432a1.01 1.01 0 0 1 .8-.432h15.428a1.01 1.01 0 0 1 .8.432l1.45 2.432c.16.27.16.6 0 .878l-1.45 2.432a1.01 1.01 0 0 1-.8.432H3.286a1.01 1.01 0 0 1-.8-.432L2.036 12.322Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

export const AlertTriangleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
);

export const QrCodeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5A.75.75 0 0 1 4.5 3.75h3.75a.75.75 0 0 1 0 1.5H5.25v2.25a.75.75 0 0 1-1.5 0V4.5Zm0 15a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H5.25v-2.25a.75.75 0 0 1-1.5 0v2.25Zm15-15a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0V4.5ZM18 19.5a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5h-2.25v-2.25a.75.75 0 0 1-1.5 0v2.25ZM15 9.75h.008v.008H15V9.75Zm.75-3a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-3Zm0 1.5h1.5v1.5h-1.5v-1.5Zm-4.5-1.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm1.5.75h.008v.008h-.008v-.008Zm0 3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm1.5.75h.008v.008h-.008v-.008Zm-6-3a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5Zm0 .75h.008v.008H9.75v-.008ZM9 12.75h.008v.008H9v-.008Zm0 3h.008v.008H9v-.008Zm-3-3h.008v.008H6v-.008Zm0 3h.008v.008H6v-.008Z" />
  </svg>
);

export const CameraIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.776 48.776 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
  </svg>
);

export const FingerPrintIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 12c0 2.42-.943 4.636-2.486 6.314-1.543 1.678-3.635 2.686-5.918 2.686-2.283 0-4.375-1.008-5.918-2.686A7.478 7.478 0 0 1 3 12.331c0-1.79.6-3.445 1.66-4.793a7.48 7.48 0 0 1 3.204-3.295Zm-1.131 6.643A5.963 5.963 0 0 0 6 12.331c0 2.613 1.688 4.84 4.082 5.645a5.94 5.94 0 0 0 1.918 .325c1.196 0 2.34-.363 3.243-.99-1.543 1.678-3.635 2.686-5.918 2.686-2.283 0-4.375-1.008-5.918-2.686a7.478 7.478 0 0 1 0-8.918Z" />
  </svg>
);

export const LinkIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
);

export const CpuChipIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12H21m-18 0h1.5m15 3.75H21m-18 0h1.5m15 3.75H21m-18 0h1.5M12 4.5v15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h9v9h-9z" />
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const BanIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>
);

export const ThumbsUpIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.59-11.671-.22.22a1.5 1.5 0 0 0-.424 1.061v4.062a3 3 0 0 1-3 3H5.904a1.5 1.5 0 0 1-1.5-1.5v-5.176a1.5 1.5 0 0 1 1.5-1.5h3.432a1.5 1.5 0 0 0 1.06-.44l.22-.22a1.5 1.5 0 0 1 2.122 0l1.06 1.061a1.5 1.5 0 0 0 2.122 0l.22-.22a1.5 1.5 0 0 1 2.122 0Z" />
  </svg>
);

export const ThumbsDownIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533.446 2.031 1.08a9.041 9.041 0 0 0 2.861 2.4c.723.384 1.35.956 1.653 1.715a4.498 4.498 0 0 1 .322 1.672v2.75a.75.75 0 0 0 .75.75 2.25 2.25 0 0 0 2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282h-3.126c-1.026 0-1.945-.694-2.054-1.715a1.123 1.123 0 0 1-.068-1.285c.045-.422.068-.85.068-1.285a11.95 11.95 0 0 0-2.649-7.521c-.388-.482-.987-.729-1.605-.729H13.48c-.483 0-.964.078-1.423.23l-3.114 1.04a4.501 4.501 0 0 1-1.423.23H5.904m10.59 11.671.22-.22a1.5 1.5 0 0 1 .424-1.061v-4.062a3 3 0 0 0-3-3H5.904a1.5 1.5 0 0 0-1.5 1.5v5.176a1.5 1.5 0 0 0 1.5 1.5h3.432a1.5 1.5 0 0 1 1.06.44l.22.22a1.5 1.5 0 0 0 2.122 0l1.06-1.061a1.5 1.5 0 0 1 2.122 0l.22.22a1.5 1.5 0 0 0 2.122 0Z" />
  </svg>
);

export const RobotIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25V8.846a2.652 2.652 0 0 0-1.42-2.372l-5.83-3.472a2.652 2.652 0 0 0-2.65 0L5.42 6.474A2.652 2.652 0 0 0 4 8.846v8.404a2.652 2.652 0 0 0 3.75 2.372l5.83-3.472a2.652 2.652 0 0 0 0-4.744Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 3.75-3.75V9.75A3.75 3.75 0 0 0 12 6c-2.07 0-3.75 1.68-3.75 3.75v4.5A3.75 3.75 0 0 0 12 18Z" />
    </svg>
);

export const ChatBubbleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.455.09-.934.09-1.425 0-4.556 4.03-8.25 9-8.25 4.97 0 9 3.694 9 8.25Z" />
    </svg>
);
