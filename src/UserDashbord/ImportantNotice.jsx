import React from 'react';

const ImportantNotice = () => {
  return (
    <div className="rounded-lg border text-center max-w-7xl mx-auto p-3">
      <h2 className="text-white lg:text-3xl md:[16px] py-4">নির্দেশনাবলী </h2>
      <ul className="steps steps-vertical">
        <li className="step step-primary text-white lg:text-3xl md:[16px] text-[12px]">
          স্থির ইন্টারনেট সংযোগ নিশ্চিত করুন। সংযোগে অনুবাদ প্রতিশ্রুতি এবং শক্তি থাকবে।
        </li>
        <li className="step step-primary text-white lg:text-3xl md:[16px] text-[12px]">
          ল্যাপটপ, ডেস্কটপ অথবা ট্যাবলেটে অ্যাক্সেস করুন যাতে ক্লাস মেধার মধ্যে পরিচয় থাকে।
        </li>
        <li className="step step-primary text-white lg:text-3xl md:[16px] text-[12px]">
          সময়ের অনুযায়ী ক্লাস সম্পন্ন করার জন্য নিশ্চিত হোন।
        </li>
        <li className="step step-primary text-white lg:text-3xl md:[16px] text-[12px]">
          পরীক্ষা সময়ে নির্দিষ্ট তারিখে প্রদান করুন এবং তা সঠিকভাবে সম্পন্ন করার জন্য নিশ্চিত হোন।{' '}
        </li>
        <li className="step step-primary text-white lg:text-3xl md:[16px] text-[12px]">
          সারাদিন একাধিক সময় অনুশীলন করুন যেন পরীক্ষা সময়ে আপনার সব নজর অনুকরণ করা হয়।
        </li>
        <li className="step step-primary text-white lg:text-3xl md:[16px] text-[10px]">
          আজকের পর থেকে তোমার এই মিশনে হার্ডওয়ার্ক করবে তুমি। আর যতভাবে সম্ভব সাপোর্ট দিবো আমরা।
        </li>
      </ul>
    </div>
  );
};

export default ImportantNotice;
