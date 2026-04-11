import React from 'react';

export const metadata = {
  title: "اتصل بنا | مكتب عزالدين عمر للمحاماة",
  description: "نحن هنا لمساعدتكم. تواصلوا معنا للحصول على استشارات قانونية متميزة أو لزيارة مكتبنا.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
