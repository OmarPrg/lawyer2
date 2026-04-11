import React from 'react';

export const metadata = {
  title: "من نحن | مكتب عزالدين عمر للمحاماة",
  description: "تعرف على تاريخنا، رؤيتنا، والقيم التي تجعلنا رواداً في المجال القانوني.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
